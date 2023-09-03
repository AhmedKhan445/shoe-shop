import { proxy } from "valtio";
import * as THREE from "three";
import type { AuthError } from "firebase/auth";

type shoeDetailType = {
  heading: string;
  subheading: string;
  detail: string[];
  price: number;
  stripePrice: string;
};

type animatedCameraConfigType = {
  x: number;
  y: number;
  z: number;
};

type storeType = {
  verificationId: string | undefined;
  signInMultiFactorAuthError: AuthError | undefined;
  touchTurnLeft: () => void;
  touchTurnRight: () => void;
  touchForwardDown: () => void;
  touchForwardUp: () => void;
  shoeRotateRight: () => void;
  shoeRotateLeft: () => void;
  shoeDetailPopupIsActive: boolean;
  shoeDetail: shoeDetailType;
  isShowSignIn: boolean;
  animatedCameraConfig: animatedCameraConfigType;
  animatedSecondCameraConfig: animatedCameraConfigType;
  shoeRotatingMesh: THREE.Object3D<THREE.Event> | null;
  shoeCameraDefault: boolean;
  ladyshoeCameraDefault: boolean;
};

export const store = proxy<storeType>({
  verificationId: undefined,
  signInMultiFactorAuthError: undefined,
  touchTurnLeft: () => console.log("working"),
  touchTurnRight: () => console.log("working"),
  touchForwardDown: () => console.log("working"),
  touchForwardUp: () => console.log("working"),
  shoeRotateRight: () => console.log("working"),
  shoeRotateLeft: () => console.log("working"),
  shoeDetailPopupIsActive: false,
  shoeDetail: {
    heading: "",
    subheading: "",
    detail: [""],
    price: 0,
    stripePrice: "",
  },
  isShowSignIn: false,
  animatedCameraConfig: { x: 18, y: 2.5, z: -14.4 },
  animatedSecondCameraConfig: { x: 42, y: 2.5, z: -25.3 },
  shoeRotatingMesh: null,
  shoeCameraDefault: false,
  ladyshoeCameraDefault: false,
});
