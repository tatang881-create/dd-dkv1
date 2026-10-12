import React, { useState } from 'react';
import {
  Users,
  Search,
  Filter,
  Download,
  Award,
  CheckCircle2,
  AlertCircle,
  Edit,
  Save,
  RotateCcw,
  BookOpen,
  Printer,
  ChevronRight,
  TrendingUp,
  FileSpreadsheet,
  Sparkles
} from 'lucide-react';
import { StudentProgressRecord, INITIAL_STUDENTS_RECORD } from '../../data/studentAssessmentData';
import { ALL_36_WEEKS_UNITS } from '../../data/curriculumIndex';
import { StudentSubmission } from '../../types/curriculum';

interface Props {
  submissions: StudentSubmission[];
  onGradeSubmission: (id: string, grade: number, feedback: string) => void;
  isTeacher: boolean;
}

export const StudentGradebookReportView: React.FC<Props> = ({
  submissions,
  onGradeSubmission,
  isTeacher
}) => {
  const [students, setStudents] = useState<StudentProgressRecord[]>(INITIAL_STUDENTS_RECORD);
  const [selectedStudentId, setSelectedStudentId] = useState<string>('dkv-001');
  const [assessmentTypeFilter, setAssessmentTypeFilter] = useState<'all' | 'quiz' | 'lkpd' | 'project'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Rubric Editing Modal State for Artistic / Visual Projects
  const [editingRubricSub, setEditingRubricSub] = useState<StudentSubmission | null>(null);
  const [rubricScores, setRubricScores] = useState<{
    creativity: number;
    technicalPrecision: number;
    k3Discipline: number;
    presentation: number;
  }>({
    creativity: 85,
    technicalPrecision: 85,
    k3Discipline: 90,
    presentation: 85
  });
  const [rubricWeights, setRubricWeights] = useState<{
    creativity: number;
    technicalPrecision: number;
    k3Discipline: number;
    presentation: number;
  }>({
    creativity: 30,
    technicalPrecision: 40,
    k3Discipline: 15,
    presentation: 15
  });
  const [rubricComment, setRubricComment] = useState<string>('');
  const [allowRevision, setAllowRevision] = useState<boolean>(false);

  const selectedStudent = students.find(s => s.studentId === selectedStudentId) || students[0];

  // Calculate composite average
  const calcStudentAverage = (stud: StudentProgressRecord) => {
    const qScores = Object.values(stud.quizzes).map(q => q.score);
    const lScores = Object.values(stud.lkpdTasks).map(l => l.score);
    const pScores = Object.values(stud.practicalProjects).map(p => p.score);
    const all = [...qScores, ...lScores, ...pScores];
    if (!all.length) return 0;
    return Math.round(all.reduce((a, b) => a + b, 0) / all.length);
  };

  const handleExportCSV = () => {
    const headers = [
      'ID Siswa',
      'Nama Siswa',
      'Kelas',
      'NISN',
      'Kehadiran (%)',
      'Rata-rata Kuis Formatif',
      'Rata-rata LKPD Digital',
      'Rata-rata Nilai Proyek Visual',
      'Nilai Akhir Rapor',
      'Status Ketuntasan'
    ];

    const rows = students.map(s => {
      const avg = calcStudentAverage(s);
      return [
        s.studentId,
        `"${s.studentName}"`,
        s.studentClass,
        s.nisn,
        `${s.attendancePct}%`,
        Object.values(s.quizzes).length ? (Object.values(s.quizzes).reduce((a, b) => a + b.score, 0) / Object.values(s.quizzes).length).toFixed(1) : '0',
        Object.values(s.lkpdTasks).length ? (Object.values(s.lkpdTasks).reduce((a, b) => a + b.score, 0) / Object.values(s.lkpdTasks).length).toFixed(1) : '0',
        Object.values(s.practicalProjects).length ? (Object.values(s.practicalProjects).reduce((a, b) => a + b.score, 0) / Object.values(s.practicalProjects).length).toFixed(1) : '0',
        avg,
        avg >= 75 ? 'Tuntas' : 'Perlu Remedial'
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rekap_nilai_dd_dkv_smkn3_kuningan.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleApplyRubricGrade = () => {
    if (!editingRubricSub) return;
    // Calculate weighted sum
    const totalWeight = rubricWeights.creativity + rubricWeights.technicalPrecision + rubricWeights.k3Discipline + rubricWeights.presentation;
    const weightedGrade = Math.round(
      (rubricScores.creativity * rubricWeights.creativity +
       rubricScores.technicalPrecision * rubricWeights.technicalPrecision +
       rubricScores.k3Discipline * rubricWeights.k3Discipline +
       rubricScores.presentation * rubricWeights.presentation) / (totalWeight || 100)
    );

    const feedbackWithRevision = allowRevision
      ? `${rubricComment} [Guru memberi kesempatan revisi karya untuk perbaikan skor hingga minggu berikutnya]`
      : rubricComment;

    onGradeSubmission(editingRubricSub.id, weightedGrade, feedbackWithRevision);
    setEditingRubricSub(null);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Buku Nilai & Rekapitulasi Hasil Belajar Peserta Didik</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Rekap Nilai Kuis, LKPD Digital, Asesmen Praktik, & Portofolio Proyek
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Penilaian karya artistik wajib dikonfirmasi guru melalui rubrik berbobot (tanpa otomasi buta). Dilengkapi fitur remedial dan pengayaan.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors border border-slate-300"
          >
            <Printer className="w-4 h-4" />
            <span>Cetak Rapor</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
            <span>Ekspor Rekap CSV</span>
          </button>
        </div>
      </div>

      {/* Overview Metric Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-slate-500 font-medium">Total Peserta Didik Terdata</span>
          <div className="text-xl font-extrabold font-mono text-slate-900 mt-1">{students.length} Siswa (X DKV 1)</div>
          <span className="text-emerald-700 font-medium text-[11px] mt-1 block">Tingkat Kehadiran: 96.5%</span>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-slate-500 font-medium">Rata-Rata Kelas DD DKV</span>
          <div className="text-xl font-extrabold font-mono text-blue-700 mt-1">88.4 / 100</div>
          <span className="text-blue-700 font-medium text-[11px] mt-1 block">Kriteria Ketuntasan: 75</span>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-slate-500 font-medium">Siswa Tuntas & Pengayaan</span>
          <div className="text-xl font-extrabold font-mono text-emerald-700 mt-1">
            {students.filter(s => calcStudentAverage(s) >= 75).length} Siswa ({Math.round((students.filter(s => calcStudentAverage(s) >= 75).length / students.length) * 100)}%)
          </div>
          <span className="text-slate-500 text-[11px] mt-1 block">Memenuhi CP Kurikulum Merdeka</span>
        </div>

        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs">
          <span className="text-slate-500 font-medium">Siswa Perlu Pendampingan / Remedial</span>
          <div className="text-xl font-extrabold font-mono text-amber-700 mt-1">
            {students.filter(s => calcStudentAverage(s) < 75).length} Siswa
          </div>
          <span className="text-amber-700 font-medium text-[11px] mt-1 block">Diberi tugas revisi terarah</span>
        </div>
      </div>

      {/* Main Table: Roster of Students & Scores */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4 bg-slate-50">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm">Daftar Rekap Nilai Siswa Per Kategori Asesmen</h3>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama siswa..."
              className="text-xs p-2 rounded-lg border border-slate-300 bg-white"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs divide-y divide-slate-200">
            <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Nama Siswa / NISN</th>
                <th className="py-3 px-3">Kelas</th>
                <th className="py-3 px-3 text-center">Kehadiran</th>
                <th className="py-3 px-3 text-center">Kuis (Auto)</th>
                <th className="py-3 px-3 text-center">LKPD (Guru)</th>
                <th className="py-3 px-3 text-center">Proyek 3D (Rubrik)</th>
                <th className="py-3 px-3 text-center">Nilai Rata-rata</th>
                <th className="py-3 px-3 text-center">Status</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {students.map(st => {
                const avg = calcStudentAverage(st);
                const isSelected = selectedStudentId === st.studentId;

                return (
                  <tr
                    key={st.studentId}
                    onClick={() => setSelectedStudentId(st.studentId)}
                    className={`cursor-pointer transition-colors ${
                      isSelected ? 'bg-blue-50/60 font-medium' : 'hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{st.studentName}</div>
                      <div className="text-[10px] text-slate-400 font-mono">NISN: {st.nisn} · ID: {st.studentId}</div>
                    </td>
                    <td className="py-3 px-3 font-mono">{st.studentClass}</td>
                    <td className="py-3 px-3 text-center font-mono">{st.attendancePct}%</td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-blue-700">
                      {Object.values(st.quizzes).length
                        ? (Object.values(st.quizzes).reduce((a, b) => a + b.score, 0) / Object.values(st.quizzes).length).toFixed(0)
                        : '-'}
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-purple-700">
                      {Object.values(st.lkpdTasks).length
                        ? (Object.values(st.lkpdTasks).reduce((a, b) => a + b.score, 0) / Object.values(st.lkpdTasks).length).toFixed(0)
                        : '-'}
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-emerald-700">
                      {Object.values(st.practicalProjects).length
                        ? (Object.values(st.practicalProjects).reduce((a, b) => a + b.score, 0) / Object.values(st.practicalProjects).length).toFixed(0)
                        : '-'}
                    </td>
                    <td className="py-3 px-3 text-center font-mono font-extrabold text-sm">
                      <span className={`px-2 py-0.5 rounded ${
                        avg >= 85 ? 'text-emerald-800 bg-emerald-50' : avg >= 75 ? 'text-blue-800 bg-blue-50' : 'text-amber-800 bg-amber-50'
                      }`}>
                        {avg}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-center">
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                        avg >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {avg >= 75 ? 'Tuntas' : 'Remedial'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedStudentId(st.studentId);
                        }}
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Rincian
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Student Deep Dive & Rubric Evaluation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Individual Student Portfolio & Task Submissions */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <div className="text-[11px] font-mono text-blue-600 font-bold uppercase">Kartu Perkembangan Belajar</div>
              <h3 className="text-base font-bold text-slate-900">{selectedStudent.studentName}</h3>
            </div>
            <span className="text-xs font-mono font-bold bg-slate-100 px-2.5 py-1 rounded">
              NISN: {selectedStudent.nisn}
            </span>
          </div>

          {/* List of Submissions by this student */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800">Tugas Proyek & Karya Visual yang Masuk:</h4>

            {submissions
              .filter(sub => sub.studentName === selectedStudent.studentName || sub.studentId === selectedStudent.studentId)
              .map(sub => (
                <div key={sub.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900">{sub.taskTitle}</span>
                    <span className="text-[11px] text-slate-400 font-mono">M-{sub.week}</span>
                  </div>

                  <p className="text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200">
                    {sub.content}
                  </p>

                  <div className="p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900">
                    <strong className="block mb-0.5">Refleksi Murid (Mindful Learning):</strong>
                    {sub.reflection}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-medium">Nilai Terverifikasi:</span>
                      <span className="font-mono font-bold text-emerald-700 px-2 py-0.5 bg-emerald-100 rounded">
                        {sub.grade ?? 'Belum Dinilai'}
                      </span>
                    </div>

                    {isTeacher && (
                      <button
                        onClick={() => {
                          setEditingRubricSub(sub);
                          setRubricComment(sub.teacherFeedback || '');
                        }}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-1 shadow-xs"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Koreksi dengan Rubrik Guru</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right: Remedial & Pengayaan Console */}
        <div className="lg:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4 text-xs">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="font-bold text-slate-900 text-base">Tindak Lanjut Pembelajaran</h3>
            <p className="text-slate-500 text-[11px]">Program remedial dan pengayaan kurikulum merdeka.</p>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Program Remedial (Untuk Capaian &lt; 75):</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Peserta didik yang belum tuntas pada kuis teknis (misalnya Segitiga Eksposur atau Operasi Shaping Vektor) diberikan kesempatan mengulang simulasi mandiri di laboratorium dan melakukan revisi dumi fisik kemasan.
            </p>
            <div className="pt-1 flex items-center justify-between">
              <span className="font-medium">Status Remedial Siswa:</span>
              <span className="font-mono font-bold px-2 py-0.5 rounded bg-white border border-amber-300">
                {selectedStudent.remedialCompleted ? 'Telah Remedial' : 'Belum Memerlukan'}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-emerald-900">
              <Sparkles className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Program Pengayaan (Untuk Capaian &ge; 75):</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Peserta didik yang telah tuntas diarahkan menjadi mentor sebaya (*peer-learning*) dan diperbolehkan mengambil studi kasus kemasan UMKM lanjutan atau proyek animasi logo 3D videotron.
            </p>
            <div className="pt-1 flex items-center justify-between">
              <span className="font-medium">Status Pengayaan Siswa:</span>
              <span className="font-mono font-bold px-2 py-0.5 rounded bg-white border border-emerald-300">
                {selectedStudent.enrichmentCompleted ? 'Aktif Pengayaan' : 'Standar'}
              </span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 space-y-1 text-[11px]">
            <strong className="text-slate-800 block">Catatan Supervisor (Saidun, S.Pd., M.M.):</strong>
            <p>
              &ldquo;Asesmen formatif harus digunakan untuk memantau proses secara autentik, bukan sekadar menghitung skor akhir. Pertahankan keterlibatan refleksi murid.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Teacher Rubric Assessment Modal */}
      {editingRubricSub && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 w-full max-w-xl p-6 shadow-2xl space-y-5 text-xs max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-[10px] font-mono text-blue-600 font-bold uppercase">Rubrik Penilaian Profesional Guru</span>
                <h3 className="text-base font-bold text-slate-900">{editingRubricSub.taskTitle}</h3>
              </div>
              <button
                onClick={() => setEditingRubricSub(null)}
                className="text-slate-400 hover:text-slate-600 font-semibold"
              >
                Tutup
              </button>
            </div>

            <p className="text-slate-600">
              Siswa: <strong>{editingRubricSub.studentName} ({editingRubricSub.studentClass})</strong>. Tentukan bobot kriteria dan skor autentik guru:
            </p>

            {/* Rubric Criteria Sliders */}
            <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {/* 1. Kreativitas & Orisinalitas */}
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>1. Kreativitas & Nilai Inovasi Visual (Bobot: {rubricWeights.creativity}%)</span>
                  <span className="font-mono text-blue-700">{rubricScores.creativity} / 100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={rubricScores.creativity}
                  onChange={(e) => setRubricScores({ ...rubricScores, creativity: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* 2. Ketepatan Teknis */}
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>2. Ketepatan Teknis & Presisi (Bobot: {rubricWeights.technicalPrecision}%)</span>
                  <span className="font-mono text-blue-700">{rubricScores.technicalPrecision} / 100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={rubricScores.technicalPrecision}
                  onChange={(e) => setRubricScores({ ...rubricScores, technicalPrecision: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* 3. Disiplin K3 & Kerapian */}
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>3. Penerapan SOP K3 & Kerapian Kerja (Bobot: {rubricWeights.k3Discipline}%)</span>
                  <span className="font-mono text-blue-700">{rubricScores.k3Discipline} / 100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={rubricScores.k3Discipline}
                  onChange={(e) => setRubricScores({ ...rubricScores, k3Discipline: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              {/* 4. Presentasi & Refleksi */}
              <div>
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>4. Presentasi & Kedalaman Refleksi (Bobot: {rubricWeights.presentation}%)</span>
                  <span className="font-mono text-blue-700">{rubricScores.presentation} / 100</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={rubricScores.presentation}
                  onChange={(e) => setRubricScores({ ...rubricScores, presentation: Number(e.target.value) })}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculated Composite Grade */}
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-between text-blue-900 font-bold">
              <span>Nilai Akhir Berbobot Rubrik:</span>
              <span className="font-mono text-lg text-blue-700">
                {Math.round(
                  (rubricScores.creativity * rubricWeights.creativity +
                   rubricScores.technicalPrecision * rubricWeights.technicalPrecision +
                   rubricScores.k3Discipline * rubricWeights.k3Discipline +
                   rubricScores.presentation * rubricWeights.presentation) / 100
                )} / 100
              </span>
            </div>

            {/* Comment */}
            <div>
              <label className="block font-bold text-slate-800 mb-1">Catatan Umpan Balik Konstruktif Guru:</label>
              <textarea
                rows={2}
                value={rubricComment}
                onChange={(e) => setRubricComment(e.target.value)}
                placeholder="Tuliskan catatan apresiasi, kelebihan karya, serta aspek yang perlu disempurnakan..."
                className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Revision Option */}
            <label className="flex items-center gap-2 cursor-pointer font-medium text-slate-700">
              <input
                type="checkbox"
                checked={allowRevision}
                onChange={(e) => setAllowRevision(e.target.checked)}
                className="w-4 h-4 accent-blue-600 rounded"
              />
              <span>Beri kesempatan siswa melakukan revisi karya untuk meningkatkan nilai</span>
            </label>

            <div className="pt-2 flex justify-end gap-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setEditingRubricSub(null)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleApplyRubricGrade}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-xs"
              >
                Simpan & Konfirmasi Nilai Guru
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
