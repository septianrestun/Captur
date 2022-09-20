import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Head from "next/head";

const work = () => {
  return (
    <div>
      <Head>
        <title>My Work</title>
      </Head>
      <Hero
        heading="My Work"
        message="This is my recent work traveling the world."
      />
      <Portfolio />
    </div>
  );
};

export default work;
