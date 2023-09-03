import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_2002: THREE.Mesh;
    Object_2002_1: THREE.Mesh;
  };
  materials: {
    ["Loewe_O_Material_u1_v1.001"]: THREE.MeshStandardMaterial;
    ["bottom.001"]: THREE.MeshStandardMaterial;
  };
};

export function Statue(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/statue.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group
        position={[2.478, 0, 3.48]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.079}
      >
        <mesh
          geometry={nodes.Object_2002.geometry}
          material={materials["Loewe_O_Material_u1_v1.001"]}
        />
        <mesh
          geometry={nodes.Object_2002_1.geometry}
          material={materials["bottom.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/statue.glb");
