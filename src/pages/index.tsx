import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="relative flex flex-row items-center">
      <Head>
        <title>Nurfitra Pujo Santiko</title>
        <meta
          name="description"
          content="Nurfitra Pujo Santiko personal website and portofolio. A web developer and aspiring Software Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="z-0">
        <header className="relative flex flex-col align-start">
          <h2 className="font-body text-white text-xl">Hello, i am</h2>
          <h1 className="mt-0 text-5xl md:text-6xl text-white max-w-[443px] break-words">
            Nurfitra Pujo Santiko<span className="text-blue">.</span>
          </h1>
          <h2 className="z-[-1] absolute text-5xl md:text-6xl text-subtle-black top-40 md:top-16 left-0 md:left-5 max-w-[443px] break-words">
            Web Developer
          </h2>
        </header>

        <p className="max-w-3xl text-white text-sm md:text-2xl">
          I am Web Developer and Software Engineer. My dream is crafting
          product that can bring changes to the world and help millions of
          people.
        </p>
      </article>
    </div>
  );
};

export default Home;
