import { store } from "@/store";
import { useBox } from "@react-three/cannon";
import { useSnapshot } from "valtio";

const InvisibleWall = () => {
  const { invisibleWallIsOpen } = useSnapshot(store);

  const [wallOneRef] = useBox(() => ({
    type: "Static",
    mass: 0,
    isTrigger: true,
    position: [35, 1.3, -10],
    args: [5, 2.6, 7],
    onCollide: () => {
      if (invisibleWallIsOpen === false) {
        store.subscriptionPopupIsActive = true;
      }
    },
  }));
  const [wallTwoRef] = useBox(
    () => ({
      type: "Static",
      mass: 0,
      isTrigger: invisibleWallIsOpen,
      position: [40, 1.3, -10],
      args: [5, 2.6, 7],
    }),
    undefined,
    [invisibleWallIsOpen]
  );

  return (
    <>
      <mesh
        ref={wallOneRef as React.RefObject<THREE.Mesh<THREE.BufferGeometry>>}
      />
      <mesh
        ref={wallTwoRef as React.RefObject<THREE.Mesh<THREE.BufferGeometry>>}
      />
    </>
  );
};

export default InvisibleWall;
