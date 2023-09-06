import { Capsule, PerspectiveCamera, useHelper } from "@react-three/drei";
import { Sine } from "gsap";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import {
  MathUtils,
  Vector3,
  PerspectiveCamera as PC,
  CameraHelper,
  Mesh,
} from "three";

const Player = ({
  positionX,
  positionY,
  positionZ,
  cameraDefault,
}: {
  positionX: number;
  positionY: number;
  positionZ: number;
  cameraDefault: boolean;
}) => {
  const capsule = useRef<Mesh>(null);
  const camera = useRef<PC>(null);

  //   useHelper(camera, CameraHelper);

  useEffect(() => {
    gsap.timeline().to(capsule.current!.position, {
      x: positionX,
      y: positionY + 1.5,
      z: positionZ,
      ease: Sine.easeInOut,
    });
  }, [positionX, positionY, positionZ]);

  useEffect(() => {
    const renderer = document.getElementById("render");

    const drag = (e: MouseEvent) => {
      let cameraSensitivity = 0.2;
      const movementY = (e.movementY * Math.PI * cameraSensitivity) / 180;
      const movementX = (e.movementX * Math.PI * cameraSensitivity) / 180;

      camera.current!.rotateOnWorldAxis(
        new Vector3(0, 1, 0),
        MathUtils.degToRad(50 * movementX)
      );

      camera.current!.rotateX(movementY);
    };

    const dragStart = () => {
      renderer!.addEventListener("mousemove", drag);
      renderer!.style.cursor = "grabbing";
    };

    const dragEnd = () => {
      renderer!.removeEventListener("mousemove", drag);
      renderer!.style.cursor = "grab";
    };

    if (renderer) {
      renderer!.addEventListener("mousedown", dragStart);
      renderer!.addEventListener("mouseup", dragEnd);
    }
  }, []);

  return (
    <>
      <Capsule
        ref={capsule}
        position-y={1.5}
        position-z={10}
        args={[0.5, 1, 32, 32]}
      >
        <meshStandardMaterial color={"lightblue"} />
        <PerspectiveCamera makeDefault={cameraDefault} far={50} ref={camera} />
      </Capsule>
    </>
  );
};

export default Player;
