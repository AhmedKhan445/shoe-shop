import { SetStateAction } from "react";

export const keyChecker = (
  event: KeyboardEvent,
  setIsForward: React.Dispatch<SetStateAction<boolean>>,
  setIsBackward: React.Dispatch<SetStateAction<boolean>>,
  setIsLeft: React.Dispatch<SetStateAction<boolean>>,
  setIsRight: React.Dispatch<SetStateAction<boolean>>,
  setIsRightTop: React.Dispatch<SetStateAction<boolean>>,
  setIsRightBottom: React.Dispatch<SetStateAction<boolean>>,
  setIsLeftBottom: React.Dispatch<SetStateAction<boolean>>,
  setIsLeftTop: React.Dispatch<SetStateAction<boolean>>,
  setTurning: React.Dispatch<SetStateAction<number>>,
  turning: number
) => {
  if (event.key.toLowerCase() === "w") {
    switch (turning) {
      case 0.25:
        setIsLeftTop(true);
        break;
      case 0.5:
        setIsLeft(true);
        break;
      case 0.75:
        setIsLeftBottom(true);
        break;
      case 1:
        setIsBackward(true);
        break;
      case 1.25:
        setIsRightBottom(true);
        break;
      case 1.5:
        setIsRight(true);
        break;
      case 1.75:
        setIsRightTop(true);
        break;

      default:
        setIsForward(true);
        break;
    }
  }
  if (event.key.toLowerCase() === "s") {
    setIsBackward(true);
  }
  if (event.key.toLowerCase() === "a") {
    setIsLeft(true);
  }
  if (event.key.toLowerCase() === "d") {
    setIsRight(true);
  }
  if (event.key.toLowerCase() === "q") {
    if (turning === 2) {
      setTurning(0);
    } else {
      setTurning(turning + 0.25);
    }
  }
  if (event.key.toLowerCase() === "e") {
    if (turning === -2) {
      setTurning(0);
    } else {
      setTurning(turning - 0.25);
    }
  }
};
