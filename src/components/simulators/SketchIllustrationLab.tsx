import React, { useState } from 'react';
import { Lightbulb, CheckCircle2, RotateCcw, AlertCircle, Sparkles, ChevronRight, Palette, Layers, Award } from 'lucide-react';

interface BriefOption {
  id: string;
  client: string;
  product: string;
  targetAudience: string;
  tone: string;
  coreMessage: string;
}

const SAMPLE_BRIEFS: BriefOption[] = [
  {
    id: 'brief-1',
    client: 'Kopi Ciremai Lestari (Kuningan)',
    product: 'Kopi Arabika Gunung Ciremai Kemasan Pouch',
    targetAudience: 'Kaum urban muda (usia 20-35 tahun), penikmat kopi spesialti',
    tone: 'Alami, premium, hangat, dan kental kearifan lokal Sunda',
    coreMessage: 'Cita rasa kopi organik dari lereng tertinggi Jawa Barat dengan proses ramah lingkungan (Adiwiyata).'
  },
  {
    id: 'brief-2',
    client: 'Dinas Pariwisata Kab. Kuningan',
    product: 'Poster Kampanye Sadar Wisata Alam Lembah Cilengkrang',
    targetAudience: 'Keluarga dan pelajar pencinta petualangan alam',
    tone: 'Segar, menggembirakan (Joyful), edukatif, dan penuh inspirasi',
    coreMessage: 'Jaga keasrian flora-fauna dan kebersihan mata air panas alami Kuningan.'
  }
];

