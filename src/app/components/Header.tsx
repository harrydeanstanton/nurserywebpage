import logo from '../../assets/cypisek.jpg';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Żłobek Cypisek Logo" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-2xl text-green-600">Żłobek Cypisek</h1>
              <p className="text-sm text-gray-600">Twoje dziecko w dobrych rękach</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('o-nas')} className="text-gray-700 hover:text-green-600 transition-colors">
              O nas
            </button>
            <button onClick={() => scrollToSection('lokalizacja')} className="text-gray-700 hover:text-green-600 transition-colors">
              Lokalizacja
            </button>
            <button onClick={() => scrollToSection('kontakt')} className="text-gray-700 hover:text-green-600 transition-colors">
              Kontakt
            </button>
            <button onClick={() => scrollToSection('formularz')} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              Zapisz dziecko
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}