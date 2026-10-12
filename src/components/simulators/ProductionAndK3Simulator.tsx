import React, { useState } from 'react';
import { Package, ShieldAlert, Cpu, DollarSign, CheckCircle2, RotateCcw } from 'lucide-react';

export const ProductionAndK3Simulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'k3' | 'production' | 'packaging' | 'techno'>('k3');

  // K3 State
  const [chairHeight, setChairHeight] = useState<'ideal' | 'terlalu_rendah' | 'terlalu_tinggi'>('ideal');
  const [backrest, setBackrest] = useState<'tegak_rileks' | 'bungkuk' | 'rebah'>('tegak_rileks');
  const [workInterval, setWorkInterval] = useState<number>(2); // hours
  const [k3Evaluation, setK3Evaluation] = useState<string>('');

  // Production Alur State
  const [productionStep, setProductionStep] = useState<number>(0);
  const steps = [
    { title: '1. Praproduksi', desc: 'Creative Brief dari klien, riset pasar demografis, moodboard estetika, dan sketsa thumbnail kasar.' },
    { title: '2. Produksi Vektor/Bitmap', desc: 'Pembuatan logo vektor, pemotretan foto produk, tracing digitizer, dan penataan layout hierarki teks.' },
    { title: '3. Pascaproduksi & Proofing', desc: 'Cetak coba (proofing), uji warna CMYK, perakitan dumi kemasan 3D, revisi klien, dan serah terima.' }
  ];

  // Packaging Net State
  const [boxMaterial, setBoxMaterial] = useState<'art_carton_260' | 'ivory_300' | 'hvs_80'>('art_carton_260');
  const [boxDimensions, setBoxDimensions] = useState({ length: 15, width: 10, height: 6 });
  const [boxPatternVisible, setBoxPatternVisible] = useState<boolean>(true);

  // Technopreneur Calculator State
  const [hourlyRate, setHourlyRate] = useState<number>(50000); // Rp 50.000 / jam
  const [estimatedHours, setEstimatedHours] = useState<number>(12); // 12 JP = 2 pertemuan
  const [licenseAndPrintCost, setLicenseAndPrintCost] = useState<number>(150000); // Rp 150.000

  const calculateTotalProject = () => {
    return (hourlyRate * estimatedHours) + licenseAndPrintCost;
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Cpu className="w-4 h-4" />
            <span>Laboratorium Simulasi 4 · K3, Alur Produksi DKV, & Technopreneur</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Simulasi Ergonomi K3, Alur Kerja Studio, Pola Kemasan, & Kalkulator Usaha</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Buku Semester 1 Bab 1, 2, 3, 4, 5</p>
        </div>

        {/* Tab Switch */}
        <div className="flex items-center bg-slate-200 p-1 rounded-lg text-xs font-medium">
          <button
            onClick={() => setActiveTab('k3')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeTab === 'k3' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            K3 & Ergonomi
          </button>
          <button
            onClick={() => setActiveTab('production')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeTab === 'production' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Alur Produksi DKV
          </button>
          <button
            onClick={() => setActiveTab('packaging')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeTab === 'packaging' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Pola Kemasan 3D
          </button>
          <button
            onClick={() => setActiveTab('techno')}
            className={`px-3 py-1.5 rounded-md transition-colors ${activeTab === 'techno' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Kalkulator Technopreneur
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* TAB 1: K3 & ERGONOMI */}
        {activeTab === 'k3' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Mannequin Simulation */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col items-center justify-center min-h-[340px]">
              <div className="text-xs text-slate-400 mb-4 font-mono">
                [ Monitor Postur Tubuh & Sudut Ergonomi Duduk ]
              </div>

              <div className="relative w-64 h-56 flex flex-col items-center justify-center border border-slate-800 rounded-lg bg-slate-900 p-4">
                {/* Visual Stick Figure / Chair */}
                <div className="text-center space-y-2">
                  <div className={`w-12 h-12 rounded-full mx-auto border-2 transition-all ${
                    backrest === 'tegak_rileks' ? 'bg-emerald-500/20 border-emerald-400' : 'bg-red-500/20 border-red-500'
                  }`} />
                  <div className={`w-1.5 h-16 mx-auto rounded transition-all ${
                    backrest === 'tegak_rileks' ? 'bg-emerald-400 rotate-0' : backrest === 'bungkuk' ? 'bg-red-500 -rotate-15' : 'bg-amber-400 rotate-20'
                  }`} />
                  <div className={`w-14 h-2 mx-auto rounded bg-slate-600`} />
                  <div className={`w-2 h-12 mx-auto rounded ${chairHeight === 'ideal' ? 'bg-emerald-400' : 'bg-red-500'}`} />
                </div>

                <div className="mt-3 text-xs font-mono text-center">
                  {backrest === 'tegak_rileks' && chairHeight === 'ideal' ? (
                    <span className="text-emerald-400 font-bold">● Postur Sesuai Standar K3: Siku 90°, Punggung Rileks</span>
                  ) : (
                    <span className="text-red-400 font-bold">▲ Bahaya Ergonomi Terdeteksi: Rawan Sakit Pinggang & Leher</span>
                  )}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3 max-w-md">
                Buku Semester 1 Bab 2 hlm. 20-21: Posisi duduk harus tegak tapi rileks di bagian tulang belakang. Ketinggian tempat duduk diatur hingga siku lengan menekuk 90° dengan meja.
              </p>
            </div>

            {/* K3 Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">1. Ketinggian Duduk terhadap Meja Komputer</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'ideal', label: 'Ideal (Siku 90°)' },
                    { id: 'terlalu_rendah', label: 'Terlalu Rendah' },
                    { id: 'terlalu_tinggi', label: 'Terlalu Tinggi' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setChairHeight(item.id as any)}
                      className={`p-2 rounded-lg border text-center font-medium transition-colors ${
                        chairHeight === item.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">2. Kelengkungan Tulang Belakang</label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'tegak_rileks', label: 'Tegak Rileks (Benar)' },
                    { id: 'bungkuk', label: 'Membungkuk' },
                    { id: 'rebah', label: 'Terlalu Bersandar' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setBackrest(item.id as any)}
                      className={`p-2 rounded-lg border text-center font-medium transition-colors ${
                        backrest === item.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>3. Jadwal Jeda Istirahat Desainer</span>
                  <span className="font-mono text-blue-600">Setiap {workInterval} Jam Sekali</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={workInterval}
                  onChange={(e) => setWorkInterval(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Buku hlm. 24: Aturlah waktu istirahat untuk melakukan peregangan otot minimal setiap dua jam sekali.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900">
                <div className="font-bold flex items-center gap-1 mb-1">
                  <ShieldAlert className="w-4 h-4 text-amber-700" />
                  <span>SOP Keselamatan Laboratorium SMKN 3 Kuningan:</span>
                </div>
                Pastikan kabel listrik rapi terlindung, dilarang makan/minum di dekat keyboard, dan lakukan shutdown sistem secara normal (bukan cabut kabel).
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ALUR PRODUKSI DKV */}
        {activeTab === 'production' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  onClick={() => setProductionStep(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    productionStep === idx ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-500/30' : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-xs font-mono text-blue-600 font-bold mb-1">FASE {idx + 1}</div>
                  <h4 className="font-bold text-sm text-slate-900 mb-2">{st.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-900 text-white rounded-xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <span className="text-blue-400">Simulasi Interaktif Alur Produksi: Fase {productionStep + 1}</span>
                <span className="text-emerald-400">Status: Berjalan</span>
              </div>

              <div className="py-4">
                {productionStep === 0 && (
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-amber-400 text-sm">Dokumen Creative Brief & Sketsa Thumbnail</div>
                    <p className="text-slate-300">
                      Sebelum membuka software, desainer menggali <em>what to say</em> (pesan inti), <em>who to say</em> (demografis remaja 15-18 tahun di Kuningan), dan membuat minimal 3 alternatif sketsa cepat (thumbnail) di kertas manila/HVS.
                    </p>
                  </div>
                )}

                {productionStep === 1 && (
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-blue-400 text-sm">Digital Eksekusi: Vektor & Bitmap</div>
                    <p className="text-slate-300">
                      Pembuatan garis vektor pada CorelDRAW atau Adobe Illustrator dengan pen tool, pengaturan warna model CMYK untuk cetak, dan penataan hierarki tipografi: Title, Headline, dan Body Copy.
                    </p>
                  </div>
                )}

                {productionStep === 2 && (
                  <div className="space-y-2 text-xs">
                    <div className="font-bold text-emerald-400 text-sm">Proofing, Perakitan Dumi, & Evaluasi Klien</div>
                    <p className="text-slate-300">
                      Mencetak 1 lembar proofing pada art carton 260 gsm, memeriksa apakah teks terbaca dari jarak aman, memeriksa kuncian lidah kemasan, dan meminta persetujuan akhir klien sebelum produksi massal.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PACKAGING NET STRUCTURE */}
        {activeTab === 'packaging' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Box Net SVG */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col items-center justify-center min-h-[340px]">
              <div className="text-xs text-slate-400 mb-4 font-mono">
                [ Pola Jaring Kemasan Kotak (Box Net Layout) · Gambar 5.43 & 3.79 ]
              </div>

              <div className="relative w-64 h-56 bg-slate-900 border border-slate-800 rounded-lg p-3 flex items-center justify-center">
                <svg viewBox="0 0 200 160" className="w-full h-full">
                  {/* Flap top */}
                  <polygon points="70,15 130,15 120,35 80,35" fill="#B45309" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3,2" />
                  {/* Top lid */}
                  <rect x="60" y="35" width="80" height="25" fill="#D97706" stroke="#FBBF24" strokeWidth="1.5" />
                  {/* Main front panel */}
                  <rect x="60" y="60" width="80" height="40" fill="#F59E0B" stroke="#FDE68A" strokeWidth="2" />
                  <text x="100" y="83" fill="#78350F" fontSize="9" fontWeight="bold" textAnchor="middle">KEMASAN PIZZA</text>
                  <text x="100" y="93" fill="#92400E" fontSize="6" textAnchor="middle">PowerClip Inside</text>
                  {/* Bottom base */}
                  <rect x="60" y="100" width="80" height="25" fill="#D97706" stroke="#FBBF24" strokeWidth="1.5" />
                  {/* Left Side */}
                  <rect x="25" y="60" width="35" height="40" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" />
                  {/* Right Side */}
                  <rect x="140" y="60" width="35" height="40" fill="#B45309" stroke="#FDE68A" strokeWidth="1.5" />
                  {/* Side glue flaps */}
                  <polygon points="15,65 25,60 25,100 15,95" fill="#78350F" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,2" />
                  <polygon points="175,60 185,65 185,95 175,100" fill="#78350F" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3,2" />
                </svg>
              </div>

              <div className="mt-3 text-[11px] text-slate-400 font-mono text-center">
                Dimensi: {boxDimensions.length} × {boxDimensions.width} × {boxDimensions.height} cm · Kertas: {boxMaterial === 'art_carton_260' ? 'Art Carton 260 gsm' : boxMaterial === 'ivory_300' ? 'Ivory 300 gsm (Food Grade)' : 'HVS 80 gsm'}
              </div>
            </div>

            {/* Packaging Parameters */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Pilihan Bahan Kertas (Buku hlm. 104-105)</label>
                <select
                  value={boxMaterial}
                  onChange={(e) => setBoxMaterial(e.target.value as any)}
                  className="w-full text-xs bg-white border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium"
                >
                  <option value="art_carton_260">Art Carton 260 gsm (Tebal, Mengilap 2 Sisi)</option>
                  <option value="ivory_300">Kertas Ivory 300 gsm (Food Grade / Makanan Aman)</option>
                  <option value="hvs_80">Kertas HVS 80 gsm (Kurang Kokoh untuk Kotak)</option>
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Panjang (cm)</label>
                  <input
                    type="number"
                    value={boxDimensions.length}
                    onChange={(e) => setBoxDimensions({ ...boxDimensions, length: Number(e.target.value) })}
                    className="w-full text-xs bg-white border border-slate-300 rounded p-1.5"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Lebar (cm)</label>
                  <input
                    type="number"
                    value={boxDimensions.width}
                    onChange={(e) => setBoxDimensions({ ...boxDimensions, width: Number(e.target.value) })}
                    className="w-full text-xs bg-white border border-slate-300 rounded p-1.5"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Tinggi (cm)</label>
                  <input
                    type="number"
                    value={boxDimensions.height}
                    onChange={(e) => setBoxDimensions({ ...boxDimensions, height: Number(e.target.value) })}
                    className="w-full text-xs bg-white border border-slate-300 rounded p-1.5"
                  />
                </div>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900 space-y-1">
                <div className="font-bold">Langkah Pembuatan di CorelDRAW (Buku hlm. 132):</div>
                <p>1. Atur unit kertas ke sentimeter (cm).</p>
                <p>2. Buat bidang dengan Rectangle dan Polygon Tool.</p>
                <p>3. Masukkan gambar pendukung makanan dengan menu <strong>PowerClip Inside</strong>.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TECHNOPRENEUR CALCULATOR */}
        {activeTab === 'techno' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Price Breakdown */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 text-white flex flex-col justify-between min-h-[340px]">
              <div className="text-xs text-slate-400 font-mono">
                [ Kalkulator Estimasi Biaya Jasa Desain & Cetak UMKM ]
              </div>

              <div className="my-auto text-center py-6">
                <div className="text-xs text-slate-400 uppercase tracking-widest font-mono">Estimasi Nilai Kontrak Proyek</div>
                <div className="text-3xl font-extrabold text-emerald-400 mt-2 font-mono">
                  Rp {calculateTotalProject().toLocaleString('id-ID')}
                </div>
                <div className="text-xs text-slate-400 mt-2">
                  (Biaya Waktu Kerja: Rp {(hourlyRate * estimatedHours).toLocaleString('id-ID')} + Biaya Bahan/Lisensi: Rp {licenseAndPrintCost.toLocaleString('id-ID')})
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex justify-between">
                <span>Minimalisasi Risiko (Zimmerer)</span>
                <span className="text-amber-400">Target Margin: 25-30%</span>
              </div>
            </div>

            {/* Inputs */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Tarif Jasa per Jam Kerja (Rate)</span>
                  <span className="font-mono text-blue-600">Rp {hourlyRate.toLocaleString('id-ID')} / jam</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="150000"
                  step="5000"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Estimasi Jam Pengerjaan Proyek</span>
                  <span className="font-mono text-blue-600">{estimatedHours} Jam ({(estimatedHours / 6).toFixed(1)} Pertemuan)</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="36"
                  step="2"
                  value={estimatedHours}
                  onChange={(e) => setEstimatedHours(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Biaya Operasional & Bahan Cetak</span>
                  <span className="font-mono text-blue-600">Rp {licenseAndPrintCost.toLocaleString('id-ID')}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="500000"
                  step="10000"
                  value={licenseAndPrintCost}
                  onChange={(e) => setLicenseAndPrintCost(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <p className="text-[11px] text-slate-500">
                Buku Semester 1 Bab 1 hlm. 12: Minimalisasi risiko dilakukan dengan menentukan batasan modal usaha dan membuat kesepakatan tertulis mengenai ruang lingkup revisi dengan klien.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
