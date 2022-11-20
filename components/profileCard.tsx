import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaGithub,
  FaDiscord,
  FaWhatsapp,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

export default function Profile(prop: { windowW: number }) {
  const [hovered, setHovered] = useState(false);
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2 },
    },
    visible2: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <div className="flex">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-[350px] h-[350px] flex font-mono text-gray-300 text-center"
      >
        {prop.windowW < 800 && hovered ? (
          <>
            <div
              className="flex-col items-center flex bg-[rgba(39,31,57,0.6)] z-[50] relative rounded-lg justify-between p-4
          "
            >
              <motion.h1
                initial={{ opacity: 0, scale: 1 }}
                variants={variants}
                animate={"visible"}
                className="flex text-[1rem] w-full text-center"
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                variants={variants}
                animate={"visible2"}
                className="text-justify text-[0.6rem]"
              >
                I am general software developer. I am both designer and
                developer with some good knowlage with front end and back end.
                i'm used to building full-stack web with Typescript using NextJs
                ,AstroJs ,ViteJs also python with django. i'm also used to build
                windows application with rust using Tauri and Python with Qt and
                Tk. My strong point is i'm quick learn person, despite i m not
                actually graduated from software engineer, i know a lot about
                software developer and i already build many project involving
                web development and windows application using python,typescript
                and rust and most of them is still used untill now and offcourse
                i could do electric related task such as setting up server
                hardware, designing microcontroller and program it using
                assembly, arduino or c++, my learning pattern is by finding open
                source project (mostly on discord comunity) on my free time then
                helping them develop their project or build my own project
                realted to it
              </motion.p>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex-col items-center flex bg-[rgba(39,31,57,0.6)] z-[50] relative justify-between"
              style={
                prop.windowW > 800
                  ? {
                      borderTopLeftRadius: "0.5rem",
                      borderBottomLeftRadius: "0.5rem",
                    }
                  : { borderRadius: "0.5rem" }
              }
            >
              <div className="w-[350px] flex justify-start item-center p-4">
                <div className="w-[70px] h-[70px] relative">
                  <Image
                    src="/foto.jpg"
                    alt="hadziq's photo"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="flex flex-col item-center justify-center ml-4 gap-[2px]">
                  <span>A.Hadziq Masfuh</span>
                  <span className="text-gray-300 text-[0.8rem]">
                    Indonesian
                  </span>
                  <span className="text-gray-400 text-[0.7rem]">
                    Electronic Designer & Full-Stack Developer
                  </span>
                </div>
              </div>
              <div className="w-[350px] flex px-4 py-2 flex-col gap-4 ">
                <div className="grid grid-cols-3">
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    <span>Python</span>
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    Javascript
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    Typescript
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    Rust
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    CSS
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    UI/UX
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    SQL
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    Assembly
                  </div>
                  <div className="border-2 border-[#2D2755] rounded-[2px] text-[12px] m-[0px_7px_7px_0px] p-[7px]">
                    Arduino
                  </div>
                </div>
              </div>
              <div className="w-[350px] flex justify-between item-center px-4 py-2 border-t-2 border-gray-500 ">
                <a href="https://discord.com/users/455622761168109569">
                  <FaDiscord className="w-6 h-6 text-gray-500 hover:text-blue-600" />
                </a>
                <a href="https://github.com/HadziqM">
                  <FaGithub className="w-6 h-6 text-gray-500 hover:text-blue-600" />
                </a>
                <a href="https://www.linkedin.com/in/hadziq-masfuh-554177197">
                  <FaLinkedin className="w-6 h-6 text-gray-500 hover:text-blue-600" />
                </a>
                <a href="https://wa.me/6285755729766">
                  <FaWhatsapp className="w-6 h-6 text-gray-500 hover:text-blue-600" />
                </a>
                <a href="https://mailto:dimascrazz@gmail.com">
                  <FaMailBulk className="w-6 h-6 text-gray-500 hover:text-blue-600" />
                </a>
              </div>
            </div>
          </>
        )}
      </motion.div>
      {prop.windowW > 800 && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 400 }}
          animate={{ opacity: 1, scale: 1, x: 0, transition: { duration: 2 } }}
          className="w-[350px] h-[350px] flex font-mono text-gray-300 text-center"
        >
          <div
            className="flex-col items-center flex bg-[rgba(39,31,57,0.6)] z-[50] relative rounded-r-lg justify-between p-4 border-gray-500 border-l-2
          "
          >
            <h1 className="flex text-[1rem] w-full text-center">About Me</h1>
            <p className="text-justify text-[0.6rem]">
              I am general software developer. I am both designer and developer
              with some good knowlage with front end and back end. i'm used to
              building full-stack web with Typescript using NextJs ,AstroJs
              ,ViteJs also python with django. i'm also used to build windows
              application with rust using Tauri and Python with Qt and Tk. My
              strong point is i'm quick learn person, despite i m not actually
              graduated from software engineer, i know a lot about software
              developer and i already build many project involving web
              development and windows application using python,typescript and
              rust and most of them is still used untill now and offcourse i
              could do electric related task such as setting up server hardware,
              designing microcontroller and program it using assembly, arduino
              or c++, my learning pattern is by finding open source project
              (mostly on discord comunity) on my free time then helping them
              develop their project or build my own project realted to it
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
