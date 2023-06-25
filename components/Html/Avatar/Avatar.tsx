import Image from "next/image";
import s from "./avatar.module.scss";
import { useSession } from "next-auth/react";

const Avatar = () => {
  const { data } = useSession();

  return (
    <div className={s.main}>
      <div className={s.user}>
        <Image
          src={data?.user?.image}
          height={50}
          width={50}
          alt="user-avatar"
        />
        <h2>{data?.user?.name}</h2>
      </div>
    </div>
  );
};

export default Avatar;
