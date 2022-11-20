import { useEffect, useState } from "react";

interface Props {
  skill: {
    name: string;
    precent: number;
  }[];
}

export default function Skill({ skill }: Props) {
  const [timer, setTimer] = useState(1);
  useEffect(() => {
    setTimeout(() => setTimer(timer + 1), 10);
  }, [timer]);
  const bar = (num: number) => {
    if (timer > num) return num;
    return timer;
  };
  return (
    <div className="w-full h-full flex p-4 flex-col justify-center items-center relative">
      {skill.map((e) => (
        <div className="w-full relative flex justify-between items-center">
          <h2 className="text-[#99f] text-[1rem]">{e.name}</h2>
          <div className="h-3 w-[150px] flex justify-start items-center relative bg-blue-900 rounded-lg p-1">
            <div
              style={{ width: `${bar(e.precent)}%` }}
              className="h-2 background-grad"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
