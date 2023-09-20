import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { useCursor, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Shoe } from "./Shoe";
import { store } from "@/store";

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

export function Shoes({
  setSelectedShoe,
}: {
  setSelectedShoe: React.Dispatch<
    React.SetStateAction<
      | THREE.Mesh<THREE.BufferGeometry, THREE.Material | THREE.Material[]>
      | undefined
    >
  >;
}) {
  const { nodes, materials } = useGLTF("/shoes.glb") as GLTFResult;

  const [hovered, setHovered] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(innerWidth);
  }, []);

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
    store.pointerLockCameraDefault = false;
    store.shoeCameraDefault = true;
    store.animatedCameraConfig = cameraConfig;

    store.shoeDetailPopupIsActive = true;
    store.shoeDetail = detail;
    setSelectedShoe(object as THREE.Mesh);
  };

  //FIXING PIVOT POINT FOR ROTATION
  const shoeOne = useRef<THREE.Mesh>(null);
  const shoeTwo = useRef<THREE.Mesh>(null);
  const shoeThree = useRef<THREE.Mesh>(null);

  useEffect(() => {
    shoeOne.current!.geometry.center();
    shoeTwo.current!.geometry.center();
    shoeThree.current!.geometry.center();
  }, []);

  return (
    <group dispose={null}>
      <Shoe />
      <mesh
        visible={true}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "GENESIS",
              subheading: "(Future Ultra high-top sneaker)",
              detail: [
                "Black calf leather",
                "Metal gold special materiel",
                "Black elastic",
                "Black rubber",
                "Black nylon",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 14.53 : 13.6,
              y: width < 600 ? 0.74 : 1.22,
              z: width < 600 ? -1.45 : -1.74,
              rotateY: 1.73,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.upper004.geometry}
        material={materials["She 6"]}
        position={[12.226, 1.051, -1.038]}
        rotation={[Math.PI, -0.212, 0]}
        scale={-0.135}
      />
      <mesh
        ref={shoeOne}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "Al Buraq",
              subheading: "(chunky sock design)",
              detail: [
                "Black calf leather",
                "White calf leather",
                "White Lycra",
                "Arrow white black special laces",
                "Black rubber",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 10.43 : 9.95,
              y: width < 600 ? 1.11 : 1.4,
              z: width < 600 ? -3.6 : -3.42,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.toecap002.geometry}
        material={materials["Shoe 7"]}
        position={[10, 1.5, -2.171]}
        rotation={[Math.PI, -1.252, 0]}
        scale={-0.152}
      />
      <mesh
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "CASANOVA",
              subheading: "(contemporary sock runner)",
              detail: [
                "Black calf leather",
                "Black lycra",
                "Arrow white black special laces",
                "Black elastic",
                "Black rubber",
              ],
              price: 227.99,
              stripePrice: "",
            },
            {
              x: width < 600 ? 9.3 : 8.91,
              y: width < 600 ? 1.23 : 1.46,
              z: width < 600 ? -4.15 : -4.15,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.Object_4003.geometry}
        material={materials["Material.002"]}
        position={[8.916, 1.403, -2.831]}
        rotation={[Math.PI, -1.205, 0]}
        scale={-2.027}
      />
      <mesh
        ref={shoeTwo}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "BARRICADE",
              subheading: "(chunky sock design)",
              detail: [
                "Varnish patent leather black special material",
                "Metal gold special material",
                "Black lycra",
                "Black cotton",
                "White rubber",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 13.7 : 13.27,
              y: width < 600 ? 0.59 : 0.85,
              z: width < 600 ? -1.46 : -1.3,
              rotateY: 3.44,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.logo008.geometry}
        material={materials["Shoe 4"]}
        position={[14.1, 0.95, -0.035]}
        rotation={[0, -1.281, -Math.PI]}
        scale={-0.152}
      />
      <mesh
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "GOLDIE",
              subheading: "(classic runner style)",
              detail: [
                "Gold leather pyramid special material",
                "Black calf leather",
                "Python print white special material",
                "Metal silver special material",
                "Arrow white black laces",
                "White rubber",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 7.29 : 7.1,
              y: width < 600 ? 1.91 : 2.1,
              z: width < 600 ? -4.38 : -4.73,
              rotateY: 2.14,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.logo005.geometry}
        material={materials["Shoe 8"]}
        position={[6.276, 2.061, -3.733]}
        rotation={[0, 0.573, 0]}
        scale={0.17}
      />
      <mesh
        ref={shoeThree}
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "ESCOBAR",
              subheading: "(rich slipper design)",
              detail: [
                "Metal gold special material",
                "Calf leather",
                "printed python print black special material",
                "Black goat lining",
                "Black elastic",
                "Gold eyelet metal",
              ],
              price: 210,
              stripePrice: "",
            },
            {
              x: width < 600 ? 6.81 : 6.4,
              y: width < 600 ? 0.6 : 0.8,
              z: width < 600 ? -5.3 : -5.3,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.insole_logo003.geometry}
        material={materials["Shoe 3"]}
        position={[6.4, 0.86, -3.976]}
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
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "LUNAR",
              subheading: "(hooks low top)",
              detail: [
                "Textyle blue special material",
                "White calf leather",
                "White cotton",
                "White rubber",
                "Black nylon",
                "Gold eyelet metal",
              ],
              price: 234.95,
              stripePrice: "",
            },
            {
              x: width < 600 ? 8.33 : 7.83,
              y: width < 600 ? 1.37 : 1.64,
              z: width < 600 ? -4.6 : -4.6,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
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
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "MEDUSA",
              subheading: "(Rich slipper design)",
              detail: [
                "Python print white special material",
                "Metal Gold special material",
                "Beige goat lining",
                "Gold eyelet metal",
              ],
              price: 0,
              stripePrice: "",
            },
            {
              x: width < 600 ? 9.16 : 8.76,
              y: width < 600 ? 0.49 : 0.7,
              z: width < 600 ? -4.25 : -4.25,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.quarter001.geometry}
        material={materials["Shoe 11"]}
        position={[8.741, 0.688, -2.926]}
        rotation={[3.073, -1.092, 3.124]}
        scale={0.134}
      />
      <mesh
        onClick={(e) =>
          handleShoe(
            e.object,
            {
              heading: "RAMESSES ll",
              subheading: "(vintage high top)",
              detail: [
                "Gold leather pyramid special material",
                "Black rubber",
                "Black calf leather",
                "Varnish patent leather black special material",
                "Mouton cotton",
                "Mouton nylon",
              ],
              price: 220.5,
              stripePrice: "",
            },
            {
              x: width < 600 ? 9.87 : 9.32,
              y: width < 600 ? 1.83 : 2.14,
              z: width < 600 ? -4.81 : -4.69,
              rotateY: 2.84,
            }
          )
        }
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.outsole007.geometry}
        material={materials["rubber black low.001"]}
        position={[9.376, 2.064, -3.224]}
        rotation={[-3.006, -1.263, 0.129]}
      />
    </group>
  );
}

useGLTF.preload("/shoes.glb");

//outsole 006
