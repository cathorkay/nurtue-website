const Concept: React.FC = () => {
  return (
    <section
      style={{ backgroundColor: "#ff8e72" }}
      className="h-screen section"
    >
      <div className="h-full container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <div
          style={{ color: "#063239" }}
          className="mb-16 sm:mb-0 sm:w-1/3 text-green-700"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-12">
            Concept
          </h2>
          <div className="text-base sm:text-2xl">
            [Concept Description] The quick brown fox jumps over the lazy dog.
            The quick brown fox jumps over the lazy dog. The quick brown fox
            jumps over the lazy dog.
          </div>
        </div>
        <div className="w-full h-2/5 sm:w-2/3 ml-auto sm:ml-16 aspect-w-16 aspect-h-6">
          <iframe
            src="https://www.youtube.com/embed/MqfKg7qTKB8"
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
