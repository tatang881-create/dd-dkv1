import React, { useState } from 'react';
import { Table, Search, Filter, BookOpen, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { ALL_36_WEEKS_UNITS } from '../../data/curriculumIndex';
import { LearningUnit } from '../../types/curriculum';

export const CurriculumMatrix36Weeks: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<0 | 1 | 2>(0); // 0 = all
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const filteredUnits = ALL_36_WEEKS_UNITS.filter(u => {
    const matchesSemester = selectedSemester === 0 || u.semester === selectedSemester;
    const matchesSearch = u.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.babTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.sourceReference.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSemester && matchesSearch;
  });

  const exportToCSV = () => {
    const headers = [
      'Minggu',
      'Semester',
      'Bab Buku Terkait',
      'Topik Unit',
      'Sumber Rujukan Buku',
      'Status Sumber',
      'Pertemuan 1 (Senin 6 JP)',
      'Pertemuan 2 (Rabu 6 JP)',
      'Konsep Penting',
      'Aktivitas Memahami',
      'Aktivitas Mengaplikasi',
      'Aktivitas Merefleksi',
      'Simulasi Lab Sesuai',
      'Asesmen Formatif/Sumatif',
      'Bukti Portofolio'
    ];

    const rows = ALL_36_WEEKS_UNITS.map(u => [
      `Minggu ${u.week}`,
      `Semester ${u.semester}`,
      `Bab ${u.babNumber}: ${u.babTitle}`,
      `"${u.topic}"`,
      `"${u.sourceReference}"`,
      u.isOfficialCurriculum ? 'Resmi Buku Kemdikbudristek' : 'Usulan Perlu Verifikasi Guru',
      `"${u.meetings[0].title} (6 JP)"`,
      `"${u.meetings[1].title} (6 JP)"`,
      `"${u.coreConcepts.join('; ')}"`,
      `"${u.meetings[0].activities.inti.join('; ')}"`,
      `"${u.meetings[1].activities.inti.join('; ')}"`,
      `"${u.meetings[1].activities.penutup.join('; ')}"`,
      u.simulationId ? u.simulationId.toUpperCase() : 'Studi Mandiri',
      `"${u.quiz.title}"`,
      u.meetings[1].lkpdTask ? `"${u.meetings[1].lkpdTask.title}"` : `Portofolio M-${u.week}`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `matriks_36_minggu_dd_dkv_smkn3_kuningan.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Table className="w-4 h-4" />
            <span>Matriks Pemetaan Kurikulum & ATP Operasional</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Matriks 36 Minggu & 72 Pertemuan (432 JP) DD DKV Kelas X SMK
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Didasarkan pada Buku Teks Resmi Semester 1 & 2 Kemdikbudristek (2022) serta Instrumen Supervisi Deep Learning SMKN 3 Kuningan.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-2 shadow-xs transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Ekspor Matriks CSV</span>
        </button>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="block text-amber-950 font-bold">
            Catatan Verifikasi Kurikulum & Deep Learning (Berdasarkan Sumber Dokumen):
          </strong>
          <p>
            1. <strong>Label [Sumber Resmi Buku]</strong>: Menandai materi, halaman, istilah, rumus (AIDA, Segitiga Eksposur, 8 Shaping, 11 Kertas, K3 Ergonomi) yang diverifikasi eksak dari Buku Kemdikbudristek Kelas X Semester 1 & 2.
          </p>
          <p>
            2. <strong>Label [Usulan Desain Pembelajaran / Perlu Verifikasi Guru]</strong>: Alokasi pembagian urutan 36 minggu (Senin 6 JP & Rabu 6 JP) dan rincian alur Deep Learning 5C (Critical Thinking, Creativity, Collaboration, Communication, Connection to Real Life) merupakan rancangan instruksional operasional yang fleksibel dan perlu disinkronkan dengan kalender pendidikan resmi sekolah serta ATP guru.
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-2 text-xs font-medium">
          <span className="text-slate-500">Filter Semester:</span>
          {[
            { id: 0, label: 'Semua 36 Minggu (432 JP)' },
            { id: 1, label: 'Semester 1 (M1-M18 · 216 JP)' },
            { id: 2, label: 'Semester 2 (M19-M36 · 216 JP)' },
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setSelectedSemester(s.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                selectedSemester === s.id
                  ? 'bg-blue-600 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari topik, bab, atau istilah..."
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Units Accordion Table */}
      <div className="space-y-3">
        {filteredUnits.map((u) => {
          const isExpanded = expandedWeek === u.week;

          return (
            <div
              key={u.week}
              className={`bg-white rounded-xl border transition-all ${
                isExpanded ? 'border-blue-400 ring-1 ring-blue-400 shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {/* Accordion Summary Row */}
              <div
                onClick={() => setExpandedWeek(isExpanded ? null : u.week)}
                className="p-4 flex flex-wrap items-center justify-between gap-4 cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs font-mono font-bold ${
                    u.semester === 1 ? 'bg-blue-50 text-blue-800 border border-blue-200' : 'bg-purple-50 text-purple-800 border border-purple-200'
                  }`}>
                    <span className="text-[10px] uppercase font-normal text-slate-400">Minggu</span>
                    <span className="text-base">{u.week}</span>
                  </span>

                  <div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                      <span>Semester {u.semester}</span>
                      <span>·</span>
                      <span>Bab {u.babNumber}: {u.babTitle}</span>
                      <span>·</span>
                      <span className="text-emerald-700 font-semibold">[Sumber Resmi Buku Kemdikbudristek]</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mt-0.5">{u.topic}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block text-xs">
                    <span className="font-mono text-slate-500 font-medium">Senin 6 JP + Rabu 6 JP</span>
                    <div className="text-[11px] font-mono text-blue-600 font-semibold">
                      Lab: {u.simulationId ? u.simulationId.toUpperCase() : 'Studio Proyek'}
                    </div>
                  </div>

                  <button className="p-1 text-slate-400 hover:text-slate-600">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Accordion Detail Breakdown */}
              {isExpanded && (
                <div className="p-5 pt-0 border-t border-slate-100 space-y-5 text-xs bg-slate-50/50">
                  {/* Metadata Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-4">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-700 block mb-1">Sumber Rujukan Eksak:</strong>
                      <p className="text-blue-800 font-medium font-mono">{u.sourceReference}</p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-700 block mb-1">Status Keabsahan Kurikulum:</strong>
                      <p className="text-emerald-700 font-medium">
                        ✓ {u.isOfficialCurriculum ? 'Didukung Teks Buku Kemdikbudristek (Capaian Resmi)' : 'Usulan Modifikasi Guru'}
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <strong className="text-slate-700 block mb-1">Laboratorium Simulasi Terhubung:</strong>
                      <p className="text-purple-700 font-medium font-mono">
                        {u.simulationId ? `Simulasi Interaktif: ${u.simulationId}` : 'Studio Eksplorasi Manual'}
                      </p>
                    </div>
                  </div>

                  {/* Core Concepts */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200">
                    <strong className="text-slate-800 block mb-2">Konsep Penting Pembelajaran:</strong>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {u.coreConcepts.map((cp, idx) => <li key={idx}>{cp}</li>)}
                    </ul>
                  </div>

                  {/* 2 Meetings Detailed Matrix */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Meeting 1: Senin */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="font-bold text-blue-700 text-xs uppercase">
                          Pertemuan 1 · Senin (6 JP = 270 Menit)
                        </span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-800 font-semibold">
                          Fokus: Memahami & Eksplorasi
                        </span>
                      </div>

                      <div className="font-bold text-slate-900 text-xs">{u.meetings[0].title}</div>
                      <div className="italic text-slate-600 text-[11px] bg-slate-50 p-2 rounded border border-slate-100">
                        Pemantik: &ldquo;{u.meetings[0].triggerQuestion}&rdquo;
                      </div>

                      <div>
                        <strong className="text-slate-700 block mb-1">Aktivitas Memahami (Kegiatan Inti 180 Mnt):</strong>
                        <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                          {u.meetings[0].activities.inti.map((act, i) => <li key={i}>{act}</li>)}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <strong className="text-slate-700 block mb-1">Asesmen Formatif:</strong>
                        <p className="text-slate-600 text-[11px]">{u.quiz.title}</p>
                      </div>
                    </div>

                    {/* Meeting 2: Rabu */}
                    <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                        <span className="font-bold text-purple-700 text-xs uppercase">
                          Pertemuan 2 · Rabu (6 JP = 270 Menit)
                        </span>
                        <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-purple-50 text-purple-800 font-semibold">
                          Fokus: Mengaplikasi & Merefleksi
                        </span>
                      </div>

                      <div className="font-bold text-slate-900 text-xs">{u.meetings[1].title}</div>
                      <div className="italic text-slate-600 text-[11px] bg-slate-50 p-2 rounded border border-slate-100">
                        Pemantik: &ldquo;{u.meetings[1].triggerQuestion}&rdquo;
                      </div>

                      <div>
                        <strong className="text-slate-700 block mb-1">Aktivitas Mengaplikasi & Praktik:</strong>
                        <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                          {u.meetings[1].activities.inti.map((act, i) => <li key={i}>{act}</li>)}
                        </ul>
                      </div>

                      <div>
                        <strong className="text-slate-700 block mb-1">Aktivitas Merefleksi (Penutup 45 Mnt):</strong>
                        <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                          {u.meetings[1].activities.penutup.map((act, i) => <li key={i}>{act}</li>)}
                        </ul>
                      </div>

                      <div className="pt-2 border-t border-slate-100">
                        <strong className="text-slate-700 block mb-1">Bukti Portofolio & Tugas LKPD:</strong>
                        <p className="text-slate-600 text-[11px]">
                          {u.meetings[1].lkpdTask ? u.meetings[1].lkpdTask.title : `Dokumentasi Karya Terverifikasi Minggu ke-${u.week}`}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Deep Learning 5C Cross-Check */}
                  <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-lg text-indigo-900">
                    <strong className="block mb-1 font-bold text-indigo-950">
                      Penerapan 5C Deep Learning (Instrumen Supervisi Hal. 2 SMKN 3 Kuningan):
                    </strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-[11px]">
                      <div><strong>Critical Thinking:</strong> {u.meetings[0].deepLearning5C.criticalThinking}</div>
                      <div><strong>Creativity:</strong> {u.meetings[1].deepLearning5C.creativity}</div>
                      <div><strong>Collaboration:</strong> {u.meetings[1].deepLearning5C.collaboration}</div>
                      <div><strong>Communication:</strong> {u.meetings[0].deepLearning5C.communication}</div>
                      <div className="sm:col-span-2"><strong>Connection to Real Life:</strong> {u.meetings[0].deepLearning5C.connectionToRealLife}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
