import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { LiveText } from "../components/LiveText/LiveText";

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-row items-center">
      <Head>
        <title>Nurfitra Pujo Santiko</title>
        <meta
          name="description"
          content="Nurfitra Pujo Santiko personal website and portofolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <LiveText
          liveTitle={[
            "Hi there,",
            "I am Nurfitra Pujo Santiko",
            "Web Developer",
          ]}
        />

        <h2 className="font-body text-white">About</h2>
        <p className="max-w-3xl text-white text-sm md:text-2xl">
          Hello my name is Nurfitra Pujo Santiko. I am web developer and aspring
          Software Engineer. My dream is crafting product that can bring changes
          to the world and help millions of people.
        </p>
        <div className="mt-5 max-w-2xl text-white text-base flex flex-row align-baseline space-x-4">
          <b>P.S.</b>
          <p>
            I’m searching for Open Source projects to contribute to. Feel free
            to contact me if you need help in your projects!
          </p>
        </div>
      </article>
    </div>
  );
};

export default Home;
