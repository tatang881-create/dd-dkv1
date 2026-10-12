import React, { useState } from 'react';
import { Camera, Sun, Focus, CircleDot, Info } from 'lucide-react';

interface Props {
  imageSrc?: string;
}

export const PhotographySimulator: React.FC<Props> = ({ imageSrc }) => {
  const [aperture, setAperture] = useState<number>(2.8); // f-stop: 1.4 to 22
  const [shutterSpeed, setShutterSpeed] = useState<number>(250); // 1/250s
  const [iso, setIso] = useState<number>(200); // 100 to 6400
  const [lightingAngle, setLightingAngle] = useState<'front' | 'side' | 'rim' | 'back'>('front');
  const [shotSize, setShotSize] = useState<'CU' | 'MS' | 'LS'>('MS');
  const [cameraAngle, setCameraAngle] = useState<'eyeLevel' | 'lowAngle' | 'highAngle'>('eyeLevel');

  // Calculate lightmeter exposure index: -2 (underexposed), 0 (ideal), +2 (overexposed)
  // Base ideal lux assumed ~EV 13 for daylight
  const calcEV = Math.log2((aperture * aperture) / (1 / shutterSpeed)) - Math.log2(iso / 100);
  const targetEV = 11; // Studio target
  const evDifference = Math.round((targetEV - calcEV) * 10) / 10;

  let exposureStatus: { text: string; color: string; bg: string } = {
    text: 'Eksposur Ideal (0 EV)',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50 border-emerald-200'
  };

  if (evDifference > 1.2) {
    exposureStatus = {
      text: `Under Exposure (${evDifference > 0 ? '+' : ''}${evDifference} EV) - Foto Terlalu Gelap`,
      color: 'text-amber-800',
      bg: 'bg-amber-50 border-amber-200'
    };
  } else if (evDifference < -1.2) {
    exposureStatus = {
      text: `Over Exposure (${evDifference > 0 ? '+' : ''}${evDifference} EV) - Foto Terlalu Terang / Silau`,
      color: 'text-red-800',
      bg: 'bg-red-50 border-red-200'
    };
  }

  // Calculate depth of field blur radius (lower aperture = higher bokeh blur on background)
  const bgBlur = Math.max(0, Math.round((22 - aperture) / 2));
  // Calculate noise opacity based on ISO
  const noiseOpacity = Math.min(0.6, (iso - 100) / 5000);
  // Calculate motion blur simulation if shutter is slow (< 1/60)
  const motionBlur = shutterSpeed < 60 ? Math.round((60 - shutterSpeed) / 10) : 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Camera className="w-4 h-4" />
            <span>Laboratorium Simulasi 2 · Segitiga Eksposur & Tata Cahaya DSLR</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Simulasi Interaktif Aperture, Shutter Speed, ISO, & 5 Arah Cahaya</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Buku DD DKV Semester 2 Bab 2 hlm. 49-76</p>
        </div>

        <div className={`px-3 py-1 rounded-md border text-xs font-semibold ${exposureStatus.bg} ${exposureStatus.color}`}>
          {exposureStatus.text}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Left: Viewfinder Display */}
        <div className="lg:col-span-7 p-6 bg-slate-950 flex flex-col justify-between text-white min-h-[420px]">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-blue-400">
              <Focus className="w-3.5 h-3.5" /> Viewfinder DSLR (Manual Mode)
            </span>
            <span className="font-mono text-emerald-400">
              [ 1/{shutterSpeed}s · f/{aperture} · ISO {iso} ]
            </span>
          </div>

          {/* Optical Canvas Simulator */}
          <div className="relative my-4 aspect-16/10 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center">
            {/* Background scene with depth blur */}
            <div
              style={{
                filter: `blur(${bgBlur}px)`,
                transform: 'scale(1.05)'
              }}
              className="absolute inset-0 bg-cover bg-center transition-all duration-200"
            >
              <div className="w-full h-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-900 opacity-90 flex items-center justify-center">
                <div className="text-slate-600 text-xs font-mono select-none">
                  [ Background Studio · Bokeh Simulator ]
                </div>
              </div>
            </div>

            {/* Subject Mock with Lighting Effect */}
            <div
              style={{
                filter: motionBlur > 0 ? `blur(${motionBlur}px)` : 'none',
                transform: cameraAngle === 'lowAngle' ? 'scale(1.1) translateY(-10px)' : cameraAngle === 'highAngle' ? 'scale(0.9) translateY(10px)' : 'none'
              }}
              className="relative z-10 flex flex-col items-center transition-all duration-200"
            >
              {/* Head / Model Figure */}
              <div className="relative">
                <div
                  className={`w-28 h-28 rounded-full border-2 transition-all duration-300 flex items-center justify-center shadow-lg ${
                    lightingAngle === 'front'
                      ? 'bg-amber-100 border-amber-300 text-slate-900 shadow-amber-200/20'
                      : lightingAngle === 'side'
                      ? 'bg-linear-to-r from-amber-200 to-slate-900 border-amber-400 text-slate-900'
                      : lightingAngle === 'rim'
                      ? 'bg-slate-900 border-amber-400 ring-2 ring-amber-300 text-amber-200'
                      : 'bg-slate-950 border-slate-800 ring-4 ring-amber-400/80 text-amber-400' // back light silhouette
                  }`}
                >
                  <CircleDot className="w-12 h-12 opacity-80" />
                </div>

                {/* Lighting Direction Indicator */}
                <div className="absolute -top-6 -right-6 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 text-amber-300 border border-amber-500/30">
                  {lightingAngle.toUpperCase()} LIGHT
                </div>
              </div>

              <div className="mt-2 text-xs font-medium text-slate-200">
                {shotSize === 'CU' ? 'Close Up (Bahu-Kepala)' : shotSize === 'MS' ? 'Medium Shot (Pinggang-Kepala)' : 'Long Shot (Seluruh Badan)'}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Angle: {cameraAngle === 'lowAngle' ? 'Low Angle (Gagah/Besar)' : cameraAngle === 'highAngle' ? 'High Angle (Dramatis/Kecil)' : 'Eye Level (Normal)'}
              </div>
            </div>

            {/* Simulated Digital Noise overlay */}
            {noiseOpacity > 0.05 && (
              <div
                style={{ opacity: noiseOpacity }}
                className="absolute inset-0 bg-repeat pointer-events-none mix-blend-screen bg-slate-400/20"
              >
                <div className="w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
              </div>
            )}

            {/* Viewfinder Overlay Grid & Lightmeter */}
            <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
              <div className="flex justify-between text-[11px] font-mono text-emerald-400/80">
                <span>AF [ · ] POINT LOCK</span>
                <span>BATTERY 92% · RAW+L</span>
              </div>

              {/* Lightmeter needle */}
              <div className="mx-auto bg-black/80 px-4 py-1.5 rounded-full border border-slate-700 flex items-center gap-2 font-mono text-xs">
                <span className="text-slate-400">-2</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">-1</span>
                <span className="text-slate-500">·</span>
                <span className={`px-1 rounded ${Math.abs(evDifference) < 0.8 ? 'bg-emerald-500 text-black font-bold' : 'text-slate-400'}`}>0</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">+1</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">+2</span>
              </div>
            </div>
          </div>

          {imageSrc && (
            <div className="pt-3 border-t border-slate-800 flex items-center gap-3">
              <img src={imageSrc} alt="DSLR Setup" className="w-16 h-12 object-cover rounded border border-slate-700" />
              <p className="text-[11px] text-slate-400">
                Gambar acuan: Buku Bab 2 Gambar 2.13 (Segitiga Eksposur) & Gambar 2.36–2.40 (Arah Pencahayaan Studio).
              </p>
            </div>
          )}
        </div>

        {/* Right: Technical Controls */}
        <div className="lg:col-span-5 p-6 bg-slate-50 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>1. Aperture (Bukaan Diafragma)</span>
                <span className="font-mono text-blue-600">f/{aperture} ({aperture <= 2.8 ? 'DoF Tipis / Bokeh' : aperture >= 11 ? 'DoF Luas / Tajam' : 'DoF Normal'})</span>
              </div>
              <input
                type="range"
                min="1.4"
                max="22"
                step="0.7"
                value={aperture}
                onChange={(e) => setAperture(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Angka kecil = bukaan besar = cahaya banyak = latar belakang blur (ruang tajam sempit).
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>2. Shutter Speed (Kecepatan Rana)</span>
                <span className="font-mono text-blue-600">1/{shutterSpeed} detik</span>
              </div>
              <input
                type="range"
                min="15"
                max="2000"
                step="25"
                value={shutterSpeed}
                onChange={(e) => setShutterSpeed(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                {shutterSpeed >= 500 ? 'Membekukan gerakan cepat (Freeze).' : shutterSpeed <= 30 ? 'Melembutkan gerak / rawan goyang (Wajib Tripod).' : 'Kecepatan normal (1/60 - 1/200s).'}
              </p>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                <span>3. ISO (Sensitivitas Sensor)</span>
                <span className="font-mono text-blue-600">ISO {iso}</span>
              </div>
              <input
                type="range"
                min="100"
                max="3200"
                step="100"
                value={iso}
                onChange={(e) => setIso(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                {iso <= 400 ? 'ISO rendah: Gambar bersih bebas noise.' : 'ISO tinggi: Lebih peka cahaya tetapi muncul butiran noise digital.'}
              </p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">4. Arah Pencahayaan (Lighting Angle)</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {(['front', 'side', 'rim', 'back'] as const).map(angle => (
                  <button
                    key={angle}
                    type="button"
                    onClick={() => setLightingAngle(angle)}
                    className={`p-2 rounded-lg border text-left font-medium transition-colors ${
                      lightingAngle === angle ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {angle === 'front' ? 'Front Light (Depan)' : angle === 'side' ? 'Side Light (Samping 90°)' : angle === 'rim' ? 'Rim Light (Tepi 45°)' : 'Back Light (Siluet Belakang)'}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">5. Shot Size</label>
                <select
                  value={shotSize}
                  onChange={(e) => setShotSize(e.target.value as any)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium"
                >
                  <option value="CU">Close Up (CU)</option>
                  <option value="MS">Medium Shot (MS)</option>
                  <option value="LS">Long Shot (LS)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">6. Sudut Kamera</label>
                <select
                  value={cameraAngle}
                  onChange={(e) => setCameraAngle(e.target.value as any)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2 text-slate-800 font-medium"
                >
                  <option value="lowAngle">Low Angle (Bawah)</option>
                  <option value="eyeLevel">Eye Level (Sejajar)</option>
                  <option value="highAngle">High Angle (Atas)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <Sun className="w-3.5 h-3.5 text-amber-500" /> Jam Emas: Pagi 06-08 & Sore 16-17.30
            </span>
            <button
              onClick={() => {
                setAperture(2.8);
                setShutterSpeed(250);
                setIso(200);
                setLightingAngle('front');
                setShotSize('MS');
                setCameraAngle('eyeLevel');
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
