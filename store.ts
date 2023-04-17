import { proxy } from "valtio";

type storeType = {
  touchTurnLeft: () => void;
  touchTurnRight: () => void;
  touchForwardDown: () => void;
  touchForwardUp: () => void;
};

export const store = proxy<storeType>({
  touchTurnLeft: () => console.log("working"),
  touchTurnRight: () => console.log("working"),
  touchForwardDown: () => console.log("working"),
  touchForwardUp: () => console.log("working"),
});
