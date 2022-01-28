import Image from "components/Image";

const teamMembers = [
  {
    name: "Meng G",
    photo: "meng.jpg",
    role: "Role",
  },
  {
    name: "Catherine H",
    photo: "cat.jpg",
    role: "Role",
  },
  {
    name: "Dyllen N",
    photo: "dyllen.jpg",
    role: "Role",
  },
  {
    name: "Rui Y",
    photo: "rui.jpg",
    role: "Developer",
  },
];

const Team: React.FC = () => {
  return (
    <section
      style={{ backgroundColor: "#5ec1e8" }}
      className="h-screen section"
    >
      <div
        style={{ color: "#063239" }}
        className="h-full container mx-auto flex flex-col justify-center px-6 lg:px-28 pt-14 sm:pt-16 text-green-700"
      >
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:flex flex-row items-center justify-between lg:space-x-4">
          {teamMembers.map((m) => (
            <div key={m.name} className="flex flex-col items-center">
              <Image
                className="rounded-full h-32 w-32 lg:h-44 lg:w-44 shadow-2xl"
                src={m.photo}
                alt={m.name}
              />
              <div className="text-base lg:text-lg font-medium mt-2 lg:mt-6">
                {m.name}
              </div>
              <div className="lg:mt-1">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
