import { Canvas } from "@react-three/fiber";
import s from "./render.module.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { Physics, CuboidCollider, Debug } from "@react-three/rapier";
import Player from "../Player/Player";
import { Building } from "../Model/Building";
import { Door } from "../Model/Door";

const Render = () => {
  const [camera, setCamera] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setCamera(!camera);
  };

  return (
    <main className={s.main}>
      <button onMouseDown={handleClick}>Camera Change</button>
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
            {/* <RigidBody type="fixed" colliders={"hull"}>
              <Box position={[0, -1, 0]} args={[40, 0.2, 40]}>
                <meshBasicMaterial color="gray" />
              </Box>
            </RigidBody>
           */}
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
};

export default Render;
