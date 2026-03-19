export function About() {
  return (
    <section id="o-nas" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-800">
            O naszym żłobku
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-green-700">Nasza Misja</h3>
              <p className="text-gray-700 leading-relaxed">
                Żłobek Cypisek to miejsce, gdzie każde dziecko jest traktowane indywidualnie. 
                Zapewniamy profesjonalną opiekę, wspieramy rozwój emocjonalny, społeczny i 
                intelektualny w atmosferze pełnej ciepła i bezpieczeństwa.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-2xl">
              <h3 className="text-2xl mb-4 text-blue-700">Dlaczego my?</h3>
              <p className="text-gray-700 leading-relaxed">
                Posiadamy wykwalifikowany personel z wieloletnim doświadczeniem, nowoczesne 
                sale zabaw, zdrowe posiłki przygotowywane na miejscu oraz bogaty program 
                zajęć rozwojowych dostosowanych do wieku dzieci.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-gradient-to-r from-green-50 via-blue-50 to-green-50 p-8 rounded-2xl">
            <h3 className="text-2xl mb-4 text-green-700">Godziny otwarcia</h3>
            <p className="text-gray-700">
              <strong>Poniedziałek - Piątek:</strong> 7:00 - 18:00<br />
              <strong>Wiek dzieci:</strong> 1-3 lata
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}