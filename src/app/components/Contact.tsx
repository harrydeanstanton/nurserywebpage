import { Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-gray-800">
            Skontaktuj się z nami
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-gray-800">Telefon</h3>
            <p className="text-gray-700">+48 123 456 789</p>
            <p className="text-sm text-gray-500 mt-2">Pon-Pt 7:00-18:00</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-gradient-to-br from-blue-500 to-sky-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-gray-800">Email</h3>
            <p className="text-gray-700">kontakt@cypisek.pl</p>
            <p className="text-sm text-gray-500 mt-2">Odpowiadamy w 24h</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="bg-gradient-to-br from-emerald-500 to-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-3 text-gray-800">Godziny</h3>
            <p className="text-gray-700">Pon-Pt</p>
            <p className="text-gray-700">7:00 - 18:00</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}