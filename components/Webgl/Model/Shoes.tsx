import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Shoe } from "./Shoe";

type GLTFResult = GLTF & {
  nodes: {
    upper004: THREE.Mesh;
    toecap002: THREE.Mesh;
    Object_4003: THREE.Mesh;
    logo008: THREE.Mesh;
    logo005: THREE.Mesh;
    insole_logo003: THREE.Mesh;
    Circle043: THREE.Mesh;
    Circle042: THREE.Mesh;
    Circle041: THREE.Mesh;
    Circle040: THREE.Mesh;
    Circle036: THREE.Mesh;
    bumper003: THREE.Mesh;
    Bolt010: THREE.Mesh;
    Bolt009: THREE.Mesh;
    Bolt005: THREE.Mesh;
    Bolt004: THREE.Mesh;
    quarter001: THREE.Mesh;
    outsole007: THREE.Mesh;
  };
  materials: {
    ["She 6"]: THREE.MeshStandardMaterial;
    ["Shoe 7"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Shoe 4"]: THREE.MeshStandardMaterial;
    ["Shoe 8"]: THREE.MeshStandardMaterial;
    ["Shoe 3"]: THREE.MeshStandardMaterial;
    ["screw material"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["Shoe 9"]: THREE.MeshStandardMaterial;
    ["Shoe 11"]: THREE.MeshStandardMaterial;
    ["rubber black low.001"]: THREE.MeshPhysicalMaterial;
  };
};

export function Shoes(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/shoes.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <Shoe />
      <mesh
        geometry={nodes.upper004.geometry}
        material={materials["She 6"]}
        position={[12.226, 1.051, -1.038]}
        rotation={[Math.PI, -0.212, 0]}
        scale={-0.135}
      />
      <mesh
        geometry={nodes.toecap002.geometry}
        material={materials["Shoe 7"]}
        position={[9.768, 1.337, -2.171]}
        rotation={[Math.PI, -1.252, 0]}
        scale={-0.152}
      />
      <mesh
        geometry={nodes.Object_4003.geometry}
        material={materials["Material.002"]}
        position={[8.916, 1.403, -2.831]}
        rotation={[Math.PI, -1.205, 0]}
        scale={-2.027}
      />
      <mesh
        geometry={nodes.logo008.geometry}
        material={materials["Shoe 4"]}
        position={[13.927, 0.784, -0.035]}
        rotation={[0, -1.281, -Math.PI]}
        scale={-0.152}
      />
      <mesh
        geometry={nodes.logo005.geometry}
        material={materials["Shoe 8"]}
        position={[6.276, 2.061, -3.733]}
        rotation={[0, 0.573, 0]}
        scale={0.17}
      />
      <mesh
        geometry={nodes.insole_logo003.geometry}
        material={materials["Shoe 3"]}
        position={[6.232, 0.808, -3.976]}
        rotation={[-0.025, 1.047, -3.12]}
        scale={-0.158}
      />
      <mesh
        geometry={nodes.Circle043.geometry}
        material={materials["screw material"]}
        position={[16.489, 2.905, -3.14]}
        rotation={[-3.072, 0, 3.076]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Circle042.geometry}
        material={materials["default"]}
        position={[16.387, 2.031, -2.759]}
        rotation={[2.774, 0.698, -2.701]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Circle041.geometry}
        material={materials["default"]}
        position={[16.6, 2.05, -3.431]}
        rotation={[0.506, -0.855, 0.486]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Circle040.geometry}
        material={materials["default"]}
        position={[16.938, 2.008, -2.865]}
        rotation={[2.804, -1.196, 2.733]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Circle036.geometry}
        material={materials["default"]}
        position={[16.062, 1.959, -3.408]}
        rotation={[0.019, 0.928, 0.077]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.bumper003.geometry}
        material={materials["Shoe 9"]}
        position={[7.875, 1.609, -3.039]}
        rotation={[0, -1.468, -Math.PI]}
        scale={-0.118}
      />
      <mesh
        geometry={nodes.Bolt010.geometry}
        material={materials["screw material"]}
        position={[16.387, 2.031, -2.759]}
        rotation={[1.497, -0.333, -2.394]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolt009.geometry}
        material={materials["screw material"]}
        position={[16.6, 2.05, -3.431]}
        rotation={[1.698, 0.311, 0.916]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolt005.geometry}
        material={materials["screw material"]}
        position={[16.938, 2.008, -2.865]}
        rotation={[1.617, 0.146, 1.917]}
        scale={0.001}
      />
      <mesh
        geometry={nodes.Bolt004.geometry}
        material={materials["screw material"]}
        position={[16.062, 1.959, -3.408]}
        rotation={[1.652, 0.046, -0.93]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.quarter001.geometry}
        material={materials["Shoe 11"]}
        position={[8.741, 0.688, -2.926]}
        rotation={[3.073, -1.092, 3.124]}
        scale={0.134}
      />
      <mesh
        geometry={nodes.outsole007.geometry}
        material={materials["rubber black low.001"]}
        position={[9.376, 2.064, -3.224]}
        rotation={[-3.006, -1.263, 0.129]}
      />
    </group>
  );
}

useGLTF.preload("/shoes.glb");
