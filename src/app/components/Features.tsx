import { Heart, Baby, Clock } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Heart,
      title: 'Indywidualna opieka',
      description: 'Każde dziecko otrzymuje osobistą uwagę i troskę dostosowaną do jego potrzeb',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Baby,
      title: 'Bezpieczne środowisko',
      description: 'Nowoczesne, bezpieczne sale zabaw i wypoczynku z profesjonalnym wyposażeniem',
      color: 'from-blue-400 to-sky-500'
    },
    {
      icon: Clock,
      title: 'Elastyczne godziny',
      description: 'Dostosowujemy się do potrzeb rodziców - opieka od 7:00 do 18:00',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12 text-gray-800">
          Nasze atuty
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}