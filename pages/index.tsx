import "fullpage.js/dist/fullpage.min.css";
import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "components/Header";
import Home from "components/Home";
import Concept from "components/Concept";
import Features from "components/Features";
import Beta from "components/Beta";
import DesignProcess from "components/DesignProcess";
import Team from "components/Team";
import Footer from "components/Footer";

const Index: NextPage = () => {
  const [onFeaturePage, setOnFeaturePage] = useState(false);
  const fullpageRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const fullpage = await import("fullpage.js");

      const options = {
        licenseKey: "gplv3-license",
        scrollBar: true,
        scrollOverflow: false,
        anchors: [
          "home",
          "features",
          "beta",
          "concept",
          "design-process",
          "team",
          "footer",
        ],
        menu: "#nav",
        onLeave: function (origin: any, destination: any) {
          if (origin.anchor === "features") {
            setOnFeaturePage(false);
          }
          if (destination.anchor === "features") {
            setOnFeaturePage(true);
          }
        },
      };

      if (!fullpageRef.current) {
        fullpageRef.current = new fullpage.default("#fullpage", options);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Nurtue - Grow together.</title>
        <meta
          name="description"
          content="Nurtue exists to improve the relationship between parents and their
          children through healthy communication habits, guided conflict
          resolution, and communal support."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="theme-color" content="#068f76" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main id="fullpage">
        <Home />
        <Features on={onFeaturePage} />
        <Beta />
        <Concept />
        <DesignProcess />
        <Team />
        <Footer />
      </main>
    </>
  );
};

export default Index;
