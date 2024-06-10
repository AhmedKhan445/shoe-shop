import { store } from "@/store";
import s from "./controls.module.scss";
import { BsFillCaretUpFill } from "react-icons/bs";

const MobileControls = () => {
  return (
    <section className={s.main}>
      {/* <button
        onPointerDown={() => (store.mobileTurnLeft = true)}
        onPointerUp={() => (store.mobileTurnLeft = false)}
        data-turnleft
      >
        <BsFillCaretUpFill />
      </button> */}
      <button
        style={{ gridColumn: "1/4", margin: "auto" }}
        onPointerDown={() => (store.mobileForward = true)}
        onPointerUp={() => (store.mobileForward = false)}
      >
        <BsFillCaretUpFill />
      </button>
      {/* <button
        data-turnright
        onPointerDown={() => (store.mobileTurnRight = true)}
        onPointerUp={() => (store.mobileTurnRight = false)}
      >
        <BsFillCaretUpFill />
      </button> */}
      <button
        data-left
        onPointerDown={() => (store.mobileTurnLeft = true)}
        onPointerUp={() => (store.mobileTurnLeft = false)}
      >
        <BsFillCaretUpFill />
      </button>
      <button
        data-bottom
        onPointerDown={() => (store.mobileBackward = true)}
        onPointerUp={() => (store.mobileBackward = false)}
      >
        <BsFillCaretUpFill />
      </button>
      <button
        data-right
        onPointerDown={() => (store.mobileTurnRight = true)}
        onPointerUp={() => (store.mobileTurnRight = false)}
      >
        <BsFillCaretUpFill />
      </button>
    </section>
  );
};

export default MobileControls;
