import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Modal from "../components/modal";
import { useEffect, useState } from "react";
import Flip from "../components/flipcard";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const myList = ["1", "2", "3", "4", "5", "6", "7", "r", "r", "r"];
  const order = [
    { top: "32px", left: "30px", list: "f", time: 600 },
    { top: "32px", left: "121px", list: "f", time: 1200 },
    { top: "32px", left: "211px", list: "f", time: 1800 },
    { top: "32px", left: "302px", list: "f", time: 2400 },
    { top: "32px", left: "393px", list: "f", time: 3000 },
    { top: "170px", left: "30px", list: "f", time: 3600 },
    { top: "170px", left: "121px", list: "f", time: 4200 },
    { top: "170px", left: "211px", list: "f", time: 4800 },
    { top: "170px", left: "302px", list: "f", time: 5400 },
    { top: "170px", left: "393px", list: "f", time: 6000 },
  ];
  const shuffle = (idk: string[]) => {
    let currentIndex = idk.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [idk[currentIndex], idk[randomIndex]] = [
        idk[randomIndex],
        idk[currentIndex],
      ];
    }
    const clone = order;
    for (let i = 0; i < idk.length; i++) {
      clone[i].list = idk[i];
    }
    return clone;
  };
  const [card, setCard] = useState(shuffle(myList));
  const [modal, setModal] = useState(false);
  const [win, setWin] = useState(true);
  const [reset, setReset] = useState(false);
  const [score, setScore] = useState(10);
  const check = (ck: string) => {
    if (ck === "7") {
      setWin(true);
      setTimeout(() => reStart(), 1000);
      setTimeout(() => setModal(true), 1000);
    } else if (ck === "r") {
      setScore(score + 2);
    } else {
      setScore(score - Number(ck));
      if (score - Number(ck) <= 0) {
        setWin(false);
        setTimeout(() => setModal(true), 1000);
        setTimeout(() => reStart(), 1000);
      }
    }
  };
  const reStart = () => {
    setCard(shuffle(myList));
    setReset(true);
    setScore(10);
    setTimeout(() => setReset(false), 500);
  };
  return (
    <>
      <Head>
        <title>Portofolio - Hadziq Masfuh</title>
        <meta
          name="description"
          content="Play crappy card game made purely with CSS and javascript or see my portofilio"
        />
        <meta property="og:image" content="/foto.png" />
        <link rel="icon" href="/idk.png" />
      </Head>
      <Layout>
        <div className="flex w-screen h-screen relative items-center justify-center flex-col">
          <h1 className="z-[1] text-[1.1rem] font-mono text-gray-300">
            Find Number{" "}
            <span className="text-[1.1rem] font-bold text-yellow-600">7</span>{" "}
            Before Your Points Get to{" "}
            <span className="text-[1.1rem] font-bold text-red-600">0</span>{" "}
          </h1>
          {windowWidth < 600 ? (
            <>
              <Image
                src={"/game.png"}
                alt={"my unused game"}
                width={300}
                height={200}
              />
              <h2 className="z-[1] font-bold text-gray-300 text-[0.8rem] text-center font-mono">
                Sorry the game cant be played on screen width less than 600px
                <br />
                using desktop mode or landscape screen then restart page may
                help
              </h2>
            </>
          ) : (
            <>
              <div className="relative">
                <div className="w-full h-full relative flex items-center justify-center">
                  <Image
                    src={"/board.jpg"}
                    alt="board game"
                    width={600}
                    height={300}
                  />
                  <h1 className="absolute text-blue-400 top-[32px] right-[30px] font-bold font-serif text-[1.5rem] w-[73px] text-center">
                    {score}
                  </h1>
                  {reset ||
                    card.map((e) => (
                      <Flip
                        idk={e.list}
                        top={e.top}
                        left={e.left}
                        check={check}
                        time={e.time}
                        key={e.time}
                      />
                    ))}
                  <AnimatePresence
                    initial={false}
                    exitBeforeEnter
                    onExitComplete={() => null}
                  >
                    {modal && (
                      <Modal handleClose={() => setModal(false)} text={win} />
                    )}
                  </AnimatePresence>
                  <button
                    className="absolute right-[60px] top-[75px] text-[0.6rem] text-gray-300 p-1 bg-red-800 rounded-[30%]"
                    onClick={(e) => reStart()}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </>
          )}
          <div className="relative flex justify-center items-center gap-4 px-2 my-2">
            <h2 className="text2Style">See My Portofolio Instead</h2>
            <Link
              href={"/portofolio"}
              className="front-button font-mono text-gray-300"
            >
              Press Me!
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
