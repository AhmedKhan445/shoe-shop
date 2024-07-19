import Image from "next/image";
import s from "./avatar.module.scss";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa6";
import { AiTwotoneSetting } from "react-icons/ai";
import { auth } from "@/firebase/clientApp";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { store } from "@/store";

type Props = {
  setIsOrderHistoryShow: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSettingShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Avatar: React.FC<Props> = ({
  setIsOrderHistoryShow,
  setIsSettingShow,
}) => {
  //SIGN OUT
  const [signOut] = useSignOut(auth);

  //STATES
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //LOGIN DATA
  const [user] = useAuthState(auth);

  //FUNCTIONS
  const handleProfile = () => {
    if (user) {
      setIsOpen((prev) => !prev);
    } else {
      store.isShowSignIn = true;
    }
  };

  const handleOrderHistory = () => {
    if (user) {
      setIsOrderHistoryShow((prev) => !prev);
    } else {
      store.isShowSignIn = true;
    }
  };

  const handleSetting = () => {
    setIsSettingShow(true);
  };

  const handleSignOut = () => {
    signOut();
    setIsOpen(false);
  };

  return (
    <div className={s.main}>
      <div className={s.stack}>
        <button onClick={handleOrderHistory} className={s.order}>
          <FaCartPlus />
        </button>
        <div data-open={isOpen} onClick={handleProfile} className={s.profile}>
          <div className={s.user}>
            <Image
              priority
              src={user?.photoURL ? user.photoURL : "/unknown.png"}
              height={50}
              width={50}
              alt="user-avatar"
            />
            <h2 data-open={isOpen}>{user?.displayName}</h2>
          </div>
        </div>
      </div>
      <button
        data-color
        data-open={isOpen}
        className={s.tab}
        onClick={handleSetting}
      >
        <AiTwotoneSetting /> Account Settings
      </button>
      <button
        data-delay="2"
        data-open={isOpen}
        className={s.tab}
        onClick={handleSignOut}
      >
        <LuLogOut /> Logout
      </button>
    </div>
  );
};

export default Avatar;
