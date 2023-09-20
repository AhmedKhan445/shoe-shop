import Floor from "./Floor";
import Walls from "./Walls";

const Skeleton = () => {
  return (
    <>
      <Floor args={[44, 0.1, 50]} position={[17, -0.05, -8.679]} />
      <Floor
        args={[15, 0.1, 50]}
        position={[46.8, -1.4, -8.679]}
        rotation={[0, 0, -Math.PI * 0.08]}
      />
      <Floor args={[30, 0.1, 30]} position={[52, -1.4, -8.679]} />
      <Walls args={[1.5, 2.6, 16]} position={[-2.5, 1.3, -6.6]} />
      <Walls args={[1.5, 2.6, 6]} position={[2.5, 1.3, -1.1]} />
      <Walls
        args={[16, 2.6, 1.5]}
        position={[10.1, 1.3, -1.7]}
        rotation={[0, -Math.PI * 0.11, 0]}
      />
      <Walls
        args={[16, 2.6, 1.5]}
        position={[24.003, 1.3, -2]}
        rotation={[0, Math.PI * 0.09, 0]}
      />
      <Walls
        args={[9.5, 2.6, 1.5]}
        position={[31, 1.3, -6]}
        rotation={[0, Math.PI * 0.2, 0]}
      />
      <Walls
        args={[20, 2.6, 1.5]}
        position={[7.736, 1.3, -19.43]}
        rotation={[0, 0.364, 0]}
      />
      <Walls
        args={[21, 2.6, 1.5]}
        position={[24.003, 1.3, -18.296]}
        rotation={[0, -Math.PI / 6, 0]}
      />
      <Walls args={[1.5, 2.6, 20]} position={[66, 1.3, -8.679]} />
      <Walls args={[20, 2.6, 1.5]} position={[55, 1.3, -1.5]} />
      <Walls args={[20, 2.6, 1.5]} position={[55, 1.3, -19.5]} />
      <Walls args={[12, 2.6, 10]} position={[42, 1.3, -18]} />
      <Walls args={[12, 2.6, 10]} position={[42, 1.3, -4]} />
      <Walls args={[50, 2.6, 2]} position={[20, 1.3, 18]} />
      <Walls args={[2, 2.6, 15]} position={[-5, 1.3, 9]} />
      <Walls args={[2, 2.6, 15]} position={[35, 1.3, 9]} />
      <Walls args={[50, 2.6, 2]} position={[30, 1.3, 2]} />
      <Walls args={[10, 2.6, 2]} position={[20, 1.3, 3.5]} />

      {/* items */}
      <Walls args={[1, 2.6, 1]} position={[17.672, 1.3, -7.04]} />
      <Walls args={[1, 2.6, 1]} position={[17.691, 1.3, -14.713]} />
      <Walls args={[2, 2.6, 2]} position={[9.41, 1.3, -9.532]} />
      <Walls
        args={[4, 2.6, 1.5]}
        position={[20.087, 1.3, -18.896]}
        rotation={[0, -0.515, 0]}
      />
      <Walls
        args={[2, 2.6, 1]}
        position={[18.935, 1.3, -16.693]}
        rotation={[0, -0.515, 0]}
      />
      <Walls args={[2.2, 2.6, 2.2]} position={[56.427, -0.3, -10.687]} />
      <Walls
        args={[3.8, 2.6, 2.2]}
        position={[1.053, 1.3, -13.577]}
        rotation={[Math.PI / 2, 0, 2.78]}
      />
    </>
  );
};

export default Skeleton;
