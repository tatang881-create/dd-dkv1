import React, { useState } from 'react';
import { Layers, ZoomIn, Scissors, Combine, Sparkles, Check } from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export const GraphicSimulator: React.FC<Props> = ({ imageSrc }) => {
  const [activeMode, setActiveMode] = useState<'shaping' | 'comparison' | 'photoshop_layers'>('shaping');
  const [shapingOp, setShapingOp] = useState<'weld' | 'trim' | 'intersect' | 'combine' | 'minusFront'>('weld');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activeLayer, setActiveLayer] = useState<number>(3); // Photoshop top layer
  const [layerVisibility, setLayerVisibility] = useState<boolean[]>([true, true, true]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Layers className="w-4 h-4" />
            <span>Laboratorium Simulasi 3 · Komputer Grafis & Operasi Vektor</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Shaping CorelDRAW, Pathfinder Vektor, & Uji Perbesaran Bitmap vs Vektor</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Buku DD DKV Semester 2 Bab 3 hlm. 90-123</p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-slate-200 p-1 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveMode('shaping')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeMode === 'shaping' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Operasi Shaping (Corel/AI)
          </button>
          <button
            onClick={() => setActiveMode('comparison')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeMode === 'comparison' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Uji Zoom 4000% (Bitmap vs Vektor)
          </button>
          <button
            onClick={() => setActiveMode('photoshop_layers')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeMode === 'photoshop_layers' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Panel Layer Photoshop
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* MODE 1: SHAPING / PATHFINDER */}
        {activeMode === 'shaping' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Canvas Display */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col items-center justify-center min-h-[340px]">
              <div className="text-xs text-slate-400 mb-6 font-mono">
                [ Kanvas Rekayasa Objek Vektor · Fitur {shapingOp.toUpperCase()} ]
              </div>

              {/* Dynamic SVG demonstrating Boolean operation */}
              <div className="relative w-64 h-48 flex items-center justify-center">
                <svg viewBox="0 0 240 180" className="w-full h-full">
                  <defs>
                    <mask id="trim-mask">
                      <rect width="240" height="180" fill="white" />
                      <circle cx="150" cy="90" r="45" fill="black" />
                    </mask>
                    <mask id="minus-front-mask">
                      <rect width="240" height="180" fill="white" />
                      <circle cx="150" cy="90" r="45" fill="black" />
                    </mask>
                    <clipPath id="intersect-clip">
                      <circle cx="150" cy="90" r="45" />
                    </clipPath>
                  </defs>

                  {/* Mode: Default Before */}
                  {shapingOp === 'weld' && (
                    <path
                      d="M 50 45 L 135 45 A 45 45 0 0 1 195 90 A 45 45 0 0 1 135 135 L 50 135 Z"
                      fill="#2563EB"
                      stroke="#60A5FA"
                      strokeWidth="3"
                      className="transition-all duration-300"
                    />
                  )}

                  {shapingOp === 'trim' && (
                    <>
                      {/* Back Rectangle cut by Circle */}
                      <rect
                        x="50"
                        y="45"
                        width="90"
                        height="90"
                        fill="#F59E0B"
                        mask="url(#trim-mask)"
                        stroke="#FBBF24"
                        strokeWidth="2"
                      />
                      {/* Cutter Circle remains */}
                      <circle
                        cx="150"
                        cy="90"
                        r="45"
                        fill="#DC2626"
                        opacity="0.85"
                        stroke="#F87171"
                        strokeWidth="2"
                      />
                    </>
                  )}

                  {shapingOp === 'intersect' && (
                    <rect
                      x="50"
                      y="45"
                      width="90"
                      height="90"
                      fill="#10B981"
                      clipPath="url(#intersect-clip)"
                      stroke="#34D399"
                      strokeWidth="2"
                    />
                  )}

                  {shapingOp === 'combine' && (
                    <g>
                      <rect
                        x="50"
                        y="45"
                        width="90"
                        height="90"
                        fill="#8B5CF6"
                        mask="url(#trim-mask)"
                        stroke="#A78BFA"
                        strokeWidth="2"
                      />
                      <circle
                        cx="150"
                        cy="90"
                        r="45"
                        fill="#8B5CF6"
                        fillRule="evenodd"
                        stroke="#A78BFA"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                    </g>
                  )}

                  {shapingOp === 'minusFront' && (
                    <rect
                      x="50"
                      y="45"
                      width="90"
                      height="90"
                      fill="#EC4899"
                      mask="url(#minus-front-mask)"
                      stroke="#F472B6"
                      strokeWidth="2"
                    />
                  )}
                </svg>
              </div>

              <div className="mt-4 text-xs font-mono text-center text-slate-300">
                {shapingOp === 'weld' && 'Weld (Menyatukan): Objek digabung utuh menjadi satu kurva tanpa batas irisan.'}
                {shapingOp === 'trim' && 'Trim (Memotong): Objek pemotong mempertahankan bentuk, objek belakang terpotong.'}
                {shapingOp === 'intersect' && 'Intersect (Irisan): Hanya area tumpang-tindih perpotongan dua objek yang dipertahankan.'}
                {shapingOp === 'combine' && 'Combine (Gabung Lubang): Objek digabung dengan rongga transparan pada area perpotongan.'}
                {shapingOp === 'minusFront' && 'Minus Front (Depan Mengurangi Belakang): Objek depan memotong objek belakang dan objek depan lenyap.'}
              </div>
            </div>

            {/* Shaping Controls */}
            <div className="lg:col-span-5 space-y-3">
              <label className="block text-xs font-semibold text-slate-700">Pilih Operasi Shaping (CorelDRAW / Illustrator):</label>

              {[
                { id: 'weld', label: '1. Weld / Unite', desc: 'Menyatukan dua atau lebih objek tanpa garis irisan.' },
                { id: 'trim', label: '2. Trim', desc: 'Memotong objek belakang dengan objek pemotong.' },
                { id: 'intersect', label: '3. Intersect', desc: 'Membuat objek baru dari perpotongan kedua objek.' },
                { id: 'combine', label: '4. Combine', desc: 'Menyatukan objek dan melubangi bagian perpotongan.' },
                { id: 'minusFront', label: '5. Minus Front / Back Minus Front', desc: 'Menghilangkan objek depan dan memotong objek di belakangnya.' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setShapingOp(item.id as any)}
                  className={`w-full p-3 rounded-lg border text-left transition-all ${
                    shapingOp === item.id ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{item.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* MODE 2: BITMAP VS VEKTOR ZOOM */}
        {activeMode === 'comparison' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-slate-50 p-4 rounded-lg border border-slate-200">
              <div className="flex items-center gap-2">
                <ZoomIn className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-semibold text-slate-800">Skala Perbesaran (Zoom Level):</span>
                <span className="font-mono text-sm font-bold text-blue-700">{zoomLevel}%</span>
              </div>
              <input
                type="range"
                min="100"
                max="800"
                step="50"
                value={zoomLevel}
                onChange={(e) => setZoomLevel(Number(e.target.value))}
                className="w-64 accent-blue-600 cursor-pointer"
              />
              <button
                onClick={() => setZoomLevel(100)}
                className="text-xs text-slate-600 hover:text-slate-900 font-medium"
              >
                Reset 100%
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Bitmap / Raster Display */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white flex flex-col items-center">
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-red-600">GAMBAR BITMAP (Raster Piksel)</span>
                  <span className="text-slate-400 font-mono">72 DPI · Pecah saat di-zoom</span>
                </div>

                <div className="my-6 w-56 h-56 border border-dashed border-slate-300 rounded-lg flex items-center justify-center overflow-hidden bg-slate-100 relative">
                  <div
                    style={{
                      transform: `scale(${zoomLevel / 100})`,
                      imageRendering: zoomLevel > 150 ? 'pixelated' : 'auto'
                    }}
                    className="w-24 h-24 rounded-full bg-linear-to-tr from-blue-600 to-indigo-800 flex items-center justify-center text-white font-bold text-xl transition-transform duration-100 shadow-md"
                  >
                    DKV
                  </div>

                  {zoomLevel > 200 && (
                    <div className="absolute bottom-2 left-2 bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-mono">
                      Efek Artefak Jagged Edges / Pikselasi Terlihat
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Tersusun dari matriks piksel (grid). Bersifat <em>resolution dependent</em>. Sangat baik untuk gradasi fotografi kompleks namun kualitas menurun saat dibesarkan.
                </p>
              </div>

              {/* Right: Vektor Display */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white flex flex-col items-center">
                <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                  <span className="font-bold text-emerald-600">GAMBAR VEKTOR (Kurva Matematis Bezier)</span>
                  <span className="text-slate-400 font-mono">Infinite Scale · Selalu Tajam</span>
                </div>

                <div className="my-6 w-56 h-56 border border-dashed border-slate-300 rounded-lg flex items-center justify-center overflow-hidden bg-slate-100 relative">
                  <div
                    style={{
                      transform: `scale(${zoomLevel / 100})`
                    }}
                    className="w-24 h-24 rounded-full bg-linear-to-tr from-emerald-500 to-teal-700 flex items-center justify-center text-white font-bold text-xl transition-transform duration-100 shadow-md"
                  >
                    DKV
                  </div>

                  {zoomLevel > 200 && (
                    <div className="absolute bottom-2 right-2 bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-mono">
                      Garis Tetap Halus & Tajam Sempurna
                    </div>
                  )}
                </div>

                <p className="text-xs text-slate-500 text-center">
                  Tersusun dari koordinat anchor point dan kurva matematis. Bersifat <em>resolution independent</em>. Standar wajib perancangan logo, tipografi, dan maskot.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* MODE 3: PHOTOSHOP LAYERS */}
        {activeMode === 'photoshop_layers' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Composite */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col items-center justify-center min-h-[340px]">
              <div className="relative w-64 h-64 border border-slate-700 rounded-lg overflow-hidden bg-slate-900 shadow-xl flex items-center justify-center">
                {/* Layer 1: Background */}
                {layerVisibility[0] && (
                  <div className="absolute inset-0 bg-linear-to-br from-blue-900 via-indigo-900 to-slate-900" />
                )}

                {/* Layer 2: Shape Decor */}
                {layerVisibility[1] && (
                  <div className="absolute w-44 h-44 rounded-full border-4 border-amber-400/80 bg-amber-500/10 backdrop-blur-xs flex items-center justify-center shadow-lg" />
                )}

                {/* Layer 3: Text Headline */}
                {layerVisibility[2] && (
                  <div className="relative z-10 text-center px-4">
                    <span className="text-2xl font-black tracking-tight text-white drop-shadow-md">
                      KREATIF 2026
                    </span>
                    <p className="text-[11px] text-amber-300 font-mono mt-1">SMK NEGERI 3 KUNINGAN</p>
                  </div>
                )}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-3">
                [ Tampilan Gabungan Multi-Layer Tanpa Merusak Gambar Asli ]
              </div>
            </div>

            {/* Layer Palette Manager */}
            <div className="lg:col-span-5 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-slate-800 pb-2 border-b border-slate-200 flex items-center justify-between">
                <span>Panel Layer (Adobe Photoshop)</span>
                <span className="text-[11px] text-slate-500">Opacity: 100% · Normal</span>
              </div>

              {[
                { id: 2, name: 'Layer 3: Teks Headline (KREATIF 2026)', type: 'Type Layer' },
                { id: 1, name: 'Layer 2: Objek Lingkaran Vektor', type: 'Shape Layer' },
                { id: 0, name: 'Layer 1: Background Gradasi Biru', type: 'Pixel Layer' },
              ].map(item => (
                <div
                  key={item.id}
                  onClick={() => setActiveLayer(item.id)}
                  className={`p-2.5 rounded-lg border flex items-center justify-between cursor-pointer transition-colors ${
                    activeLayer === item.id ? 'bg-blue-100/70 border-blue-400 text-blue-900' : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={layerVisibility[item.id]}
                      onChange={(e) => {
                        const newVis = [...layerVisibility];
                        newVis[item.id] = e.target.checked;
                        setLayerVisibility(newVis);
                      }}
                      className="accent-blue-600 rounded"
                    />
                    <div>
                      <div className="text-xs font-semibold">{item.name}</div>
                      <div className="text-[10px] text-slate-400">{item.type}</div>
                    </div>
                  </div>
                  {activeLayer === item.id && (
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-mono">Aktif</span>
                  )}
                </div>
              ))}

              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-200">
                Prinsip Buku hlm. 120: Mengatur elemen grafis pada layer terpisah memudahkan manipulasi urutan depan-belakang tanpa merusak piksel dasar.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
