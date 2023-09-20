import { SphereProps, useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { usePlayerControls } from "./utils/helpers";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";
import { PointerLockControls as PLC } from "three-stdlib";
import { useSnapshot } from "valtio";
import { store } from "@/store";

const BaseCharacter = (props: SphereProps) => {
  const { pointerLockCameraDefault } = useSnapshot(store);
  const [mobileTurn, setMobileTurn] = useState<number>(0);
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 5;

  const pointerControls = useRef<PLC>(null);
  const mobileCamera = useRef<THREE.PerspectiveCamera>(null);

  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));

  const { forward, backward, left, right, jump } = usePlayerControls();
  const {
    mobileForward,
    mobileBackward,
    mobileLeft,
    mobileRight,
    mobileTurnLeft,
    mobileTurnRight,
  } = useSnapshot(store);

  const velocity = useRef([0, 0, 0]);

  useEffect(
    () => api.velocity.subscribe((v) => (velocity.current = v)),
    [api.velocity]
  );

  useFrame(() => {
    if (innerWidth < 600) {
      if (mobileCamera) {
        ref.current!.getWorldPosition(mobileCamera.current!.position);
        setMobileTurn(
          mobileTurnRight
            ? mobileTurn - 0.01
            : mobileTurnLeft
            ? mobileTurn + 0.01
            : mobileTurn
        );

        mobileCamera.current!.rotation.set(0, mobileTurn, 0);

        frontVector.set(0, 0, Number(mobileBackward) - Number(mobileForward));
        sideVector.set(Number(mobileLeft) - Number(mobileRight), 0, 0);
        direction
          .subVectors(frontVector, sideVector)
          .normalize()
          .multiplyScalar(SPEED)
          .applyEuler(mobileCamera.current!.rotation);

        speed.fromArray(velocity.current);

        api.velocity.set(direction.x, velocity.current[1], direction.z);
      }
    } else {
      if (pointerControls) {
        ref.current!.getWorldPosition(pointerControls.current!.camera.position);
        frontVector.set(0, 0, Number(backward) - Number(forward));
        sideVector.set(Number(left) - Number(right), 0, 0);
        direction
          .subVectors(frontVector, sideVector)
          .normalize()
          .multiplyScalar(SPEED)
          .applyEuler(pointerControls.current!.camera.rotation);

        speed.fromArray(velocity.current);

        api.velocity.set(direction.x, velocity.current[1], direction.z);
        if (jump && Math.abs(Number(velocity.current[1].toFixed(2))) < 0.05)
          api.velocity.set(velocity.current[0], 5, velocity.current[2]);
      }
    }
  });

  return (
    <>
      {innerWidth > 600 ? (
        <PointerLockControls
          makeDefault={pointerLockCameraDefault}
          ref={pointerControls}
          selector="#three-canvas"
        />
      ) : (
        <PerspectiveCamera
          ref={mobileCamera}
          makeDefault={innerWidth < 600 ? true : false}
          position={[0, 1.5, 0]}
        />
      )}

      <group>
        <mesh
          castShadow
          position={props.position}
          ref={ref as React.RefObject<THREE.Mesh<THREE.BufferGeometry>>}
          visible={false}
        >
          <sphereGeometry args={props.args} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    </>
  );
};

export default BaseCharacter;
