import { useProgress } from "@react-three/drei";
import s from "./loader.module.scss";
import Image from "next/image";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <div data-hide={progress >= 100} className={s.main}>
      <Image src="/loader.png" height={300} width={300} alt="loader" />
      <h4>Please wait , good things take time to come</h4>
      <div className={s.progress}>
        {[...Array(40)].map((e, i) => {
          return <div key={i} className={s.progress_bar} />;
        })}
      </div>
    </div>
  );
};

export default Loader;
