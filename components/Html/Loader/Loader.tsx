import { useProgress } from "@react-three/drei";
import s from "./loader.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
  const [state, setState] = useState<number>(0);

  const { progress, errors } = useProgress();

  console.log(errors, "error");
  console.log(Math.round(progress), "progress");

  useEffect(() => {
    setState(Math.round(progress));
  }, [progress]);

  return (
    <div data-hide={!(progress >= 100)} className={s.main}>
      <Image src="/loader.png" height={300} width={300} alt="loader" />
      <h4>Please wait , good things take time to come</h4>
      {/* <div className={s.progress}>
        <div style={{ width: `${state}%` }} className={s.progress_bar} />
      </div> */}
    </div>
  );
};

export default Loader;
