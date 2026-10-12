import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  HelpCircle,
  FileText,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Edit3,
  Save,
  RotateCcw,
  AlertCircle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { LearningUnit, MeetingPlan } from '../../types/curriculum';

interface Props {
  unit: LearningUnit;
  activeMeetingDay: 'Senin' | 'Rabu';
  onNavigateWeek: (week: number) => void;
  onSubmitTask: (title: string, content: string, reflection: string) => void;
  isTeacher: boolean;
  onUpdateUnitContent?: (updatedUnit: LearningUnit) => void;
}

export const UnitComprehensiveModuleView: React.FC<Props> = ({
  unit,
  activeMeetingDay,
  onNavigateWeek,
  onSubmitTask,
  isTeacher,
  onUpdateUnitContent
}) => {
  const [selectedMeetingIndex, setSelectedMeetingIndex] = useState<0 | 1>(activeMeetingDay === 'Senin' ? 0 : 1);
  const [taskAnswer, setTaskAnswer] = useState<string>('');
  const [studentReflection, setStudentReflection] = useState<string>('');
  const [isTaskSubmitted, setIsTaskSubmitted] = useState<boolean>(false);

  // Teacher edit mode states
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editedTopic, setEditedTopic] = useState<string>(unit.topic);
  const [editedSummary, setEditedSummary] = useState<string>(unit.summary);
  const [editedTriggerQuestion, setEditedTriggerQuestion] = useState<string>(unit.meetings[selectedMeetingIndex].triggerQuestion);
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<boolean>(false);

  const meeting: MeetingPlan = unit.meetings[selectedMeetingIndex];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskAnswer) return;
    onSubmitTask(
      meeting.lkpdTask ? meeting.lkpdTask.title : `Aktivitas ${meeting.day} M-${unit.week}`,
      taskAnswer,
      studentReflection
    );
    setIsTaskSubmitted(true);
  };

  const handleSaveTeacherEdit = () => {
    if (!onUpdateUnitContent) return;

    const updatedMeetings = [...unit.meetings] as [MeetingPlan, MeetingPlan];
    updatedMeetings[selectedMeetingIndex] = {
      ...updatedMeetings[selectedMeetingIndex],
      triggerQuestion: editedTriggerQuestion
    };

    const updatedUnit: LearningUnit = {
      ...unit,
      topic: editedTopic,
      summary: editedSummary,
      meetings: updatedMeetings
    };

    onUpdateUnitContent(updatedUnit);
    setIsEditMode(false);
    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Unit Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
            <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 font-mono">
              SEMESTER {unit.semester}
            </span>
            <span>·</span>
            <span className="font-mono">BAB {unit.babNumber}: {unit.babTitle}</span>
            <span>·</span>
            <span className="font-mono font-bold">MINGGU KE-{unit.week}</span>
          </div>

          <div className="flex items-center gap-3">
            {isTeacher && (
              <button
                onClick={() => {
                  if (isEditMode) {
                    handleSaveTeacherEdit();
                  } else {
                    setEditedTopic(unit.topic);
                    setEditedSummary(unit.summary);
                    setEditedTriggerQuestion(unit.meetings[selectedMeetingIndex].triggerQuestion);
                    setIsEditMode(true);
                  }
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  isEditMode ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
                }`}
              >
                {isEditMode ? <Save className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                <span>{isEditMode ? 'Simpan Perubahan' : 'Edit Materi (Guru)'}</span>
              </button>
            )}

            <div className="flex items-center gap-1 font-mono text-xs">
              <button
                disabled={unit.week <= 1}
                onClick={() => onNavigateWeek(unit.week - 1)}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                title="Minggu Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-bold text-slate-700">{unit.week} / 36</span>
              <button
                disabled={unit.week >= 36}
                onClick={() => onNavigateWeek(unit.week + 1)}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                title="Minggu Berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {saveSuccessNotice && (
          <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Materi unit berhasil diperbarui dan disinkronkan ke seluruh siswa kelas!</span>
          </div>
        )}

        {/* Title & Summary */}
        <div className="mt-5 space-y-3">
          {isEditMode ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Judul Topik Pembelajaran:</label>
                <input
                  type="text"
                  value={editedTopic}
                  onChange={(e) => setEditedTopic(e.target.value)}
                  className="w-full text-base font-bold p-2.5 rounded-lg border border-slate-300 text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ringkasan Konseptual:</label>
                <textarea
                  rows={2}
                  value={editedSummary}
                  onChange={(e) => setEditedSummary(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 text-slate-900"
                />
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {unit.topic}
              </h1>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                {unit.summary}
              </p>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 font-mono">
            <span>Rujukan Dokumen: <strong className="text-blue-800">{unit.sourceReference}</strong></span>
            <span>·</span>
            <span>Alokasi Total: <strong className="text-slate-800">12 JP / Minggu (540 Menit)</strong></span>
          </div>
        </div>

        {/* Core Concepts Badges */}
        <div className="mt-5 pt-4 border-t border-slate-100">
          <span className="text-xs font-bold text-slate-800 block mb-2">Pokok Bahasan Konseptual:</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {unit.coreConcepts.map((cp, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 bg-slate-50 rounded-lg text-slate-700 border border-slate-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span className="leading-snug">{cp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meeting Selector (Senin 6 JP vs Rabu 6 JP) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map((idx) => {
          const m = unit.meetings[idx as 0 | 1];
          const isSelected = selectedMeetingIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => {
                setSelectedMeetingIndex(idx as 0 | 1);
                setIsTaskSubmitted(false);
              }}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20 shadow-xs'
                  : 'bg-white border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="font-extrabold text-sm text-slate-900">
                      Pertemuan {m.meetingNumber} · Hari {m.day}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 font-bold">
                    {m.jp} JP ({m.durationMinutes} Menit)
                  </span>
                </div>
                <h3 className="text-xs font-bold text-slate-800 mt-1">{m.title}</h3>
                <p className="text-[11px] text-slate-500 mt-1 italic">
                  Pemantik: &ldquo;{m.triggerQuestion}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-blue-700">
                <span>Fokus: {m.focus}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Meeting Deep Dive Content Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        {/* Trigger Question Box */}
        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div className="w-full">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
              Pertanyaan Pemantik Hari Ini (Deep Learning Trigger):
            </div>
            {isEditMode ? (
              <input
                type="text"
                value={editedTriggerQuestion}
                onChange={(e) => setEditedTriggerQuestion(e.target.value)}
                className="w-full text-xs p-2 rounded border border-blue-300 bg-white text-slate-800 font-semibold"
              />
            ) : (
              <p className="text-sm font-semibold text-slate-900 italic">
                &ldquo;{meeting.triggerQuestion}&rdquo;
              </p>
            )}
          </div>
        </div>

        {/* Learning Objectives */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>Tujuan Pembelajaran & Kriteria Ketercapaian (6 JP):</span>
          </h3>
          <ul className="space-y-1.5 pl-6 text-xs text-slate-700 list-disc">
            {meeting.learningObjectives.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>

        {/* 3 Step Structured Flow (Pendahuluan, Inti, Penutup) */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 border-b border-slate-200 pb-2">
            Rangkaian Aktivitas Pembelajaran 270 Menit (Kurikulum Merdeka SMK)
          </h3>

          {/* 1. Pendahuluan */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              <span className="text-blue-700">1. Kegiatan Pendahuluan (Apersepsi & Motivasi Berkesadaran)</span>
              <span className="font-mono text-slate-500">± 45 Menit</span>
            </div>
            <ul className="space-y-1 pl-5 text-xs text-slate-600 list-disc">
              {meeting.activities.pendahuluan.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>

          {/* 2. Inti */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              <span className="text-blue-700">2. Kegiatan Inti ({meeting.focus} · Meaningful Activity)</span>
              <span className="font-mono text-slate-500">± 180 Menit</span>
            </div>
            <ul className="space-y-1 pl-5 text-xs text-slate-600 list-disc">
              {meeting.activities.inti.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>

          {/* 3. Penutup */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
              <span className="text-blue-700">3. Kegiatan Penutup (Refleksi Mendalam & Tindak Lanjut Joyful)</span>
              <span className="font-mono text-slate-500">± 45 Menit</span>
            </div>
            <ul className="space-y-1 pl-5 text-xs text-slate-600 list-disc">
              {meeting.activities.penutup.map((act, i) => <li key={i}>{act}</li>)}
            </ul>
          </div>
        </div>

        {/* Deep Learning 5C Framework */}
        <div className="p-5 rounded-xl border border-indigo-200 bg-indigo-50/40 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-900">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Penerapan Kompetensi Deep Learning 5C (Instrumen Supervisi Hal. 2)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-lg border border-indigo-100">
              <strong className="text-indigo-900 block mb-0.5">Critical Thinking:</strong>
              <p className="text-slate-600">{meeting.deepLearning5C.criticalThinking}</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-100">
              <strong className="text-indigo-900 block mb-0.5">Creativity:</strong>
              <p className="text-slate-600">{meeting.deepLearning5C.creativity}</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-100">
              <strong className="text-indigo-900 block mb-0.5">Collaboration:</strong>
              <p className="text-slate-600">{meeting.deepLearning5C.collaboration}</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-100">
              <strong className="text-indigo-900 block mb-0.5">Communication:</strong>
              <p className="text-slate-600">{meeting.deepLearning5C.communication}</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-indigo-100 lg:col-span-2">
              <strong className="text-indigo-900 block mb-0.5">Connection to Real Life:</strong>
              <p className="text-slate-600">{meeting.deepLearning5C.connectionToRealLife}</p>
            </div>
          </div>
        </div>

        {/* LKPD Penugasan Form */}
        {meeting.lkpdTask && (
          <div className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs space-y-4">
            <div className="border-b border-slate-200 pb-3">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700">Lembar Kerja Peserta Didik (LKPD)</div>
              <h4 className="text-base font-bold text-slate-900 mt-0.5">{meeting.lkpdTask.title}</h4>
              <p className="text-xs text-slate-600 mt-1">{meeting.lkpdTask.instruction}</p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-slate-800">Langkah-Langkah Pengerjaan:</span>
              <ol className="list-decimal pl-5 space-y-1 text-slate-600">
                {meeting.lkpdTask.steps.map((st, i) => <li key={i}>{st}</li>)}
              </ol>
            </div>

            {/* Rubric Matrix */}
            <div className="space-y-1.5 text-xs">
              <span className="font-bold text-slate-800">Rubrik Penilaian Proses Guru:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {meeting.lkpdTask.rubricCriteria.map((rc, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded text-[11px]">
                    <div className="font-semibold text-slate-800">{rc.criteria}</div>
                    <div className="text-slate-500 font-mono">Bobot: {rc.weight}% · Maks: {rc.maxScore}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submission Form */}
            {!isTaskSubmitted ? (
              <form onSubmit={handleFormSubmit} className="pt-3 border-t border-slate-100 space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Kolom Jawaban / Catatan Hasil Praktik Siswa:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={taskAnswer}
                    onChange={(e) => setTaskAnswer(e.target.value)}
                    placeholder="Tuliskan analisis, hasil pengukuran, atau dokumentasi langkah kerjamu..."
                    className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Refleksi Diri Pembelajaran Mendalam (Mindful & Meaningful):
                  </label>
                  <textarea
                    rows={2}
                    value={studentReflection}
                    onChange={(e) => setStudentReflection(e.target.value)}
                    placeholder="Apa hal paling bermakna yang kamu pelajari dan kendala apa yang kamu hadapi?"
                    className="w-full text-xs p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
                  >
                    Kirim Tugas LKPD ke Guru
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Tugas LKPD berhasil dikumpulkan! Nilai dan umpan balik akan diberikan oleh guru di Dashboard.</span>
                </span>
                <button
                  onClick={() => setIsTaskSubmitted(false)}
                  className="text-emerald-700 underline font-semibold"
                >
                  Edit Jawaban
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
