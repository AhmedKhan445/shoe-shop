import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

export function Shoe(props: JSX.IntrinsicElements["group"]) {
  const { scene } = useGLTF("/shoe.glb") as any;
  return <primitive object={scene} />;
}

useGLTF.preload("/shoe.glb");
