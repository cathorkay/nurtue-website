import "fullpage.js/dist/fullpage.min.css";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import familyImage from "public/images/family.svg";
import screenshotImage from "public/images/screenshot.png";
import bubbleIcon from "public/images/bubbleIcon.png";
import mengImage from "public/images/meng.jpg";
import catImage from "public/images/cat.jpg";
import dyllenImage from "public/images/dyllen.jpg";
import ruiImage from "public/images/rui.jpg";

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      const fullpage = await import("fullpage.js");
      new fullpage.default("#fullpage", {
        anchors: ["home", "features", "design", "team", "footer"],
        menu: "#nav",
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Nurtue - Be a better parent than you were yesterday</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="z-50 fixed top-0 inset-x-0 w-full h-14 bg-green-700 text-white">
        <div className="flex flex-row items-center container h-full mx-auto">
          <div className="font-bold text-3xl">Nurtue</div>
          <nav
            id="nav"
            className="flex flex-row items-center space-x-8 ml-auto text-lg"
          >
            <a data-menuanchor="home" href="#home">
              Home
            </a>
            <a data-menuanchor="features" href="#features">
              Features
            </a>
            <a data-menuanchor="design" href="#design">
              Design
            </a>
            <a data-menuanchor="team" href="#team">
              Team
            </a>
          </nav>
        </div>
      </header>
      <main id="fullpage">
        <section className="section">
          <div className="h-screen container mx-auto flex flex-row items-center justify-center">
            <div className="w-2/5 h-3/5 relative">
              <Image
                src={familyImage}
                alt="a sweet family"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <div className="ml-16 text-green-700">
              <div className="font-bold text-7xl">Nurtue</div>
              <div className="text-2xl mt-4">
                Be a better parent than you were yesterday.
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="h-screen container mx-auto flex flex-row items-center justify-center">
            <div className="flex flex-col w-3/5 space-y-8 text-green-700">
              <div className="text-5xl font-bold mb-8">Features</div>
              <div className="w-full p-4 flex flex-row items-center space-x-2 shadow-md hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={bubbleIcon}
                  alt="bubble icon"
                  objectFit="contain"
                  layout="fixed"
                  height={20}
                />
                <div>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog. The quick brown fox jumps over
                  the lazy dog.
                </div>
              </div>
              <div className="w-full p-4 flex flex-row items-center space-x-2 shadow-md hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={bubbleIcon}
                  alt="bubble icon"
                  objectFit="contain"
                  layout="fixed"
                  height={20}
                />
                <div>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog. The quick brown fox jumps over
                  the lazy dog.
                </div>
              </div>
              <div className="w-full p-4 flex flex-row items-center space-x-2 shadow-md hover:shadow-xl transition-shadow duration-500">
                <Image
                  src={bubbleIcon}
                  alt="bubble icon"
                  objectFit="contain"
                  layout="fixed"
                  height={20}
                />
                <div>
                  The quick brown fox jumps over the lazy dog. The quick brown
                  fox jumps over the lazy dog. The quick brown fox jumps over
                  the lazy dog.
                </div>
              </div>
            </div>
            <div className="ml-8 w-2/5 h-3/5 relative">
              <Image
                src={screenshotImage}
                alt="product screenshot"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="h-screen container mx-auto flex flex-col justify-center">
            <div className="text-5xl font-bold mb-8 text-green-700">
              Design Process
            </div>
            <table className="table-auto w-full text-slate-100">
              <tbody>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">Needfinding Presentation</td>
                  <td className="p-2">
                    <a href="">PDF</a>
                  </td>
                  <td className="p-2">
                    <a href="">PPT</a>
                  </td>
                </tr>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">POV Presentation</td>
                  <td className="p-2">
                    <a href="">PDF</a>
                  </td>
                  <td className="p-2">
                    <a href="">PPT</a>
                  </td>
                </tr>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">Concept Video</td>
                  <td className="p-2">
                    <a href="">MP4</a>
                  </td>
                  <td className="p-2">-</td>
                </tr>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">Concept Video</td>
                  <td className="p-2">
                    <a href="">MP4</a>
                  </td>
                  <td className="p-2">-</td>
                </tr>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">Concept Video</td>
                  <td className="p-2">
                    <a href="">MP4</a>
                  </td>
                  <td className="p-2">-</td>
                </tr>
                <tr className="odd:bg-green-700 even:bg-green-600">
                  <td className="p-2">Concept Video</td>
                  <td className="p-2">
                    <a href="">MP4</a>
                  </td>
                  <td className="p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="section">
          <div className="h-screen container mx-auto flex flex-col justify-center">
            <div className="text-5xl font-bold mb-8 text-green-700">
              Our Team
            </div>
            <div className="flex flex-row items-center justify-between space-x-4 text-green-700">
              <div className="flex flex-col items-center">
                <div className="rounded-full h-44 w-44 shadow-2xl">
                  <Image
                    className="rounded-full"
                    src={mengImage}
                    alt="Meng Guo"
                  />
                </div>
                <div className="text-lg mt-6">Meng Guo</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full h-44 w-44 shadow-2xl">
                  <Image
                    className="rounded-full"
                    src={catImage}
                    alt="Catherine Horkay"
                  />
                </div>
                <div className="text-lg mt-6">Catherine Horkay</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full h-44 w-44 shadow-2xl">
                  <Image
                    className="rounded-full"
                    src={dyllenImage}
                    alt="Dyllen Nellis"
                  />
                </div>
                <div className="text-lg mt-6">Dyllen Nellis</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="rounded-full h-44 w-44 shadow-2xl">
                  <Image
                    className="rounded-full"
                    src={ruiImage}
                    alt="Rui Ying"
                  />
                </div>
                <div className="text-lg mt-6">Rui Ying</div>
              </div>
            </div>
          </div>
        </section>
        <footer className="section fp-auto-height">
          <div className="w-full flex flex-col items-center space-y-2 p-4 bg-green-700 text-white text-sm text-center">
            <div>
              CS 147 Introduction to Human Computer Interaction - Winter 2022
            </div>
            <div>Stanford University</div>
            <div>© 2022 Team Nurtue. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
