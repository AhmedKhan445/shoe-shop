import { store } from "@/store";
import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Pane } from "tweakpane";
import { useSnapshot } from "valtio";

const AnimatedCamera = ({
  selectedShoe,
}: {
  selectedShoe:
    | THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
    | undefined;
}) => {
  const {
    animatedSecondCameraConfig,
    animatedCameraConfig,
    shoeCameraDefault,
    ladyshoeCameraDefault,
  } = useSnapshot(store);

  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const cameraRefOne = useRef<THREE.PerspectiveCamera>(null);

  const [rotateAngel, setRotate] = useState<number>(-0.7);
  // useHelper(cameraRef, THREE.CameraHelper);
  // useHelper(cameraRefOne, THREE.CameraHelper);

  // useEffect(() => {
  //   const pane = new Pane();

  //   pane.addInput(cameraRefOne.current!.position, "x", {
  //     min: -50,
  //     max: 50,
  //     step: 0.01,
  //   });
  //   pane.addInput(cameraRefOne.current!.position, "y", {
  //     min: -50,
  //     max: 50,
  //     step: 0.01,
  //   });
  //   pane.addInput(cameraRefOne.current!.position, "z", {
  //     min: -50,
  //     max: 50,
  //     step: 0.01,
  //   });
  //   pane.addInput(cameraRefOne.current!.rotation, "y", {
  //     min: 0,
  //     max: Math.PI * 2,
  //     step: 0.01,
  //     label: "RotationY",
  //   });
  // }, []);

  useEffect(() => {
    const { x, y, z, rotateY } = animatedCameraConfig;

    if (ladyshoeCameraDefault) {
      gsap.timeline().to(cameraRefOne.current!.position, {
        x: animatedSecondCameraConfig.x,
        y: animatedSecondCameraConfig.y,
        z: animatedSecondCameraConfig.z,
      });
    } else if (shoeCameraDefault) {
      gsap
        .timeline()
        .to(cameraRef.current!.position, { x, y, z })
        .to(cameraRef.current!.rotation, { y: rotateY }, "<");
    }
  }, [
    animatedCameraConfig,
    animatedSecondCameraConfig,
    ladyshoeCameraDefault,
    shoeCameraDefault,
  ]);

  useEffect(() => {
    if (selectedShoe !== undefined) {
      store.shoeRotateRight = () => {
        gsap.timeline().to(selectedShoe.rotation, { y: Math.PI * rotateAngel });
        setRotate(rotateAngel - 0.1);
      };
      store.shoeRotateLeft = () => {
        gsap.timeline().to(selectedShoe.rotation, { y: Math.PI * rotateAngel });
        setRotate(rotateAngel + 0.1);
      };
    }
  }, [rotateAngel, selectedShoe]);

  useEffect(() => {
    if (shoeCameraDefault === false) {
      gsap.set(cameraRefOne.current!.position, { x: 21.5, y: 1.6, z: -12 });
      gsap.set(cameraRefOne.current!.rotation, { y: 5.68 });
      gsap.set(cameraRef.current!.position, { x: 18, y: 2.5, z: -14.4 });
      gsap.set(cameraRef.current!.rotation, { y: 2.84 });
    }
  }, [shoeCameraDefault, ladyshoeCameraDefault]);

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        position={[18, 2.5, -14.4]}
        rotation-y={2.84}
        far={100}
        near={1}
        makeDefault={shoeCameraDefault}
      />
      <PerspectiveCamera
        ref={cameraRefOne}
        position={[21.5, 1.6, -12]}
        rotation-y={5.68}
        far={100}
        near={1}
        makeDefault={ladyshoeCameraDefault}
      />
    </>
  );
};

export default AnimatedCamera;
