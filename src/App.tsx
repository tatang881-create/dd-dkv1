import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  Calendar,
  Layers,
  Camera,
  Type,
  FolderGit2,
  ClipboardCheck,
  Table,
  Settings,
  LogIn,
  LogOut,
  ChevronRight,
  Shield,
  ShieldCheck,
  Clock,
  Sparkles,
  School,
  LayoutDashboard,
  FileText,
  HelpCircle,
  GraduationCap
} from 'lucide-react';
import { useAppState } from './context/AppStateContext';
import { SCHOOL_IDENTITY } from './data/curriculumIndex';
import { CurriculumMatrix36Weeks } from './components/curriculum/CurriculumMatrix36Weeks';
import { UnitComprehensiveModuleView } from './components/curriculum/MeetingAndLessonDetail';
import { TypographySimulator } from './components/simulators/TypographySimulator';
import { PhotographySimulator } from './components/simulators/PhotographySimulator';
import { GraphicSimulator } from './components/simulators/GraphicSimulator';
import { ProductionAndK3Simulator } from './components/simulators/ProductionAndK3Simulator';
import { MasterSimulationHub } from './components/simulators/MasterSimulationHub';
import { TeacherControlPanel } from './components/teacher/TeacherControlPanel';
import { SupervisionDashboard } from './components/supervision/SupervisionDashboard';
import { DigitalPortfolioView } from './components/portfolio/DigitalPortfolioView';
import { AssessmentAndQuizView } from './components/assessment/AssessmentAndQuizView';
import { StudentGradebookReportView } from './components/assessment/StudentGradebookReportView';
import { StudentDashboardView } from './components/dashboard/StudentDashboardView';
import { AdminDashboardView } from './components/admin/AdminDashboardView';
import { AssignmentsAndLkpdView } from './components/assignments/AssignmentsAndLkpdView';
import { ReferencesAndGlossaryView } from './components/references/ReferencesAndGlossaryView';

// High-fidelity image assets generated via image generation skill
const IMAGES = {
  hero: '/src/assets/images/dkv_hero_banner_1791814066993.jpg',
  typography: '/src/assets/images/dkv_typography_lab_1791814142821.jpg',
  camera: '/src/assets/images/dkv_camera_lab_1791814189337.jpg',
  vector: '/src/assets/images/dkv_vector_bitmap_lab_1791814251442.jpg',
  packaging: '/src/assets/images/dkv_packaging_design_1791814321426.jpg'
};

