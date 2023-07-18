import { IoClose } from "react-icons/io5";
import s from "./settings.module.scss";
import {
  useAuthState,
  useUpdateProfile,
  useVerifyBeforeUpdateEmail,
} from "react-firebase-hooks/auth";
import { useDownloadURL, useUploadFile } from "react-firebase-hooks/storage";
import { ref as storageRef } from "firebase/storage";
import { auth, storage } from "@/firebase/clientApp";
import { useFormik } from "formik";
import Input from "./Input";
import { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Profile from "./Profile";
import { toast } from "react-toastify";

type Props = {
  isSettingShow: boolean;
  setIsSettingShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPhoneVerify: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings: React.FC<Props> = ({
  isSettingShow,
  setIsSettingShow,
  setIsPhoneVerify,
}) => {
  //REFERENCES
  const profileInputRef = useRef<HTMLInputElement>(null);

  //STATES
  const [inputValues, setInputValues] = useState<{
    displayName: string;
    email: string;
  } | null>(null);
  const [profile, setProfile] = useState<string>("");
  const [profileServerPath, setProfileServerPath] = useState<string>("");
  const [profileFile, setProfileFile] = useState<File>();

  //PREVIEW PROFILE
  const handleProfileChange = () => {
    if (profileInputRef.current?.files) {
      setProfileFile(profileInputRef.current?.files[0]);
      setProfile(URL.createObjectURL(profileInputRef.current?.files[0]));
    }
  };

  //GET LOGIN USER DETAILS
  const [user, loading] = useAuthState(auth);

  //PROFILE UPDATE AND UPLOAD HOOK
  const [verifyBeforeUpdateEmail, updatingEmail] =
    useVerifyBeforeUpdateEmail(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [uploadFile, uploading] = useUploadFile();
  const ref = storageRef(storage, `/profiles/${uuidv4()}`);

  //FORM STATES AND PROFILE VALUES UPDATE
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
    },
    onSubmit: async (values) => {
      if (profileFile) {
        const result = await uploadFile(ref, profileFile, {
          contentType: profileFile.type,
        });
        setProfileServerPath(result!.ref.fullPath);
        setInputValues(values);
      } else if (
        values.displayName !== user?.displayName &&
        values.email !== user?.email
      ) {
        await updateProfile({ displayName: values.displayName });
        await verifyBeforeUpdateEmail(values.email, null);
        toast.info(
          "Please confirm your email address by clicking on the verification link sent to you.",
          {
            theme: "dark",
          }
        );
        toast.success("Updated Successful", { theme: "colored" });
      } else {
        if (values.displayName !== user?.displayName) {
          await updateProfile({ displayName: values.displayName });
          toast.success("Updated Successful", { theme: "colored" });
        } else if (values.email !== user?.email) {
          await verifyBeforeUpdateEmail(values.email, null);
          toast.info(
            "Please confirm your email address by clicking on the verification link sent to you.",
            {
              theme: "dark",
            }
          );
        } else {
          alert("No Change");
        }
      }
    },
  });

  //SEND PROFILE DATA TO SERVER
  const [photoURL, photoUrlLoading] = useDownloadURL(
    profileServerPath === ""
      ? undefined
      : storageRef(storage, profileServerPath)
  );

  const profileUpdating = useCallback(async () => {
    if (inputValues !== null) {
      if (photoURL !== undefined) {
        const success = await updateProfile({
          displayName: inputValues.displayName,
          photoURL,
        });
        if (
          user?.email === null &&
          success &&
          inputValues.email !== "Enter your Email Address"
        ) {
          await verifyBeforeUpdateEmail(inputValues.email, null);
          toast.info(
            "Please confirm your email address by clicking on the verification link sent to you.",
            {
              theme: "dark",
            }
          );
        }
        setProfileServerPath("");
        setProfileFile(undefined);
        toast.success("Updated Successful", { theme: "colored" });
      }
    }
  }, [
    photoURL,
    inputValues,
    verifyBeforeUpdateEmail,
    updateProfile,
    user?.email,
  ]);

  useEffect(() => {
    profileUpdating();
  }, [photoUrlLoading, profileUpdating]);

  //INPUT PLACEHOLDER
  useEffect(() => {
    formik.setValues({
      displayName: user?.displayName ? user?.displayName! : "Enter your Name",
      email: user?.email ? user?.email! : "Enter your Email Address",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, user]);

  //FUNCTIONS
  const handleClose = () => {
    setIsSettingShow(false);
  };
  const handleActivateMFA = () => {
    setIsPhoneVerify(true);
    setIsSettingShow(false);
  };

  return (
    <div data-active={isSettingShow} className={s.main}>
      <div data-active={isSettingShow} className={s.container}>
        <button
          onClick={handleClose}
          data-active={isSettingShow}
          className={s.close}
        >
          <IoClose />
        </button>
        <h1>Account Settings</h1>
        <form onSubmit={formik.handleSubmit} className={s.form}>
          <Profile
            ref={profileInputRef}
            profile={profile}
            handleProfileChange={handleProfileChange}
          />
          <Input
            key={0}
            inputType="text"
            handleChange={formik.handleChange}
            value={formik.values.displayName}
            name="displayName"
            label="Username"
          />

          <Input
            inputType="email"
            key={1}
            handleChange={formik.handleChange}
            value={formik.values.email}
            name="email"
            label="Email"
            disabled={user?.email !== null}
          />
          <div className={s.recaptcha} id="mfa"></div>
          <button
            type="button"
            onClick={handleActivateMFA}
            className={s.submit}
          >
            Activate Two-Factor Authentication
          </button>

          <button
            disabled={uploading || updating || updatingEmail}
            type="submit"
            className={s.submit}
          >
            {uploading || updating || updatingEmail
              ? "Updating ..."
              : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
