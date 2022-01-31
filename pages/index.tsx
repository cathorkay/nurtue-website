import "fullpage.js/dist/fullpage.min.css";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import type { FullPageJsOptions } from "fullpage.js";
import Header from "components/Header";
import Home from "components/Home";
import Concept from "components/Concept";
import Features from "components/Features";
import Demo from "components/Demo";
import DesignProcess from "components/DesignProcess";
import Team from "components/Team";
import Footer from "components/Footer";

const Index: NextPage = () => {
  const [onFeaturePage, setOnFeaturePage] = useState(false);

  useEffect(() => {
    (async () => {
      const fullpage = await import("fullpage.js");
      const options: FullPageJsOptions = {
        scrollBar: true,
        anchors: [
          "home",
          "concept",
          "features",
          "demo",
          "design-process",
          "team",
          "footer",
        ],
        menu: "#nav",
        onLeave: function (origin, destination, direction) {
          if ((origin as any).anchor === "features") {
            setOnFeaturePage(false);
          }
          if ((destination as any).anchor === "features") {
            setOnFeaturePage(true);
          }
        },
      };
      new fullpage.default("#fullpage", options);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Nurtue - Be a better parent</title>
        <meta
          name="description"
          content="Guided exercises and personalized advice to promote healthy communication and conflict resolution between parents and children."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main id="fullpage">
        <Home />
        <Concept />
        <Features on={onFeaturePage} />
        <Demo />
        <DesignProcess />
        <Team />
        <Footer />
      </main>
    </>
  );
};

export default Index;
