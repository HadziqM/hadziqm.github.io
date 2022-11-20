import { useState, useEffect } from "react";

interface Props {
  finish: () => void;
  wWidth: number;
}

export default function Loading({ finish, wWidth }: Props) {
  const [timer, setTimer] = useState(1);
  useEffect(() => {
    const timeDel = setTimeout(() => setTimer(timer + 1), 5);
    if (timer === 200) {
      finish();
    }
  }, [timer]);
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen z-[50]">
      <div className="flex z-50">
        <span className="text-3d-red">H</span>
        <span className="text-3d-orange">A</span>
        <span className="text-3d-yellow">D</span>
        <span className="text-3d-green">Z</span>
        <span className="text-3d-blue">I</span>
        <span className="text-3d-purple">Q</span>
      </div>
      <div
        className="flex justify-start h-4 border-gray-800 border bg-gray-500 items-center rounded-lg p-1 z-[50]"
        style={wWidth > 600 ? { width: 600 } : { width: 300 }}
      >
        <div
          className="flex background-grad rounded-lg z-[51]"
          style={{
            width: timer * (wWidth > 600 ? 3.4 : 1.7),
            height: "8px",
          }}
        />
      </div>
    </div>
  );
}
