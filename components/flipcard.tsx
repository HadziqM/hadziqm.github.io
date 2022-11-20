import Image from "next/image";
import React from "react";

interface Props {
  top: string;
  left: string;
  idk: string;
  check: (i: string) => void;
  time: number;
}
export default function Flip({ top, left, idk, check, time }: Props) {
  const [flip, setFlip] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [flip2, setFlip2] = React.useState(false);
  const [init, setInit] = React.useState(true);
  React.useEffect(() => {
    const timeout = () => {
      setFlip(true);
    };
    setTimeout(timeout, time);
    setTimeout(() => {
      setInit(false);
    }, 500 + time);
  }, []);
  const fClick = () => {
    setFlip(!flip);
    setTimeout(() => setFlip2(!flip2), 100);
  };
  return (
    <div
      onClick={(e) => {
        fClick();
        if (counter < 1) {
          check(idk);
          setCounter(counter + 1);
        }
      }}
      className="absolute"
      style={{
        top: top,
        left: left,
        perspective: "1000px",
        width: init ? "100%" : "80px",
        height: init ? "100%" : "80px",
      }}
    >
      <div
        className="flip-card-inner relative cursor-pointer"
        style={flip ? {} : { transform: "rotateY(180deg)" }}
      >
        <div
          className="absolute"
          style={init ? { backfaceVisibility: "hidden" } : {}}
        >
          <Image
            src={flip2 ? `/${idk}.png` : `/f.png`}
            style={!flip ? { transform: "rotateY(180deg)" } : {}}
            alt="cards"
            width={80}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
