import React, { useState } from 'react';
import { Presentation, CheckCircle2, RotateCcw, ChevronRight, AlertCircle, Sparkles, Send, FileCheck } from 'lucide-react';

interface ProjectStep {
  step: number;
  name: string;
  stage: 'Praproduksi' | 'Produksi' | 'Pascaproduksi';
  task: string;
  deliverable: string;
}

const PROJECT_STEPS: ProjectStep[] = [
  {
    step: 1,
    name: 'Analisis Creative Brief',
    stage: 'Praproduksi',
    task: 'Pahami profil klien, keunikan produk, target sasaran (who to say), dan batas anggaran proyek.',
    deliverable: 'Rangkuman Persona & Tujuan Komunikasi'
  },
  {
    step: 2,
    name: 'Riset Visual & Moodboard',
    stage: 'Praproduksi',
    task: 'Kumpulkan referensi palet warna, gaya tipografi, dan tekstur desain yang relevan dari internet/lingkungan.',
    deliverable: 'Papan Moodboard Inspirasi'
  },
  {
    step: 3,
    name: 'Eksplorasi Sketsa Ide (Thumbnail)',
    stage: 'Praproduksi',
    task: 'Buat minimal 3 alternatif sketsa cepat dengan pensil manual sebelum menyentuh perangkat lunak.',
    deliverable: '3 Lembar Sketsa Thumbnail Alternatif'
  },
  {
    step: 4,
    name: 'Eksekusi Desain Vektor & Bitmap',
    stage: 'Produksi',
    task: 'Buat garis kurva vektor di CorelDRAW/Illustrator, atur model warna CMYK, dan susun tata letak hierarki.',
    deliverable: 'File Desain Master Digital (CDR/AI/PSD)'
  },
  {
    step: 5,
    name: 'Cetak Coba (Proofing) & Perakitan Dumi',
    stage: 'Pascaproduksi',
    task: 'Cetak 1 sampel pada kertas art carton 260 gsm, uji presisi lipatan kotak, dan cek ketajaman teks.',
    deliverable: 'Dumi Fisik Produk 3 Dimensi'
  },
  {
    step: 6,
    name: 'Presentasi Proyek & Umpan Balik Klien',
    stage: 'Pascaproduksi',
    task: 'Paparkan konsep filosofi karya di hadapan guru/klien dan siapkan lembar revisi profesional.',
    deliverable: 'Dokumen Portofolio Terverifikasi'
  }
];

