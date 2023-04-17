import { Canvas } from "@react-three/fiber";
import s from "./render.module.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics, CuboidCollider, Debug } from "@react-three/rapier";
import Player from "../Player/Player";
import { Building } from "../Model/Building";
import { Door } from "../Model/Door";
import {
  BsFillCaretRightFill,
  BsFillCaretLeftFill,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
} from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { store } from "@/store";
import { useSnapshot } from "valtio";

const Render = () => {
  const [camera, setCamera] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [touchForward, setTouchForward] = useState<boolean>(false);

  const handleClick = () => {
    setCamera(!camera);
  };

  const { touchTurnLeft, touchTurnRight } = useSnapshot(store);

  return (
    <main className={s.main}>
      <button data-cam onMouseDown={handleClick}>
        Camera Change
      </button>
      <div className={s.buttongroup}>
        <button onClick={touchTurnLeft}>
          <TiArrowBack />
        </button>
        <button>
          <BsFillCaretUpFill />
        </button>
        <button onClick={touchTurnRight} data-flip>
          <TiArrowBack />
        </button>
      </div>
      <Canvas camera={{ position: [2, 2, 5] }}>
        <OrbitControls />
        <Environment preset="city" />

        <Suspense fallback={null}>
          <Physics>
            <Debug />
            <Building />

            {/* Gate */}
            <Door isOpen={isOpen} />
            <CuboidCollider
              position={[0, 3, 4]}
              args={[3, 3, 6]}
              sensor
              onIntersectionEnter={() => setIsOpen(true)}
            />
            <Player camera={camera} />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
};

export default Render;
