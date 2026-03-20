import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { EnrollmentForm } from './components/EnrollmentForm';
import { Footer } from './components/Footer';
import { ComingSoon } from './components/ComingSoon';

export default function App() {
  const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE;
  const isMaintenance =
    maintenanceMode === 'true' || maintenanceMode === '1';

  if (isMaintenance) {
    return <ComingSoon />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Location />
      <Contact />
      <EnrollmentForm />
      <Footer />
    </div>
  );
}