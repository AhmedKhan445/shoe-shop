import Image from "next/image";
import s from "./avatar.module.scss";
import { useEffect, useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { FaCartPlus } from "react-icons/fa6";
import { auth } from "@/firebase/clientApp";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";

type Props = {
  setIsOrderHistoryShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Avatar: React.FC<Props> = ({ setIsOrderHistoryShow }) => {
  //SIGN OUT
  const [signOut] = useSignOut(auth);

  //STATES
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(0.4);

  //LOGIN DATA
  const [user] = useAuthState(auth);

  //FUNCTIONS
  const handleProfile = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOrderHistory = () => {
    setIsOrderHistoryShow((prev) => !prev);
  };

  //ADD TRANSTITION DELAY ON CONDITION
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setDelay(0);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setDelay(0.4);
    }
  }, [delay, isOpen]);

  return (
    <div className={s.main}>
      <div className={s.stack}>
        <button onClick={handleOrderHistory} className={s.order}>
          <FaCartPlus />
        </button>
        <div data-open={isOpen} onClick={handleProfile} className={s.profile}>
          <div className={s.user}>
            <Image
              src={user?.photoURL ? user.photoURL : "/unknown.png"}
              height={50}
              width={50}
              alt="user-avatar"
            />
            <h2 style={{ transitionDelay: `${delay}s` }} data-open={isOpen}>
              {user?.displayName}
            </h2>
          </div>
        </div>
      </div>

      <button
        style={{ transitionDelay: `${delay}s, 0s, 0s, 0s` }}
        data-open={isOpen}
        className={s.tab}
        onClick={() => {
          signOut();
          setIsOpen(false);
        }}
      >
        <LuLogOut /> Logout
      </button>
    </div>
  );
};

export default Avatar;
