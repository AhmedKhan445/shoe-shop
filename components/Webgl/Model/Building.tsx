import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Statue } from "./Statue";

type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh;
    VASE_2: THREE.Mesh;
    Cylinder002: THREE.Mesh;
    Cylinder002_1: THREE.Mesh;
    Torus002: THREE.Mesh;
    Torus001: THREE.Mesh;
    Text001: THREE.Mesh;
    superloop200_ropes_1: THREE.Mesh;
    superloop200_ropes_2: THREE.Mesh;
    superloop200_ropes_3: THREE.Mesh;
    superloop200_ropes_4: THREE.Mesh;
    superloop200_ropes_5: THREE.Mesh;
    StitchMatShape_11101017003: THREE.Mesh;
    StitchMatShape_11101017003_1: THREE.Mesh;
    StitchMatShape_11101017004: THREE.Mesh;
    StitchMatShape_11101017004_1: THREE.Mesh;
    stitch028: THREE.Mesh;
    stitch025: THREE.Mesh;
    stitch024: THREE.Mesh;
    stitch020: THREE.Mesh;
    stitch019: THREE.Mesh;
    stitch018: THREE.Mesh;
    stitch017: THREE.Mesh;
    stitch015: THREE.Mesh;
    stitch014: THREE.Mesh;
    stitch013: THREE.Mesh;
    stitch012: THREE.Mesh;
    stitch011: THREE.Mesh;
    stitch010: THREE.Mesh;
    stitch009: THREE.Mesh;
    Plane006: THREE.Mesh;
    Plane006_1: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane010_1: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane011_1: THREE.Mesh;
    side001: THREE.Mesh;
    Seat: THREE.Mesh;
    SCULPTURE001: THREE.Mesh;
    Plane080: THREE.Mesh;
    Plane080_1: THREE.Mesh;
    pot001: THREE.Mesh;
    plant001: THREE.Mesh;
    PLANT_2: THREE.Mesh;
    PLANT: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane: THREE.Mesh;
    Object_2002: THREE.Mesh;
    Object_2001: THREE.Mesh;
    NurbsPath001: THREE.Mesh;
    NurbsPath: THREE.Mesh;
    mount001: THREE.Mesh;
    mount: THREE.Mesh;
    MASH2_ReproMesh2_logo_0001_1: THREE.Mesh;
    MASH2_ReproMesh2_logo_0001_2: THREE.Mesh;
    long008: THREE.Mesh;
    long007: THREE.Mesh;
    long006: THREE.Mesh;
    long005: THREE.Mesh;
    long002: THREE.Mesh;
    logo003: THREE.Mesh;
    logo001: THREE.Mesh;
    Plane093: THREE.Mesh;
    Plane093_1: THREE.Mesh;
    Plane093_2: THREE.Mesh;
    BezierCurve014: THREE.Mesh;
    BezierCurve014_1: THREE.Mesh;
    BezierCurve014_2: THREE.Mesh;
    BezierCurve014_3: THREE.Mesh;
    BezierCurve014_4: THREE.Mesh;
    Plane094: THREE.Mesh;
    Plane094_1: THREE.Mesh;
    Plane094_2: THREE.Mesh;
    Plane094_3: THREE.Mesh;
    ground001: THREE.Mesh;
    ground: THREE.Mesh;
    GP_Layer004: THREE.Mesh;
    GP_Layer003: THREE.Mesh;
    GP_Layer002: THREE.Mesh;
    GP_Layer001: THREE.Mesh;
    GP_Layer: THREE.Mesh;
    glass: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle003_1: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube003_1: THREE.Mesh;
    Cube003_2: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cube206: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube013_1: THREE.Mesh;
    Cube197: THREE.Mesh;
    Cube196: THREE.Mesh;
    Cube195: THREE.Mesh;
    Cube194: THREE.Mesh;
    Cube023: THREE.Mesh;
    Cube023_1: THREE.Mesh;
    Cube023_2: THREE.Mesh;
    Cube023_3: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube026_1: THREE.Mesh;
    Cube024: THREE.Mesh;
    Cube024_1: THREE.Mesh;
    Cube029: THREE.Mesh;
    Cube029_1: THREE.Mesh;
    Cube030: THREE.Mesh;
    Cube030_1: THREE.Mesh;
    Cube031: THREE.Mesh;
    Cube031_1: THREE.Mesh;
    Cube031_2: THREE.Mesh;
    Cube032: THREE.Mesh;
    Cube032_1: THREE.Mesh;
    Circle043: THREE.Mesh;
    Circle042: THREE.Mesh;
    Circle041: THREE.Mesh;
    Circle040: THREE.Mesh;
    Circle039: THREE.Mesh;
    Circle026: THREE.Mesh;
    Circle026_1: THREE.Mesh;
    Circle036: THREE.Mesh;
    Circle005: THREE.Mesh;
    Circle: THREE.Mesh;
    Cylinder010: THREE.Mesh;
    Cylinder010_1: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Circle006: THREE.Mesh;
    Circle006_1: THREE.Mesh;
    Circle006_2: THREE.Mesh;
    Cube036: THREE.Mesh;
    Cube036_1: THREE.Mesh;
    Cube036_2: THREE.Mesh;
    Cube036_3: THREE.Mesh;
    Cube037: THREE.Mesh;
    Cube037_1: THREE.Mesh;
    Cube037_2: THREE.Mesh;
    Cube037_3: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder015_1: THREE.Mesh;
    Cylinder015_2: THREE.Mesh;
    Cactus: THREE.Mesh;
    bubble_panel_2_white_metall_0001: THREE.Mesh;
    bubble_panel_2_Silver_0002: THREE.Mesh;
    bubble_panel_2_LAMP2_0001: THREE.Mesh;
    bubble_panel_2_GLASS2_0001: THREE.Mesh;
    bottom002: THREE.Mesh;
    Bolt010: THREE.Mesh;
    Bolt009: THREE.Mesh;
    Bolt005: THREE.Mesh;
    Bolt004: THREE.Mesh;
    Cube193: THREE.Mesh;
    Cube193_1: THREE.Mesh;
    Cube193_2: THREE.Mesh;
    Cube193_3: THREE.Mesh;
    ["02001"]: THREE.Mesh;
    ["02001_1"]: THREE.Mesh;
    ["02001_2"]: THREE.Mesh;
    lionplace001: THREE.Mesh;
    lionplace002: THREE.Mesh;
  };
  materials: {
    ["rug.001"]: THREE.MeshPhysicalMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["wall met.002"]: THREE.MeshStandardMaterial;
    ["gold.001"]: THREE.MeshStandardMaterial;
    loop_gold: THREE.MeshStandardMaterial;
    loop_emissive: THREE.MeshStandardMaterial;
    loop_chrome_brushed: THREE.MeshStandardMaterial;
    loop_plastic_black_shiny: THREE.MeshStandardMaterial;
    loop_plastic_white_matte: THREE.MeshStandardMaterial;
    ["stitch red.002"]: THREE.MeshStandardMaterial;
    ["stitch black.003"]: THREE.MeshStandardMaterial;
    ["stitch white.002"]: THREE.MeshStandardMaterial;
    ["gold LOW.001"]: THREE.MeshStandardMaterial;
    ["ground 1.005"]: THREE.MeshStandardMaterial;
    ["MATE L DOOR.001"]: THREE.MeshStandardMaterial;
    ["rubber black low.001"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshPhysicalMaterial;
    BlackPlastic: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    ["ground 1.006"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["waterLily  low.002"]: THREE.MeshStandardMaterial;
    ["waterLily  low.003"]: THREE.MeshStandardMaterial;
    ["body material"]: THREE.MeshPhysicalMaterial;
    ["animation.001"]: THREE.MeshStandardMaterial;
    animation: THREE.MeshStandardMaterial;
    ["glow 1.001"]: THREE.MeshStandardMaterial;
    ["Lighitng-Strings.001"]: THREE.MeshStandardMaterial;
    ["logo.001"]: THREE.MeshStandardMaterial;
    ["GLOW ALPHA"]: THREE.MeshStandardMaterial;
    ["ground 1.007"]: THREE.MeshStandardMaterial;
    ["GLOW LOW.001"]: THREE.MeshStandardMaterial;
    Rohdium: THREE.MeshStandardMaterial;
    ["Material.028"]: THREE.MeshStandardMaterial;
    ["Material.029"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Light.003"]: THREE.MeshStandardMaterial;
    ["Material.036"]: THREE.MeshStandardMaterial;
    ["Marble Finish.001"]: THREE.MeshStandardMaterial;
    ["Black murble low.002"]: THREE.MeshStandardMaterial;
    ["wood low.004"]: THREE.MeshStandardMaterial;
    ["ground 1.008"]: THREE.MeshStandardMaterial;
    ["gold.004"]: THREE.MeshStandardMaterial;
    ["Glass clean.001"]: THREE.MeshPhysicalMaterial;
    ["Material.038"]: THREE.MeshStandardMaterial;
    ["Material.049"]: THREE.MeshStandardMaterial;
    ["Material.057"]: THREE.MeshStandardMaterial;
    ["Material.058"]: THREE.MeshStandardMaterial;
    ["Material.059"]: THREE.MeshStandardMaterial;
    ["Material.060"]: THREE.MeshStandardMaterial;
    ["wall met.003"]: THREE.MeshStandardMaterial;
    ["stand_Metal.001"]: THREE.MeshStandardMaterial;
    ["wood low.005"]: THREE.MeshStandardMaterial;
    ["Bonsai_Leaves.001"]: THREE.MeshStandardMaterial;
    ["Material.061"]: THREE.MeshStandardMaterial;
    ["wood low.003"]: THREE.MeshStandardMaterial;
    ["Light.004"]: THREE.MeshStandardMaterial;
    ["white mat.001"]: THREE.MeshStandardMaterial;
    ["black mat.001"]: THREE.MeshStandardMaterial;
    ["pink glow.001"]: THREE.MeshStandardMaterial;
    ["neon green glow.002"]: THREE.MeshStandardMaterial;
    ["Metal Facade Aged.001"]: THREE.MeshStandardMaterial;
    ["Material.063"]: THREE.MeshStandardMaterial;
    ["screw material"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["light material"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["LED-Lighitng.001"]: THREE.MeshStandardMaterial;
    ["Material.064"]: THREE.MeshStandardMaterial;
    ["Material.065"]: THREE.MeshStandardMaterial;
    ["Fabric.001"]: THREE.MeshStandardMaterial;
    ["Material.066"]: THREE.MeshStandardMaterial;
    ["Vaso.001"]: THREE.MeshStandardMaterial;
    ["Folhas.001"]: THREE.MeshStandardMaterial;
    ["Terra.001"]: THREE.MeshStandardMaterial;
    ["Base.001"]: THREE.MeshPhysicalMaterial;
    ["Wire.001"]: THREE.MeshStandardMaterial;
    ["Spotlights.001"]: THREE.MeshPhysicalMaterial;
    ["Light.001"]: THREE.MeshStandardMaterial;
    ["Base.002"]: THREE.MeshPhysicalMaterial;
    ["Wire.002"]: THREE.MeshStandardMaterial;
    ["Spotlights.002"]: THREE.MeshPhysicalMaterial;
    ["Light.002"]: THREE.MeshStandardMaterial;
    ["Material.067"]: THREE.MeshStandardMaterial;
    ["light 50"]: THREE.MeshStandardMaterial;
    ["clay.001"]: THREE.MeshStandardMaterial;
    ["white_metall.002"]: THREE.MeshStandardMaterial;
    ["Silver.002"]: THREE.MeshStandardMaterial;
    ["LAMP2.002"]: THREE.MeshStandardMaterial;
    ["GLASS2.002"]: THREE.MeshStandardMaterial;
    metal_shower: THREE.MeshStandardMaterial;
    Base: THREE.MeshPhysicalMaterial;
    Wire: THREE.MeshStandardMaterial;
    Spotlights: THREE.MeshPhysicalMaterial;
    Light: THREE.MeshStandardMaterial;
    ["bark_Mat.002"]: THREE.MeshStandardMaterial;
    ["wheat_Mat.001"]: THREE.MeshStandardMaterial;
    ["leave_1_Mat.001"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export function Building({
  setPositionX,
  setPositionY,
  setPositionZ,
}: {
  setPositionX: React.Dispatch<React.SetStateAction<number>>;
  setPositionY: React.Dispatch<React.SetStateAction<number>>;
  setPositionZ: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { nodes, materials } = useGLTF("/building.glb") as GLTFResult;
  return (
    <group dispose={null}>
      <group
        position={[0, -0.022, -1.399]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      >
        <mesh
          geometry={nodes.Plane008.geometry}
          material={materials["rug.001"]}
          position={[-9.018, 0, 0]}
          scale={[25.244, 25.244, 32.516]}
        />
      </group>
      <mesh
        geometry={nodes.VASE_2.geometry}
        material={materials["Material.013"]}
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      />
      <group
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Cylinder002.geometry}
          material={materials["Material.013"]}
        />
        <mesh
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["Material.015"]}
        />
      </group>
      <mesh
        geometry={nodes.Torus002.geometry}
        material={materials["wall met.002"]}
        position={[25.978, 3.06, -9.8]}
      />
      <mesh
        geometry={nodes.Torus001.geometry}
        material={materials["wall met.002"]}
        position={[9.15, 3.06, -10.62]}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={materials["gold.001"]}
        position={[-0.105, -0.017, -0.711]}
        scale={0.676}
      />
      <group
        position={[19.303, 2.945, -16.924]}
        rotation={[0, 0, Math.PI]}
        scale={[0.418, 0.667, 0.418]}
      >
        <mesh
          geometry={nodes.superloop200_ropes_1.geometry}
          material={materials.loop_gold}
        />
        <mesh
          geometry={nodes.superloop200_ropes_2.geometry}
          material={materials.loop_emissive}
        />
        <mesh
          geometry={nodes.superloop200_ropes_3.geometry}
          material={materials.loop_chrome_brushed}
        />
        <mesh
          geometry={nodes.superloop200_ropes_4.geometry}
          material={materials.loop_plastic_black_shiny}
        />
        <mesh
          geometry={nodes.superloop200_ropes_5.geometry}
          material={materials.loop_plastic_white_matte}
        />
      </group>
      <group
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      >
        <mesh
          geometry={nodes.StitchMatShape_11101017003.geometry}
          material={materials["stitch red.002"]}
        />
        <mesh
          geometry={nodes.StitchMatShape_11101017003_1.geometry}
          material={materials["stitch black.003"]}
        />
      </group>
      <group
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      >
        <mesh
          geometry={nodes.StitchMatShape_11101017004.geometry}
          material={materials["stitch red.002"]}
        />
        <mesh
          geometry={nodes.StitchMatShape_11101017004_1.geometry}
          material={materials["stitch black.003"]}
        />
      </group>
      <mesh
        geometry={nodes.stitch028.geometry}
        material={materials["stitch black.003"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch025.geometry}
        material={materials["stitch black.003"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch024.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch020.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch019.geometry}
        material={materials["stitch black.003"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch018.geometry}
        material={materials["stitch black.003"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch017.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch015.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch014.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch013.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch012.geometry}
        material={materials["stitch red.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch011.geometry}
        material={materials["stitch white.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch010.geometry}
        material={materials["stitch white.002"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <mesh
        geometry={nodes.stitch009.geometry}
        material={materials["stitch black.003"]}
        position={[56.566, -0.712, -10.691]}
        rotation={[-Math.PI / 2, 0.698, Math.PI / 2]}
        scale={0.166}
      />
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Plane006.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Plane006_1.geometry}
          material={materials["ground 1.005"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Plane010.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Plane010_1.geometry}
          material={materials["ground 1.005"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Plane011.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Plane011_1.geometry}
          material={materials["ground 1.005"]}
        />
      </group>
      <mesh
        geometry={nodes.side001.geometry}
        material={materials["MATE L DOOR.001"]}
        position={[-6.571, 0.14, -0.731]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.028, -0.011, -0.015]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.Seat.geometry}
        material={materials["rubber black low.001"]}
        position={[20.087, -0.063, -18.896]}
        rotation={[0, -0.515, 0]}
        scale={1.898}
      />
      <mesh
        geometry={nodes.SCULPTURE001.geometry}
        material={materials["Material.017"]}
        position={[31.937, -0.063, -12.674]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      />
      <group
        position={[0.99, 1.432, -13.591]}
        rotation={[1.775, -0.074, 2.797]}
        scale={1.262}
      >
        <mesh
          geometry={nodes.Plane080.geometry}
          material={materials.BlackPlastic}
        />
        <mesh
          geometry={nodes.Plane080_1.geometry}
          material={materials.Screen}
        />
      </group>
      <mesh
        geometry={nodes.pot001.geometry}
        material={materials["ground 1.006"]}
        position={[27.078, -0.063, -15.608]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.plant001.geometry}
        material={materials["Material.018"]}
        position={[27.078, -0.063, -15.608]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.PLANT_2.geometry}
        material={materials["waterLily  low.002"]}
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      />
      <mesh
        geometry={nodes.PLANT.geometry}
        material={materials["waterLily  low.003"]}
        position={[32.817, 1.894, -12.431]}
        rotation={[Math.PI, -0.121, Math.PI]}
        scale={1.268}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials["body material"]}
        position={[16.468, 2.348, -3.075]}
        rotation={[-3.072, 0, 3.076]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials["animation.001"]}
        position={[24.823, 4.747, -9.727]}
        scale={7.031}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.animation}
        position={[10.618, 4.747, -10.332]}
        scale={7.031}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={materials["wall met.002"]}
        position={[15.973, 2.939, -10.128]}
        scale={[18.7, 13.77, 13.77]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.Object_2002.geometry}
        material={materials["ground 1.006"]}
        position={[17.672, 1.443, -7.04]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.078, 0.078, 0.06]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.Object_2001.geometry}
        material={materials["ground 1.006"]}
        position={[17.691, 1.443, -14.713]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.078, 0.078, 0.06]}
      />
      <mesh
        geometry={nodes.NurbsPath001.geometry}
        material={materials["glow 1.001"]}
        position={[-1.004, -0.013, -4.548]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.NurbsPath.geometry}
        material={materials["Lighitng-Strings.001"]}
        position={[17.913, 2.939, -10.659]}
        rotation={[0, 0, Math.PI]}
        scale={0.365}
      />
      <mesh
        geometry={nodes.mount001.geometry}
        material={materials["MATE L DOOR.001"]}
        position={[0.47, 0.439, 1.965]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.028, -0.011, -0.015]}
      />
      <mesh
        geometry={nodes.mount.geometry}
        material={materials["MATE L DOOR.001"]}
        position={[1.622, 0.439, 1.965]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.028, -0.011, -0.015]}
      />
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[9.41, -0.027, -9.532]}
        rotation={[-Math.PI, 0.09, -Math.PI]}
        scale={0.052}
      >
        <mesh
          geometry={nodes.MASH2_ReproMesh2_logo_0001_1.geometry}
          material={materials["logo.001"]}
        />
        <mesh
          geometry={nodes.MASH2_ReproMesh2_logo_0001_2.geometry}
          material={materials["GLOW ALPHA"]}
        />
      </group>
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.long008.geometry}
        material={materials["wall met.002"]}
        position={[24.003, 0, -18.296]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.long007.geometry}
        material={materials["wall met.002"]}
        position={[24.003, 0, -3.948]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.long006.geometry}
        material={materials["wall met.002"]}
        position={[7.736, 0, -19.43]}
        rotation={[0, 0.364, 0]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.long005.geometry}
        material={materials["wall met.002"]}
        position={[9.097, 0, -2.283]}
        rotation={[0, -0.373, 0]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.long002.geometry}
        material={materials["wall met.002"]}
        position={[-2.5, 0, -7.301]}
      />
      <mesh
        geometry={nodes.logo003.geometry}
        material={materials["gold LOW.001"]}
        position={[-0.01, 2.072, -15.809]}
        rotation={[Math.PI / 2, 0, -0.372]}
        scale={3.174}
      />
      <mesh
        geometry={nodes.logo001.geometry}
        material={materials["gold LOW.001"]}
        position={[1.597, 0.54, -13.001]}
        rotation={[Math.PI / 2, 0, -0.362]}
        scale={[4.27, 2.503, 4.27]}
      />
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[28.569, -0.063, -14.748]}
        rotation={[-Math.PI, 0.484, -Math.PI]}
        scale={1.526}
      >
        <mesh
          geometry={nodes.Plane093.geometry}
          material={materials["ground 1.007"]}
        />
        <mesh
          geometry={nodes.Plane093_1.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Plane093_2.geometry}
          material={materials["GLOW LOW.001"]}
        />
      </group>
      <group
        position={[1.68, 2.824, -12.045]}
        rotation={[0, 0, Math.PI]}
        scale={1.915}
      >
        <mesh
          geometry={nodes.BezierCurve014.geometry}
          material={materials.Rohdium}
        />
        <mesh
          geometry={nodes.BezierCurve014_1.geometry}
          material={materials["Material.028"]}
        />
        <mesh
          geometry={nodes.BezierCurve014_2.geometry}
          material={materials["Material.029"]}
        />
        <mesh
          geometry={nodes.BezierCurve014_3.geometry}
          material={materials.Glass}
        />
        <mesh
          geometry={nodes.BezierCurve014_4.geometry}
          material={materials["Light.003"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[1.053, 0.929, -13.577]}
        rotation={[Math.PI / 2, 0, 2.78]}
        scale={1.409}
      >
        <mesh
          geometry={nodes.Plane094.geometry}
          material={materials["Material.036"]}
        />
        <mesh
          geometry={nodes.Plane094_1.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Plane094_2.geometry}
          material={materials["Marble Finish.001"]}
        />
        <mesh
          geometry={nodes.Plane094_3.geometry}
          material={materials["Black murble low.002"]}
        />
      </group>
      <mesh
        geometry={nodes.ground001.geometry}
        material={materials["wood low.004"]}
        position={[27.078, -0.063, -15.608]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        onPointerEnter={() => {
          const renderer = document.getElementById("render");
          renderer!.style.cursor = "pointer";
        }}
        onPointerLeave={() => {
          const renderer = document.getElementById("render");
          renderer!.style.cursor = "grab";
        }}
        onClick={(e) => {
          setPositionX(e.point.x);
          setPositionY(e.point.y);
          setPositionZ(e.point.z);
        }}
        geometry={nodes.ground.geometry}
        material={materials["ground 1.008"]}
        position={[21.344, -0.063, -8.679]}
        scale={26.011}
      />
      <mesh
        geometry={nodes.GP_Layer004.geometry}
        material={materials["gold.004"]}
        position={[16.428, 1.242, -0.591]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.GP_Layer003.geometry}
        material={materials["gold.004"]}
      />
      <mesh
        geometry={nodes.GP_Layer002.geometry}
        material={materials["gold.004"]}
      />
      <mesh
        geometry={nodes.GP_Layer001.geometry}
        material={materials["gold.004"]}
      />
      <mesh
        geometry={nodes.GP_Layer.geometry}
        material={materials["gold.004"]}
      />
      <mesh
        geometry={nodes.glass.geometry}
        material={materials["Glass clean.001"]}
        position={[1.049, 1.448, 1.965]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.028, -0.011, -0.015]}
      />
      <group
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["Material.038"]}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["waterLily  low.003"]}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.049"]}
        />
      </group>
      <group
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials["Material.057"]}
        />
        <mesh
          geometry={nodes.Circle003_1.geometry}
          material={materials["Material.058"]}
        />
      </group>
      <group
        position={[32.033, -0.063, -12.817]}
        rotation={[-Math.PI, 0.435, -Math.PI]}
        scale={1.268}
      >
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials["Material.058"]}
        />
        <mesh
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.059"]}
        />
        <mesh
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.049"]}
        />
      </group>
      <mesh
        onClick={(e) => e.stopPropagation()}
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.060"]}
        position={[41.083, 0.586, -10.971]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.251, 7.426, 1.251]}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.Cube206.geometry}
        material={materials["wall met.003"]}
        position={[0, 3.528, -1.763]}
        scale={3.609}
      />
      <group
        position={[23.356, -0.056, -17.715]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={1.236}
      >
        <mesh
          geometry={nodes.Cube013.geometry}
          material={materials["stand_Metal.001"]}
        />
        <mesh
          geometry={nodes.Cube013_1.geometry}
          material={materials["wood low.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube197.geometry}
        material={materials["Glass clean.001"]}
        position={[16.425, 1.211, -0.518]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.755, 0.958, 0.958]}
      />
      <mesh
        geometry={nodes.Cube196.geometry}
        material={materials["Glass clean.001"]}
        position={[2.455, 1.263, -1.317]}
        scale={[0.755, 0.958, 0.958]}
      />
      <mesh
        geometry={nodes.Cube195.geometry}
        material={materials["Glass clean.001"]}
        position={[2.455, 1.263, -1.317]}
        scale={[0.755, 0.958, 0.958]}
      />
      <mesh
        geometry={nodes.Cube194.geometry}
        material={materials["Glass clean.001"]}
        position={[-2.52, 0, 1.538]}
        scale={[0.755, 0.958, 0.958]}
      />
      <group
        position={[2.813, 1.184, -14.322]}
        rotation={[-Math.PI, 1.174, -Math.PI]}
        scale={0.158}
      >
        <mesh
          geometry={nodes.Cube023.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Cube023_1.geometry}
          material={materials["Bonsai_Leaves.001"]}
        />
        <mesh
          geometry={nodes.Cube023_2.geometry}
          material={materials["Material.061"]}
        />
        <mesh
          geometry={nodes.Cube023_3.geometry}
          material={materials["wood low.005"]}
        />
      </group>
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials["wood low.003"]}
        position={[17.913, 2.939, -10.659]}
        rotation={[0, 0, Math.PI]}
        scale={0.365}
      />
      <group
        position={[30.374, 1.513, -14.051]}
        rotation={[Math.PI / 2, 0, -2.641]}
        scale={1.393}
      >
        <mesh
          geometry={nodes.Cube026.geometry}
          material={materials["gold.004"]}
        />
        <mesh
          geometry={nodes.Cube026_1.geometry}
          material={materials["Light.004"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[18.935, -0.063, -16.693]}
        rotation={[0, -0.505, 0]}
        scale={[0.912, 0.306, 0.749]}
      >
        <mesh
          geometry={nodes.Cube024.geometry}
          material={materials["white mat.001"]}
        />
        <mesh
          geometry={nodes.Cube024_1.geometry}
          material={materials["black mat.001"]}
        />
      </group>
      <group
        position={[16.425, 1.211, -0.518]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.755, 0.958, 0.958]}
      >
        <mesh
          geometry={nodes.Cube029.geometry}
          material={materials["wall met.002"]}
        />
        <mesh
          geometry={nodes.Cube029_1.geometry}
          material={materials["pink glow.001"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[-2.52, 0, 1.538]}
        scale={[0.755, 0.958, 0.958]}
      >
        <mesh
          geometry={nodes.Cube030.geometry}
          material={materials["wall met.002"]}
        />
        <mesh
          geometry={nodes.Cube030_1.geometry}
          material={materials["pink glow.001"]}
        />
      </group>
      <group
        onClick={(e) => {
          e.stopPropagation();
        }}
        position={[2.455, 1.263, -1.317]}
        scale={[0.755, 0.958, 0.958]}
      >
        <mesh
          geometry={nodes.Cube031.geometry}
          material={materials["wall met.002"]}
        />
        <mesh
          geometry={nodes.Cube031_1.geometry}
          material={materials["pink glow.001"]}
        />
        <mesh
          geometry={nodes.Cube031_2.geometry}
          material={materials["neon green glow.002"]}
        />
      </group>
      <group
        position={[18.327, -0.071, -20.856]}
        rotation={[-Math.PI, 0.523, -Math.PI]}
        scale={1.17}
      >
        <mesh
          geometry={nodes.Cube032.geometry}
          material={materials["Metal Facade Aged.001"]}
        />
        <mesh
          geometry={nodes.Cube032_1.geometry}
          material={materials["Material.063"]}
        />
      </group>
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
        geometry={nodes.Circle039.geometry}
        material={materials["body material"]}
        position={[16.432, 2.894, -3.036]}
        rotation={[-3.072, 0, 3.076]}
        scale={1.122}
      />
      <group
        position={[16.493, 1.971, -3.101]}
        rotation={[-3.072, 0, 3.076]}
        scale={1.122}
      >
        <mesh
          geometry={nodes.Circle026.geometry}
          material={materials["body material"]}
        />
        <mesh
          geometry={nodes.Circle026_1.geometry}
          material={materials["light material"]}
        />
      </group>
      <mesh
        geometry={nodes.Circle036.geometry}
        material={materials["default"]}
        position={[16.062, 1.959, -3.408]}
        rotation={[0.019, 0.928, 0.077]}
        scale={1.122}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        material={materials["gold LOW.001"]}
        position={[23.417, 1.56, -17.49]}
        rotation={[Math.PI, -0.333, Math.PI]}
        scale={1.864}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials["LED-Lighitng.001"]}
        position={[17.913, 2.939, -10.659]}
        rotation={[0, 0, Math.PI]}
        scale={0.365}
      />
      <group
        position={[0.393, -0.063, -15.192]}
        rotation={[0, 0.369, 0]}
        scale={1.29}
      >
        <mesh
          geometry={nodes.Cylinder010.geometry}
          material={materials["Material.064"]}
        />
        <mesh
          geometry={nodes.Cylinder010_1.geometry}
          material={materials["Material.065"]}
        />
        <mesh
          geometry={nodes.Cube011.geometry}
          material={materials["Fabric.001"]}
          rotation={[-0.166, 0, 0]}
        />
        <mesh
          geometry={nodes.Cube012.geometry}
          material={materials["Fabric.001"]}
          rotation={[-1.658, 0, -Math.PI]}
        />
        <mesh
          geometry={nodes.Cube015.geometry}
          material={materials["Material.066"]}
          position={[0, -0.002, 0]}
          rotation={[-0.166, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.065"]}
        />
      </group>
      <group
        position={[23.306, 0.937, -17.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.249}
      >
        <mesh
          geometry={nodes.Circle006.geometry}
          material={materials["Vaso.001"]}
        />
        <mesh
          geometry={nodes.Circle006_1.geometry}
          material={materials["Folhas.001"]}
        />
        <mesh
          geometry={nodes.Circle006_2.geometry}
          material={materials["Terra.001"]}
        />
      </group>
      <group position={[20.733, 2.938, -2.48]} rotation={[-Math.PI, -0.122, 0]}>
        <mesh
          geometry={nodes.Cube036.geometry}
          material={materials["Base.001"]}
        />
        <mesh
          geometry={nodes.Cube036_1.geometry}
          material={materials["Wire.001"]}
        />
        <mesh
          geometry={nodes.Cube036_2.geometry}
          material={materials["Spotlights.001"]}
        />
        <mesh
          geometry={nodes.Cube036_3.geometry}
          material={materials["Light.001"]}
        />
      </group>
      <group position={[12.418, 2.938, -3.297]} rotation={[Math.PI, 0.458, 0]}>
        <mesh
          geometry={nodes.Cube037.geometry}
          material={materials["Base.002"]}
        />
        <mesh
          geometry={nodes.Cube037_1.geometry}
          material={materials["Wire.002"]}
        />
        <mesh
          geometry={nodes.Cube037_2.geometry}
          material={materials["Spotlights.002"]}
        />
        <mesh
          geometry={nodes.Cube037_3.geometry}
          material={materials["Light.002"]}
        />
      </group>
      <group position={[25.048, 2.939, -16.621]} rotation={[0, 0, Math.PI]}>
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials["gold LOW.001"]}
        />
        <mesh
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Material.067"]}
        />
        <mesh
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["light 50"]}
        />
      </group>
      <mesh
        geometry={nodes.Cactus.geometry}
        material={materials["clay.001"]}
        position={[23.166, 0.437, -17.69]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.898}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.bubble_panel_2_white_metall_0001.geometry}
        material={materials["white_metall.002"]}
        position={[15.902, 1.221, -21.879]}
        rotation={[0, -1.492, 0]}
        scale={0.016}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.bubble_panel_2_Silver_0002.geometry}
        material={materials["Silver.002"]}
        position={[15.902, -0.236, -21.879]}
        rotation={[0, -1.492, 0]}
        scale={0.016}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.bubble_panel_2_LAMP2_0001.geometry}
        material={materials["LAMP2.002"]}
        position={[16.067, -0.236, -21.921]}
        rotation={[0, -1.554, 0]}
        scale={0.016}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation();
        }}
        geometry={nodes.bubble_panel_2_GLASS2_0001.geometry}
        material={materials["GLASS2.002"]}
        position={[15.902, -0.236, -21.879]}
        rotation={[0, -1.492, 0]}
        scale={0.016}
      />
      <mesh
        geometry={nodes.bottom002.geometry}
        material={materials.metal_shower}
        position={[-0.052, -0.063, 1.965]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.031, -0.011, -0.015]}
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
      <group
        position={[0.161, 2.788, -14.486]}
        rotation={[0, 0.323, Math.PI]}
        scale={1.144}
      >
        <mesh geometry={nodes.Cube193.geometry} material={materials.Base} />
        <mesh geometry={nodes.Cube193_1.geometry} material={materials.Wire} />
        <mesh
          geometry={nodes.Cube193_2.geometry}
          material={materials.Spotlights}
        />
        <mesh geometry={nodes.Cube193_3.geometry} material={materials.Light} />
      </group>
      <group
        position={[23.404, 1.549, -17.485]}
        rotation={[Math.PI / 2, 0, 2.809]}
        scale={0.019}
      >
        <mesh
          geometry={nodes["02001"].geometry}
          material={materials["bark_Mat.002"]}
        />
        <mesh
          geometry={nodes["02001_1"].geometry}
          material={materials["wheat_Mat.001"]}
        />
        <mesh
          geometry={nodes["02001_2"].geometry}
          material={materials["leave_1_Mat.001"]}
        />
      </group>
      {/* <Statue />
      <Statue scale-x={-1} /> */}
      <mesh
        visible={false}
        geometry={nodes.lionplace001.geometry}
        material={materials["default"]}
        position={[2.396, -0.045, 3.529]}
        scale={[0.276, 1, 0.8]}
      />
      <mesh
        visible={false}
        geometry={nodes.lionplace002.geometry}
        material={materials["default"]}
        position={[-2.544, -0.045, 3.529]}
        scale={[0.276, 1, 0.8]}
      />
    </group>
  );
}

useGLTF.preload("/building.glb");
