import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LiveText } from "../components/LiveText/LiveText";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nurfitra Pujo Santiko</title>
        <meta
          name="description"
          content="Nurfitra Pujo Santiko personal website and portofolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LiveText
        liveTitle={["Testing LiveText component...", "It has been tested"]}
      />
    </div>
  );
};

export default Home;
