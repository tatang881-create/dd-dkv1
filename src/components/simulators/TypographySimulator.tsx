import React, { useState } from 'react';
import { Type, Sparkles, MoveHorizontal, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export const TypographySimulator: React.FC<Props> = ({ imageSrc }) => {
  const [fontFamily, setFontFamily] = useState<'serif' | 'sans-serif' | 'monospace' | 'cursive'>('serif');
  const [fontSize, setFontSize] = useState<number>(36);
  const [leading, setLeading] = useState<number>(1.2); // Line height
  const [kerning, setKerning] = useState<number>(0); // Letter spacing
  const [sampleText, setSampleText] = useState<string>('SURAKARTA DKV 2026');
  const [headlineStyle, setHeadlineStyle] = useState<'titleCase' | 'allCaps' | 'brokenWrong' | 'brokenCorrect'>('titleCase');

  const fontOptions = [
    { label: 'Serif (Kait / Klasik - Times / Baskerville)', value: 'serif', style: 'font-serif' },
    { label: 'Sans Serif (Tanpa Kait / Modern - Helvetica)', value: 'sans-serif', style: 'font-sans' },
    { label: 'Monospace (Lebar Sama / Sederhana - Courier)', value: 'monospace', style: 'font-mono' },
    { label: 'Script / Tulis (Coretan Tangan / Akrab)', value: 'cursive', style: 'italic font-serif' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Type className="w-4 h-4" />
            <span>Laboratorium Simulasi 1 · Tipografi & Tata Letak Huruf</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Eksplorasi Anatomi, Leading, Kerning, & Hierarki Headline</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Buku DD DKV Semester 2 Bab 1 (James Craig & Kusrianto 2007)</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-medium">Interaktif Real-time</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left: Interactive Canvas */}
        <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-slate-950 text-white min-h-[380px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
            <span>Pratinjau Kanvas Huruf (Display Stage)</span>
            <span className="font-mono text-emerald-400">Ratio: {leading}x · Spacing: {kerning}px</span>
          </div>

          {/* Stage Area */}
          <div className="my-auto py-8 text-center flex flex-col items-center justify-center">
            {headlineStyle === 'titleCase' && (
              <div
                style={{
                  fontFamily,
                  fontSize: `${fontSize}px`,
                  lineHeight: leading,
                  letterSpacing: `${kerning}px`
                }}
                className="transition-all duration-150 max-w-full overflow-hidden text-slate-100 font-semibold"
              >
                {sampleText}
              </div>
            )}

            {headlineStyle === 'allCaps' && (
              <div
                style={{
                  fontFamily,
                  fontSize: `${fontSize}px`,
                  lineHeight: leading,
                  letterSpacing: `${kerning}px`
                }}
                className="transition-all duration-150 uppercase max-w-full overflow-hidden text-amber-300 font-bold"
              >
                {sampleText}
              </div>
            )}

            {headlineStyle === 'brokenWrong' && (
              <div className="text-left max-w-md bg-slate-900/90 p-4 rounded-lg border border-red-500/50">
                <div className="text-xs text-red-400 font-mono mb-2 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Contoh Pemenggalan Salah (Buku hlm. 21 Gambar 1.19):</span>
                </div>
                <div style={{ fontFamily }} className="text-xl font-bold text-red-200 leading-tight">
                  Desain Komunikasi Visual dalam <br />
                  Industri Kreatif di Era Metaverse
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Kata &ldquo;dalam Industri&rdquo; diputus di baris terpisah mengakibatkan kebingungan persepsi pembaca.
                </p>
              </div>
            )}

            {headlineStyle === 'brokenCorrect' && (
              <div className="text-left max-w-md bg-slate-900/90 p-4 rounded-lg border border-emerald-500/50">
                <div className="text-xs text-emerald-400 font-mono mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Contoh Pemenggalan Benar (Buku hlm. 21 Gambar 1.20):</span>
                </div>
                <div style={{ fontFamily }} className="text-xl font-bold text-emerald-200 leading-tight">
                  Desain Komunikasi Visual dalam Industri Kreatif <br />
                  di Era Metaverse
                </div>
                <p className="text-[11px] text-slate-400 mt-2">
                  Frasa makna utuh dipertahankan dalam satu kesatuan baris secara harmonis.
                </p>
              </div>
            )}

            {/* Micro Annotation of Typography Anatomy */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 w-full flex justify-around text-[11px] text-slate-400 font-mono">
              <div>Capline: <span className="text-blue-400">Atas Huruf Kapital</span></div>
              <div>x-Height: <span className="text-amber-400">Badan Huruf Kecil</span></div>
              <div>Baseline: <span className="text-emerald-400">Garis Pijak Maya</span></div>
              <div>Descender: <span className="text-purple-400">Ekor Menembus Bawah</span></div>
            </div>
          </div>

          {imageSrc && (
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3">
              <img src={imageSrc} alt="Laboratorium Tipografi" className="w-16 h-12 object-cover rounded border border-slate-700" />
              <p className="text-[11px] text-slate-400">
                Gambar acuan: Buku Bab 1 Gambar 1.23 & 1.24 (Studi Kasus Pasangan Huruf AV & kata SURAKARTA).
              </p>
            </div>
          )}
        </div>

        {/* Right: Parameter Controls */}
        <div className="lg:col-span-5 p-6 bg-slate-50 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">1. Pilih Keluarga Huruf (James Craig)</label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value as any)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {fontOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                <span>2. Ukuran Font</span>
                <span className="font-mono text-blue-600">{fontSize} pt</span>
              </div>
              <input
                type="range"
                min="18"
                max="64"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                <span>3. Leading (Jarak Antarbaris)</span>
                <span className="font-mono text-blue-600">{leading.toFixed(2)}x ({Math.round(fontSize * leading)} pt)</span>
              </div>
              <input
                type="range"
                min="0.8"
                max="2.2"
                step="0.05"
                value={leading}
                onChange={(e) => setLeading(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Standar buku: Naskah 10 pt idealnya berjarak 12 pt (1.2x) untuk mencegah tabrakan ascender-descender.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                <span>4. Tracking / Kerning (Letter-Spacing)</span>
                <span className="font-mono text-blue-600">{kerning} px</span>
              </div>
              <input
                type="range"
                min="-4"
                max="18"
                value={kerning}
                onChange={(e) => setKerning(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Kerning mengatur jarak 2 karakter individual (contoh A dan V). Tracking mengatur jarak seluruh kata secara seragam.
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">5. Teks Percobaan</label>
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Masukkan kata percobaan..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">6. Uji Kaidah Headline (Buku hlm. 19-21)</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setHeadlineStyle('titleCase')}
                  className={`p-2 rounded-lg border text-left font-medium transition-colors ${headlineStyle === 'titleCase' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                >
                  Huruf Awal Kapital (Ideal)
                </button>
                <button
                  type="button"
                  onClick={() => setHeadlineStyle('allCaps')}
                  className={`p-2 rounded-lg border text-left font-medium transition-colors ${headlineStyle === 'allCaps' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                >
                  Semua Kapital (Tradisional)
                </button>
                <button
                  type="button"
                  onClick={() => setHeadlineStyle('brokenWrong')}
                  className={`p-2 rounded-lg border text-left font-medium transition-colors ${headlineStyle === 'brokenWrong' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                >
                  Pemenggalan Salah
                </button>
                <button
                  type="button"
                  onClick={() => setHeadlineStyle('brokenCorrect')}
                  className={`p-2 rounded-lg border text-left font-medium transition-colors ${headlineStyle === 'brokenCorrect' ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'}`}
                >
                  Pemenggalan Benar
                </button>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Formula AIDA: Attention · Interest · Desire · Action</span>
            <button
              onClick={() => {
                setFontFamily('serif');
                setFontSize(36);
                setLeading(1.2);
                setKerning(0);
                setSampleText('SURAKARTA DKV 2026');
                setHeadlineStyle('titleCase');
              }}
              className="text-blue-600 hover:underline font-semibold"
            >
              Reset Setelan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
