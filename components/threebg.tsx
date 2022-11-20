import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Framemot(prop: { pos: number[]; size: number[]; col: string }) {
  const myMesh = useRef(null as any);
  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={myMesh} rotation={[1, 1, 1]} position={prop.pos}>
      <boxGeometry args={prop.size} />
      <meshStandardMaterial color={prop.col} />
    </mesh>
  );
}
function Framemot1(prop: { pos: number[]; size: number[]; col: string }) {
  const myMesh = useRef(null as any);
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <mesh ref={myMesh} rotation={[1, 1, 1]} position={prop.pos}>
      <torusGeometry args={[1, 0.4, 100]} />
      <meshStandardMaterial color={prop.col} />
    </mesh>
  );
}
function Framemot3(prop: { pos: number[]; size: number[]; col: string }) {
  const myMesh = useRef(null as any);
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
    myMesh.current.rotation.x = clock.getElapsedTime();
  });
  return (
    <mesh ref={myMesh} rotation={[1, 1, 1]} position={prop.pos}>
      <coneGeometry args={[0.5, 1, 30]} />
      <meshStandardMaterial color={prop.col} />
    </mesh>
  );
}
function Framemot2(prop: { pos: number[] }) {
  return (
    <mesh position={prop.pos}>
      <sphereGeometry args={[0.03, 16, 16]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
export default function Three() {
  const randomHundreds = (times: number) => {
    let idk: number[][] = [];
    for (let i = 1; i < times; i++) {
      idk.push([
        Math.random() * 20 - 10,
        Math.random() * 10 - 5,
        Math.random() * 2 - 1,
      ]);
    }
    return idk;
  };
  const RandomSize = () => {
    return [
      Math.random() * 1 + 1,
      Math.random() * 1 + 1,
      Math.random() * 1 + 1,
    ];
  };
  const RandomColor = () => {
    const color = [
      "red",
      "pink",
      "blue",
      "green",
      "yellow",
      "orange",
      "hotpink",
      "purple",
    ];
    return color[Math.round(Math.random() * 7)];
  };
  return (
    <div className="w-screen h-screen fixed top-0 left-0">
      <Canvas>
        <pointLight position={[10, 10, 0]} />
        <ambientLight intensity={0.1} />
        <directionalLight color={"blue"} position={[0, 0, 5]} />
        {/* {randomHundreds(5).map((e) => (
          <Framemot1 pos={e} col={RandomColor()} size={RandomSize()} />
        ))} */}
        {randomHundreds(500).map((e) => (
          <Framemot2 pos={e} />
        ))}
        {randomHundreds(5).map((e) => (
          <Framemot pos={e} col={RandomColor()} size={RandomSize()} />
        ))}
        {randomHundreds(5).map((e) => (
          <Framemot3 pos={e} col={RandomColor()} size={RandomSize()} />
        ))}
      </Canvas>
    </div>
  );
}