export const SketchIllustrationLab: React.FC = () => {
  const [selectedBriefIndex, setSelectedBriefIndex] = useState<number>(0);
  const currentBrief = SAMPLE_BRIEFS[selectedBriefIndex];

  // User input states
  const [conceptKeywords, setConceptKeywords] = useState<string>('organik, ciremai, modern');
  const [chosenTechnique, setChosenTechnique] = useState<'arsir' | 'dussel' | 'pointilis' | 'aquarel'>('arsir');
  const [compositionStyle, setCompositionStyle] = useState<'simetris' | 'asimetris' | 'radial'>('asimetris');
  const [focalPoint, setFocalPoint] = useState<'daun' | 'gunung' | 'cangkir'>('gunung');
  const [colorScheme, setColorScheme] = useState<'earthy' | 'vibrant' | 'monochrome'>('earthy');
  const [studentEvaluation, setStudentEvaluation] = useState<string>('');
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

  const handleReset = () => {
    setConceptKeywords('organik, ciremai, modern');
    setChosenTechnique('arsir');
    setCompositionStyle('asimetris');
    setFocalPoint('gunung');
    setColorScheme('earthy');
    setStudentEvaluation('');
    setIsEvaluated(false);
  };

  // Automated scoring rubric calculation
  const calculateConceptScore = () => {
    let score = 70;
    if (conceptKeywords.length > 10) score += 10;
    if (currentBrief.id === 'brief-1' && colorScheme === 'earthy') score += 10;
    if (compositionStyle === 'asimetris') score += 5;
    if (studentEvaluation.length > 20) score += 5;
    return Math.min(100, score);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Lightbulb className="w-4 h-4" />
            <span>Laboratorium Simulasi 6 · Sketsa & Pengembangan Konsep Ilustrasi</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Eksplorasi Ide dari Creative Brief, Komposisi, & Evaluasi Sketsa</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Buku DD DKV Semester 1 Bab 5 hlm. 93-131</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 rounded bg-amber-100 text-amber-900 font-medium">
            Model Simulasi Desain Edukatif
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left: Interactive Canvas Visualizer */}
        <div className="lg:col-span-7 p-6 bg-slate-950 text-white flex flex-col justify-between min-h-[460px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
            <span>Visualisasi Konsep Sketsa Dinamis</span>
            <span className="font-mono text-emerald-400">Teknik: {chosenTechnique.toUpperCase()} · Komposisi: {compositionStyle.toUpperCase()}</span>
          </div>

          {/* Interactive Artwork Stage */}
          <div className="relative my-6 aspect-4/3 max-w-md mx-auto w-full bg-slate-900 border border-slate-800 rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center">
            {/* Background Texture based on Color Scheme */}
            <div className={`absolute inset-0 transition-all duration-300 ${
              colorScheme === 'earthy'
                ? 'bg-linear-to-b from-amber-950/40 via-stone-900 to-slate-950'
                : colorScheme === 'vibrant'
                ? 'bg-linear-to-tr from-blue-950/60 via-indigo-900/40 to-emerald-950/40'
                : 'bg-linear-to-b from-slate-900 to-black'
            }`} />

            {/* Simulated Vector Path Lines (Arsir / Dussel / Pointilis) */}
            <svg viewBox="0 0 300 220" className="w-full h-full relative z-10">
              <defs>
                {/* Crosshatch pattern */}
                <pattern id="hatch-pat" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#94A3B8" strokeWidth="1" />
                </pattern>
                {/* Dots pattern */}
                <pattern id="dot-pat" width="6" height="6" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.2" fill="#E2E8F0" />
                </pattern>
              </defs>

              {/* Mountains element */}
              <polygon
                points={compositionStyle === 'simetris' ? "50,160 150,60 250,160" : "30,170 120,50 220,170"}
                fill={chosenTechnique === 'pointilis' ? "url(#dot-pat)" : chosenTechnique === 'arsir' ? "url(#hatch-pat)" : "#475569"}
                stroke="#CBD5E1"
                strokeWidth={chosenTechnique === 'aquarel' ? "1" : "2"}
                opacity={chosenTechnique === 'dussel' ? "0.6" : "0.9"}
                filter={chosenTechnique === 'dussel' ? "blur(1px)" : undefined}
              />

              {/* Sun / Coffee Cup / Leaves focal point */}
              {focalPoint === 'gunung' && (
                <circle cx={compositionStyle === 'simetris' ? "150" : "190"} cy="75" r="28" fill="#F59E0B" opacity="0.8" />
              )}

              {focalPoint === 'daun' && (
                <path
                  d="M 120,130 C 140,80 190,90 200,120 C 190,160 140,160 120,130 Z"
                  fill="#10B981"
                  stroke="#34D399"
                  strokeWidth="2"
                  opacity="0.85"
                />
              )}

              {focalPoint === 'cangkir' && (
                <g transform="translate(110, 110)">
                  <path d="M 10 20 L 70 20 L 60 65 L 20 65 Z" fill="#D97706" stroke="#FDE68A" strokeWidth="2" />
                  <path d="M 70 30 Q 90 40 70 55" fill="none" stroke="#FDE68A" strokeWidth="2" />
                </g>
              )}

              {/* Foreground Grass / Contour */}
              <path
                d="M 0,190 Q 75,170 150,185 T 300,180 L 300,220 L 0,220 Z"
                fill="#1E293B"
                stroke="#64748B"
                strokeWidth="1.5"
              />
            </svg>

            <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-center text-[11px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-md border border-slate-800">
              <span>Fokus Visual: {focalPoint.toUpperCase()}</span>
              <span>Skema: {colorScheme.toUpperCase()}</span>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Model Komposisi Desain Visual Berbantuan Komputer</span>
            <span className="text-amber-400">Kurikulum Merdeka SMK</span>
          </div>
        </div>

        {/* Right: Creative Brief & Conception Controls */}
        <div className="lg:col-span-5 p-6 bg-slate-50 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            {/* Brief Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">1. Pilih Studi Kasus Creative Brief:</label>
              <select
                value={selectedBriefIndex}
                onChange={(e) => {
                  setSelectedBriefIndex(Number(e.target.value));
                  setIsEvaluated(false);
                }}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 font-bold focus:ring-2 focus:ring-blue-500"
              >
                {SAMPLE_BRIEFS.map((b, idx) => (
                  <option key={b.id} value={idx}>{b.client} · {b.product}</option>
                ))}
              </select>
            </div>

            {/* Brief Detail Card */}
            <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs space-y-1.5 text-slate-700">
              <div><strong className="text-blue-900">Target Sasaran (Who to Say):</strong> {currentBrief.targetAudience}</div>
              <div><strong className="text-blue-900">Kesan / Tone Visual:</strong> {currentBrief.tone}</div>
              <div className="text-[11px] text-slate-600"><strong className="text-blue-900">Pesan Inti (What to Say):</strong> {currentBrief.coreMessage}</div>
            </div>

            {/* Keyword Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">2. Kata Kunci Konsep Ide (Brainstorming):</label>
              <input
                type="text"
                value={conceptKeywords}
                onChange={(e) => setConceptKeywords(e.target.value)}
                placeholder="Contoh: alam, tenang, kopi, ciremai..."
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg text-slate-800"
              />
            </div>

            {/* Technique Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">3. Teknik Gambar Sketsa (Buku hlm. 96-97):</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  { id: 'arsir', label: 'Arsir (Garis Sejajar/Silang)' },
                  { id: 'dussel', label: 'Dussel (Gosok Halus Kapas)' },
                  { id: 'pointilis', label: 'Pointilis (Sebaran Titik)' },
                  { id: 'aquarel', label: 'Aquarel (Sapuan Cat Air Basah)' }
                ].map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setChosenTechnique(t.id as any)}
                    className={`p-2 rounded-lg border text-left font-medium transition-all ${
                      chosenTechnique === t.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Focal Point & Color Scheme */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">4. Focal Point (Center of Interest):</label>
                <select
                  value={focalPoint}
                  onChange={(e) => setFocalPoint(e.target.value as any)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium"
                >
                  <option value="gunung">Gunung Ciremai</option>
                  <option value="daun">Daun Kopi Organik</option>
                  <option value="cangkir">Cangkir Hangat</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">5. Skema Warna (Buku hlm. 114):</label>
                <select
                  value={colorScheme}
                  onChange={(e) => setColorScheme(e.target.value as any)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium"
                >
                  <option value="earthy">Earthy (Cokelat/Kuningan)</option>
                  <option value="vibrant">Vibrant (Segar Cerah)</option>
                  <option value="monochrome">Monochrome (Hitam Putih)</option>
                </select>
              </div>
            </div>

            {/* Self Evaluation */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                6. Refleksi Evaluasi Konsep terhadap Brief (Deep Learning):
              </label>
              <textarea
                rows={2}
                value={studentEvaluation}
                onChange={(e) => setStudentEvaluation(e.target.value)}
                placeholder="Bagaimana pilihan teknik sketsa dan focal point di atas menjawab kebutuhan klien?"
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg text-slate-800"
              />
            </div>
          </div>

          {/* Feedback & Actions */}
          <div className="pt-3 border-t border-slate-200 space-y-3">
            {isEvaluated && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                <div className="flex items-center justify-between font-bold text-emerald-900">
                  <span>Skor Kelayakan Konsep Visual:</span>
                  <span className="font-mono text-sm">{calculateConceptScore()} / 100</span>
                </div>
                <p className="text-emerald-800 text-[11px]">
                  Konsep Anda memiliki keselarasan kuat dengan target audiens. Komposisi {compositionStyle} dengan fokus {focalPoint} menghadirkan hirarki visual yang seimbang.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>

              <button
                onClick={() => setIsEvaluated(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                Uji & Evaluasi Konsep Sketsa
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
