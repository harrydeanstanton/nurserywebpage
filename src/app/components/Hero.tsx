export function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById('formularz');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-blue-100 to-sky-100 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl mb-6 text-gray-800">
            Witamy w Żłobku Cypisek
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Profesjonalna opieka nad dziećmi w ciepłej i bezpiecznej atmosferze. 
            Zapewniamy rozwój, zabawę i eduakację dla najmłodszych.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors shadow-lg"
          >
            Zapisz swoje dziecko
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}