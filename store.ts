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
  rotateY: number;
};

type storeType = {
  verificationId: string | undefined;
  signInMultiFactorAuthError: AuthError | undefined;
  shoeRotateRight: () => void;
  shoeRotateLeft: () => void;
  shoeDetailPopupIsActive: boolean;
  shoeDetail: shoeDetailType;
  isShowSignIn: boolean;
  animatedCameraConfig: animatedCameraConfigType;
  animatedSecondCameraConfig: animatedCameraConfigType;
  shoeCameraDefault: boolean;
  ladyshoeCameraDefault: boolean;
  pointerLockCameraDefault: boolean;
  mobileForward: boolean;
  mobileBackward: boolean;
  mobileRight: boolean;
  mobileLeft: boolean;
  mobileTurnLeft: boolean;
  mobileTurnRight: boolean;
};

export const store = proxy<storeType>({
  verificationId: undefined,
  signInMultiFactorAuthError: undefined,
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
  animatedCameraConfig: { x: 18, y: 2.5, z: -14.4, rotateY: 2.84 },
  animatedSecondCameraConfig: { x: 21.5, y: 1.6, z: -12, rotateY: 5.68 },
  shoeCameraDefault: false,
  ladyshoeCameraDefault: false,
  pointerLockCameraDefault: true,
  mobileForward: false,
  mobileBackward: false,
  mobileLeft: false,
  mobileRight: false,
  mobileTurnLeft: false,
  mobileTurnRight: false,
});
