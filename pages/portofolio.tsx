import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Card from "../components/cardBox";
import Link from "next/link";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Loading from "../components/loading";
import Box from "../components/box";
import { FaSchool, FaReact, FaBus } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Porto() {
  const getScroll = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const [loading, setLoading] = useState(true);
  const secondDur = (order: number) => {
    if (windowWidth > 1024) {
      let dur = order % 3;
      if (dur === 0) dur = 3;
      return dur * 0.5;
    } else if (windowWidth < 800) {
      return 0.5;
    } else {
      let dur = order % 2;
      if (dur === 0) dur = 2;
      return dur * 0.5;
    }
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
        {loading ? (
          <Loading wWidth={windowWidth} finish={() => setLoading(false)} />
        ) : (
          <>
            <Box animate="init">
              <div
                ref={getScroll}
                className="flex max-md:flex-col justify-center items-center relative"
              >
                <div className="relative w-[330px] h-[370px] shadow-[_15px_15px_0px_#333333] m-4">
                  <Image
                    src="/foto.jpg"
                    alt="hadziq's photo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <motion.div
                  className="flex flex-col gap-2 w-[350px] h-[420px] py-2 px-4 max-md:border-2 md:border-l-2 justify-center border-white m-4 bg-[rgba(0,0,0,0.7)]"
                  initial={{ opacity: 0, x: 400 }}
                  animate={{ opacity: 1, transition: { duration: 2 }, x: 0 }}
                >
                  <h1 className="flex text-[1.5rem] w-full text-center">
                    About Me
                  </h1>
                  <p className="text-justify text-[0.8rem]">
                    I am general software developer. I am both designer and
                    developer with some good knowlage with front end and back
                    end. i'm used to building full-stack web with Typescript
                    using NextJs ,AstroJs ,ViteJs also python with django. i'm
                    also used to build windows application with rust using Tauri
                    and Python with Qt and Tk. My strong point is i'm quick
                    learn person, despite i m not actually graduated from
                    software engineer, i know a lot about software developer and
                    i already build many project involving web development and
                    windows application using python,typescript and rust and
                    most of them is still used untill now and offcourse i could
                    do electric related task such as setting up server hardware,
                    designing microcontroller and program it using assembly,
                    arduino or c++, my learning pattern is by finding open
                    source project (mostly on discord comunity) on my free time
                    then helping them develop their project or build my own
                    project realted to it
                  </p>
                </motion.div>
              </div>
            </Box>
            <div className="flex justify-center items-center p-20">
              <VerticalTimeline
                layout={windowWidth < 600 ? "1-column-right" : "2-columns"}
                lineColor="#999999"
              >
                <VerticalTimelineElement
                  contentStyle={{ background: "#222" }}
                  date="2017 - 2022"
                  dateClassName="text-white"
                  icon={<FaSchool className="text-gray-400" />}
                  iconStyle={{ background: "#222" }}
                >
                  <h3 className="text-white font-bold text-[1rem]">
                    SMAN Sidayu
                  </h3>
                  <p className="text-[0.8rem] font-light">Highschool Student</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  contentStyle={{ background: "#222" }}
                  date="2017 - 2022"
                  dateClassName="text-white"
                  icon={<FaSchool className="text-gray-400" />}
                  iconStyle={{ background: "#222" }}
                >
                  <h3 className="text-white font-bold text-[1rem]">
                    Institut Teknologi Sepuluh Nopember
                  </h3>
                  <p className="text-[0.8rem] font-light">
                    Electrical Engineer Bachelor Degree
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  contentStyle={{ background: "#222" }}
                  date="2021 - 2022"
                  dateClassName="text-white"
                  icon={<FaBus className="text-gray-400" />}
                  iconStyle={{ background: "#222" }}
                >
                  <h3 className="text-white font-bold text-[1rem]">
                    Internship Molina
                  </h3>
                  <p className="text-[0.8rem] font-light">
                    Ux Engineer with Qt and Battery Management System Designer
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  contentStyle={{ background: "#222" }}
                  date="2022 - now"
                  dateClassName="text-white"
                  icon={<FaReact className="text-gray-400" />}
                  iconStyle={{ background: "#222" }}
                >
                  <h3 className="text-white font-bold text-[1rem]">
                    PT.Polowijo Gosari
                  </h3>
                  <p className="text-[0.8rem] font-light">
                    Full-stack developer, windows developer
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
            <section className="flex justify-center items-center w-screen py-20">
              <div className="grid max-md:grid-cols-1 grid-cols-2 gap-8 lg:grid-cols-3">
                <Card
                  picture="/molina.png"
                  link="/"
                  duration={secondDur(1)}
                  skill={[
                    { name: "Qt", precent: 50 },
                    { name: "Xml", precent: 70 },
                    { name: "Json", precent: 50 },
                    { name: "C++", precent: 30 },
                  ]}
                >
                  <h1>Electrical Bus Development</h1>
                  <p className="text-[0.7rem] text-justify">
                    Develop electrical bus, mainly in Vehicle Control Unit
                    (VCU), developing own battery management system (because the
                    one available in factory doesn’t suit our automatic
                    operation system), developing own communication protocol
                    (because current mainly used communication protocol system
                    (CAN BUS V.2), can’t be customize) along with developing
                    Linux operation as main control operation system and
                    microcontroller STM32 as sub program. My main role there was
                    designing hardware along with trouble shooting other member
                    hardware, also helping in software design at Linux operation
                  </p>
                </Card>
                <Card
                  picture="/ta.png"
                  link="/"
                  duration={secondDur(2)}
                  skill={[
                    { name: "MQTT", precent: 50 },
                    { name: "Python", precent: 70 },
                    { name: "Arduino", precent: 60 },
                    { name: "Linux", precent: 30 },
                  ]}
                >
                  <h1>Fish Cultivation Pound Control System</h1>
                  <p className="text-[0.7rem] text-justify">
                    My final project was developing Control system building
                    around fish pound so we can monitor fish status as well as
                    giving them fodder automatically, this is actually small
                    prototype to develop monitored indoor fish cultivation to
                    minimize human error at handling pound as well as increasing
                    its quality by making appropriate treatment. the sistem
                    consist sensor node and server node, sensor node using
                    sensor and actuator that controlled with with server via
                    wireless connection between Raspberry Pi and NodeMcu, the
                    protocol used to comunicate is using MQTT between LAN
                    connection
                  </p>
                </Card>
                <Card
                  picture="/discord.png"
                  link="/"
                  duration={secondDur(3)}
                  skill={[
                    { name: "Python", precent: 100 },
                    { name: "Postgresql", precent: 40 },
                  ]}
                >
                  <h1>Developing Server and discord bot</h1>
                  <p className="text-[0.7rem] text-justify">
                    discord has been my favorite social chat platform and i do
                    learn a lot from community there i once join monster hunter
                    frontier server (one of my favorite game but out of
                    service), surprisingly community work on the game to
                    resurrect it by recovering game client file, making game
                    server from scratch, making translation patch and many more,
                    i m also part of the development of making game server and
                    also create my own project for game, namely discord bot that
                    could modify server database i work on it so player without
                    knowledge of programming could have full access of game
                    feature with ease
                  </p>
                </Card>
                <Card
                  picture="first.png"
                  link="/"
                  duration={secondDur(4)}
                  skill={[
                    { name: "Html", precent: 50 },
                    { name: "Css", precent: 70 },
                    { name: "Javascript", precent: 30 },
                  ]}
                >
                  <h1>First Website</h1>
                  <p className="text-[0.7rem] text-justify">
                    thid is my first website using only using plain html, css
                    and javascript, this one created when i start learning about
                    being web developer, using plain css and javascript is
                    really hard, especially when the project grows larger, in
                    this project i'm just using basic local storage fetch to
                    save theme data and apply it if they have one, also its auto
                    calculate my age, on the css side there is a lot to build
                    since its focused on animation, theme and media queries, its
                    end up taking hundred line of code just for css, the icon is
                    copied as svg from font-awesome
                  </p>
                </Card>
                <Card
                  skill={[
                    { name: "Trypescript", precent: 99 },
                    { name: "css", precent: 70 },
                    { name: "Sqlite", precent: 50 },
                    { name: "wordpress", precent: 20 },
                  ]}
                  duration={secondDur(5)}
                  picture={"masjid.png"}
                  link={""}
                >
                  <h1>Next - Wordpress</h1>
                  <p className="text-[0.7rem] text-justify">
                    my task at PT polowijo is to make website for mosque, when
                    mostly wordpress is enough for the task, my supervisor want
                    something big on the website such as on demand ad system,
                    Infaq system added directly on the web and possibility for
                    making android application directly binded with sistem in
                    web and many other customization, with the rule of anyone
                    could modify all the feature without code at all, so instead
                    of using wordpress i make full sistem using Next Js with
                    dedicated Api and Database, also i m using Graphql to
                    directly get the data from wordpress post, that way everyone
                    can modify it with wordpress and i also make discord bot to
                    easily modify content that cant be modify in wordpress
                  </p>
                </Card>
                <Card
                  skill={[
                    { name: "Trypescript", precent: 99 },
                    { name: "css", precent: 40 },
                    { name: "Postgresql", precent: 60 },
                    { name: "python", precent: 20 },
                  ]}
                  duration={secondDur(6)}
                  picture={"ship.png"}
                  link={""}
                >
                  <h1>Ship Monitoring</h1>
                  <p className="text-[0.7rem] text-justify">
                    this is my first program that i make when i learned about
                    nextjs and Typescript, this one actually a project to make a
                    system that can be used for indonesian ship, first one we
                    make a hardware that consist sensor to monitor many
                    fundamental aspect in ship, then that data will be sended to
                    database Postgresql and the web will be used as interface to
                    visualize the sensor, the main function of this sistem to
                    notice if there is something wrong on the ship, especially
                    on the fuel since back then there is reported fuel thief on
                    the ship
                  </p>
                </Card>
                <Card
                  skill={[
                    { name: "Trypescript", precent: 60 },
                    { name: "Css", precent: 40 },
                    { name: "Rust", precent: 70 },
                  ]}
                  duration={secondDur(7)}
                  picture={"jam.jpeg"}
                  link={""}
                >
                  <h1>Jam Menara Masjid</h1>
                  <p className="text-[0.7rem] text-justify">
                    when i work on PT polowijo gosari, one of my task is to back
                    up old computer that used to control LED display on mosque,
                    one of the main software to run is the digital clock that
                    run on the background that configured to be LED display,
                    since its old pc, if the pc dies the display will be died
                    too, so in order to fulfill that task i step further and
                    create brand new software to be displayed on the mosque, i
                    create that software with Tauri, a Rust program that can run
                    in multi platform, and using webview to display desired
                    design.
                  </p>
                </Card>
              </div>
            </section>
          </>
        )}
      </Layout>
    </>
  );
}
