import { useProgress } from "@react-three/drei";
import s from "./loader.module.scss";
import { useState } from "react";
import Image from "next/image";

const Loader = () => {
  const { active, progress, errors } = useProgress();

  console.log(active, "active");
  console.log(progress, "progress");

  return (
    <div data-hide={active} className={s.main}>
      <Image src="/loader.png" height={300} width={300} alt="loader" />
      <h4>Please wait , good things take time to come</h4>
      <div className={s.progress}>
        <div style={{ width: `${progress}%` }} className={s.progress_bar} />
      </div>
    </div>
  );
};

export default Loader;
