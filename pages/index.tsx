import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import Flip from "../components/flipcard";

export default function Home() {
  const myList = ["1", "2", "3", "4", "5", "6", "7", "r", "r", "r"];
  const order = [
    { top: "32px", left: "30px", list: "f", time: 600 },
    { top: "32px", left: "120px", list: "f", time: 1200 },
    { top: "32px", left: "211px", list: "f", time: 1800 },
    { top: "32px", left: "302px", list: "f", time: 2400 },
    { top: "32px", left: "393px", list: "f", time: 3000 },
    { top: "170px", left: "30px", list: "f", time: 3600 },
    { top: "170px", left: "120px", list: "f", time: 4200 },
    { top: "170px", left: "211px", list: "f", time: 4800 },
    { top: "170px", left: "302px", list: "f", time: 5400 },
    { top: "170px", left: "393px", list: "f", time: 6000 },
  ];
  const shuffle = (idk: string[]) => {
    let currentIndex = idk.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
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
  const check = (ck: string) => {
    // if (ck === "7") setTimeout(() => window.alert("win"), 1000);
    // else setTimeout(() => window.alert("lose"), 1000);
  };
  return (
    <>
      <Head>
        <title>Portofolio - Hadziq Masfuh</title>
        <meta
          name="description"
          content="Portofolio A.Hadziq Masfuh using Next Js"
        />
        <link rel="icon" href="/idk.png" />
      </Head>
      <Layout>
        <div className="flex flex-col w-screen h-screen relative items-center justify-center">
          <div>
            <div className="w-full h-full relative">
              <Image
                src={"/board.jpg"}
                alt="board game"
                width={600}
                height={300}
              />
              {card.map((e) => (
                <Flip
                  idk={e.list}
                  top={e.top}
                  left={e.left}
                  check={check}
                  time={e.time}
                  key={e.time}
                />
              ))}
            </div>
          </div>
          <Link href={"/portofolio"} className="front-button">
            Press Start
          </Link>
        </div>
      </Layout>
    </>
  );
}
