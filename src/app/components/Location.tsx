import { MapPin } from 'lucide-react';

export function Location() {
  return (
    <section id="lokalizacja" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-800">
          Nasze lokalizacje
        </h2>
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-gray-600 mb-12">
            Żłobek Cypisek posiada dwie placówki w Szamotułach
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Location 1: Kopernika */}
            <div>
              <div className="mb-6 flex items-start gap-4 bg-green-50 p-6 rounded-xl">
                <div className="bg-green-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-800">Placówka Kopernika</h3>
                  <p className="text-gray-700">
                    ul. Kopernika 4<br />
                    64-500 Szamotuły<br />
                    Polska
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5!2d16.577!3d52.609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045e3f1b0e8b1f%3A0x1!2sKopernika%204%2C%2064-500%20Szamotu%C5%82y!5e0!3m2!1spl!2spl!4v1635000000000!5m2!1spl!2spl"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Żłobka Cypisek - Kopernika"
                ></iframe>
              </div>
            </div>

            {/* Location 2: Łąkowa */}
            <div>
              <div className="mb-6 flex items-start gap-4 bg-blue-50 p-6 rounded-xl">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-800">Placówka Łąkowa</h3>
                  <p className="text-gray-700">
                    ul. Łąkowa 9<br />
                    64-500 Szamotuły<br />
                    Polska
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.5!2d16.577!3d52.609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045e3f1b0e8b1f%3A0x2!2s%C5%81%C4%85kowa%209%2C%2064-500%20Szamotu%C5%82y!5e0!3m2!1spl!2spl!4v1635000000001!5m2!1spl!2spl"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja Żłobka Cypisek - Łąkowa"
                ></iframe>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Obie placówki znajdują się w Szamotułach z łatwym dostępem
          </p>
        </div>
      </div>
    </section>
  );
}