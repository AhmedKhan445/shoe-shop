import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

type GLTFResult = GLTF & {
  nodes: {
    Plane008: THREE.Mesh;
    Cube016_1: THREE.Mesh;
    Cube016_2: THREE.Mesh;
    Cube016_3: THREE.Mesh;
    Cube019: THREE.Mesh;
    Cube019_1: THREE.Mesh;
    Cube021: THREE.Mesh;
    Cube021_1: THREE.Mesh;
    Cube194: THREE.Mesh;
    Cube195: THREE.Mesh;
    Cube196: THREE.Mesh;
    Cube197: THREE.Mesh;
    GP_Layer: THREE.Mesh;
    GP_Layer001: THREE.Mesh;
    GP_Layer002: THREE.Mesh;
    GP_Layer003: THREE.Mesh;
    GP_Layer004: THREE.Mesh;
    ground: THREE.Mesh;
    long002: THREE.Mesh;
    long005: THREE.Mesh;
    long006: THREE.Mesh;
    long007: THREE.Mesh;
    long008: THREE.Mesh;
    NurbsPath001: THREE.Mesh;
    Torus002: THREE.Mesh;
    Torus001: THREE.Mesh;
    Plane: THREE.Mesh;
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    heel005: THREE.Mesh;
    insole010: THREE.Mesh;
    insole011: THREE.Mesh;
    insole_logo005: THREE.Mesh;
    logo012: THREE.Mesh;
    midsole005: THREE.Mesh;
    quarter005: THREE.Mesh;
    rubber005: THREE.Mesh;
    stitch073: THREE.Mesh;
    stitch074: THREE.Mesh;
    stitch075: THREE.Mesh;
    stitch076: THREE.Mesh;
    stitch077: THREE.Mesh;
    stitch080: THREE.Mesh;
    Torus007: THREE.Mesh;
    Torus007_1: THREE.Mesh;
    vamp005: THREE.Mesh;
    upper: THREE.Mesh;
    tongue_strap: THREE.Mesh;
    tongue_lining: THREE.Mesh;
    tongue: THREE.Mesh;
    stitch027: THREE.Mesh;
    stitch026: THREE.Mesh;
    stitch023: THREE.Mesh;
    stitch022: THREE.Mesh;
    stitch021: THREE.Mesh;
    quarter: THREE.Mesh;
    Mesh004: THREE.Mesh;
    Mesh004_1: THREE.Mesh;
    logo: THREE.Mesh;
    lining: THREE.Mesh;
    lace: THREE.Mesh;
    insole: THREE.Mesh;
    eyelet_metal001: THREE.Mesh;
    eyelet_metal: THREE.Mesh;
    bumper: THREE.Mesh;
    Torus004: THREE.Mesh;
    Torus004_1: THREE.Mesh;
    stitch101: THREE.Mesh;
    stitch100: THREE.Mesh;
    stitch099: THREE.Mesh;
    rubber003: THREE.Mesh;
    quarter003: THREE.Mesh;
    Mesh020: THREE.Mesh;
    Mesh020_1: THREE.Mesh;
    Mesh020_2: THREE.Mesh;
    Mesh020_3: THREE.Mesh;
    insole007: THREE.Mesh;
    insole006: THREE.Mesh;
    insole_logo003: THREE.Mesh;
    heel003: THREE.Mesh;
    Mesh007: THREE.Mesh;
    Mesh007_1: THREE.Mesh;
    Mesh007_2: THREE.Mesh;
    Cube213: THREE.Mesh;
    Cube212: THREE.Mesh;
    Cube211: THREE.Mesh;
    BezierCurve041: THREE.Mesh;
    BezierCurve040: THREE.Mesh;
    BezierCurve039: THREE.Mesh;
    BezierCurve038: THREE.Mesh;
    BezierCurve037: THREE.Mesh;
    BezierCurve036: THREE.Mesh;
    BezierCurve035: THREE.Mesh;
    BezierCurve034: THREE.Mesh;
    BezierCurve033: THREE.Mesh;
    BezierCurve032: THREE.Mesh;
    BezierCurve031: THREE.Mesh;
    BezierCurve030: THREE.Mesh;
    BezierCurve029: THREE.Mesh;
    BezierCurve028: THREE.Mesh;
    Mesh001: THREE.Mesh;
    Mesh001_1: THREE.Mesh;
    Mesh001_2: THREE.Mesh;
    Cube208: THREE.Mesh;
    Cube207: THREE.Mesh;
    Cube223: THREE.Mesh;
    Cube223_1: THREE.Mesh;
    BODY: THREE.Mesh;
    BezierCurve013: THREE.Mesh;
    BezierCurve012: THREE.Mesh;
    BezierCurve011: THREE.Mesh;
    BezierCurve010: THREE.Mesh;
    BezierCurve009: THREE.Mesh;
    BezierCurve008: THREE.Mesh;
    BezierCurve007: THREE.Mesh;
    BezierCurve006: THREE.Mesh;
    BezierCurve005: THREE.Mesh;
    BezierCurve004: THREE.Mesh;
    BezierCurve003: THREE.Mesh;
    BezierCurve002: THREE.Mesh;
    BezierCurve001: THREE.Mesh;
    BezierCurve: THREE.Mesh;
    upper029: THREE.Mesh;
    upper028: THREE.Mesh;
    upper027: THREE.Mesh;
    upper026: THREE.Mesh;
    upper025: THREE.Mesh;
    upper024: THREE.Mesh;
    upper023: THREE.Mesh;
    upper022: THREE.Mesh;
    upper021: THREE.Mesh;
    upper020: THREE.Mesh;
    upper019: THREE.Mesh;
    upper018: THREE.Mesh;
    upper016: THREE.Mesh;
    upper015: THREE.Mesh;
    upper014: THREE.Mesh;
    upper013: THREE.Mesh;
    upper005: THREE.Mesh;
    stitch135: THREE.Mesh;
    stitch131: THREE.Mesh;
    stitch130: THREE.Mesh;
    stitch125: THREE.Mesh;
    stitch: THREE.Mesh;
    outsole011: THREE.Mesh;
    insole015: THREE.Mesh;
    bumper006: THREE.Mesh;
    simply_coll006: THREE.Mesh;
    simply_cloth003: THREE.Mesh;
    Object_0003: THREE.Mesh;
    Object_0003_1: THREE.Mesh;
    Object_0003_2: THREE.Mesh;
    Object_0003_3: THREE.Mesh;
    Object_0003_4: THREE.Mesh;
    Object_4001: THREE.Mesh;
    simply_coll001: THREE.Mesh;
    simply_cloth001: THREE.Mesh;
    Object_0007: THREE.Mesh;
    Object_0007_1: THREE.Mesh;
    Object_4003: THREE.Mesh;
    simply_coll002: THREE.Mesh;
    simply_cloth002: THREE.Mesh;
    Object_0010: THREE.Mesh;
    Object_0010_1: THREE.Mesh;
    Object_0010_2: THREE.Mesh;
    Object_0010_3: THREE.Mesh;
    Object_4005: THREE.Mesh;
    heelcap001: THREE.Mesh;
    heelcap: THREE.Mesh;
    collar: THREE.Mesh;
    eyestay002: THREE.Mesh;
    eyestay001: THREE.Mesh;
    vamp001: THREE.Mesh;
    vamp: THREE.Mesh;
    vamp002: THREE.Mesh;
    quarter001: THREE.Mesh;
    eyestay: THREE.Mesh;
    bottom: THREE.Mesh;
    tongue001: THREE.Mesh;
    lining001: THREE.Mesh;
    logo002: THREE.Mesh;
    lace001: THREE.Mesh;
    collar001: THREE.Mesh;
    Plane004: THREE.Mesh;
    Object_6006: THREE.Mesh;
    Object_4025: THREE.Mesh;
    Object_4024: THREE.Mesh;
    Object_0024: THREE.Mesh;
    Object_0024_1: THREE.Mesh;
    Object_4021: THREE.Mesh;
    Object_12005: THREE.Mesh;
    Object_4023: THREE.Mesh;
    bottom001: THREE.Mesh;
    bottom003: THREE.Mesh;
    bottom004: THREE.Mesh;
    bottom005: THREE.Mesh;
    toecap: THREE.Mesh;
    toecap001: THREE.Mesh;
    overlay001: THREE.Mesh;
    heelcap002: THREE.Mesh;
    overlay: THREE.Mesh;
    logo004: THREE.Mesh;
    eyestay003: THREE.Mesh;
    heel_strap: THREE.Mesh;
    lace002: THREE.Mesh;
    stitch005: THREE.Mesh;
    stitch006: THREE.Mesh;
    stitch007: THREE.Mesh;
    stitch008: THREE.Mesh;
    bottom006: THREE.Mesh;
    bottom007: THREE.Mesh;
    bottom008: THREE.Mesh;
    eyestay004: THREE.Mesh;
    heel_strap001: THREE.Mesh;
    heelcap003: THREE.Mesh;
    lace003: THREE.Mesh;
    lining003: THREE.Mesh;
    logo005: THREE.Mesh;
    overlay002: THREE.Mesh;
    overlay003: THREE.Mesh;
    stitch001: THREE.Mesh;
    stitch002: THREE.Mesh;
    stitch003: THREE.Mesh;
    stitch004: THREE.Mesh;
    toecap002: THREE.Mesh;
    toecap003: THREE.Mesh;
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
    bubble_panel_2_white_metall_0001: THREE.Mesh;
    bubble_panel_2_Silver_0002: THREE.Mesh;
    bubble_panel_2_LAMP2_0001: THREE.Mesh;
    bubble_panel_2_GLASS2_0001: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane019_1: THREE.Mesh;
    Plane019_2: THREE.Mesh;
    Plane019_3: THREE.Mesh;
    Seat: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube015_1: THREE.Mesh;
    Undertable_Slab: THREE.Mesh;
    Plane047: THREE.Mesh;
    Plane047_1: THREE.Mesh;
    Plane047_2: THREE.Mesh;
    Plane047_3: THREE.Mesh;
    Cylinder011: THREE.Mesh;
    Cylinder011_1: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube015_2: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube004_2: THREE.Mesh;
    Plane009: THREE.Mesh;
    Plane009_1: THREE.Mesh;
    Plane009_2: THREE.Mesh;
    Handle_Row_2: THREE.Mesh;
    Handle_Row_1: THREE.Mesh;
    Object_2002: THREE.Mesh;
    Object_2001: THREE.Mesh;
    logo003: THREE.Mesh;
    logo001: THREE.Mesh;
    Cube193: THREE.Mesh;
    Cube193_1: THREE.Mesh;
    Cube193_2: THREE.Mesh;
    Cube193_3: THREE.Mesh;
    Cube018: THREE.Mesh;
    Cube018_1: THREE.Mesh;
    Cube018_2: THREE.Mesh;
    Cube018_3: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    BezierCurve014: THREE.Mesh;
    BezierCurve014_1: THREE.Mesh;
    BezierCurve014_2: THREE.Mesh;
    BezierCurve014_3: THREE.Mesh;
    BezierCurve014_4: THREE.Mesh;
    Cube026: THREE.Mesh;
    Cube026_1: THREE.Mesh;
    NurbsPath: THREE.Mesh;
    Cube017: THREE.Mesh;
    Circle: THREE.Mesh;
    Cylinder015: THREE.Mesh;
    Cylinder015_1: THREE.Mesh;
    Cylinder015_2: THREE.Mesh;
    Plane003: THREE.Mesh;
    Circle043: THREE.Mesh;
    Circle042: THREE.Mesh;
    Circle041: THREE.Mesh;
    Circle040: THREE.Mesh;
    Circle039: THREE.Mesh;
    Circle026: THREE.Mesh;
    Circle026_1: THREE.Mesh;
    Circle036: THREE.Mesh;
    Bolt010: THREE.Mesh;
    Bolt009: THREE.Mesh;
    Bolt005: THREE.Mesh;
    Bolt004: THREE.Mesh;
    superloop200_ropes_1: THREE.Mesh;
    superloop200_ropes_2: THREE.Mesh;
    superloop200_ropes_3: THREE.Mesh;
    superloop200_ropes_4: THREE.Mesh;
    superloop200_ropes_5: THREE.Mesh;
    chandelier_wire: THREE.Mesh;
    Circle139: THREE.Mesh;
    Circle139_1: THREE.Mesh;
    Circle139_2: THREE.Mesh;
    chandelier_cover: THREE.Mesh;
    Plane004_1: THREE.Mesh;
    Plane004_2: THREE.Mesh;
    Cube212_1: THREE.Mesh;
    Cube212_2: THREE.Mesh;
    Circle005: THREE.Mesh;
    Circle010: THREE.Mesh;
    Circle010_1: THREE.Mesh;
    Circle010_2: THREE.Mesh;
    Cactus: THREE.Mesh;
    ["02_1"]: THREE.Mesh;
    ["02_2"]: THREE.Mesh;
    ["02_3"]: THREE.Mesh;
    Cube192: THREE.Mesh;
    Cube192_1: THREE.Mesh;
    Cube192_2: THREE.Mesh;
    Cube192_3: THREE.Mesh;
    VASE_2: THREE.Mesh;
    Cylinder118: THREE.Mesh;
    Cylinder118_1: THREE.Mesh;
    Plane002_1: THREE.Mesh;
    Plane002_2: THREE.Mesh;
    Plane017: THREE.Mesh;
    Plane017_1: THREE.Mesh;
    Plane024: THREE.Mesh;
    Plane024_1: THREE.Mesh;
    SCULPTURE001: THREE.Mesh;
    PLANT_2: THREE.Mesh;
    PLANT: THREE.Mesh;
    Cube218: THREE.Mesh;
    Cube218_1: THREE.Mesh;
    Cube218_2: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle009_1: THREE.Mesh;
    Cube219: THREE.Mesh;
    Cube219_1: THREE.Mesh;
    Cube219_2: THREE.Mesh;
    pot001: THREE.Mesh;
    plant001: THREE.Mesh;
    ground001: THREE.Mesh;
    Text001: THREE.Mesh;
    MASH2_ReproMesh2_logo_0001_1: THREE.Mesh;
    MASH2_ReproMesh2_logo_0001_2: THREE.Mesh;
    side001: THREE.Mesh;
    mount001: THREE.Mesh;
    mount: THREE.Mesh;
    glass: THREE.Mesh;
    bottom002: THREE.Mesh;
    Cylinder055: THREE.Mesh;
    Cylinder054: THREE.Mesh;
    Cylinder047: THREE.Mesh;
    Cube190: THREE.Mesh;
    Cube188: THREE.Mesh;
    Cube187: THREE.Mesh;
    Cube186: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Mesh014: THREE.Mesh;
    Mesh014_1: THREE.Mesh;
    // Mesh014: THREE.Mesh;
    // Mesh014_1: THREE.Mesh;
    chesterfield_couch: THREE.Mesh;
    Object_3001: THREE.Mesh;
    Object_3001_1: THREE.Mesh;
    FireplaceHole001: THREE.Mesh;
    scheit3: THREE.Mesh;
    scheit3_1: THREE.Mesh;
    scheit3_2: THREE.Mesh;
    scheit3_3: THREE.Mesh;
    scheit3_4: THREE.Mesh;
    scheit3_5: THREE.Mesh;
    scheit3_6: THREE.Mesh;
    scheit3_7: THREE.Mesh;
    scheit3_8: THREE.Mesh;
    scheit3_9: THREE.Mesh;
    Cube199: THREE.Mesh;
    Cube199_1: THREE.Mesh;
    Cube206: THREE.Mesh;
    Object_2001_1: THREE.Mesh;
    Object_2001_2: THREE.Mesh;
    // Object_2001_1: THREE.Mesh;
    // Object_2001_2: THREE.Mesh;
  };
  materials: {
    ["rug.002"]: THREE.MeshPhysicalMaterial;
    ["wall met"]: THREE.MeshStandardMaterial;
    ["pink glow"]: THREE.MeshStandardMaterial;
    ["neon green glow.001"]: THREE.MeshStandardMaterial;
    ["Glass clean"]: THREE.MeshPhysicalMaterial;
    gold: THREE.MeshStandardMaterial;
    ["ground 1"]: THREE.MeshStandardMaterial;
    ["glow 1"]: THREE.MeshStandardMaterial;
    animation: THREE.MeshStandardMaterial;
    ["animation.001"]: THREE.MeshStandardMaterial;
    ["wood low"]: THREE.MeshStandardMaterial;
    ["gold LOW"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["FLAG 1 .001"]: THREE.MeshStandardMaterial;
    ["Material.045"]: THREE.MeshStandardMaterial;
    ["crocodile sidde"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    THREAD: THREE.MeshStandardMaterial;
    ["gold.002"]: THREE.MeshStandardMaterial;
    ["crocodile.001"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    collar: THREE.MeshStandardMaterial;
    ["white rubber"]: THREE.MeshStandardMaterial;
    ["stitch.002"]: THREE.MeshStandardMaterial;
    ["stitch.003"]: THREE.MeshStandardMaterial;
    ["outsole.003"]: THREE.MeshStandardMaterial;
    ["logo.003"]: THREE.MeshStandardMaterial;
    ["eyelet metal"]: THREE.MeshStandardMaterial;
    ["white rubber pyramid low"]: THREE.MeshStandardMaterial;
    ["crocodile WHITE"]: THREE.MeshStandardMaterial;
    ["THREAD.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["crocodile sidde WHITE"]: THREE.MeshStandardMaterial;
    ["wood low.001"]: THREE.MeshStandardMaterial;
    ["FLAG 1 .002"]: THREE.MeshStandardMaterial;
    ["rubber black low"]: THREE.MeshStandardMaterial;
    ["stitch.005"]: THREE.MeshStandardMaterial;
    ["black.001"]: THREE.MeshStandardMaterial;
    ["gold pyramid LOW"]: THREE.MeshStandardMaterial;
    ["Material.050"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["stitch.004"]: THREE.MeshStandardMaterial;
    ["mix pyramid low.jpg"]: THREE.MeshStandardMaterial;
    ["CROCODILE LOW"]: THREE.MeshStandardMaterial;
    ["Material.046"]: THREE.MeshStandardMaterial;
    ["Material.047"]: THREE.MeshStandardMaterial;
    ["lace "]: THREE.MeshStandardMaterial;
    ["leather low"]: THREE.MeshStandardMaterial;
    ["collar.001"]: THREE.MeshStandardMaterial;
    ["leather.001"]: THREE.MeshStandardMaterial;
    ["Material.051"]: THREE.MeshStandardMaterial;
    ["stitch.006"]: THREE.MeshStandardMaterial;
    ["stitch.007"]: THREE.MeshStandardMaterial;
    ["outsole.005"]: THREE.MeshStandardMaterial;
    ["insole.001"]: THREE.MeshStandardMaterial;
    ["black pyramid low"]: THREE.MeshStandardMaterial;
    ["heel inner low"]: THREE.MeshStandardMaterial;
    ["Material.039"]: THREE.MeshStandardMaterial;
    ["Glitter material.001"]: THREE.MeshStandardMaterial;
    ["Leather 02.001"]: THREE.MeshStandardMaterial;
    ["Material.040"]: THREE.MeshStandardMaterial;
    ["Material.041"]: THREE.MeshStandardMaterial;
    ["gletter low.001"]: THREE.MeshStandardMaterial;
    ["black 1"]: THREE.MeshStandardMaterial;
    flag: THREE.MeshStandardMaterial;
    ["Material.042"]: THREE.MeshStandardMaterial;
    ["Burlington Leather.002"]: THREE.MeshStandardMaterial;
    ["CROCODILE WHITE LOW "]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["gold pyramid 2 LOW"]: THREE.MeshStandardMaterial;
    ["white sole low"]: THREE.MeshStandardMaterial;
    ["Material.043"]: THREE.MeshStandardMaterial;
    logo: THREE.MeshStandardMaterial;
    ["Material.055"]: THREE.MeshStandardMaterial;
    ["Elastic Rubber"]: THREE.MeshStandardMaterial;
    ["Material.048"]: THREE.MeshStandardMaterial;
    ["low fabric"]: THREE.MeshStandardMaterial;
    ["stitch black.002"]: THREE.MeshStandardMaterial;
    ["Material.054"]: THREE.MeshStandardMaterial;
    ["Elastic Rubber.001"]: THREE.MeshStandardMaterial;
    ["Material.052"]: THREE.MeshStandardMaterial;
    ["stitch.010"]: THREE.MeshStandardMaterial;
    ["stitch.009"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["grey low"]: THREE.MeshStandardMaterial;
    ["logo.002"]: THREE.MeshStandardMaterial;
    ["white base low"]: THREE.MeshStandardMaterial;
    ["Leather Base low"]: THREE.MeshStandardMaterial;
    ["red leather.002"]: THREE.MeshStandardMaterial;
    ["stitch.011"]: THREE.MeshStandardMaterial;
    ["stitch red.001"]: THREE.MeshStandardMaterial;
    ["stitch white.001"]: THREE.MeshStandardMaterial;
    ["stitch black.001"]: THREE.MeshStandardMaterial;
    ["Material.044"]: THREE.MeshStandardMaterial;
    ["logo.004"]: THREE.MeshStandardMaterial;
    ["white_metall.001"]: THREE.MeshStandardMaterial;
    ["Silver.001"]: THREE.MeshStandardMaterial;
    ["LAMP2.001"]: THREE.MeshStandardMaterial;
    ["GLASS2.001"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Marble Finish"]: THREE.MeshStandardMaterial;
    ["Black murble low"]: THREE.MeshStandardMaterial;
    ["white mat"]: THREE.MeshStandardMaterial;
    ["black mat"]: THREE.MeshStandardMaterial;
    ["Alu. Powder Coat"]: THREE.MeshStandardMaterial;
    ["ground 1.003"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    Fabric: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    ["Metal Facade Aged"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["ground 1.002"]: THREE.MeshStandardMaterial;
    ["GLOW LOW"]: THREE.MeshStandardMaterial;
    ["ground 1.001"]: THREE.MeshStandardMaterial;
    Base: THREE.MeshPhysicalMaterial;
    Wire: THREE.MeshStandardMaterial;
    Spotlights: THREE.MeshPhysicalMaterial;
    Light: THREE.MeshStandardMaterial;
    ["Base.001"]: THREE.MeshPhysicalMaterial;
    ["Wire.001"]: THREE.MeshStandardMaterial;
    ["Spotlights.001"]: THREE.MeshPhysicalMaterial;
    ["Light.001"]: THREE.MeshStandardMaterial;
    ["Base.002"]: THREE.MeshPhysicalMaterial;
    ["Wire.002"]: THREE.MeshStandardMaterial;
    ["Spotlights.002"]: THREE.MeshPhysicalMaterial;
    ["Light.002"]: THREE.MeshStandardMaterial;
    Rohdium: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    Glass: THREE.MeshStandardMaterial;
    ["Light.003"]: THREE.MeshStandardMaterial;
    ["Light.004"]: THREE.MeshStandardMaterial;
    ["Lighitng-Strings.001"]: THREE.MeshStandardMaterial;
    ["LED-Lighitng.001"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["light 50"]: THREE.MeshStandardMaterial;
    ["body material"]: THREE.MeshPhysicalMaterial;
    ["screw material"]: THREE.MeshStandardMaterial;
    ["light material"]: THREE.MeshStandardMaterial;
    loop_gold: THREE.MeshStandardMaterial;
    loop_emissive: THREE.MeshStandardMaterial;
    loop_chrome_brushed: THREE.MeshStandardMaterial;
    loop_plastic_black_shiny: THREE.MeshStandardMaterial;
    loop_plastic_white_matte: THREE.MeshStandardMaterial;
    black_plastic: THREE.MeshStandardMaterial;
    silver: THREE.MeshStandardMaterial;
    BlackPlastic: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    stand_Metal: THREE.MeshStandardMaterial;
    Vaso: THREE.MeshStandardMaterial;
    Folhas: THREE.MeshStandardMaterial;
    Terra: THREE.MeshStandardMaterial;
    clay: THREE.MeshStandardMaterial;
    ["bark_Mat.001"]: THREE.MeshStandardMaterial;
    wheat_Mat: THREE.MeshStandardMaterial;
    leave_1_Mat: THREE.MeshStandardMaterial;
    Bonsai_Leaves: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["ground 1.003"]: THREE.MeshStandardMaterial;
    ["Material.023"]: THREE.MeshPhysicalMaterial;
    ["waterLily  low"]: THREE.MeshStandardMaterial;
    ["waterLily  low"]: THREE.MeshStandardMaterial;
    ["Material.030"]: THREE.MeshStandardMaterial;
    ["Material.031"]: THREE.MeshStandardMaterial;
    ["Material.032"]: THREE.MeshStandardMaterial;
    ["Material.033"]: THREE.MeshStandardMaterial;
    ["Material.034"]: THREE.MeshStandardMaterial;
    ["Material.035"]: THREE.MeshStandardMaterial;
    ["wood low"]: THREE.MeshStandardMaterial;
    ["gold.003"]: THREE.MeshStandardMaterial;
    ["logo.001"]: THREE.MeshStandardMaterial;
    ["GLOW ALPHA"]: THREE.MeshStandardMaterial;
    ["MATE L DOOR"]: THREE.MeshStandardMaterial;
    metal_shower: THREE.MeshStandardMaterial;
    ["WHITE GLOW"]: THREE.MeshStandardMaterial;
    ["WHITE BLUE"]: THREE.MeshStandardMaterial;
    ["Black murble low"]: THREE.MeshStandardMaterial;
    ["Material.056"]: THREE.MeshStandardMaterial;
    ["Material #3.001"]: THREE.MeshStandardMaterial;
    ["Lights - couch.001"]: THREE.MeshStandardMaterial;
    ["rubber browen low"]: THREE.MeshStandardMaterial;
    ["ground 1.002"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["mantel_clock_01.001"]: THREE.MeshStandardMaterial;
    ["Material.053"]: THREE.MeshStandardMaterial;
    ["wall met.001"]: THREE.MeshStandardMaterial;
    ["Loewe_O_Material_u1_v1.001"]: THREE.MeshStandardMaterial;
    ["bottom.001"]: THREE.MeshStandardMaterial;
  };
};

export function Building(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/building.glb") as GLTFResult;
  return (
    <group scale={1.8} {...props} dispose={null}>
      <group
        position={[0, -0.02, -1.4]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.04}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane008.geometry}
          material={materials["rug.002"]}
          position={[-9.02, 0, 0]}
          scale={[25.24, 25.24, 32.52]}
        />
      </group>
      <group position={[2.45, 1.26, -1.32]} scale={[0.76, 0.96, 0.96]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials["wall met"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials["pink glow"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_3.geometry}
          material={materials["neon green glow.001"]}
        />
      </group>
      <group position={[-2.52, 0, 1.54]} scale={[0.76, 0.96, 0.96]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["wall met"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_1.geometry}
          material={materials["pink glow"]}
        />
      </group>
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[16.42, 1.21, -0.52]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.76, 0.96, 0.96]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["wall met"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials["pink glow"]}
          />
        </group>
      </RigidBody>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube194.geometry}
        material={materials["Glass clean"]}
        position={[-2.52, 0, 1.54]}
        scale={[0.76, 0.96, 0.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube195.geometry}
        material={materials["Glass clean"]}
        position={[2.45, 1.26, -1.32]}
        scale={[0.76, 0.96, 0.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube196.geometry}
        material={materials["Glass clean"]}
        position={[2.45, 1.26, -1.32]}
        scale={[0.76, 0.96, 0.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube197.geometry}
        material={materials["Glass clean"]}
        position={[16.42, 1.21, -0.52]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.76, 0.96, 0.96]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GP_Layer.geometry}
        material={materials.gold}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GP_Layer001.geometry}
        material={materials.gold}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GP_Layer002.geometry}
        material={materials.gold}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GP_Layer003.geometry}
        material={materials.gold}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GP_Layer004.geometry}
        material={materials.gold}
        position={[16.43, 1.24, -0.59]}
        rotation={[Math.PI, 0, Math.PI]}
      />

      <RigidBody type="fixed" colliders={"trimesh"}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={materials["ground 1"]}
          position={[21.34, -0.06, -8.68]}
          scale={26.01}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.long002.geometry}
          material={materials["wall met"]}
          position={[-2.5, 0, -7.3]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.long005.geometry}
          material={materials["wall met"]}
          position={[9.1, 0, -2.28]}
          rotation={[0, -0.37, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.long006.geometry}
          material={materials["wall met"]}
          position={[7.74, 0, -19.43]}
          rotation={[0, 0.36, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.long007.geometry}
          material={materials["wall met"]}
          position={[24, 0, -3.95]}
          rotation={[0, Math.PI / 6, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.long008.geometry}
          material={materials["wall met"]}
          position={[24, 0, -18.3]}
          rotation={[0, -Math.PI / 6, 0]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={materials["glow 1"]}
        position={[-1, -0.01, -4.55]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials["wall met"]}
        position={[25.98, 3.06, -9.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["wall met"]}
        position={[9.15, 3.06, -10.62]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["wall met"]}
        position={[15.97, 2.94, -10.13]}
        scale={[18.7, 13.77, 13.77]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.animation}
        position={[10.62, 4.75, -10.33]}
        scale={7.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["animation.001"]}
        position={[24.82, 4.75, -9.73]}
        scale={7.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heel005.geometry}
        material={materials["wood low"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole010.geometry}
        material={materials["gold LOW"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole011.geometry}
        material={materials["Material.003"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole_logo005.geometry}
        material={materials["FLAG 1 .001"]}
        position={[6.23, 0.81, -3.98]}
        rotation={[-0.02, 1.05, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo012.geometry}
        material={materials["Material.045"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.midsole005.geometry}
        material={materials["wood low"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.quarter005.geometry}
        material={materials["crocodile sidde"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber005.geometry}
        material={materials["Material.004"]}
        position={[6.23, 0.81, -3.97]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch073.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch074.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch075.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch076.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch077.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch080.geometry}
        material={materials.THREAD}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <group
        position={[6.43, 0.78, -3.98]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus007.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus007_1.geometry}
          material={materials["gold.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vamp005.geometry}
        material={materials["crocodile.001"]}
        position={[6.39, 0.77, -3.9]}
        rotation={[-0.03, 1.1, -3.12]}
        scale={-0.16}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper.geometry}
        material={materials["Material.005"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue_strap.geometry}
        material={nodes.tongue_strap.material}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue_lining.geometry}
        material={materials.collar}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue.geometry}
        material={materials["white rubber"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch027.geometry}
        material={materials["stitch.002"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch026.geometry}
        material={materials["stitch.003"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch023.geometry}
        material={materials["stitch.002"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch022.geometry}
        material={materials["stitch.003"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch021.geometry}
        material={materials["stitch.003"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.quarter.geometry}
        material={materials["white rubber"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <group
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004.geometry}
          material={materials["white rubber"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh004_1.geometry}
          material={materials["outsole.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo.geometry}
        material={materials["logo.003"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lining.geometry}
        material={materials["white rubber"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lace.geometry}
        material={nodes.lace.material}
        position={[7.87, 1.61, -3.04]}
        rotation={[-2.12, 0.36, 0.24]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole.geometry}
        material={materials["white rubber"]}
        position={[7.87, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyelet_metal001.geometry}
        material={materials["eyelet metal"]}
        position={[7.81, 1.78, -3.09]}
        rotation={[-1.32, 0.67, 3.12]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyelet_metal.geometry}
        material={materials["eyelet metal"]}
        position={[7.86, 1.76, -2.98]}
        rotation={[-2.12, 0.36, 0.24]}
        scale={-0.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bumper.geometry}
        material={materials["white rubber pyramid low"]}
        position={[7.88, 1.61, -3.04]}
        rotation={[0, -1.47, -Math.PI]}
        scale={-0.12}
      />
      <group
        position={[8.71, 0.69, -2.86]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus004.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus004_1.geometry}
          material={materials["crocodile WHITE"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch101.geometry}
        material={materials["THREAD.001"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch100.geometry}
        material={materials["THREAD.001"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch099.geometry}
        material={materials["THREAD.001"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rubber003.geometry}
        material={materials.Material}
        position={[8.61, 0.71, -3]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.quarter003.geometry}
        material={materials["crocodile sidde WHITE"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <group
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020.geometry}
          material={materials["wood low.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_1.geometry}
          material={materials["crocodile WHITE"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_2.geometry}
          material={materials["THREAD.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_3.geometry}
          material={materials["wood low"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole007.geometry}
        material={materials["gold LOW"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole006.geometry}
        material={materials["wood low"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole_logo003.geometry}
        material={materials["FLAG 1 .002"]}
        position={[8.61, 0.71, -3]}
        rotation={[0.05, -0.52, -0.01]}
        scale={0.13}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heel003.geometry}
        material={materials["wood low"]}
        position={[8.74, 0.69, -2.93]}
        rotation={[3.07, -1.09, 3.12]}
        scale={0.13}
      />
      <group
        position={[9.38, 2.06, -3.22]}
        rotation={[-3.01, -1.26, 0.13]}
        scale={[-0.16, -0.14, -0.14]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007.geometry}
          material={materials["rubber black low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_1.geometry}
          material={materials["stitch.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh007_2.geometry}
          material={materials["rubber black low"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube213.geometry}
        material={materials["black.001"]}
        position={[9.35, 2.24, -3.23]}
        rotation={[-Math.PI, 0.31, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube212.geometry}
        material={materials["black.001"]}
        position={[9.35, 2.24, -3.23]}
        rotation={[-Math.PI, 0.31, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube211.geometry}
        material={materials["gold pyramid LOW"]}
        position={[9.35, 2.24, -3.23]}
        rotation={[-Math.PI, 0.31, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve041.geometry}
        material={materials["Material.050"]}
        position={[9.34, 2.3, -3.24]}
        rotation={[-1.49, -0.63, 1.26]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve040.geometry}
        material={materials["Material.050"]}
        position={[9.34, 2.3, -3.24]}
        rotation={[-1.79, -0.61, 1.19]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve039.geometry}
        material={materials["Material.050"]}
        position={[9.36, 2.28, -3.23]}
        rotation={[-1.58, -0.96, 1.27]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve038.geometry}
        material={materials["Material.050"]}
        position={[9.36, 2.28, -3.23]}
        rotation={[-2.01, -0.93, 1.04]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve037.geometry}
        material={materials["Material.050"]}
        position={[9.38, 2.26, -3.22]}
        rotation={[-1.56, -0.9, 1.27]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve036.geometry}
        material={materials["Material.050"]}
        position={[9.38, 2.26, -3.22]}
        rotation={[-1.96, -0.87, 1.08]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve035.geometry}
        material={materials["Material.050"]}
        position={[9.41, 2.24, -3.21]}
        rotation={[-1.6, -1.03, 1.27]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve034.geometry}
        material={materials["Material.050"]}
        position={[9.41, 2.24, -3.21]}
        rotation={[-2.07, -0.99, 0.99]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve033.geometry}
        material={materials["Material.050"]}
        position={[9.44, 2.22, -3.2]}
        rotation={[-1.67, -1.17, 1.25]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve032.geometry}
        material={materials["Material.050"]}
        position={[9.44, 2.22, -3.2]}
        rotation={[-2.16, -1.06, 0.91]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve031.geometry}
        material={materials["Material.050"]}
        position={[9.46, 2.21, -3.2]}
        rotation={[-1.67, -1.17, 1.25]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve030.geometry}
        material={materials["Material.050"]}
        position={[9.46, 2.21, -3.2]}
        rotation={[-2.16, -1.06, 0.91]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve029.geometry}
        material={materials["Material.050"]}
        position={[9.31, 2.35, -3.24]}
        rotation={[-1.45, -0.48, 1.24]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve028.geometry}
        material={materials["Material.050"]}
        position={[9.31, 2.35, -3.24]}
        rotation={[-1.7, -0.4, 1.24]}
        scale={[-0.03, -0.02, -0.14]}
      />
      <group
        position={[14.6, 1.51, -0.05]}
        rotation={[-0.07, -1.25, 3.1]}
        scale={[-0.13, -0.12, -0.12]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_1.geometry}
          material={materials["stitch.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh001_2.geometry}
          material={materials["mix pyramid low.jpg"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube208.geometry}
        material={materials["CROCODILE LOW"]}
        position={[14.57, 1.66, -0.05]}
        rotation={[3.12, -0.32, -0.03]}
        scale={-0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube207.geometry}
        material={materials["gold LOW"]}
        position={[14.57, 1.66, -0.05]}
        rotation={[3.12, -0.32, -0.03]}
        scale={-0.11}
      />
      <group
        position={[14.57, 1.66, -0.05]}
        rotation={[3.12, -0.32, -0.03]}
        scale={-0.11}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube223.geometry}
          material={materials["Material.046"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube223_1.geometry}
          material={nodes.Cube223_1.material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BODY.geometry}
        material={materials["Material.047"]}
        position={[14.57, 1.66, -0.05]}
        rotation={[3.12, -0.32, -0.03]}
        scale={-0.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve013.geometry}
        material={materials["lace "]}
        position={[14.56, 1.71, -0.05]}
        rotation={[-1.12, -0.47, 1.98]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve012.geometry}
        material={materials["lace "]}
        position={[14.56, 1.71, -0.05]}
        rotation={[-1.35, -0.63, 1.97]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve011.geometry}
        material={materials["lace "]}
        position={[14.58, 1.69, -0.05]}
        rotation={[-0.88, -0.75, 2.2]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve010.geometry}
        material={materials["lace "]}
        position={[14.58, 1.69, -0.05]}
        rotation={[-1.12, -0.94, 2.14]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve009.geometry}
        material={materials["lace "]}
        position={[14.6, 1.67, -0.06]}
        rotation={[-0.93, -0.7, 2.15]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve008.geometry}
        material={materials["lace "]}
        position={[14.6, 1.67, -0.06]}
        rotation={[-1.18, -0.89, 2.09]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve007.geometry}
        material={materials["lace "]}
        position={[14.62, 1.66, -0.07]}
        rotation={[-0.81, -0.8, 2.27]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve006.geometry}
        material={materials["lace "]}
        position={[14.62, 1.66, -0.07]}
        rotation={[-1.05, -1, 2.2]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve005.geometry}
        material={materials["lace "]}
        position={[14.64, 1.65, -0.07]}
        rotation={[-0.64, -0.89, 2.43]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve004.geometry}
        material={materials["lace "]}
        position={[14.64, 1.65, -0.07]}
        rotation={[-0.95, -1.07, 2.28]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        material={materials["lace "]}
        position={[14.67, 1.63, -0.08]}
        rotation={[-0.64, -0.89, 2.43]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002.geometry}
        material={materials["lace "]}
        position={[14.67, 1.63, -0.08]}
        rotation={[-0.95, -1.07, 2.28]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials["lace "]}
        position={[14.54, 1.75, -0.04]}
        rotation={[-1.2, -0.34, 1.91]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials["lace "]}
        position={[14.54, 1.75, -0.04]}
        rotation={[-1.45, -0.42, 1.92]}
        scale={[-0.03, -0.02, -0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper029.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper028.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper027.geometry}
        material={materials["collar.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper026.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper025.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper024.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper023.geometry}
        material={materials["leather.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper022.geometry}
        material={materials["leather.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper021.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper020.geometry}
        material={materials["collar.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper019.geometry}
        material={materials["collar.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper018.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper016.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper015.geometry}
        material={materials["Material.051"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper014.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper013.geometry}
        material={materials["collar.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper005.geometry}
        material={materials["leather low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch135.geometry}
        material={materials["stitch.006"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch131.geometry}
        material={materials["stitch.007"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch130.geometry}
        material={materials["stitch.007"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch125.geometry}
        material={materials["stitch.006"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch.geometry}
        material={materials["stitch.007"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outsole011.geometry}
        material={materials["outsole.005"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.insole015.geometry}
        material={materials["insole.001"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bumper006.geometry}
        material={materials["black pyramid low"]}
        position={[12.23, 1.05, -1.04]}
        rotation={[Math.PI, -0.21, 0]}
        scale={-0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_coll006.geometry}
        material={materials["heel inner low"]}
        position={[25.59, 0.93, -17.3]}
        rotation={[-1.53, 0.05, 2.5]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_cloth003.geometry}
        material={materials["Material.039"]}
        position={[25.66, 0.99, -17.25]}
        rotation={[-3.13, 0.52, 2.53]}
        scale={[0.02, 0.02, 0.01]}
      />
      <group
        position={[25.6, 0.94, -17.3]}
        rotation={[-1.53, 0.05, 2.5]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0003.geometry}
          material={materials["Glitter material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0003_1.geometry}
          material={materials["Leather 02.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0003_2.geometry}
          material={materials["Material.040"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0003_3.geometry}
          material={materials["heel inner low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0003_4.geometry}
          material={materials["Material.041"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4001.geometry}
        material={materials["gletter low.001"]}
        position={[25.6, 0.94, -17.3]}
        rotation={[-1.53, 0.05, 2.5]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_coll001.geometry}
        material={materials["black 1"]}
        position={[24.89, 0.88, -17.06]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_cloth001.geometry}
        material={materials.flag}
        position={[25.07, 0.89, -17.3]}
        rotation={[3.14, 0.45, 2.52]}
        scale={[0.02, 0.02, 0.01]}
      />
      <group
        position={[24.89, 0.88, -17.06]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0007.geometry}
          material={materials["black 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0007_1.geometry}
          material={materials["Material.042"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4003.geometry}
        material={materials["Burlington Leather.002"]}
        position={[24.93, 0.81, -17.39]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_coll002.geometry}
        material={materials["black 1"]}
        position={[25.88, 0.88, -16.48]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.simply_cloth002.geometry}
        material={materials.flag}
        position={[26.06, 0.89, -16.72]}
        rotation={[3.14, 0.45, 2.52]}
        scale={[0.02, 0.02, 0.01]}
      />
      <group
        position={[25.88, 0.88, -16.48]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0010.geometry}
          material={materials["CROCODILE LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0010_1.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0010_2.geometry}
          material={materials["black 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0010_3.geometry}
          material={materials["wood low"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4005.geometry}
        material={materials["black 1"]}
        position={[25.92, 0.81, -16.81]}
        rotation={[-1.55, 0.04, 2.58]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heelcap001.geometry}
        material={materials["CROCODILE WHITE LOW "]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heelcap.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.collar.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyestay002.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyestay001.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vamp001.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vamp.geometry}
        material={materials["CROCODILE WHITE LOW "]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vamp002.geometry}
        material={materials["gold pyramid 2 LOW"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.quarter001.geometry}
        material={materials["gold pyramid 2 LOW"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyestay.geometry}
        material={materials["CROCODILE WHITE LOW "]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={materials["white sole low"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tongue001.geometry}
        material={materials["Material.043"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lining001.geometry}
        material={nodes.lining001.material}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo002.geometry}
        material={materials.logo}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lace001.geometry}
        material={materials["Material.055"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.collar001.geometry}
        material={materials["Material.001"]}
        position={[6.28, 2.06, -3.73]}
        rotation={[0, 0.57, 0]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Elastic Rubber"]}
        position={[8.92, 1.51, -2.91]}
        rotation={[-2.07, -1.12, -0.58]}
        scale={[-2.03, -0.48, -2.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6006.geometry}
        material={materials["Elastic Rubber"]}
        position={[8.7, 1.53, -2.91]}
        rotation={[1.65, -0.18, -1.05]}
        scale={-2.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4025.geometry}
        material={materials["Elastic Rubber"]}
        position={[8.92, 1.4, -2.83]}
        rotation={[Math.PI, -1.2, 0]}
        scale={-2.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4024.geometry}
        material={materials["Material.048"]}
        position={[8.98, 1.51, -2.8]}
        rotation={[-0.06, 0.93, 1.35]}
        scale={-2.03}
      />
      <group
        position={[8.92, 1.4, -2.83]}
        rotation={[Math.PI, -1.2, 0]}
        scale={-2.03}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0024.geometry}
          material={materials["low fabric"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_0024_1.geometry}
          material={materials["stitch black.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4021.geometry}
        material={materials["Elastic Rubber"]}
        position={[9.08, 1.49, -2.75]}
        rotation={[Math.PI, -1.2, 0]}
        scale={-2.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12005.geometry}
        material={materials["Material.054"]}
        position={[8.9, 1.59, -2.88]}
        rotation={[-1.49, -0.69, 2.51]}
        scale={-2.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4023.geometry}
        material={materials["Elastic Rubber.001"]}
        position={[8.92, 1.4, -2.83]}
        rotation={[Math.PI, -1.2, 0]}
        scale={-2.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom001.geometry}
        material={materials["Material.052"]}
        position={[8.92, 1.42, -2.82]}
        rotation={[Math.PI, -1.1, 0]}
        scale={-0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom003.geometry}
        material={materials["white sole low"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom004.geometry}
        material={materials["white sole low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom005.geometry}
        material={materials["white sole low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toecap.geometry}
        material={materials["leather low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toecap001.geometry}
        material={materials["gold LOW"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.overlay001.geometry}
        material={materials["leather low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heelcap002.geometry}
        material={materials["leather low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.overlay.geometry}
        material={materials["leather low"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo004.geometry}
        material={materials.logo}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyestay003.geometry}
        material={materials["gold LOW"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heel_strap.geometry}
        material={materials["low fabric"]}
        position={[13.93, 0.78, -0.04]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lace002.geometry}
        material={materials["low fabric"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch005.geometry}
        material={materials["stitch.010"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch006.geometry}
        material={materials["white sole low"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch007.geometry}
        material={materials["stitch.009"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch008.geometry}
        material={materials["gold LOW"]}
        position={[14.11, 0.77, -0.1]}
        rotation={[0, -1.28, -Math.PI]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom006.geometry}
        material={materials["Material.014"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom007.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom008.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.eyestay004.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heel_strap001.geometry}
        material={materials["grey low"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.heelcap003.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lace003.geometry}
        material={materials["stitch black.002"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.lining003.geometry}
        material={nodes.lining003.material}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo005.geometry}
        material={materials["logo.002"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.overlay002.geometry}
        material={nodes.overlay002.material}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.overlay003.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch001.geometry}
        material={materials["stitch.010"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch002.geometry}
        material={materials["stitch.009"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch003.geometry}
        material={materials["stitch.009"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch004.geometry}
        material={materials["stitch.010"]}
        position={[9.96, 1.32, -2.11]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toecap002.geometry}
        material={materials["Material.014"]}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toecap003.geometry}
        material={nodes.toecap003.material}
        position={[9.77, 1.34, -2.17]}
        rotation={[Math.PI, -1.25, 0]}
        scale={-0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vamp003.geometry}
        material={materials["white base low"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper006.geometry}
        material={materials["Leather Base low"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper002.geometry}
        material={materials["red leather.002"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.upper001.geometry}
        material={materials["red leather.002"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.toecap004.geometry}
        material={materials["Leather Base low"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch036.geometry}
        material={materials["stitch.011"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch017.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch016.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch015.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch014.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch013.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch012.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch011.geometry}
        material={materials["stitch white.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch010.geometry}
        material={materials["stitch white.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch009.geometry}
        material={materials["stitch black.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch018.geometry}
        material={materials["stitch black.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch019.geometry}
        material={materials["stitch black.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch020.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch024.geometry}
        material={materials["stitch red.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch025.geometry}
        material={materials["stitch black.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stitch028.geometry}
        material={materials["stitch black.001"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <group
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StitchMatShape_11101017042.geometry}
          material={materials["stitch red.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StitchMatShape_11101017042_1.geometry}
          material={materials["stitch black.001"]}
        />
      </group>
      <group
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StitchMatShape_11101017044.geometry}
          material={materials["stitch red.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.StitchMatShape_11101017044_1.geometry}
          material={materials["stitch black.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials["red leather.002"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.044"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outsole002.geometry}
        material={materials["rubber black low"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo007.geometry}
        material={materials["white base low"]}
        position={[56.23, -0.75, -10.59]}
        rotation={[-1.3, 0.47, -3.13]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo006.geometry}
        material={materials["logo.004"]}
        position={[56.23, -0.75, -10.59]}
        rotation={[-1.3, 0.47, -3.13]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bumper002.geometry}
        material={materials["black pyramid low"]}
        position={[56.57, -0.71, -10.69]}
        rotation={[-Math.PI / 2, 0.7, Math.PI / 2]}
        scale={0.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bubble_panel_2_white_metall_0001.geometry}
        material={materials["white_metall.001"]}
        position={[15.9, 1.22, -21.88]}
        rotation={[0, -1.49, 0]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bubble_panel_2_Silver_0002.geometry}
        material={materials["Silver.001"]}
        position={[15.9, -0.24, -21.88]}
        rotation={[0, -1.49, 0]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bubble_panel_2_LAMP2_0001.geometry}
        material={materials["LAMP2.001"]}
        position={[16.07, -0.24, -21.92]}
        rotation={[0, -1.55, 0]}
        scale={0.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bubble_panel_2_GLASS2_0001.geometry}
        material={materials["GLASS2.001"]}
        position={[15.9, -0.24, -21.88]}
        rotation={[0, -1.49, 0]}
        scale={0.02}
      />
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[1.05, 0.93, -13.58]}
          rotation={[Math.PI / 2, 0, 2.78]}
          scale={1.41}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_1.geometry}
            material={materials["gold LOW"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_2.geometry}
            material={materials["Marble Finish"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane019_3.geometry}
            material={materials["Black murble low"]}
          />
        </group>
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seat.geometry}
          material={materials["rubber black low"]}
          position={[20.09, -0.06, -18.9]}
          rotation={[0, -0.51, 0]}
          scale={1.9}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[18.93, -0.06, -16.69]}
          rotation={[0, -0.51, 0]}
          scale={[0.91, 0.31, 0.75]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015.geometry}
            material={materials["white mat"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials["black mat"]}
          />
        </group>
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Undertable_Slab.geometry}
        material={materials["Alu. Powder Coat"]}
        position={[61.49, -1.26, -19.48]}
        rotation={[0, 0, -Math.PI]}
        scale={0.77}
      />

      <group
        position={[61.48, -1.75, -19.48]}
        rotation={[0, 0, -Math.PI]}
        scale={0.77}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047_1.geometry}
          material={materials["ground 1.003"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane047_2.geometry}
            material={materials["Black murble low"]}
          />
        </RigidBody>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane047_3.geometry}
          material={materials["rubber black low"]}
        />
      </group>
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[0.39, -0.06, -15.19]}
          rotation={[0, 0.37, 0]}
          scale={1.29}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials.Fabric}
            rotation={[-0.17, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials.Fabric}
            rotation={[-1.66, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials["Material.010"]}
            rotation={[-0.17, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.009"]}
          />
        </group>
      </RigidBody>
      <group
        position={[18.33, -0.07, -20.86]}
        rotation={[-Math.PI, 0.52, -Math.PI]}
        scale={1.17}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials["Metal Facade Aged"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials["Material.012"]}
        />
      </group>
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[28.57, -0.06, -14.75]}
          rotation={[-Math.PI, 0.48, -Math.PI]}
          scale={1.53}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009.geometry}
            material={materials["ground 1.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials["gold LOW"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane009_2.geometry}
            material={materials["GLOW LOW"]}
          />
        </group>
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle_Row_2.geometry}
        material={materials["gold LOW"]}
        position={[54.7, -1.51, -2.13]}
        scale={[1.56, 1.67, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handle_Row_1.geometry}
        material={materials["gold LOW"]}
        position={[54.7, -1.15, -2.13]}
        scale={[1.56, 1.67, 1.14]}
      />
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2002.geometry}
          material={materials["ground 1.001"]}
          position={[17.67, 1.44, -7.04]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.08, 0.08, 0.06]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials["ground 1.001"]}
          position={[17.69, 1.44, -14.71]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.08, 0.08, 0.06]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo003.geometry}
        material={materials["gold LOW"]}
        position={[-0.01, 2.07, -15.81]}
        rotation={[Math.PI / 2, 0, -0.37]}
        scale={3.17}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.logo001.geometry}
        material={materials["gold LOW"]}
        position={[1.6, 0.54, -13]}
        rotation={[Math.PI / 2, 0, -0.36]}
        scale={[4.27, 2.5, 4.27]}
      />
      <group
        position={[0.16, 2.79, -14.49]}
        rotation={[0, 0.32, Math.PI]}
        scale={1.14}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube193.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube193_1.geometry}
          material={materials.Wire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube193_2.geometry}
          material={materials.Spotlights}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube193_3.geometry}
          material={materials.Light}
        />
      </group>
      <group position={[20.73, 2.94, -2.48]} rotation={[-Math.PI, -0.12, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Base.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_1.geometry}
          material={materials["Wire.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_2.geometry}
          material={materials["Spotlights.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_3.geometry}
          material={materials["Light.001"]}
        />
      </group>
      <group position={[12.42, 2.94, -3.3]} rotation={[Math.PI, 0.46, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Base.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Wire.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials["Spotlights.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials["Light.002"]}
        />
      </group>
      <group
        position={[1.68, 2.82, -12.04]}
        rotation={[0, 0, Math.PI]}
        scale={1.91}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014.geometry}
          material={materials.Rohdium}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014_1.geometry}
          material={materials["Material.016"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014_3.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014_4.geometry}
          material={materials["Light.003"]}
        />
      </group>
      <group
        position={[30.37, 1.51, -14.05]}
        rotation={[Math.PI / 2, 0, -2.64]}
        scale={1.39}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_1.geometry}
          material={materials["Light.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={materials["Lighitng-Strings.001"]}
        position={[17.91, 2.94, -10.66]}
        rotation={[0, 0, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["wood low"]}
        position={[17.91, 2.94, -10.66]}
        rotation={[0, 0, Math.PI]}
        scale={0.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["LED-Lighitng.001"]}
        position={[17.91, 2.94, -10.66]}
        rotation={[0, 0, Math.PI]}
        scale={0.37}
      />
      <group position={[25.05, 2.94, -16.62]} rotation={[0, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015_2.geometry}
          material={materials["light 50"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["body material"]}
        position={[16.47, 2.35, -3.08]}
        rotation={[-3.07, 0, 3.08]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle043.geometry}
        material={materials["screw material"]}
        position={[16.49, 2.9, -3.14]}
        rotation={[-3.07, 0, 3.08]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle042.geometry}
        material={nodes.Circle042.material}
        position={[16.39, 2.03, -2.76]}
        rotation={[2.77, 0.7, -2.7]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle041.geometry}
        material={nodes.Circle041.material}
        position={[16.6, 2.05, -3.43]}
        rotation={[0.51, -0.86, 0.49]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle040.geometry}
        material={nodes.Circle040.material}
        position={[16.94, 2.01, -2.87]}
        rotation={[2.8, -1.2, 2.73]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle039.geometry}
        material={materials["body material"]}
        position={[16.43, 2.89, -3.04]}
        rotation={[-3.07, 0, 3.08]}
        scale={1.12}
      />
      <group
        position={[16.49, 1.97, -3.1]}
        rotation={[-3.07, 0, 3.08]}
        scale={1.12}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle026.geometry}
          material={materials["body material"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle026_1.geometry}
          material={materials["light material"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle036.geometry}
        material={nodes.Circle036.material}
        position={[16.06, 1.96, -3.41]}
        rotation={[0.02, 0.93, 0.08]}
        scale={1.12}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt010.geometry}
        material={materials["screw material"]}
        position={[16.39, 2.03, -2.76]}
        rotation={[1.5, -0.33, -2.39]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt009.geometry}
        material={materials["screw material"]}
        position={[16.6, 2.05, -3.43]}
        rotation={[1.7, 0.31, 0.92]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt005.geometry}
        material={materials["screw material"]}
        position={[16.94, 2.01, -2.87]}
        rotation={[1.62, 0.15, 1.92]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt004.geometry}
        material={materials["screw material"]}
        position={[16.06, 1.96, -3.41]}
        rotation={[1.65, 0.05, -0.93]}
        scale={1.12}
      />
      <group
        position={[19.3, 2.94, -16.92]}
        rotation={[0, 0, Math.PI]}
        scale={[0.42, 0.67, 0.42]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.superloop200_ropes_1.geometry}
          material={materials.loop_gold}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.superloop200_ropes_2.geometry}
          material={materials.loop_emissive}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.superloop200_ropes_3.geometry}
          material={materials.loop_chrome_brushed}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.superloop200_ropes_4.geometry}
          material={materials.loop_plastic_black_shiny}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.superloop200_ropes_5.geometry}
          material={materials.loop_plastic_white_matte}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier_wire.geometry}
        material={materials.black_plastic}
        position={[56.38, 1.11, -10.67]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.24}
      />
      <group
        position={[56.38, 2.67, -10.67]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle139.geometry}
          material={materials.silver}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle139_1.geometry}
          material={materials["Glass clean"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle139_2.geometry}
          material={materials["Glass clean"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.chandelier_cover.geometry}
        material={materials.black_plastic}
        position={[56.38, 1.11, -10.67]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.24}
      />
      <group
        position={[0.99, 1.43, -13.59]}
        rotation={[1.78, -0.07, 2.8]}
        scale={1.26}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.BlackPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials.Screen}
        />
      </group>
      <group
        position={[23.36, -0.06, -17.71]}
        rotation={[Math.PI, -0.97, Math.PI]}
        scale={1.24}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube212_1.geometry}
          material={materials.stand_Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube212_2.geometry}
          material={materials["wood low.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials["gold LOW"]}
        position={[23.42, 1.56, -17.49]}
        rotation={[Math.PI, -0.33, Math.PI]}
        scale={1.86}
      />
      <group
        position={[23.31, 0.94, -17.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.25}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={materials.Vaso}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010_1.geometry}
          material={materials.Folhas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010_2.geometry}
          material={materials.Terra}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cactus.geometry}
        material={materials.clay}
        position={[23.17, 0.44, -17.69]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.9}
      />
      <group
        position={[23.4, 1.55, -17.49]}
        rotation={[Math.PI / 2, 0, 2.81]}
        scale={0.02}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["02_1"].geometry}
          material={materials["bark_Mat.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["02_2"].geometry}
          material={materials.wheat_Mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["02_3"].geometry}
          material={materials.leave_1_Mat}
        />
      </group>
      <group
        position={[2.81, 1.18, -14.32]}
        rotation={[-Math.PI, 1.17, -Math.PI]}
        scale={0.16}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube192.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube192_1.geometry}
          material={materials.Bonsai_Leaves}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube192_2.geometry}
          material={materials["Material.022"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube192_3.geometry}
          material={materials["wood low.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VASE_2.geometry}
        material={materials["Material.025"]}
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      />
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder118_1.geometry}
          material={materials["Material.026"]}
        />
      </group>
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials["ground 1.003"]}
        />
      </group>
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017_1.geometry}
          material={materials["ground 1.003"]}
        />
      </group>
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024_1.geometry}
          material={materials["ground 1.003"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SCULPTURE001.geometry}
        material={materials["Material.023"]}
        position={[31.94, -0.06, -12.67]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PLANT_2.geometry}
        material={materials["waterLily  low"]}
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PLANT.geometry}
        material={materials["waterLily  low"]}
        position={[32.82, 1.89, -12.43]}
        rotation={[Math.PI, -0.12, Math.PI]}
        scale={1.27}
      />
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube218.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube218_1.geometry}
          material={materials["waterLily  low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube218_2.geometry}
          material={materials["Material.031"]}
        />
      </group>
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials["Material.032"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009_1.geometry}
          material={materials["Material.033"]}
        />
      </group>
      <group
        position={[32.03, -0.06, -12.82]}
        rotation={[-Math.PI, 0.44, -Math.PI]}
        scale={1.27}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube219.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube219_1.geometry}
          material={materials["Material.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube219_2.geometry}
          material={materials["Material.031"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pot001.geometry}
        material={materials["ground 1.001"]}
        position={[27.08, -0.06, -15.61]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.plant001.geometry}
        material={materials["Material.035"]}
        position={[27.08, -0.06, -15.61]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground001.geometry}
        material={materials["wood low"]}
        position={[27.08, -0.06, -15.61]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text001.geometry}
        material={materials["gold.003"]}
        position={[-0.11, -0.02, -0.71]}
        scale={0.68}
      />
      <RigidBody type="fixed" colliders="hull">
        <group
          position={[9.41, -0.03, -9.53]}
          rotation={[-Math.PI, 0.09, -Math.PI]}
          scale={0.05}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MASH2_ReproMesh2_logo_0001_1.geometry}
            material={materials["logo.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MASH2_ReproMesh2_logo_0001_2.geometry}
            material={materials["GLOW ALPHA"]}
          />
        </group>
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.side001.geometry}
        material={materials["MATE L DOOR"]}
        position={[-6.57, 0.14, -0.73]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.01, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mount001.geometry}
        material={materials["MATE L DOOR"]}
        position={[0.47, 0.44, 1.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.01, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mount.geometry}
        material={materials["MATE L DOOR"]}
        position={[1.62, 0.44, 1.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.01, -0.01]}
      />
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.glass.geometry}
          material={materials["Glass clean"]}
          position={[1.05, 1.32, 1.96]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-0.03, -0.01, -0.0135]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom002.geometry}
        material={materials.metal_shower}
        position={[-0.05, -0.06, 1.96]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[-0.03, -0.01, -0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder055.geometry}
        material={materials["GLOW LOW"]}
        position={[56.4, -1.76, -10.67]}
        scale={[2.91, 0.02, 2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder054.geometry}
        material={materials["WHITE GLOW"]}
        position={[56.4, -1.76, -10.67]}
        scale={[1.8, 0.02, 1.8]}
      />
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder047.geometry}
          material={materials["GLOW LOW"]}
          position={[56.43, -1.48, -10.69]}
          scale={[1.41, 0.29, 1.41]}
        />
      </RigidBody>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube190.geometry}
        material={materials["WHITE BLUE"]}
        position={[56.85, 1.23, -10.8]}
        scale={[1, 1, 0.52]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube188.geometry}
        material={materials["WHITE GLOW"]}
        position={[56.85, 1.3, -10.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube187.geometry}
        material={materials["WHITE BLUE"]}
        position={[56.85, 1.23, -9.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube186.geometry}
        material={materials["WHITE BLUE"]}
        position={[57.85, 1.23, -10.8]}
      />
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Black murble low"]}
          position={[56.85, 1.23, -10.8]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials["Material.056"]}
          position={[41.08, 0.59, -10.97]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[1.25, 7.43, 1.25]}
        />
      </RigidBody>
      <group
        position={[63.42, -1.3, -4.19]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014.geometry}
          material={materials["Material #3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials["Lights - couch.001"]}
        />
      </group>
      <group
        position={[50.17, -1.3, -17.43]}
        rotation={[0, -0.04, 0]}
        scale={0}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014.geometry}
          material={materials["Material #3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh014_1.geometry}
          material={materials["Lights - couch.001"]}
        />
      </group>
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chesterfield_couch.geometry}
          material={materials["rubber browen low"]}
          position={[64.52, -1.73, -18.64]}
          rotation={[0, -Math.PI / 4, 0]}
          scale={0.44}
        />
      </RigidBody>
      <group
        position={[56.43, -1.77, -10.68]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
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
      <RigidBody type="fixed" colliders="hull">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FireplaceHole001.geometry}
          material={materials["ground 1.002"]}
          position={[65.61, -0.97, -10.76]}
          rotation={[0, -1.57, 0]}
          scale={0.62}
        />
      </RigidBody>
      <group
        position={[64.29, -1.51, -11.99]}
        rotation={[-1.26, 0.13, 0.42]}
        scale={1.08}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3.geometry}
          material={materials["wood low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_1.geometry}
          material={materials["Material.027"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_2.geometry}
          material={materials["wood low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_3.geometry}
          material={materials["wood low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_4.geometry}
          material={materials["wood low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_5.geometry}
          material={materials["wood low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_6.geometry}
          material={materials["gold LOW"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_7.geometry}
          material={materials["Glass clean"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.scheit3_8.geometry}
          material={materials["mantel_clock_01.001"]}
        />
        <RigidBody type="fixed" colliders="hull">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.scheit3_9.geometry}
            material={materials["ground 1.003"]}
          />
        </RigidBody>
      </group>
      <group position={[56.85, 1.23, -10.8]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube199.geometry}
          material={materials["Black murble low"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube199_1.geometry}
          material={materials["Material.053"]}
        />
      </group>
      {/* <RigidBody type="fixed" colliders="trimesh"> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube206.geometry}
        material={materials["wall met.001"]}
        position={[0, 3.53, -1.76]}
        scale={3.61}
      />
      {/* </RigidBody> */}
      <group
        position={[2.48, 0, 3.48]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.08}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_1.geometry}
          material={materials["Loewe_O_Material_u1_v1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_2.geometry}
          material={materials["bottom.001"]}
        />
      </group>
      <group
        position={[-2.62, 0, 3.48]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={-0.08}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_1.geometry}
          material={materials["Loewe_O_Material_u1_v1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001_2.geometry}
          material={materials["bottom.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/building.glb");
