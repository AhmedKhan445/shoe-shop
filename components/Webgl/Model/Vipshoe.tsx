import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    vamp003: THREE.Mesh;
    upper006: THREE.Mesh;
    upper002: THREE.Mesh;
    upper001: THREE.Mesh;
    toecap004: THREE.Mesh;
    stitch036: THREE.Mesh;
    stitch017: THREE.Mesh;
    stitch016: THREE.Mesh;
    stitch015: THREE.Mesh;
    stitch014: THREE.Mesh;
    stitch013: THREE.Mesh;
    stitch012: THREE.Mesh;
    stitch011: THREE.Mesh;
    stitch010: THREE.Mesh;
    stitch009: THREE.Mesh;
    stitch018: THREE.Mesh;
    stitch019: THREE.Mesh;
    stitch020: THREE.Mesh;
    stitch024: THREE.Mesh;
    stitch025: THREE.Mesh;
    stitch028: THREE.Mesh;
    StitchMatShape_11101017042: THREE.Mesh;
    StitchMatShape_11101017042_1: THREE.Mesh;
    StitchMatShape_11101017044: THREE.Mesh;
    StitchMatShape_11101017044_1: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane005: THREE.Mesh;
    outsole002: THREE.Mesh;
    logo007: THREE.Mesh;
    logo006: THREE.Mesh;
    bumper002: THREE.Mesh;
    Object_3001: THREE.Mesh;
    Object_3001_1: THREE.Mesh;
  };
  materials: {
    ["white base low"]: THREE.MeshStandardMaterial;
    ["Leather Base low"]: THREE.MeshStandardMaterial;
    ["red leather.002"]: THREE.MeshStandardMaterial;
    ["stitch.011"]: THREE.MeshStandardMaterial;
    ["stitch red.001"]: THREE.MeshStandardMaterial;
    ["stitch white.001"]: THREE.MeshStandardMaterial;
    ["stitch black.001"]: THREE.MeshStandardMaterial;
    ["Material.044"]: THREE.MeshStandardMaterial;
    ["rubber black low"]: THREE.MeshStandardMaterial;
    ["logo.004"]: THREE.MeshStandardMaterial;
    ["black pyramid low"]: THREE.MeshStandardMaterial;
    ["Glass clean"]: THREE.MeshPhysicalMaterial;
    ["MATE L DOOR"]: THREE.MeshStandardMaterial;
  };
};

export function Vipshoe(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/vipshoe.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.vamp003.geometry}
        material={materials["white base low"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.upper006.geometry}
        material={materials["Leather Base low"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.upper002.geometry}
        material={materials["red leather.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.upper001.geometry}
        material={materials["red leather.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.toecap004.geometry}
        material={materials["Leather Base low"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch036.geometry}
        material={materials["stitch.011"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch017.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch016.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch015.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch014.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch013.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch012.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch011.geometry}
        material={materials["stitch white.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch010.geometry}
        material={materials["stitch white.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch009.geometry}
        material={materials["stitch black.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch018.geometry}
        material={materials["stitch black.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch019.geometry}
        material={materials["stitch black.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch020.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch024.geometry}
        material={materials["stitch red.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch025.geometry}
        material={materials["stitch black.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch028.geometry}
        material={materials["stitch black.001"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <group
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      >
        <mesh
          geometry={nodes.StitchMatShape_11101017042.geometry}
          material={materials["stitch red.001"]}
        />
        <mesh
          geometry={nodes.StitchMatShape_11101017042_1.geometry}
          material={materials["stitch black.001"]}
        />
      </group>
      <group
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      >
        <mesh
          geometry={nodes.StitchMatShape_11101017044.geometry}
          material={materials["stitch red.001"]}
        />
        <mesh
          geometry={nodes.StitchMatShape_11101017044_1.geometry}
          material={materials["stitch black.001"]}
        />
      </group>
      <mesh
        geometry={nodes.Plane013.geometry}
        material={materials["red leather.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Material.044"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.outsole002.geometry}
        material={materials["rubber black low"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.logo007.geometry}
        material={materials["white base low"]}
        position={[56.225, -0.748, -10.59]}
        rotation={[-1.301, 0.474, -3.128]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.logo006.geometry}
        material={materials["logo.004"]}
        position={[56.225, -0.748, -10.59]}
        rotation={[-1.301, 0.474, -3.128]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.bumper002.geometry}
        material={materials["black pyramid low"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <group
        position={[56.43, -1.767, -10.679]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      >
        <mesh
          geometry={nodes.Object_3001.geometry}
          material={materials["Glass clean"]}
        />
        <mesh
          geometry={nodes.Object_3001_1.geometry}
          material={materials["MATE L DOOR"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/vipshoe.glb");
