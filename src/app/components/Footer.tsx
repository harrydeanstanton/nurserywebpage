import { Heart } from 'lucide-react';
import logo from '../../assets/cypisek.jpg';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logo} alt="Żłobek Cypisek" className="h-16 w-16 object-contain" />
            <h3 className="text-2xl">Żłobek Cypisek</h3>
          </div>
          
          <p className="text-teal-100 mb-6">
            Twoje dziecko w dobrych rękach - profesjonalna opieka od 2010 roku
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6 text-sm">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Placówka Kopernika</h4>
              <p className="text-teal-100">
                ul. Kopernika 4<br />
                64-500 Szamotuły
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Placówka Łąkowa</h4>
              <p className="text-teal-100">
                ul. Łąkowa 9<br />
                64-500 Szamotuły
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-teal-100 text-sm mb-2">
              Tel: +48 123 456 789 | Email: kontakt@cypisek.pl
            </p>
            <p className="text-teal-200 text-sm flex items-center justify-center gap-1">
              © 2024 Żłobek Cypisek. Stworzone z <Heart className="w-4 h-4 fill-current" /> dla dzieci.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}