export default function App() {
  const {
    userRole,
    setUserRole,
    isTeacherAuthenticated,
    loginTeacher,
    logoutTeacher,
    currentWeek,
    setCurrentWeek,
    activeTab,
    setActiveTab,
    unitsData,
    updateUnitContent,
    teacherControl,
    updateTeacherControl,
    submissions,
    addSubmission,
    gradeSubmission,
    portfolioItems,
    addPortfolioItem,
    supervisionRecord,
    setSupervisionRecord
  } = useAppState();

  // Authentication Dialog & Roles
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [loginRoleTarget, setLoginRoleTarget] = useState<'teacher' | 'admin'>('teacher');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Active unit based on teacher control or current selection from dynamic unitsData
  const activeUnit = unitsData.find(u => u.week === currentWeek) || unitsData[0];

  // Access control checker
  const isMenuLockedForStudent = (menuKey: keyof typeof teacherControl.menuPermissions) => {
    if (userRole === 'teacher' && isTeacherAuthenticated) return false;
    return !teacherControl.menuPermissions[menuKey];
  };

  const isWeekLockedForStudent = (weekNum: number) => {
    if (userRole === 'teacher' && isTeacherAuthenticated) return false;
    if (teacherControl.lockNavigationToNext && weekNum > teacherControl.currentWeek) {
      return true;
    }
    return !teacherControl.allowedUnits.includes(weekNum);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    if (loginRoleTarget === 'teacher') {
      const ok = loginTeacher(passwordInput);
      if (ok) {
        setShowLoginModal(false);
        setPasswordInput('');
        setActiveTab('kontrol');
      } else {
        setLoginError('Kata sandi guru salah. Gunakan sandi demo: guru2026 atau dkvsmk3kuningan.');
      }
    } else if (loginRoleTarget === 'admin') {
      if (passwordInput === 'admin123' || passwordInput === 'adminsmk3') {
        setShowLoginModal(false);
        setPasswordInput('');
        setUserRole('teacher');
        setActiveTab('admin');
      } else {
        setLoginError('Kata sandi administrator salah. Gunakan sandi demo: admin123.');
      }
    }
  };

  const handleNavClick = (tabId: string, weekNum?: number) => {
    if (weekNum !== undefined) {
      setCurrentWeek(weekNum);
    }

    if (userRole === 'student') {
      if (tabId === 'kontrol' || tabId === 'supervisi') {
        setLoginRoleTarget('teacher');
        setShowLoginModal(true);
        return;
      }
      if (tabId === 'admin') {
        setLoginRoleTarget('admin');
        setShowLoginModal(true);
        return;
      }
      if (tabId === 'materi' && isMenuLockedForStudent('materi')) return;
      if (tabId === 'simulasi' && (!teacherControl.allowedSimulations || isMenuLockedForStudent('simulasi'))) return;
      if (tabId === 'lkpd' && isMenuLockedForStudent('lkpd')) return;
      if (tabId === 'kuis' && isMenuLockedForStudent('kuis')) return;
      if (tabId === 'portofolio' && isMenuLockedForStudent('portofolio')) return;
    }

    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-800 flex flex-col font-sans">
      {/* ================= 1. STRICT 3-ZONE TOP BAR CONTRACT ================= */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single line, no pill badges) */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); handleNavClick('dashboard_siswa'); }}
              className="text-lg font-black tracking-tight text-blue-900 whitespace-nowrap"
            >
              DKV LEARNING LAB
            </a>
            <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
              SMKN 3 Kuningan
            </span>
          </div>

          {/* Zone 2: 4-5 Navigation Links (single line, whitespace-nowrap) */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <button
              onClick={() => handleNavClick('dashboard_siswa')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'dashboard_siswa' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavClick('matriks')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'matriks' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Daftar 36 Minggu
            </button>

            <button
              onClick={() => handleNavClick('materi')}
              disabled={isMenuLockedForStudent('materi')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'materi' ? 'text-blue-600 font-bold' : ''
              } ${isMenuLockedForStudent('materi') ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              {isMenuLockedForStudent('materi') ? 'Materi (Terkunci)' : 'Materi'}
            </button>

            <button
              onClick={() => handleNavClick('simulasi')}
              disabled={!teacherControl.allowedSimulations || isMenuLockedForStudent('simulasi')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'simulasi' ? 'text-blue-600 font-bold' : ''
              } ${(!teacherControl.allowedSimulations || isMenuLockedForStudent('simulasi')) ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              Simulasi
            </button>

            <button
              onClick={() => handleNavClick('lkpd')}
              disabled={isMenuLockedForStudent('lkpd')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'lkpd' ? 'text-blue-600 font-bold' : ''
              } ${isMenuLockedForStudent('lkpd') ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              Tugas & LKPD
            </button>

            <button
              onClick={() => handleNavClick('portofolio')}
              disabled={isMenuLockedForStudent('portofolio')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'portofolio' ? 'text-blue-600 font-bold' : ''
              } ${isMenuLockedForStudent('portofolio') ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              Portofolio
            </button>

            <button
              onClick={() => handleNavClick('kuis')}
              disabled={isMenuLockedForStudent('kuis')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'kuis' ? 'text-blue-600 font-bold' : ''
              } ${isMenuLockedForStudent('kuis') ? 'opacity-40 cursor-not-allowed' : ''}`}
            >
              Asesmen
            </button>

            <button
              onClick={() => handleNavClick('referensi')}
              className={`hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'referensi' ? 'text-blue-600 font-bold' : ''
              }`}
            >
              Referensi
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action (Mode Guru / Admin / Logout) */}
          <div className="flex items-center gap-2 shrink-0">
            {userRole === 'teacher' && isTeacherAuthenticated ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('kontrol')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                    activeTab === 'kontrol' ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-blue-50 text-blue-700 border-blue-200'
                  }`}
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Kontrol Guru</span>
                </button>

                <button
                  onClick={() => handleNavClick('supervisi')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                    activeTab === 'supervisi' ? 'bg-purple-600 text-white border-purple-600 shadow-xs' : 'bg-purple-50 text-purple-700 border-purple-200'
                  }`}
                >
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Supervisi</span>
                </button>

                <button
                  onClick={() => handleNavClick('admin')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors flex items-center gap-1.5 ${
                    activeTab === 'admin' ? 'bg-slate-900 text-white border-slate-900 shadow-xs' : 'bg-slate-100 text-slate-700 border-slate-300'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Admin</span>
                </button>

                <button
                  onClick={logoutTeacher}
                  className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg"
                  title="Keluar Akun Guru"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setLoginRoleTarget('teacher');
                    setShowLoginModal(true);
                  }}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-800 rounded-lg transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Mode Guru</span>
                </button>

                <button
                  onClick={() => {
                    setLoginRoleTarget('admin');
                    setShowLoginModal(true);
                  }}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap border border-slate-300"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* ================= 2. LIVE SYNCHRONIZED CLASS STATUS TICKER ================= */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${
                teacherControl.sessionStatus === 'berlangsung' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`} />
              <strong className="text-slate-200">KELAS {teacherControl.activeClass}</strong>
            </span>
            <span>·</span>
            <span className="text-amber-300">
              Minggu {teacherControl.currentWeek} ({teacherControl.activeMeetingDay})
            </span>
            <span>·</span>
            <span className="text-slate-400">
              {teacherControl.sessionStatus === 'berlangsung'
                ? 'Pembelajaran Berlangsung'
                : teacherControl.sessionStatus === 'dijeda'
                ? 'Pembelajaran Dijeda'
                : 'Menunggu Instruksi Guru'}
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>12 JP / Minggu (432 JP Total)</span>
            <span>·</span>
            <span className="text-blue-400 font-bold">SMKN 3 Kuningan</span>
          </div>
        </div>
      </div>

      {/* ================= 3. ACTIVE ROUTED VIEW ================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* 1. DASHBOARD PESERTA DIDIK */}
        {activeTab === 'dashboard_siswa' && (
          <StudentDashboardView
            currentWeek={currentWeek}
            activeUnit={activeUnit}
            teacherControl={teacherControl}
            submissions={submissions}
            onNavigate={handleNavClick}
          />
        )}

        {/* 2. DAFTAR 36 MINGGU & 72 PERTEMUAN */}
        {activeTab === 'matriks' && (
          <div className="space-y-6">
            <CurriculumMatrix36Weeks />
          </div>
        )}

        {/* 3. MODUL MATERI PEMBELAJARAN (36 MINGGU) */}
        {activeTab === 'materi' && (
          <div className="space-y-6">
            {/* Week Selector */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Pilih Minggu Pembelajaran (1 - 36):</span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
                {unitsData.map(u => {
                  const isLocked = isWeekLockedForStudent(u.week);
                  const isCurrent = currentWeek === u.week;

                  return (
                    <button
                      key={u.week}
                      disabled={isLocked}
                      onClick={() => setCurrentWeek(u.week)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : isLocked
                          ? 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed opacity-60'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                      title={isLocked ? 'Unit dikunci oleh guru' : `Minggu ${u.week}`}
                    >
                      {isLocked ? `🔒 M-${u.week}` : `M-${u.week}`}
                    </button>
                  );
                })}
              </div>
            </div>

            {isWeekLockedForStudent(currentWeek) ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
                <Lock className="w-10 h-10 text-amber-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Materi Minggu ke-{currentWeek} Belum Dibuka oleh Guru</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Guru mengunci navigasi peserta didik agar fokus pada minggu aktif kelas {teacherControl.activeClass}.
                </p>
                <button
                  onClick={() => setCurrentWeek(teacherControl.currentWeek)}
                  className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg mt-2"
                >
                  Kembali ke Minggu Berjalan (M-{teacherControl.currentWeek})
                </button>
              </div>
            ) : (
              <UnitComprehensiveModuleView
                unit={activeUnit}
                activeMeetingDay={teacherControl.activeMeetingDay}
                onNavigateWeek={(wk) => setCurrentWeek(wk)}
                onSubmitTask={(tTitle, tContent, tRefl) => {
                  addSubmission({
                    studentId: 'dkv-001',
                    studentName: 'Ahmad Fauzi Ridwan',
                    studentClass: teacherControl.activeClass,
                    week: activeUnit.week,
                    meetingNumber: teacherControl.activeMeetingDay === 'Senin' ? 1 : 2,
                    taskTitle: tTitle,
                    content: tContent,
                    reflection: tRefl
                  });
                }}
                isTeacher={userRole === 'teacher' && isTeacherAuthenticated}
                onUpdateUnitContent={updateUnitContent}
              />
            )}
          </div>
        )}

        {/* 4. DETAIL PERTEMUAN (SENIN / RABU) */}
        {activeTab === 'pertemuan' && (
          <UnitComprehensiveModuleView
            unit={activeUnit}
            activeMeetingDay={teacherControl.activeMeetingDay}
            onNavigateWeek={(wk) => setCurrentWeek(wk)}
            onSubmitTask={(tTitle, tContent, tRefl) => {
              addSubmission({
                studentId: 'dkv-001',
                studentName: 'Ahmad Fauzi Ridwan',
                studentClass: teacherControl.activeClass,
                week: activeUnit.week,
                meetingNumber: teacherControl.activeMeetingDay === 'Senin' ? 1 : 2,
                taskTitle: tTitle,
                content: tContent,
                reflection: tRefl
              });
            }}
            isTeacher={userRole === 'teacher' && isTeacherAuthenticated}
            onUpdateUnitContent={updateUnitContent}
          />
        )}

        {/* 5. HALAMAN LABORATORIUM SIMULASI INTERAKTIF (7 WAHANA) */}
        {activeTab === 'simulasi' && (
          <div className="space-y-6">
            {!teacherControl.allowedSimulations && userRole === 'student' ? (
              <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
                <Lock className="w-10 h-10 text-amber-500 mx-auto" />
                <h3 className="text-lg font-bold text-slate-900">Laboratorium Simulasi Dibatasi oleh Guru</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Akses simulasi mandiri ditutup sementara oleh guru pengampu agar peserta didik fokus pada penjelasan materi.
                </p>
              </div>
            ) : (
              <MasterSimulationHub images={IMAGES} />
            )}
          </div>
        )}

        {/* 6. HALAMAN TUGAS & LKPD DIGITAL */}
        {activeTab === 'lkpd' && (
          <AssignmentsAndLkpdView
            submissions={submissions}
            currentWeek={currentWeek}
            teacherControl={teacherControl}
            onSubmitTask={(tTitle, tContent, tRefl) => {
              addSubmission({
                studentId: 'dkv-001',
                studentName: 'Ahmad Fauzi Ridwan',
                studentClass: teacherControl.activeClass,
                week: currentWeek,
                meetingNumber: teacherControl.activeMeetingDay === 'Senin' ? 1 : 2,
                taskTitle: tTitle,
                content: tContent,
                reflection: tRefl
              });
            }}
            isTeacher={userRole === 'teacher' && isTeacherAuthenticated}
          />
        )}

        {/* 7. HALAMAN ASESMEN & KUIS */}
        {activeTab === 'kuis' && (
          <div className="space-y-6">
            {userRole === 'teacher' && isTeacherAuthenticated ? (
              <StudentGradebookReportView
                submissions={submissions}
                onGradeSubmission={gradeSubmission}
                isTeacher={true}
              />
            ) : (
              <AssessmentAndQuizView week={currentWeek} />
            )}
          </div>
        )}

        {/* 8. HALAMAN PORTOFOLIO DIGITAL */}
        {activeTab === 'portofolio' && (
          <DigitalPortfolioView
            items={portfolioItems}
            onAddItem={addPortfolioItem}
            isTeacher={userRole === 'teacher' && isTeacherAuthenticated}
          />
        )}

        {/* 9. HALAMAN REFERENSI & GLOSARIUM */}
        {activeTab === 'referensi' && (
          <ReferencesAndGlossaryView />
        )}

        {/* 10. DASHBOARD GURU & KONTROL PEMBELAJARAN */}
        {activeTab === 'kontrol' && (
          userRole === 'teacher' && isTeacherAuthenticated ? (
            <div className="space-y-6">
              <TeacherControlPanel
                controlState={teacherControl}
                onUpdateControl={updateTeacherControl}
                onLogout={logoutTeacher}
              />

              {/* Submissions Grading Console */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Hasil Pengumpulan Tugas & LKPD Siswa</h3>
                    <p className="text-xs text-slate-500">Pemeriksaan karya visual, nilai proses, dan catatan umpan balik profesional guru.</p>
                  </div>
                  <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                    Total: {submissions.length} Pengumpulan
                  </span>
                </div>

                <div className="space-y-3">
                  {submissions.map(sub => (
                    <div key={sub.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="font-bold text-slate-900">
                          {sub.studentName} ({sub.studentClass}) · <span className="text-blue-600 font-mono">Minggu {sub.week} (Pertemuan {sub.meetingNumber})</span>
                        </div>
                        <span className="text-slate-400 text-[11px] font-mono">{sub.submittedAt}</span>
                      </div>

                      <div className="text-xs font-semibold text-slate-800">{sub.taskTitle}</div>
                      <p className="text-xs text-slate-600 p-2.5 bg-white rounded-lg border border-slate-200 leading-relaxed">
                        {sub.content}
                      </p>

                      <div className="text-[11px] text-slate-600 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100">
                        <strong className="text-blue-800 block mb-0.5">Refleksi Murid (Mindful Learning):</strong>
                        {sub.reflection}
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">Nilai:</span>
                          <span className="font-mono font-bold text-emerald-700 text-sm px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                            {sub.grade ?? 'Belum dinilai'}
                          </span>
                        </div>

                        {sub.teacherFeedback ? (
                          <div className="text-[11px] text-slate-600 italic">
                            Catatan Guru: &ldquo;{sub.teacherFeedback}&rdquo;
                          </div>
                        ) : (
                          <button
                            onClick={() => {
                              const g = prompt('Masukkan nilai (0-100):', '90');
                              const fb = prompt('Masukkan catatan umpan balik konstruktif:', 'Karya sangat baik, tingkatkan ketepatan.');
                              if (g && fb) {
                                gradeSubmission(sub.id, Number(g), fb);
                              }
                            }}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md text-xs transition-colors"
                          >
                            Beri Nilai & Umpan Balik
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
              <Lock className="w-10 h-10 text-red-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Akses Terbatas: Autentikasi Guru Diperlukan</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Halaman Kontrol Pembelajaran hanya dapat diakses oleh guru pengampu terdaftar dengan kata sandi resmi.
              </p>
              <button
                onClick={() => {
                  setLoginRoleTarget('teacher');
                  setShowLoginModal(true);
                }}
                className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg mt-2"
              >
                Masuk dengan Akun Guru
              </button>
            </div>
          )
        )}

        {/* 11. HALAMAN SUPERVISI AKADEMIK */}
        {activeTab === 'supervisi' && (
          userRole === 'teacher' && isTeacherAuthenticated ? (
            <SupervisionDashboard
              record={supervisionRecord}
              onUpdateRecord={setSupervisionRecord}
            />
          ) : (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center space-y-3">
              <Lock className="w-10 h-10 text-red-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Akses Khusus Guru & Supervisor</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Instrumen supervisi akademik Kurikulum Merdeka SMKN 3 Kuningan dilindungi autentikasi.
              </p>
              <button
                onClick={() => {
                  setLoginRoleTarget('teacher');
                  setShowLoginModal(true);
                }}
                className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg mt-2"
              >
                Masuk untuk Melihat Supervisi
              </button>
            </div>
          )
        )}

        {/* 12. DASHBOARD ADMINISTRATOR */}
        {activeTab === 'admin' && (
          <AdminDashboardView />
        )}
      </main>

      {/* ================= 4. AUTHENTICATION MODAL ================= */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 w-full max-w-md p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-700" />
                <h3 className="text-base font-bold text-slate-900">
                  {loginRoleTarget === 'teacher' ? 'Autentikasi Mode Guru DD DKV' : 'Autentikasi Administrator'}
                </h3>
              </div>
              <button
                onClick={() => setShowLoginModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                Tutup
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {loginRoleTarget === 'teacher'
                ? 'Masukkan kata sandi guru pengampu SMKN 3 Kuningan untuk membuka Kontrol Pembelajaran Terarah dan Pemeriksaan Tugas.'
                : 'Masukkan kata sandi administrator untuk mengelola kalender, jam pelajaran (JP), dan data rombel.'}
            </p>

            {loginError && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Peran / Akun Pengguna</label>
                <input
                  type="text"
                  disabled
                  value={loginRoleTarget === 'teacher' ? 'Tatang, S.Pd. (tatang881@guru.smk.belajar.id)' : 'Administrator SMKN 3 Kuningan'}
                  className="w-full p-2.5 rounded-lg border border-slate-300 bg-slate-100 text-slate-600 font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kata Sandi (Password)</label>
                <input
                  type="password"
                  required
                  autoFocus
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Petunjuk demo: {loginRoleTarget === 'teacher' ? <code>guru2026</code> : <code>admin123</code>}
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Masuk Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= 5. FOOTER ================= */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <School className="w-4 h-4 text-blue-700" />
            <span>
              <strong>DKV Learning Lab</strong> · SMK Negeri 3 Kuningan (Fase E Kelas X · 36 Minggu · 432 JP)
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Senin 6 JP (270 Menit)</span>
            <span>·</span>
            <span>Rabu 6 JP (270 Menit)</span>
            <span>·</span>
            <span className="text-emerald-700 font-medium">Deep Learning: Mindful · Meaningful · Joyful</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
