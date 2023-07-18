import { forwardRef } from "react";
import s from "./settings.module.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { BiSolidCloudUpload } from "react-icons/bi";

type Props = {
  handleProfileChange: () => void;
  profile: string;
};

type Ref = HTMLInputElement;

const Profile = forwardRef<Ref, Props>(
  ({ handleProfileChange, profile }, ref) => {
    const [user] = useAuthState(auth);

    return (
      <div className={s.profileInput}>
        <label
          style={{
            backgroundImage: `url(${
              profile === ""
                ? user?.photoURL
                  ? user.photoURL
                  : "/unknown.png"
                : profile
            })`,
          }}
          htmlFor="profile"
        />
        <input
          ref={ref}
          onChange={handleProfileChange}
          type="file"
          id="profile"
          name="profile"
          accept="image/*"
        />
        <div className={s.profileInput_icon}>
          <BiSolidCloudUpload />
        </div>
      </div>
    );
  }
);

Profile.displayName = "Profile";
export default Profile;
