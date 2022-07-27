import Image from "components/Image";

const Home: React.FC = () => {
  return (
    <section className="section bg-theme-lightblue relative overflow-hidden">
      <div className="h-full container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-start px-6 lg:px-12 pt-14 sm:pt-16">
        <div className="flex flex-col items-center w-full sm:w-5/12 text-theme-green text-center">
          <Image
            className="mx-auto h-auto w-5/6 sm:h-48 sm:w-48"
            src="logo-image.png"
            alt="logo"
            width={1024}
            height={1024}
          />
          <Image
            className="h-28 sm:h-48 object-contain mt-4 sm:mt-4"
            src="logo-text-phrase.png"
            alt="nurtue - grow together."
            width={1224}
            height={512}
          />
          <div className="text-base text-center sm:text-xl mt-10 sm:mt-12 sm:w-11/12">
            Nurtue exists to improve the relationship between parents and their
            children through healthy communication habits, guided conflict
            resolution, and communal support.
          </div>
        </div>
        <div className="hidden sm:flex items-center absolute -z-10 inset-y-0 left-1/4 h-screen w-full">
          <Image
            className="h-full object-contain -mb-32"
            src="WebsiteBannerNew.png"
            alt="App screenshots"
            width={2052}
            height={1740}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
