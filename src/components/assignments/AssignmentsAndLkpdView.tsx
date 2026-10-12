import React, { useState } from 'react';
import {
  FileText,
  Upload,
  CheckCircle,
  Clock,
  Sparkles,
  Award,
  ChevronRight,
  Filter
} from 'lucide-react';
import { StudentSubmission, TeacherControlState, LearningUnit } from '../../types/curriculum';
import { ALL_36_WEEKS_UNITS } from '../../data/curriculumIndex';

interface Props {
  submissions: StudentSubmission[];
  currentWeek: number;
  teacherControl: TeacherControlState;
  onSubmitTask: (title: string, content: string, reflection: string) => void;
  isTeacher: boolean;
}

export const AssignmentsAndLkpdView: React.FC<Props> = ({
  submissions,
  currentWeek,
  teacherControl,
  onSubmitTask,
  isTeacher
}) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(currentWeek);
  const [taskAnswer, setTaskAnswer] = useState<string>('');
  const [reflection, setReflection] = useState<string>('');
  const [submittedNotice, setSubmittedNotice] = useState<boolean>(false);

  const activeUnit = ALL_36_WEEKS_UNITS.find(u => u.week === selectedWeek) || ALL_36_WEEKS_UNITS[0];
  const meetingWithLkpd = activeUnit.meetings.find(m => m.lkpdTask) || activeUnit.meetings[1];
  const lkpdTask = meetingWithLkpd.lkpdTask || {
    id: `lkpd-custom-${activeUnit.week}`,
    title: `LKPD Unit Minggu ke-${activeUnit.week}: ${activeUnit.topic}`,
    instruction: `Kerjakan aktivitas pemahaman dan penerapan konsep ${activeUnit.topic} berdasarkan petunjuk buku bab ${activeUnit.babNumber}.`,
    steps: [
      'Pelajari materi inti dan glosarium rujukan bab buku.',
      'Selesaikan rancangan tugas atau eksperimen visual mandiri.',
      'Tuliskan hasil kerja serta refleksi mendalam (Deep Learning) pada formulir pengumpulan.'
    ],
    rubricCriteria: [
      { criteria: 'Kesesuaian konsep materi', weight: 40, maxScore: 100 },
      { criteria: 'Kreativitas dan estetika visual', weight: 30, maxScore: 100 },
      { criteria: 'Kedalaman refleksi diri', weight: 30, maxScore: 100 }
    ]
  };

  const currentUnitSubmission = submissions.find(s => s.week === selectedWeek);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskAnswer) return;
    onSubmitTask(lkpdTask.title, taskAnswer, reflection);
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <FileText className="w-4 h-4" />
            <span>Aktivitas & LKPD Digital · Kurikulum Merdeka</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">
            Lembar Kerja Peserta Didik (LKPD) & Penugasan Proyek
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Langkah kerja sistematis, checklist rubrik penilaian proses, dan pengumpulan berkas terverifikasi guru.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600">Pilih Minggu:</label>
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(Number(e.target.value))}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-800"
          >
            {ALL_36_WEEKS_UNITS.map(u => (
              <option key={u.week} value={u.week}>Minggu {u.week}: {u.babTitle.slice(0, 30)}...</option>
            ))}
          </select>
        </div>
      </div>

      {submittedNotice && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 shadow-xs">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Jawaban LKPD berhasil dikumpulkan! Data tersimpan di server dan menunggu evaluasi guru.</span>
        </div>
      )}

      {/* Main Task Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs text-blue-700 font-mono font-semibold mb-1">
            <span>UNIT MINGGU {activeUnit.week}</span>
            <span>·</span>
            <span>SEMESTER {activeUnit.semester}</span>
            <span>·</span>
            <span>BAB {activeUnit.babNumber}</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">{lkpdTask.title}</h3>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">{lkpdTask.instruction}</p>
        </div>

        {/* Steps */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <strong className="text-xs font-bold text-slate-800 block">Langkah Kerja Pembelajaran Mendalam (Deep Learning):</strong>
          <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-700">
            {lkpdTask.steps.map((st, i) => <li key={i}>{st}</li>)}
          </ol>
        </div>

        {/* Rubrics */}
        <div>
          <strong className="text-xs font-bold text-slate-800 block mb-2">Rubrik Penilaian Kinerja & Portofolio:</strong>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {lkpdTask.rubricCriteria.map((rc, i) => (
              <div key={i} className="p-3 bg-white border border-slate-200 rounded-lg text-xs">
                <div className="font-bold text-slate-900">{rc.criteria}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">Bobot: {rc.weight}% (Nilai Maks: {rc.maxScore})</div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Submission Status */}
        {currentUnitSubmission && (
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs space-y-2">
            <div className="flex justify-between items-center font-bold text-blue-900">
              <span>Status Pengumpulan: Terkirim pada {currentUnitSubmission.submittedAt}</span>
              <span className="font-mono text-emerald-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                {currentUnitSubmission.grade ? `Nilai: ${currentUnitSubmission.grade}` : 'Menunggu Koreksi Guru'}
              </span>
            </div>
            <p className="text-slate-700 bg-white p-2.5 rounded border border-blue-100">
              {currentUnitSubmission.content}
            </p>
            {currentUnitSubmission.teacherFeedback && (
              <div className="text-blue-900 font-medium">
                Catatan Guru: &ldquo;{currentUnitSubmission.teacherFeedback}&rdquo;
              </div>
            )}
          </div>
        )}

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-200 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Kolom Jawaban / Dokumentasi Hasil Kerja LKPD:
            </label>
            <textarea
              rows={4}
              required
              value={taskAnswer}
              onChange={(e) => setTaskAnswer(e.target.value)}
              placeholder="Tuliskan jawaban pertanyaan LKPD, data hasil praktik, atau uraian langkah kerjamu..."
              className="w-full p-3 rounded-lg border border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">
              Refleksi Pembelajaran Berkesadaran (Mindful & Meaningful Reflection):
            </label>
            <textarea
              rows={2}
              required
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Apa pemahaman baru paling bermakna yang kamu temukan dan bagaimana kamu mengatasi kendalanya?"
              className="w-full p-3 rounded-lg border border-slate-300 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
            >
              Kirim Lembar Kerja LKPD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
