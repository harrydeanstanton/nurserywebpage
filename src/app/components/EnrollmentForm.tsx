import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Toaster } from './ui/sonner';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate EmailJS configuration
      if (
        emailjsConfig.serviceId === 'your_service_id' ||
        emailjsConfig.templateId === 'your_template_id' ||
        emailjsConfig.publicKey === 'your_public_key' ||
        !emailjsConfig.serviceId ||
        !emailjsConfig.templateId ||
        !emailjsConfig.publicKey
      ) {
        toast.error('Konfiguracja EmailJS nie jest ustawiona', {
          description: 'Proszę skonfigurować EmailJS w pliku .env. Zobacz EMAILJS_SETUP.md'
        });
        setIsSubmitting(false);
        return;
      }

      // Prepare email template parameters
      const templateParams = {
        parent_name: formData.parentName,
        child_name: formData.childName,
        child_age: formData.childAge,
        phone: formData.phone,
        email: formData.email,
        message: formData.message || 'Brak dodatkowych informacji',
        to_email: 'jancukier@gmail.com', // Recipient email
      };

      console.log('Sending email with params:', {
        serviceId: emailjsConfig.serviceId,
        templateId: emailjsConfig.templateId,
        templateParams
      });

      // Send email using EmailJS
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', response);

      toast.success('Dziękujemy za zgłoszenie!', {
        description: 'Skontaktujemy się z Państwem w ciągu 24 godzin.'
      });

      // Reset form
      setFormData({
        parentName: '',
        childName: '',
        childAge: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Wystąpił błąd podczas wysyłania formularza';
      let errorDescription = 'Proszę spróbować ponownie lub skontaktować się z nami bezpośrednio.';

      if (error?.status === 400) {
        errorMessage = 'Błąd konfiguracji EmailJS';
        errorDescription = 'Sprawdź czy Service ID, Template ID i Public Key są poprawne. Zobacz konsolę przeglądarki dla szczegółów.';
      } else if (error?.status === 401) {
        errorMessage = 'Nieautoryzowany dostęp';
        errorDescription = 'Public Key jest nieprawidłowy. Sprawdź konfigurację w .env';
      } else if (error?.status === 404) {
        errorMessage = 'Nie znaleziono zasobu';
        errorDescription = 'Service ID lub Template ID jest nieprawidłowy. Sprawdź konfigurację w .env';
      } else if (error?.text) {
        errorDescription = `Szczegóły: ${error.text}`;
      }

      toast.error(errorMessage, {
        description: errorDescription
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formularz" className="py-16 bg-white">
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4 text-gray-800">
              Zapisz swoje dziecko
            </h2>
            <p className="text-gray-600">
              Wypełnij formularz, a my skontaktujemy się z Tobą, aby umówić wizytę i omówić szczegóły
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parentName">Imię i nazwisko rodzica *</Label>
                  <Input
                    id="parentName"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white"
                    placeholder="Jan Kowalski"
                  />
                </div>
                
                <div>
                  <Label htmlFor="childName">Imię dziecka *</Label>
                  <Input
                    id="childName"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white"
                    placeholder="Zosia"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="childAge">Wiek dziecka (w miesiącach) *</Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    type="number"
                    min="12"
                    max="36"
                    value={formData.childAge}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white"
                    placeholder="18"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Numer telefonu *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white"
                    placeholder="+48 123 456 789"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Adres email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-white"
                  placeholder="jan.kowalski@example.com"
                />
              </div>

              <div>
                <Label htmlFor="message">Dodatkowe informacje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-white min-h-32"
                  placeholder="Preferowane godziny, pytania, dodatkowe informacje..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6"
              >
                {isSubmitting ? (
                  'Wysyłanie...'
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij zgłoszenie
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}