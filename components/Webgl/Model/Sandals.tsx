import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { store } from "@/store";

type GLTFResult = GLTF & {
  nodes: {
    simply_coll002: THREE.Mesh;
    simply_cloth001: THREE.Mesh;
    Object_4001: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export function Sandals({
  setSelectedShoe,
}: {
  setSelectedShoe: React.Dispatch<
    React.SetStateAction<
      | THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
      | undefined
    >
  >;
}) {
  const { nodes, materials } = useGLTF("/sandals.glb") as GLTFResult;

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(innerWidth);
  }, []);

  const [hovered, setHovered] = useState<boolean>(false);

  useCursor(hovered);

  const handleShoe = (
    object: THREE.Object3D<THREE.Event>,
    detail: {
      heading: string;
      subheading: string;
      detail: string[];
      price: number;
      stripePrice: string;
    },
    cameraConfig: { x: number; y: number; z: number; rotateY: number }
  ) => {
    store.ladyshoeCameraDefault = true;
    store.animatedSecondCameraConfig = cameraConfig;

    store.shoeDetailPopupIsActive = true;
    store.shoeDetail = detail;
    setSelectedShoe(object as THREE.Mesh);
  };

  return (
    <group dispose={null}>
      <mesh
        geometry={nodes.simply_coll002.geometry}
        material={materials["Material.001"]}
        position={[25.97, 0.88, -16.78]}
        scale={0.02}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "HERA",
              subheading: "(simple cut high heel)",
              detail: [
                "Calf leather",
                "Printed python print black special material",
                "Varnish patent leather black special material",
                "Black goat lining",
                "Varnish patent leather",
                "Gold varnish",
              ],
              price: 245.99,
              stripePrice: "",
            },
            {
              x: width < 600 ? 25.2 : 25.6,
              y: width < 600 ? 0.6 : 0.8,
              z: width < 600 ? -15.63 : -15.52,
              rotateY: 5.68,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
      <mesh
        geometry={nodes.simply_cloth001.geometry}
        material={materials["Material.006"]}
        position={[25.07, 0.89, -17.3]}
        scale={[0.02, 0.02, 0.01]}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "CASIOPEA",
              subheading: "(simple cut high heel)",
              detail: [
                "Varnish patent leather black special material",
                "Varnish patent leather Liliac special material",
                "Black goat lining",
                "Varnish patent leather black varnish",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 24.13 : 24.62,
              y: width < 600 ? 0.6 : 0.82,
              z: width < 600 ? -16.09 : -16.09,
              rotateY: 5.68,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
      <mesh
        geometry={nodes.Object_4001.geometry}
        material={materials["Material.005"]}
        position={[25.6, 0.94, -17.3]}
        scale={0.02}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "PEARLY",
              subheading: "(full cut high heel)",
              detail: [
                "Glitter pink special material",
                "Fuxia goat lining",
                "Varnish patent leather white varnish",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 24.72 : 25.2,
              y: width < 600 ? 0.67 : 0.9,
              z: width < 600 ? -16.03 : -16.13,
              rotateY: 5.68,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      />
    </group>
  );
}

useGLTF.preload("/sandals.glb");
