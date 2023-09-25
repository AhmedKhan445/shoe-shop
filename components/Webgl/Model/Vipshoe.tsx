import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane087: THREE.Mesh;
    Plane087_1: THREE.Mesh;
    Plane087_2: THREE.Mesh;
    Plane087_3: THREE.Mesh;
    Plane087_4: THREE.Mesh;
    Plane087_5: THREE.Mesh;
    Plane087_6: THREE.Mesh;
    Plane087_7: THREE.Mesh;
    Plane087_8: THREE.Mesh;
    Plane087_9: THREE.Mesh;
    Plane087_10: THREE.Mesh;
    Object_3001: THREE.Mesh;
    Object_3001_1: THREE.Mesh;
  };
  materials: {
    ["Leather Base low"]: THREE.MeshStandardMaterial;
    ["white base low"]: THREE.MeshStandardMaterial;
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

  const ref = useRef<THREE.Group>(null);

  useFrame((state, delta) => (ref.current!.rotation.y += delta / 2));

  return (
    <>
      <group
        position={[56.43, -1.767, -10.679]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3001.geometry}
          material={materials["Glass clean"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3001_1.geometry}
          material={materials["MATE L DOOR"]}
        />
      </group>

      <group {...props} dispose={null}>
        <group ref={ref} position={[56.43, -0.712, -10.691]} scale={0.164}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087.geometry}
            material={materials["Leather Base low"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_1.geometry}
            material={materials["white base low"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_2.geometry}
            material={materials["red leather.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_3.geometry}
            material={materials["stitch.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_4.geometry}
            material={materials["stitch red.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_5.geometry}
            material={materials["stitch white.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_6.geometry}
            material={materials["stitch black.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_7.geometry}
            material={materials["Material.044"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_8.geometry}
            material={materials["rubber black low"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_9.geometry}
            material={materials["logo.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane087_10.geometry}
            material={materials["black pyramid low"]}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/vipshoe.glb");
