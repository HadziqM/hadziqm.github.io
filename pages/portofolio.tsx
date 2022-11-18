import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import Loading from "../components/loading";
import Box from "../components/box";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Porto() {
  const [loading, setLoading] = useState(true);
  useState(() => {
    setTimeout(() => setLoading(false), 2000);
  });
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
      <Layout>{loading ? <Loading /> : <div>hello world</div>}</Layout>
    </>
  );
}
