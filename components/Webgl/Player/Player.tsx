import { Capsule, PerspectiveCamera, useHelper } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RapierRigidBody, RigidBody, quat } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type props = {
  camera: boolean;
};

const Player: React.FC<props> = ({ camera }) => {
  const rigidBody = useRef<RapierRigidBody>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  // useHelper(cameraRef, THREE.CameraHelper);

  const [isForward, setIsForward] = useState<boolean>(false);
  const [isBackward, setIsBackward] = useState<boolean>(false);
  const [isLeft, setIsLeft] = useState<boolean>(false);
  const [isRight, setIsRight] = useState<boolean>(false);
  const [mouseCor, setMouseCor] = useState<number>(0);

  useEffect(() => {
    // document.addEventListener("mousemove", (event) => {
    //   const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //   const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    //   setMouseCor(mouseX);

    //   rigidBody.current!.setRotation(
    //     quat({ x: 0, y: -Math.PI * mouseX, z: 0, w: 1 }),
    //     true
    //   );
    // });

    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "w") {
        setIsForward(true);
      }
      if (event.key === "s") {
        setIsBackward(true);
      }
      if (event.key === "a") {
        setIsLeft(true);
      }
      if (event.key === "d") {
        setIsRight(true);
      }
    };

    const keyUpHandler = () => {
      setIsForward(false);
      setIsBackward(false);
      setIsLeft(false);
      setIsRight(false);
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  useFrame(() => {
    if (rigidBody.current) {
      if (isForward) {
        rigidBody.current!.applyImpulse({ x: 0, y: 0, z: -0.2 }, true);
      } else if (isBackward) {
        rigidBody.current.applyImpulse({ x: 0, y: 0, z: 0.2 }, true);
      } else if (isLeft) {
        rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: 0 }, true);
      } else if (isRight) {
        rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: 0 }, true);
      }
    }
  });

  return (
    <RigidBody
      // enabledRotations={[false, true, false]}
      lockRotations={true}
      ref={rigidBody}
      colliders={"hull"}
      position={[0, 0, 14]}
    >
      <axesHelper scale={5} />
      <Capsule ref={meshRef} scale={0.5} position-y={1} args={[1, 2, 8, 8]} />
      <PerspectiveCamera
        ref={cameraRef}
        rotation={[0, Math.PI * 0, 0]}
        position={[0, 2, 0.5]}
        far={1000}
        near={1}
        makeDefault={camera}
      />
    </RigidBody>
  );
};

export default Player;

// if (isForward) {
//   if (mouseCor < -0.4) {
//     rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: 0.2 }, true);
//   } else if (mouseCor < -0.3) {
//     rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: 0.05 }, true);
//   } else if (mouseCor < -0.2) {
//     rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: 0 }, true);
//   } else if (mouseCor < -0.005) {
//     rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: -0.2 }, true);
//   }
//   //
//   else if (mouseCor < 0.1) {
//     rigidBody.current.applyImpulse({ x: 0, y: 0, z: -0.2 }, true);
//   } else if (mouseCor < 0.3) {
//     rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: -0.2 }, true);
//   } else if (mouseCor < 0.4) {
//     rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: 0 }, true);
//   } else if (mouseCor < 0.5) {
//     rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: 0.05 }, true);
//   } else if (mouseCor < 1) {
//     rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: 0.2 }, true);
//   } else if (mouseCor < 1.1) {
//     rigidBody.current.applyImpulse({ x: 0, y: 0, z: 0.2 }, true);
//   }
// } else if (isBackward) {
//   rigidBody.current.applyImpulse({ x: 0, y: 0, z: 0.2 }, true);
// } else if (isLeft) {
//   rigidBody.current.applyImpulse({ x: -0.2, y: 0, z: 0 }, true);
// } else if (isRight) {
//   rigidBody.current.applyImpulse({ x: 0.2, y: 0, z: 0 }, true);
// }
