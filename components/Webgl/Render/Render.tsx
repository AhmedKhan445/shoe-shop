import { Canvas } from "@react-three/fiber";
import s from "./render.module.scss";
import {
  AdaptiveDpr,
  Environment,
  Html,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { store } from "@/store";
import { useSnapshot } from "valtio";
import ProductDetail from "@/components/Html/ProductDetail/ProductDetail";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import SubscriptionPopup from "@/components/Html/SubscriptionPopup/SubscriptionPopup";
import SignIn from "@/components/Html/SignIn/SignIn";
import TrackingPopup from "@/components/Html/TrackingPopup/TrackingPopup";
import { Sandals } from "../Model/Sandals";
import Loader from "@/components/Html/Loader/Loader";
import Avatar from "@/components/Html/Avatar/Avatar";
import OrderList from "@/components/Html/OrderList/OrderList";
import TrackingOrder from "@/components/Html/TrackingOrder/TrackingOrder";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Settings from "@/components/Html/Settings/Settings";
import PhoneVerification from "@/components/Html/PhoneVerification/PhoneVerification";
import VerificationCode from "@/components/Html/VerificationCode/VerificationCode";
import { Building } from "../Model/Building";
import ControlGuide from "@/components/Html/ControlGuide/ControlGuide";
import { Viproom } from "../Model/Viproom";
import { Vipshoe } from "../Model/Vipshoe";
import { Shoes } from "../Model/Shoes";
import { Debug, Physics } from "@react-three/cannon";
import BaseCharacter from "../Physics/BaseCharacter";
import Skeleton from "../Physics/Skeleton";
import { Mesh } from "three";
import MobileControls from "@/components/Html/MobileControls/MobileControls";
import { Door } from "../Physics/Door";
import InvisibleWall from "../Model/InvisibleWall";

const Render = () => {
  //STATES
  const { isShowSignIn } = useSnapshot(store);
  const [isOrderHistoryShow, setIsOrderHistoryShow] = useState<boolean>(false);
  const [isOrderTrackShow, setIsOrderTrackShow] = useState<boolean>(false);
  const [isSettingShow, setIsSettingShow] = useState<boolean>(false);
  const [isPhoneVerify, setIsPhoneVerify] = useState<boolean>(false);
  const [isCodeVerify, setIsCodeVerify] = useState<boolean>(false);
  const [selectedShoe, setSelectedShoe] = useState<Mesh>();

  //LOGIN SESSTION DETAIL
  const [user] = useAuthState(auth);

  //CHECK USER SIGN IN OR SIGN OUT
  const conditionalLogin = () => {
    if (user === null) {
      if (isShowSignIn) {
        return <SignIn setIsCodeVerify={setIsCodeVerify} />;
      }
    }
  };

  return (
    <main id="render" className={s.main}>
      <div className={s.pointer} />
      {/* POPUPS */}
      {conditionalLogin()}
      <VerificationCode
        isCodeVerify={isCodeVerify}
        setIsCodeVerify={setIsCodeVerify}
      />
      <PhoneVerification
        isPhoneVerify={isPhoneVerify}
        setIsPhoneVerify={setIsPhoneVerify}
        setIsCodeVerify={setIsCodeVerify}
      />
      <Settings
        isSettingShow={isSettingShow}
        setIsSettingShow={setIsSettingShow}
        setIsPhoneVerify={setIsPhoneVerify}
      />
      <OrderList
        isOrderHistoryShow={isOrderHistoryShow}
        setIsOrderHistoryShow={setIsOrderHistoryShow}
        setIsOrderTrackShow={setIsOrderTrackShow}
      />
      <TrackingOrder
        isOrderTrackShow={isOrderTrackShow}
        setIsOrderTrackShow={setIsOrderTrackShow}
      />

      {/* HEADER */}
      <Avatar
        setIsSettingShow={setIsSettingShow}
        setIsOrderHistoryShow={setIsOrderHistoryShow}
      />

      <ProductDetail />

      <SubscriptionPopup />

      {/* <TrackingPopup /> */}

      {/* MOBILE CONTROLS */}
      <MobileControls />

      {/* <h1
        style={{
          fontSize: 62,
          textAlign: "center",
          color: "white",
          width: "100%",
        }}
      >
        3D WORLD
      </h1> */}
    </main>
  );
};

export default Render;
