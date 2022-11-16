import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

export default function Home() {
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
        <h1 className="font-bold">hello World</h1>
      </Layout>
    </>
  );
}
