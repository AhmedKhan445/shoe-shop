import { useState } from "react";
import s from "./phone.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { PhoneAuthProvider, multiFactor } from "firebase/auth";
import { auth } from "@/firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecaptcha } from "@/components/Hooks/useRecaptcha";
import { store } from "@/store";
import { toast } from "react-toastify";

type Props = {
  isPhoneVerify: boolean;
  setIsPhoneVerify: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCodeVerify: React.Dispatch<React.SetStateAction<boolean>>;
};

const PhoneVerification: React.FC<Props> = ({
  isPhoneVerify,
  setIsPhoneVerify,
  setIsCodeVerify,
}) => {
  //STATES
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //GET LOGIN USER DETAILS
  const [user] = useAuthState(auth);

  //RECAPTCHA
  const recaptcha = useRecaptcha("mfa");

  //FUNCTIONS
  const handleClose = () => {
    setIsPhoneVerify(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const session = await multiFactor(user!).getSession();
      const phoneInfoOptions = {
        phoneNumber,
        session,
      };
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const id = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptcha!
      );
      store.verificationId = id;
      setIsPhoneVerify(false);
      setIsCodeVerify(true);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/unverified-email")) {
          toast.info(
            "Need to verify email first before Two-Factor Authentication. Go to account setting add Email Address",
            { theme: "dark" }
          );
        } else if (error.message.includes("auth/invalid-phone-number")) {
          toast.error("Invalid Phone Number", { theme: "dark" });
        } else if (
          error.message ===
          "reCAPTCHA has already been rendered in this element"
        ) {
          toast.error("Something Wrong Please Refresh Page", { theme: "dark" });
        } else {
          toast.error("Something Wrong", { theme: "dark" });
        }
      }
      setIsLoading(false);
    }
  };

  return (
    <div data-active={isPhoneVerify} className={s.main}>
      <div data-active={isPhoneVerify} className={s.container}>
        <h1>Verify your Phone Number</h1>
        <form onSubmit={handleSubmit} className={s.form}>
          <label htmlFor="phoneNumber">
            Enter your phone number with country code:
          </label>
          <PhoneInput
            className={s.form_input}
            international
            placeholder="+1 333 555 4567"
            onChange={setPhoneNumber}
            value={phoneNumber}
          />
          <div className={s.box}>
            <button type="button" onClick={handleClose} className={s.submit}>
              Cancel
            </button>
            <button disabled={isLoading} className={s.submit}>
              {isLoading ? "Sending ..." : "Send Verification Code"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneVerification;
