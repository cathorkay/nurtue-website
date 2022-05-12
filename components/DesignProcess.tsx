import { Fragment } from "react";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const listItems = [
  {
    name: "Concept Video",
    downloads: [
      {
        name: "Video YouTube",
        link: "https://youtu.be/UxzL_elN3pA",
      },
      {
        name: "Video MP4",
        link: "videos/nurtue-concept-video.mp4",
      },
    ],
  },
  {
    name: "Medium-Fidelity Prototype",
    downloads: [
      {
        name: "Prototype Link",
        link: "https://www.figma.com/proto/cUHZyzkI5lwQRHRcCsZlSS/Nurtue-MedFi-Prototype?node-id=123%3A3527&scaling=scale-down&page-id=0%3A1&starting-point-node-id=123%3A3527",
      },
      {
        name: "Prototype README",
        link: "files/nurtue-med-fi-prototype-readme.pdf",
      },
    ],
  },
  {
    name: "High-Fidelity Prototype",
    downloads: [
      {
        name: "Prototype Link",
        link: "https://github.com/robertying/nurtue-app",
      },
      {
        name: "Prototype README",
        link: "files/nurtue-hi-fi-prototype-readme.pdf",
      },
      {
        name: "Demo YouTube",
        link: "https://youtu.be/sPQrY5DLeKI",
      },
      {
        name: "Demo MP4",
        link: "videos/nurtue-demo-video.mp4",
      },
    ],
  },
  {
    name: "Poster & Pitch Slide",
    downloads: [
      {
        name: "Poster PDF",
        link: "files/nurtue-poster.pdf",
      },
      {
        name: "Poster Source File (Canva)",
        link: "https://www.canva.com/design/DAE53zirhn4/gOOtuG5FrpdDetl8S95ltA/view",
      },
      {
        name: "Pitch Slide PDF",
        link: "files/nurtue-pitch-slide.pdf",
      },
      {
        name: "Pitch Slide PPTX",
        link: "files/nurtue-pitch-slide.pptx",
      },
    ],
  },
];

const DesignProcess: React.FC = () => {
  return (
    <section className="section bg-theme-lightblue">
      <div className="h-full container mx-auto flex flex-col justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-12 text-theme-black">
          Design Process
        </h2>
        <table className="table-auto w-full text-white">
          <thead>
            <tr className="bg-theme-black font-medium text-base sm:text-lg">
              <th className="p-1 sm:p-3">
                <AutoGraphIcon /> Phase
              </th>
              <th className="p-1 sm:p-3" colSpan={3}>
                <FileDownloadIcon /> Artifacts
              </th>
            </tr>
          </thead>
          <tbody>
            {listItems.map((item) => (
              <tr
                key={item.name}
                className="text-sm sm:text-base odd:bg-theme-green even:bg-theme-black"
              >
                <td className="p-2 sm:p-3 font-medium">{item.name}</td>
                <td className="p-1 sm:p-2 space-x-2 sm:space-x-4">
                  {item.downloads.map((download, index) => (
                    <Fragment key={download.name}>
                      {download.link ? (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={download.link}
                        >
                          {download.name}
                        </a>
                      ) : (
                        <span className="text-white text-opacity-50">
                          {download.name}
                        </span>
                      )}
                      {index !== item.downloads.length - 1 && (
                        <span className="cursor-default">•</span>
                      )}
                    </Fragment>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DesignProcess;