export const DkvStudioProjectLab: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([false, false, false, false, false, false]);
  const [projectTitle, setProjectTitle] = useState<string>('Redesain Kemasan Tape Ketan Daun Jambu Khas Kuningan');
  const [clientFeedbackNote, setClientFeedbackNote] = useState<string>('');
  const [isProjectFinished, setIsProjectFinished] = useState<boolean>(false);

  const activeStep = PROJECT_STEPS[currentStepIndex];

  const handleCompleteCurrentStep = () => {
    const updated = [...completedSteps];
    updated[currentStepIndex] = true;
    setCompletedSteps(updated);

    if (currentStepIndex < PROJECT_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsProjectFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setCompletedSteps([false, false, false, false, false, false]);
    setClientFeedbackNote('');
    setIsProjectFinished(false);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="p-5 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Presentation className="w-4 h-4" />
            <span>Laboratorium Simulasi 7 · Studio Proyek Desain DKV Terpadu</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mt-1">Simulasi Alur Kerja Proyek: Dari Brief Klien hingga Presentasi Portofolio</h3>
          <p className="text-xs text-slate-500 mt-0.5">Berdasarkan Siklus Produksi Industri DKV & Pembelajaran Mendalam (Deep Learning)</p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-mono font-semibold">
            Langkah {currentStepIndex + 1} / 6
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Project Header */}
        <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono text-blue-400 uppercase">Proyek Desain Nyata Kelas X:</div>
            <h4 className="text-base font-bold text-slate-100 mt-0.5">{projectTitle}</h4>
            <div className="text-xs text-slate-400 mt-1">
              Klien Binaan: UMKM Pangan Lokal Kabupaten Kuningan · Target Waktu: 2 Pertemuan (12 JP)
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-medium flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Mulai Ulang Proyek</span>
            </button>
          </div>
        </div>

        {/* 6 Steps Progress Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PROJECT_STEPS.map((st, idx) => {
            const isDone = completedSteps[idx];
            const isCurrent = currentStepIndex === idx;

            return (
              <button
                key={st.step}
                type="button"
                onClick={() => setCurrentStepIndex(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                    : isDone
                    ? 'bg-emerald-50/60 border-emerald-300'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[10px] font-bold text-slate-500">TAHAP {st.step}</span>
                  {isDone && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
                </div>
                <div className="text-xs font-bold text-slate-900 truncate">{st.name}</div>
                <div className="text-[10px] text-slate-500 mt-0.5">{st.stage}</div>
              </button>
            );
          })}
        </div>

        {/* Current Active Step Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Step Instructions */}
          <div className="lg:col-span-7 p-6 rounded-xl border border-slate-200 bg-white shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] font-mono font-bold text-blue-600 uppercase">{activeStep.stage}</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">{activeStep.name}</h4>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                Langkah {activeStep.step} dari 6
              </span>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              {activeStep.task}
            </p>

            <div className="p-3.5 bg-blue-50/60 border border-blue-200 rounded-lg text-xs space-y-1">
              <strong className="text-blue-900 block">Keluaran Wajib (Deliverable):</strong>
              <div className="font-semibold text-slate-800">{activeStep.deliverable}</div>
            </div>

            {/* Step specific interactive task */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <label className="block text-xs font-bold text-slate-800">
                Catatan Eksekusi & Bukti Tahap {activeStep.step}:
              </label>
              <textarea
                rows={3}
                value={clientFeedbackNote}
                onChange={(e) => setClientFeedbackNote(e.target.value)}
                placeholder="Tuliskan ringkasan hasil kerja tahap ini (misalnya: rincian palet warna yang dipilih, pertimbangan K3, atau hasil proofing cetak)..."
                className="w-full text-xs p-3 rounded-lg border border-slate-300 bg-white text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={handleCompleteCurrentStep}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Selesaikan Tahap {activeStep.step}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Project Overview & Professional Standard */}
          <div className="lg:col-span-5 p-6 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between space-y-4">
            <div className="space-y-3 text-xs">
              <h5 className="font-bold text-slate-900 border-b border-slate-200 pb-2">
                Standar Budaya Kerja Industri DKV
              </h5>

              <div className="space-y-2 text-slate-600">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">1. Kepatuhan Tenggat Waktu (Deadline):</strong>
                  Keterlambatan di satu tahap akan menghambat proses produksi cetak berikutnya.
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">2. Kerapian File Master:</strong>
                  Semua layer Photoshop harus diberi nama dan font teks dikonversi ke kurva (*convert to curves/outlines*) agar tidak missing font di mesin cetak.
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <strong className="text-slate-800 block mb-0.5">3. Komunikasi Profesional:</strong>
                  Menerima kritik dan revisi dari klien dengan sikap berkesadaran (*mindful listening*).
                </div>
              </div>
            </div>

            {isProjectFinished ? (
              <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-xs space-y-2">
                <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>Selamat! Siklus Proyek Studio Selesai Penuh</span>
                </div>
                <p className="text-emerald-800 leading-relaxed">
                  Semua 6 tahap dari creative brief hingga presentasi telah Anda tuntaskan. Karya telah layak dikurasi ke Portofolio Digital Kelas X.
                </p>
              </div>
            ) : (
              <div className="text-[11px] text-slate-500 font-mono">
                Catatan: Model simulasi studio edukatif untuk memandu siswa SMK memahami tahapan proyek nyata secara runtut.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
