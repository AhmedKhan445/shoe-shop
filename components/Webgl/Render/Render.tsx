import { Canvas } from "@react-three/fiber";
import s from "./render.module.scss";
import {
  AdaptiveDpr,
  Environment,
  Html,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Debug, Physics } from "@react-three/rapier";
import Player from "../Player/Player";
import { Building } from "../Model/Building";
import { Door } from "../Model/Door";
import { BsFillCaretUpFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import { store } from "@/store";
import { useSnapshot } from "valtio";
import ProductDetail from "@/components/Html/ProductDetail/ProductDetail";
import AnimatedCamera from "../AnimatedCamera/AnimatedCamera";
import SubscriptionPopup from "@/components/Html/SubscriptionPopup/SubscriptionPopup";
import InvisibleWall from "../Model/InvisibleWall";
import SignIn from "@/components/Html/SignIn/SignIn";
import TrackingPopup from "@/components/Html/TrackingPopup/TrackingPopup";
import { Sandals } from "../Model/Sandals";
import { useRouter } from "next/router";
import Loader from "@/components/Html/Loader/Loader";
import Avatar from "@/components/Html/Avatar/Avatar";
import OrderList from "@/components/Html/OrderList/OrderList";
import TrackingOrder from "@/components/Html/TrackingOrder/TrackingOrder";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import Settings from "@/components/Html/Settings/Settings";
import PhoneVerification from "@/components/Html/PhoneVerification/PhoneVerification";
import VerificationCode from "@/components/Html/VerificationCode/VerificationCode";

const Render = () => {
  //STATES
  const [isOrderHistoryShow, setIsOrderHistoryShow] = useState<boolean>(false);
  const [isOrderTrackShow, setIsOrderTrackShow] = useState<boolean>(false);
  const [isSettingShow, setIsSettingShow] = useState<boolean>(false);
  const [isPhoneVerify, setIsPhoneVerify] = useState<boolean>(false);
  const [isCodeVerify, setIsCodeVerify] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isWallOpen, setIsWallOpen] = useState<boolean>(false);

  //LOGIN SESSTION DETAIL
  const [user, loading] = useAuthState(auth);

  //CHECK USER SIGN IN OR SIGN OUT
  const conditionalLogin = () => {
    if (loading) {
      return <Loader />;
    } else if (user === null) {
      return <SignIn setIsCodeVerify={setIsCodeVerify} />;
    }
  };

  const { touchTurnLeft, touchTurnRight, touchForwardDown, touchForwardUp } =
    useSnapshot(store);

  return (
    <main className={s.main}>
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

      {/* <div className={s.buttongroup}>
          <button onClick={touchTurnLeft}>
            <TiArrowBack />
          </button>
          <button onPointerDown={touchForwardDown} onPointerUp={touchForwardUp}>
            <BsFillCaretUpFill />
          </button>
          <button onClick={touchTurnRight} data-flip>
            <TiArrowBack />
          </button>
        </div>

        <ProductDetail />

        <SubscriptionPopup
          setIsWallOpen={setIsWallOpen}
          isPopupOpen={isPopupOpen}
          setIsPopupOpen={setIsPopupOpen}
        />

        <TrackingPopup />
        <Canvas camera={{ position: [2, 2, 5] }}>
          <Stats />
          <AdaptiveDpr />

          <ambientLight intensity={0.5} />
          <Environment preset="city" />

          <AnimatedCamera />
          <Suspense
            fallback={
              <Html center>
                <h1 style={{ color: "white" }}>Loading..</h1>
              </Html>
            }
          >
            <Physics>
              <Player camera={true} />
              <Building />
              <Sandals />
              <Door isOpen={isOpen} />
              <InvisibleWall
                setIsOpen={setIsOpen}
                isWallOpen={isWallOpen}
                setIsPopupOpen={setIsPopupOpen}
              />
            </Physics>
          </Suspense>
        </Canvas> */}
      <h1
        style={{
          fontSize: 62,
          textAlign: "center",
          color: "white",
          width: "100%",
        }}
      >
        3D WORLD
      </h1>
    </main>
  );
};

export default Render;
