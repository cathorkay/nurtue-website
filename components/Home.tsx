import Image from "next/image";
import familyImage from "public/images/family.svg";

const Home: React.FC = () => {
  return (
    <section className="section">
      <div className="h-screen container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-12 sm:space-x-16 pt-14 sm:pt-16">
        <div className="w-full h-2/5 sm:w-3/5 sm:h-3/5 relative">
          <Image
            src={familyImage}
            alt="a sweet family"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
        <div className="h-2/5 sm:w-2/5 sm:h-auto text-green-700 text-center sm:text-left mt-8 sm:mt-0">
          <h1 className="font-bold text-5xl sm:text-7xl">Nurtue</h1>
          <div className="text-2xl sm:text-3xl mt-2 sm:mt-2">
            Be a better parent than you were yesterday
          </div>
          <div className="text-base sm:text-xl mt-6 sm:mt-8">
            [Project Description] The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
