interface Props {
  link: string;
  picture: string;
  duration: number;
  children: React.ReactNode;
  skill: {
    name: string;
    precent: number;
  }[];
}
import Image from "next/image";
import Skill from "./skilCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Card(prop: Props) {
  const [hover, setHover] = useState(false);
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView)
      control.start({
        opacity: 1,
        scale: 1,
        transition: { duration: prop.duration },
      });
  }, [control, inView]);
  return (
    <a href={prop.link}>
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-between gap-2 rounded-lg w-[320px] h-[480px] transition-[background-color] duration-200 cursor-pointer z-50 font-mono text-gray-300"
        style={{
          background: hover ? "rgba(100,100,255,0.2)" : "rgba(39,31,57,0.6)",
        }}
        animate={control}
        initial={{ opacity: 0, scale: 0 }}
      >
        <div className="w-full h-[150px] flex relative rounded-t-lg">
          <Image
            src={prop.picture}
            alt={prop.link}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2 flex flex-col gap-4 items-center justify-between h-[70%] relative">
          <div
            className="flex flex-col items-center gap-4 h-[247px] w-[284px]"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {hover ? <Skill skill={prop.skill} /> : prop.children}
          </div>
          <div className="flex justify-between items-start border-t-2 border-gray-600 px-4 py-1 w-full">
            <p className="text-[0.8rem]" style={hover ? { color: "#99f" } : {}}>
              Find Repository
            </p>
            <FaGithub
              className="h-6 w-6 ml-4"
              style={{ color: !hover ? "#333" : "#11f" }}
            />
          </div>
        </div>
      </motion.div>
    </a>
  );
}
