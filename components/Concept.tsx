const Concept: React.FC = () => {
  return (
    <section className="section bg-theme-red">
      <div className="h-full container mx-auto flex flex-col sm:flex-row items-center justify-center px-6 lg:px-28 pt-14 sm:pt-16">
        <div className="mb-16 sm:mb-0 sm:w-1/3 text-white">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-12">
            Concept
          </h2>
          <div className="text-base sm:text-2xl">
            Nurtue connects parents with experts for recommendations, uses
            quizzes to help parents practice parenting skills and makes conflict
            resolution between parents and kids more meaningful.
          </div>
        </div>
        <div className="w-full h-2/5 sm:w-2/3 ml-auto sm:ml-16 aspect-w-16 aspect-h-6">
          <iframe
            src="https://www.youtube.com/embed/UxzL_elN3pA"
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
