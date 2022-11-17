import Image from "next/image";
import { list } from "postcss";
import React from "react";
interface Props {
  top: string;
  left: string;
  idk: string;
  check: any;
  time: number;
}
export default function Flip({ top, left, idk, check, time }: Props) {
  const [flip, setFlip] = React.useState(false);
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
  return (
    <div
      onClick={(e) => {
        setFlip(!flip);
        setTimeout(() => setFlip2(!flip2), 100);
        check(idk);
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
        className="flip-card-inner relative"
        style={flip ? {} : { transform: "rotateY(180deg)" }}
      >
        <div
          className="absolute"
          style={init ? { backfaceVisibility: "hidden" } : {}}
        >
          <Image
            src={flip2 ? `/${idk}.png` : `/f.png`}
            alt="cards"
            width={80}
            height={100}
          />
        </div>
        {/* <div className="backface absolute">
        <Image
            src={init ? "/f.png" : `/${idk}.png`}
            alt="cards"
            width={80}
            height={100}
        />
        </div> */}
      </div>
    </div>
  );
}
