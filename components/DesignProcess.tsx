import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const listItems = [
  {
    name: "Needfinding",
    download1: {
      name: "PDF",
      link: "",
    },
    download2: {
      name: "PPT",
      link: "",
    },
  },
  {
    name: "Point of Views & Experience Prototypes",
    download1: {
      name: "PDF",
      link: "",
    },
    download2: {
      name: "PPT",
      link: "",
    },
  },
  {
    name: "Concept Video",
    download1: {
      name: "YouTube",
      link: "",
    },
    download2: {
      name: "MP4",
      link: "",
    },
  },
  {
    name: "Low-fi Prototype",
    download1: {
      name: "Link",
      link: "",
    },
    download2: {
      name: "Instructions",
      link: "",
    },
  },
  {
    name: "Medium-Fi Prototype",
    download1: {
      name: "Link",
      link: "",
    },
    download2: {
      name: "Instructions",
      link: "",
    },
  },
  {
    name: "Group Heuristic Evaluation",
    download1: {
      name: "PDF",
      link: "",
    },
    download2: {
      name: "PPT",
      link: "",
    },
  },
  {
    name: "High-fi Prototype",
    download1: {
      name: "YouTube",
      link: "",
    },
    download2: {
      name: "MP4",
      link: "",
    },
  },
  {
    name: "Pitch Slides",
    download1: {
      name: "PDF",
      link: "",
    },
    download2: {
      name: "PPT",
      link: "",
    },
  },
  {
    name: "Poster",
    download1: {
      name: "PDF",
      link: "",
    },
    download2: {
      name: "Source",
      link: "",
    },
  },
];

const DesignProcess: React.FC = () => {
  return (
    <section className="h-screen section">
      <div className="h-full container mx-auto flex flex-col justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-12 text-green-700">
          Design Process
        </h2>
        <table className="table-auto w-full text-white">
          <thead>
            <tr className="bg-green-700 font-medium text-base sm:text-lg">
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
                className="text-sm sm:text-base odd:bg-green-600 even:bg-green-700"
              >
                <td className="p-2 sm:p-3 font-medium">{item.name}</td>
                <td className="p-1 sm:p-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.download1.link}
                  >
                    {item.download1.name}
                  </a>
                </td>
                <td className="p-1 sm:p-2">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.download2.link}
                  >
                    {item.download2.name}
                  </a>
                </td>
                {/* <td className="p-2">
                  {item.download3 ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.download3.link}
                    >
                      {item.download3.name}
                    </a>
                  ) : null}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DesignProcess;
