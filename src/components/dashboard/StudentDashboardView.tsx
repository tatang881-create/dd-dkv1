import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  BookOpen,
  Award,
  ChevronRight,
  Sparkles,
  FileText,
  Layers,
  Camera,
  Type,
  FolderGit2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { LearningUnit, TeacherControlState, StudentSubmission } from '../../types/curriculum';
import { ALL_36_WEEKS_UNITS, SCHOOL_IDENTITY } from '../../data/curriculumIndex';

interface Props {
  currentWeek: number;
  activeUnit: LearningUnit;
  teacherControl: TeacherControlState;
  submissions: StudentSubmission[];
  onNavigate: (tabId: string, weekNum?: number) => void;
}

export const StudentDashboardView: React.FC<Props> = ({
  currentWeek,
  activeUnit,
  teacherControl,
  submissions,
  onNavigate
}) => {
  const currentMeeting = activeUnit.meetings[teacherControl.activeMeetingDay === 'Senin' ? 0 : 1];
  const completedSubmissions = submissions.filter(s => s.status === 'graded');

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <span>Selamat Datang · Ruang Belajar Siswa DKV</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mt-1">
              Ahmad Fauzi Ridwan
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Peserta Didik Kelas <strong className="text-slate-800">{teacherControl.activeClass}</strong> · NISN: 0078239102 · {SCHOOL_IDENTITY.name}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Progres Pembelajaran</span>
              <span className="text-lg font-bold font-mono text-blue-700">
                Minggu {teacherControl.currentWeek} / 36 Unit
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-mono font-bold text-blue-800 text-sm">
              {Math.round((teacherControl.currentWeek / 36) * 100)}%
            </div>
          </div>
        </div>

        {/* Live Learning Status Bar */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className={`w-3 h-3 rounded-full ${
              teacherControl.sessionStatus === 'berlangsung' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`} />
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Pertemuan Terjadwal Hari Ini:</div>
              <div className="text-sm font-bold text-amber-300">
                Pertemuan {currentMeeting.meetingNumber} ({currentMeeting.day}) · {currentMeeting.jp} JP ({currentMeeting.durationMinutes} Menit)
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('pertemuan')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Buka Pertemuan Hari Ini</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid of Key Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Materi Minggu Ini */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-blue-700 font-mono">SEMESTER {activeUnit.semester} · MINGGU {activeUnit.week}</span>
              <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded">Resmi Buku</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug">{activeUnit.topic}</h3>
            <p className="text-xs text-slate-600 mt-2 line-clamp-2">{activeUnit.summary}</p>

            <div className="mt-4 pt-3 border-t border-slate-100 text-xs space-y-1.5">
              <div className="text-slate-500 font-medium">Fokus Pembelajaran:</div>
              <div className="text-slate-800 font-medium bg-slate-50 p-2 rounded border border-slate-200/60">
                {currentMeeting.title}
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('materi', activeUnit.week)}
            className="mt-4 w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            <span>Pelajari Modul Materi</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Laboratorium Simulasi Cepat */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-purple-700">LABORATORIUM PRAKTIK</span>
              <span className="text-emerald-700 font-mono text-[11px] font-semibold">Ready</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug">Simulasi Interaktif DKV</h3>
            <p className="text-xs text-slate-600 mt-2">
              Eksplorasi studio langsung: tipografi, segitiga exposure DSLR, 8 shaping vektor Corel/AI, dan K3 ergonomi komputer.
            </p>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <Type className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-slate-700 block">Tipografi</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <Camera className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-slate-700 block">DSLR Studio</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <Layers className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-slate-700 block">Vektor Shaping</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <Sparkles className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <span className="text-[11px] font-semibold text-slate-700 block">Pola Kemasan</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('simulasi')}
            className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 shadow-xs"
          >
            <span>Mulai Praktik Simulasi</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: Tugas LKPD & Portofolio */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-emerald-700">STATUS ASESMEN</span>
              <span className="font-mono text-slate-500">{completedSubmissions.length} Dinilai</span>
            </div>
            <h3 className="font-bold text-slate-900 text-base leading-snug">Tugas LKPD & Umpan Balik Guru</h3>
            <p className="text-xs text-slate-600 mt-2">
              Periksa catatan koreksi dari guru pengampu (Tatang, S.Pd.) dan pantau nilai LKPD serta portofolio digitalmu.
            </p>

            <div className="mt-4 space-y-2">
              {submissions.slice(0, 2).map(sub => (
                <div key={sub.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span className="truncate max-w-[140px]">{sub.taskTitle}</span>
                    <span className="font-mono text-emerald-700">{sub.grade ? `Nilai: ${sub.grade}` : 'Diproses'}</span>
                  </div>
                  {sub.teacherFeedback && (
                    <p className="text-[11px] text-slate-500 italic mt-0.5 line-clamp-1">
                      &ldquo;{sub.teacherFeedback}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <button
              onClick={() => onNavigate('kuis')}
              className="py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg text-center"
            >
              Kuis Formatif
            </button>
            <button
              onClick={() => onNavigate('portofolio')}
              className="py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg text-center"
            >
              Portofolio Saya
            </button>
          </div>
        </div>
      </div>

      {/* Trigger Question Banner */}
      <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-blue-800">
            Pertanyaan Pemantik Hari Ini (Deep Learning):
          </div>
          <p className="text-sm font-semibold italic mt-0.5">
            &ldquo;{currentMeeting.triggerQuestion}&rdquo;
          </p>
          <p className="text-xs text-blue-700/80 mt-1">
            Siapkan jawaban reflektifmu untuk didiskusikan bersama rekan sebangku pada sesi jam pelajaran.
          </p>
        </div>
      </div>
    </div>
  );
};
