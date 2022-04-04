const Demo: React.FC = () => {
  return (
    <section className="section bg-theme-lightblue">
      <div className="h-full container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <div className="mb-16 w-full sm:mb-0 sm:w-1/3 text-theme-black">
          <h2 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-12">Demo</h2>
          <div className="text-base sm:text-2xl">
            <a
              href="files/nurtue-hi-fi-prototype-readme.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block no-underline text-center rounded-2xl ring-2 ring-theme-black bg-theme-lightblue hover:bg-cyan-200 w-full sm:w-auto px-6 py-3 sm:px-16 sm:py-4"
            >
              Try Prototype
            </a>
          </div>
        </div>
        <div className="w-full h-2/5 sm:w-9/12 ml-auto sm:ml-16 aspect-w-16 aspect-h-6">
          <iframe
            src="https://www.youtube.com/embed/O0YyyPiGg1U"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default Demo;
