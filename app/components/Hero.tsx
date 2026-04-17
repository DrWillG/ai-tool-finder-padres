'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BASE_PATH } from '@/app/lib/basePath';

interface HeroProps { onStart: () => void; }

export default function Hero({ onStart }: HeroProps) {
  const stats = [
    { value: '80%', label: 'de los padres se preocupan por la dependencia excesiva de la IA' },
    { value: '75%', label: 'quieren orientación sobre la IA para sus hijos' },
    { value: '24', label: 'herramientas revisadas y clasificadas por seguridad' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 flex flex-col items-center px-4 py-10">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-10">
        <Image src={`${BASE_PATH}/logo.png`} alt="Right Path Educational Consulting" width={320} height={100} priority className="h-20 w-auto object-contain" />
      </motion.div>

      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-3xl">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          style={{ backgroundColor: '#F3EDF9', color: '#6B35A0' }}>
          <span>🛡️</span> Creado para padres, basado en respuestas de padres
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center leading-tight mb-4">
          Encuentra las herramientas de IA correctas{' '}
          <span style={{ color: '#6B35A0' }}>para tu hijo/a</span>
          {' '}— de forma segura.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-500 text-center max-w-xl mb-4 leading-relaxed">
          Responde 5 preguntas rápidas. Obtén recomendaciones de herramientas de IA apropiadas para su edad que desarrollan habilidades reales — no atajos.
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-gray-400 text-center mb-10">
          Recomendaciones basadas en encuestas de padres de Blue Ridge Academy y la Conferencia CAAASA
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.35 }}
          onClick={onStart}
          className="px-8 py-4 text-white font-semibold text-lg rounded-2xl shadow-lg transition-all duration-200 flex items-center gap-2 mb-14"
          style={{ backgroundColor: '#C48A2A', boxShadow: '0 8px 24px rgba(196,138,42,0.3)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#a8741f')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#C48A2A')}>
          Encontrar herramientas para mi hijo/a
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap gap-8 justify-center">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-3xl font-bold" style={{ color: '#6B35A0' }}>{s.value}</p>
              <p className="text-sm text-gray-500 mt-1 max-w-[160px] leading-tight">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">Privacidad y seguridad primero</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['Clasificado COPPA', 'FERPA Consciente', 'Opciones Sin Anuncios', 'Sin Venta de Datos'].map((label) => (
              <span key={label} className="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">✓ {label}</span>
            ))}
          </div>
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 text-sm italic" style={{ color: '#C48A2A' }}>
          ¡Todos merecen el camino correcto!
        </motion.p>
      </div>
    </div>
  );
}
