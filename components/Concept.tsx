const Concept: React.FC = () => {
  return (
    <section className="section">
      <div className="h-screen container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <div className="mb-16 sm:mb-0 sm:w-1/3">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-12 text-green-700">
            Concept
          </h2>
          <div className="text-base sm:text-2xl text-green-700">
            [Concept Description] The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </div>
        </div>
        <div className="w-full h-1/4 sm:w-2/3 ml-auto sm:ml-16 aspect-w-16 aspect-h-6 ring-2 sm:ring-4 ring-green-700">
          <iframe
            src="https://www.youtube.com/embed/J9By00Fb8ng"
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

export default Concept;
