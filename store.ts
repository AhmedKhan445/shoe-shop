import { proxy } from "valtio";

type storeType = {
  touchTurnLeft: () => void;
  touchTurnRight: () => void;
};

export const store = proxy<storeType>({
  touchTurnLeft: () => console.log("working"),
  touchTurnRight: () => console.log("working"),
});
