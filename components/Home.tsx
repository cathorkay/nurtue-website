import Image from "components/Image";

const Home: React.FC = () => {
  return (
    <section className="section bg-theme-lightblue">
      <div className="h-full container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-12 sm:space-x-24 pt-14 sm:pt-16">
        <Image
          className="mx-auto w-11/12 h-auto sm:mx-0 sm:w-auto sm:h-96"
          src="logo-image.png"
          alt="logo"
          width={1024}
          height={1024}
        />
        <div className="flex flex-col items-center w-full h-2/5 sm:w-2/5 sm:h-auto text-theme-green text-center sm:text-left mt-8 sm:mt-0">
          <Image
            className="h-28 sm:h-48 object-contain"
            src="logo-text-phrase.png"
            alt="nurtue - grow together."
            width={1224}
            height={512}
          />
          <div className="text-base sm:text-xl mt-6 sm:mt-12">
            Guided exercises and personalized advice to promote healthy
            communication and conflict resolution between parents and children.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
