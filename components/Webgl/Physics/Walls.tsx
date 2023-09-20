import { BoxProps, useBox } from "@react-three/cannon";
import { BufferGeometry, Mesh } from "three";

const Walls = (props: BoxProps) => {
  const [ref] = useBox(() => ({ type: "Static", mass: 0, ...props }));
  return <mesh ref={ref as React.RefObject<Mesh<BufferGeometry>>}></mesh>;
};

export default Walls;
