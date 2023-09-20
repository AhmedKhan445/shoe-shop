import * as THREE from "three";
import React, { useRef } from "react";
import { Plane, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    stitch014: THREE.Mesh;
    stitch013: THREE.Mesh;
    stitch010: THREE.Mesh;
    stitch009: THREE.Mesh;
    stitch020: THREE.Mesh;
    stitch025: THREE.Mesh;
    stitch028: THREE.Mesh;
    StitchMatShape_11101017042: THREE.Mesh;
    StitchMatShape_11101017042_1: THREE.Mesh;
    StitchMatShape_11101017044: THREE.Mesh;
    StitchMatShape_11101017044_1: THREE.Mesh;
    Undertable_Slab: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane047_1: THREE.Mesh;
    Plane047_2: THREE.Mesh;
    Plane047_3: THREE.Mesh;
    Handle_Row_2: THREE.Mesh;
    Handle_Row_1: THREE.Mesh;
    Cylinder055: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder047: THREE.Mesh;
    Cube188: THREE.Mesh;
    Cube008: THREE.Mesh;
    Mesh014: THREE.Mesh;
    Mesh014_1: THREE.Mesh;

    chesterfield_couch: THREE.Mesh;
    Cube199: THREE.Mesh;
    Cube199_1: THREE.Mesh;
  };
  materials: {
    ["stitch red.001"]: THREE.MeshStandardMaterial;
    ["stitch white.001"]: THREE.MeshStandardMaterial;
    ["stitch black.001"]: THREE.MeshStandardMaterial;
    ["Alu. Powder Coat"]: THREE.MeshStandardMaterial;
    ["gold LOW"]: THREE.MeshStandardMaterial;
    ["ground 1.003"]: THREE.MeshStandardMaterial;
    ["Black murble low"]: THREE.MeshStandardMaterial;
    ["rubber black low"]: THREE.MeshStandardMaterial;
    ["GLOW LOW"]: THREE.MeshStandardMaterial;
    ["WHITE GLOW"]: THREE.MeshStandardMaterial;
    ["Black murble low.001"]: THREE.MeshStandardMaterial;
    ["Material #3.001"]: THREE.MeshStandardMaterial;
    ["Lights - couch.001"]: THREE.MeshStandardMaterial;
    ["rubber browen low"]: THREE.MeshStandardMaterial;
    ["Material.053"]: THREE.MeshStandardMaterial;
  };
};

export const Viproom = () => {
  const { scene } = useGLTF("/viproom.glb") as GLTFResult;
  return (
    <>
      <Plane
        args={[20, 20]}
        rotation-x={-Math.PI * 0.5}
        position={[56.427, -1.76, -10.687]}
      />
      <group>
        <primitive object={scene} />
      </group>
    </>
  );
};

useGLTF.preload("/viproom.glb");
