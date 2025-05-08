'use client';

import { useState } from 'react';

export default function Page() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<any | null>(null);

  const handleAnalyze = () => {
    if (!url) return;

    // Aquí puedes personalizar los textos más adelante
    setData({
      resumen: 'Esta es una startup innovadora en el campo de la tecnología.',
      url,
      oportunidades: 'Gran potencial de crecimiento en el mercado de IA.',
      contexto: 'En el ecosistema de startups tecnológicas, está emergiendo como líder en su nicho.',
      diferenciadores: 'Uso de IA avanzada y automatización de procesos.',
      expansion: 'Actualmente expandiendo su tecnología hacia nuevos mercados internacionales.',
      recomendacion: 'Recomendada para inversión debido a su modelo escalable y su tecnología disruptiva.',
    });
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Analiza tu Startup
      </h1>

      <div className="w-full max-w-md flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Ingresa la URL de la startup"
          className="flex-1 px-4 py-2 rounded border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          onClick={handleAnalyze}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Analizar
        </button>
      </div>

      {data && (
        <section className="w-full max-w-2xl bg-white shadow-md rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">📋 Perfil Ejecutivo</h2>

          <div>
            <h3 className="font-bold text-gray-700">Resumen Ejecutivo</h3>
            <p className="text-gray-600">{data.resumen}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">URL Analizada</h3>
            <p className="text-blue-600 underline">{data.url}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Oportunidades Estratégicas</h3>
            <p className="text-gray-600">{data.oportunidades}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Contexto del Ecosistema</h3>
            <p className="text-gray-600">{data.contexto}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Diferenciadores Clave</h3>
            <p className="text-gray-600">{data.diferenciadores}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Expansión Tecnológica</h3>
            <p className="text-gray-600">{data.expansion}</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-700">Recomendación Ejecutiva</h3>
            <p className="text-gray-600">{data.recomendacion}</p>
          </div>
        </section>
      )}
    </main>
  );
}

