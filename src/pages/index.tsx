import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LiveText } from "../components/LiveText/LiveText";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="relative">
      <Head>
        <title>Nurfitra Pujo Santiko</title>
        <meta
          name="description"
          content="Nurfitra Pujo Santiko personal website and portofolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LiveText
        liveTitle={[
          "Hi there,",
          "I am Nurfitra Pujo Santiko",
          "Web Developer",
          "Software Engineer",
        ]}
      />

      <h2 className="font-body text-white">About</h2>
      <p className="max-w-2xl text-white">
        Hello my name is Nurfitra Pujo Santiko. I am web developer and aspiring
        Software Engineer. I want to create product that helps people live more
        easily (especially myself chuckle).
      </p>
      <p className="max-w-xl text-white text-sm">
        <b>P.S.</b>
      </p>
    </div>
  );
};

export default Home;
