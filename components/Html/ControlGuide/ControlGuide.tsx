import Image from "next/image";
import s from "./controlguide.module.scss";
import { useEffect, useState } from "react";
import { Html } from "@react-three/drei";

const ControlGuide = () => {
  const [isHide, setIsHide] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const hide = () => {
      setIsHide(true);
    };
    const timer = setTimeout(hide, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const visible = () => {
      setIsVisible(false);
    };
    const timer = setTimeout(visible, 8500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Html style={{ display: isVisible ? "block" : "none" }} fullscreen>
      <div data-hide={isHide} className={s.main}>
        <div className={s.container}>
          <Image src="/control-guide.png" fill alt="guide" />
        </div>
      </div>
    </Html>
  );
};

export default ControlGuide;
