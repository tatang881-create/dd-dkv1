import React, { useState } from 'react';
import { ClipboardCheck, Award, Printer, CheckCircle2, Building, User, Calendar, BookOpen } from 'lucide-react';
import { SupervisionRecord } from '../../types/curriculum';
import { SCHOOL_IDENTITY } from '../../data/curriculumIndex';

interface Props {
  record: SupervisionRecord;
  onUpdateRecord: (rec: SupervisionRecord) => void;
}

export const SupervisionDashboard: React.FC<Props> = ({ record, onUpdateRecord }) => {
  const [activeTab, setActiveTab] = useState<'instrumen' | 'catatan' | 'rekomendasi' | 'cetak'>('instrumen');

  const c1Aspects = [
    { key: 'tujuan', label: '1. Tujuan Pembelajaran', desc: 'Tujuan jelas, sesuai CP Kurikulum Merdeka, menekankan berpikir kritis, kreatif, kolaboratif, komunikatif.' },
    { key: 'materi', label: '2. Materi Pembelajaran', desc: 'Sesuai konteks nyata dan mendorong keterkaitan lintas disiplin (interdisipliner/STEAM).' },
    { key: 'strategi', label: '3. Strategi Deep Learning', desc: 'Rencana menggunakan pertanyaan mendalam, PjBL, diskusi, atau PBL.' },
    { key: 'diferensiasi', label: '4. Diferensiasi Pembelajaran', desc: 'Rencana memfasilitasi perbedaan kemampuan, minat, dan gaya belajar murid.' }
  ];

  const c2Aspects = [
    { key: 'pendahuluan', label: '1. Kegiatan Pendahuluan', desc: 'Membuka dengan motivasi, menghubungkan pengalaman murid, memunculkan pertanyaan pemantik.' },
    { key: 'interaksi', label: '2. Interaksi Guru-Murid', desc: 'Guru memfasilitasi, bukan mendominasi, memberi ruang eksplorasi ide murid.' },
    { key: 'aktivitas', label: '3. Aktivitas Murid', desc: 'Murid aktif bertanya, berdiskusi, berpikir kritis, dan menyelesaikan masalah nyata.' },
    { key: 'kolaborasi', label: '4. Kolaborasi', desc: 'Ada kerja kelompok, Peer Learning, atau kolaborasi lintas tema.' },
    { key: 'teknologi', label: '5. Pemanfaatan Teknologi & Sumber Belajar', desc: 'Guru menggunakan media digital/konvensional yang mendukung Deep Learning.' }
  ];

  const c3Aspects = [
    { key: 'criticalThinking', label: '1. Critical Thinking', desc: 'Guru menstimulasi murid dengan pertanyaan tingkat tinggi (HOTS).' },
    { key: 'creativity', label: '2. Creativity', desc: 'Murid menghasilkan produk/ide baru dari pembelajaran.' },
    { key: 'collaboration', label: '3. Collaboration', desc: 'Terjadi interaksi positif antar murid dalam menyelesaikan tugas/proyek.' },
    { key: 'communication', label: '4. Communication', desc: 'Murid mampu menyampaikan gagasan secara lisan/tulisan dengan baik.' },
    { key: 'connectionToRealLife', label: '5. Connection to Real Life', desc: 'Pembelajaran terhubung dengan isu nyata, lingkungan, atau kehidupan sehari-hari murid.' }
  ];

  const c4Aspects = [
    { key: 'formatif', label: '1. Asesmen Formatif', desc: 'Digunakan untuk memantau proses, bukan hanya hasil, guru memberi umpan balik konstruktif.' },
    { key: 'sumatif', label: '2. Asesmen Sumatif', desc: 'Penilaian berbasis proyek, portofolio, presentasi, atau produk nyata.' },
    { key: 'refleksiGuru', label: '3. Refleksi Guru', desc: 'Guru melakukan refleksi terhadap proses dan hasil pembelajaran.' },
    { key: 'refleksiMurid', label: '4. Refleksi Murid', desc: 'Murid diberi kesempatan merefleksi apa yang dipelajari dan tantangan yang dihadapi.' }
  ];

  const calculateScoreTotal = (aspectObj: { [key: string]: number }) => {
    const values = Object.values(aspectObj);
    if (!values.length) return 0;
    return values.reduce((acc, curr) => acc + curr, 0);
  };

  const c1Total = calculateScoreTotal(record.scores.c1_perencanaan);
  const c2Total = calculateScoreTotal(record.scores.c2_pelaksanaan);
  const c3Total = calculateScoreTotal(record.scores.c3_deepLearning);
  const c4Total = calculateScoreTotal(record.scores.c4_asesmen);

  const totalObtained = c1Total + c2Total + c3Total + c4Total;
  const maxPossible = (4 * 4) + (5 * 4) + (5 * 4) + (4 * 4); // 16 + 20 + 20 + 16 = 72
  const finalPercentage = Math.round((totalObtained / maxPossible) * 100);

  const handleScoreChange = (section: keyof SupervisionRecord['scores'], key: string, score: number) => {
    const updated = {
      ...record,
      scores: {
        ...record.scores,
        [section]: {
          ...record.scores[section],
          [key]: score
        }
      }
    };
    onUpdateRecord(updated);
  };

  return (
    <div className="space-y-6">
      {/* Header Info Document */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <ClipboardCheck className="w-4 h-4" />
              <span>Instrumen Supervisi Akademik Resmi</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">Supervisi Kurikulum Merdeka Pendekatan Deep Learning</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Pemerintah Daerah Provinsi Jawa Barat · Dinas Pendidikan Wilayah X · <strong>SMK Negeri 3 Kuningan</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-xs text-slate-500">Skor Ketercapaian</div>
              <div className="text-lg font-bold font-mono text-emerald-600">{totalObtained} / {maxPossible} ({finalPercentage}%)</div>
            </div>
            <span className="px-3 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
              Kategori: {finalPercentage >= 85 ? 'Amat Baik (A)' : finalPercentage >= 70 ? 'Baik (B)' : 'Cukup (C)'}
            </span>
          </div>
        </div>

        {/* School & Identity Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 text-xs">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <Building className="w-3.5 h-3.5 text-blue-600" /> Satuan Pendidikan
            </div>
            <div className="font-bold text-slate-900">{record.schoolName}</div>
            <div className="text-slate-500 text-[11px] mt-0.5">{SCHOOL_IDENTITY.address}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <User className="w-3.5 h-3.5 text-blue-600" /> Guru yang Disupervisi
            </div>
            <div className="font-bold text-slate-900">{record.teacherName}</div>
            <div className="text-slate-500 text-[11px] font-mono mt-0.5">NIP: {record.teacherNip}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <Award className="w-3.5 h-3.5 text-blue-600" /> Supervisor Akademik
            </div>
            <div className="font-bold text-slate-900">{record.supervisorName}</div>
            <div className="text-slate-500 text-[11px] font-mono mt-0.5">NIP: {record.supervisorNip}</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            <div className="text-slate-500 font-medium flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-blue-600" /> Mata Pelajaran / Fase
            </div>
            <div className="font-bold text-slate-900">{record.subject}</div>
            <div className="text-slate-500 text-[11px] mt-0.5">{record.gradePhase} · Minggu ke-{record.weekObserved}</div>
          </div>
        </div>

        {/* Integrated School Programs Badges (Catatan Supervisi hal 5) */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold text-slate-600">Program Terintegrasi Sekolah:</span>
          {record.schoolProgramsIntegrated.map((prog, idx) => (
            <span key={idx} className="text-[11px] px-2 py-0.5 bg-slate-100 border border-slate-300 text-slate-700 rounded font-medium">
              ✓ {prog}
            </span>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-200 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('instrumen')}
          className={`pb-3 px-4 border-b-2 transition-colors ${activeTab === 'instrumen' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
        >
          1. Matriks Penilaian (C1 - C4)
        </button>
        <button
          onClick={() => setActiveTab('catatan')}
          className={`pb-3 px-4 border-b-2 transition-colors ${activeTab === 'catatan' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
        >
          2. Catatan Supervisor
        </button>
        <button
          onClick={() => setActiveTab('rekomendasi')}
          className={`pb-3 px-4 border-b-2 transition-colors ${activeTab === 'rekomendasi' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'}`}
        >
          3. Rekomendasi Tindak Lanjut
        </button>
        <button
          onClick={() => window.print()}
          className="ml-auto pb-3 px-4 text-xs font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1.5"
        >
          <Printer className="w-4 h-4" />
          <span>Cetak Dokumen Supervisi</span>
        </button>
      </div>

      {/* SECTION 1: MATRIKS PENILAIAN */}
      {activeTab === 'instrumen' && (
        <div className="space-y-6">
          {/* C.1 Perencanaan */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">C.1 PERENCANAAN PEMBELAJARAN (Modul Ajar)</h3>
                <p className="text-xs text-slate-500">Skor Maksimal: 16 · Diperoleh: {c1Total}</p>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700">Skor: {c1Total}/16</span>
            </div>

            <div className="divide-y divide-slate-100">
              {c1Aspects.map(asp => (
                <div key={asp.key} className="py-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="text-xs font-bold text-slate-800">{asp.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{asp.desc}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map(score => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => handleScoreChange('c1_perencanaan', asp.key, score)}
                        className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                          record.scores.c1_perencanaan[asp.key] === score
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* C.2 Pelaksanaan */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">C.2 PELAKSANAAN PEMBELAJARAN DI KELAS</h3>
                <p className="text-xs text-slate-500">Skor Maksimal: 20 · Diperoleh: {c2Total}</p>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700">Skor: {c2Total}/20</span>
            </div>

            <div className="divide-y divide-slate-100">
              {c2Aspects.map(asp => (
                <div key={asp.key} className="py-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="text-xs font-bold text-slate-800">{asp.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{asp.desc}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map(score => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => handleScoreChange('c2_pelaksanaan', asp.key, score)}
                        className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                          record.scores.c2_pelaksanaan[asp.key] === score
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* C.3 Penerapan Deep Learning 5C */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">C.3 PENERAPAN DEEP LEARNING (5C)</h3>
                <p className="text-xs text-slate-500">Bermakna, Berkesadaran, Menggembirakan · Skor: {c3Total}/20</p>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700">Skor: {c3Total}/20</span>
            </div>

            <div className="divide-y divide-slate-100">
              {c3Aspects.map(asp => (
                <div key={asp.key} className="py-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="text-xs font-bold text-slate-800">{asp.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{asp.desc}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map(score => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => handleScoreChange('c3_deepLearning', asp.key, score)}
                        className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                          record.scores.c3_deepLearning[asp.key] === score
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* C.4 Asesmen dan Refleksi */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">C.4 ASESMEN DAN REFLEKSI</h3>
                <p className="text-xs text-slate-500">Skor Maksimal: 16 · Diperoleh: {c4Total}</p>
              </div>
              <span className="text-xs font-mono font-bold text-blue-700">Skor: {c4Total}/16</span>
            </div>

            <div className="divide-y divide-slate-100">
              {c4Aspects.map(asp => (
                <div key={asp.key} className="py-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="max-w-xl">
                    <div className="text-xs font-bold text-slate-800">{asp.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{asp.desc}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map(score => (
                      <button
                        key={score}
                        type="button"
                        onClick={() => handleScoreChange('c4_asesmen', asp.key, score)}
                        className={`w-8 h-8 rounded text-xs font-bold transition-all ${
                          record.scores.c4_asesmen[asp.key] === score
                            ? 'bg-blue-600 text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {score}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: CATATAN SUPERVISOR */}
      {activeTab === 'catatan' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-3">Catatan Observasi Supervisor</h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">1. Perencanaan Pembelajaran (Tujuan, Materi, Diferensiasi)</label>
            <textarea
              rows={3}
              value={record.notesSupervisor.perencanaan}
              onChange={(e) => onUpdateRecord({ ...record, notesSupervisor: { ...record.notesSupervisor, perencanaan: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">2. Pelaksanaan Pembelajaran (Interaksi, Kolaborasi, Teknologi)</label>
            <textarea
              rows={3}
              value={record.notesSupervisor.pelaksanaan}
              onChange={(e) => onUpdateRecord({ ...record, notesSupervisor: { ...record.notesSupervisor, pelaksanaan: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">3. Penerapan Deep Learning (5C & Mindful-Meaningful-Joyful)</label>
            <textarea
              rows={3}
              value={record.notesSupervisor.deepLearning}
              onChange={(e) => onUpdateRecord({ ...record, notesSupervisor: { ...record.notesSupervisor, deepLearning: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">4. Asesmen dan Refleksi (Formatif, Sumatif, Refleksi Murid)</label>
            <textarea
              rows={3}
              value={record.notesSupervisor.asesmen}
              onChange={(e) => onUpdateRecord({ ...record, notesSupervisor: { ...record.notesSupervisor, asesmen: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* SECTION 3: REKOMENDASI TINDAK LANJUT */}
      {activeTab === 'rekomendasi' && (
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
          <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-3">Rekomendasi Tindak Lanjut Hasil Supervisi</h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">1. Rekomendasi Bagi Guru</label>
            <textarea
              rows={3}
              value={record.recommendations.forTeacher}
              onChange={(e) => onUpdateRecord({ ...record, recommendations: { ...record.recommendations, forTeacher: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">2. Rekomendasi Bagi Peserta Didik</label>
            <textarea
              rows={3}
              value={record.recommendations.forStudent}
              onChange={(e) => onUpdateRecord({ ...record, recommendations: { ...record.recommendations, forStudent: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">3. Rekomendasi Bagi Sekolah (SMKN 3 Kuningan)</label>
            <textarea
              rows={3}
              value={record.recommendations.forSchool}
              onChange={(e) => onUpdateRecord({ ...record, recommendations: { ...record.recommendations, forSchool: e.target.value } })}
              className="w-full text-xs p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Signature Block */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-8 text-xs text-center">
            <div>
              <div className="text-slate-500 mb-12">Guru yang Disupervisi,</div>
              <div className="font-bold text-slate-900 underline">{record.teacherName}</div>
              <div className="text-slate-500 font-mono">NIP. {record.teacherNip}</div>
            </div>

            <div>
              <div className="text-slate-500 mb-12">Kuningan, {record.date}<br />Supervisor,</div>
              <div className="font-bold text-slate-900 underline">{record.supervisorName}</div>
              <div className="text-slate-500 font-mono">NIP. {record.supervisorNip}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
