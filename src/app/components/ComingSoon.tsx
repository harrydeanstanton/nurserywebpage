import { Clock } from 'lucide-react';

const defaultMessage =
  'Aktualnie przeprowadzamy konserwację. Strona wkrótce będzie ponownie dostępna.';

export function ComingSoon() {
  const message = import.meta.env.VITE_MAINTENANCE_MESSAGE || defaultMessage;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-green-100 p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center text-white">
          <Clock className="w-9 h-9" />
        </div>

        <h1 className="mt-6 text-4xl font-bold text-gray-900">Coming soon</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">{message}</p>

        <p className="mt-8 text-sm text-gray-500">
          Thanks for your patience.
        </p>
      </div>
    </div>
  );
}

