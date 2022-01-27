import Image from "next/image";
import mengImage from "public/images/meng.jpg";
import catImage from "public/images/cat.jpg";
import dyllenImage from "public/images/dyllen.jpg";
import ruiImage from "public/images/rui.jpg";

const teamMembers = [
  {
    name: "Meng G",
    photo: mengImage,
    role: "Role",
  },
  {
    name: "Catherine H",
    photo: catImage,
    role: "Role",
  },
  {
    name: "Dyllen N",
    photo: dyllenImage,
    role: "Role",
  },
  {
    name: "Rui Y",
    photo: ruiImage,
    role: "Developer",
  },
];

const Team: React.FC = () => {
  return (
    <section className="section">
      <div className="h-screen container mx-auto flex flex-col justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-green-700">
          Our Team
        </h2>
        <div className="grid grid-cols-2 gap-4 lg:flex flex-row items-center justify-between lg:space-x-4 text-green-700">
          {teamMembers.map((m) => (
            <div key={m.name} className="flex flex-col items-center">
              <div className="rounded-full h-32 w-32 lg:h-44 lg:w-44 shadow-2xl">
                <Image className="rounded-full" src={m.photo} alt={m.name} />
              </div>
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
