import React, { useState } from 'react';
import { Settings, Lock, Unlock, Play, Pause, Square, Users, Calendar, AlertCircle, CheckCircle, RefreshCw } from 'lucide-react';
import { TeacherControlState } from '../../types/curriculum';

interface Props {
  controlState: TeacherControlState;
  onUpdateControl: (partial: Partial<TeacherControlState>) => void;
  onLogout: () => void;
}

export const TeacherControlPanel: React.FC<Props> = ({ controlState, onUpdateControl, onLogout }) => {
  const [selectedClass, setSelectedClass] = useState<string>(controlState.activeClass);
  const [selectedWeek, setSelectedWeek] = useState<number>(controlState.currentWeek);
  const [selectedDay, setSelectedDay] = useState<'Senin' | 'Rabu'>(controlState.activeMeetingDay);
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null);

  const classesList = ['X DKV 1', 'X DKV 2', 'X DKV 3'];

  const triggerNotice = (msg: string) => {
    setNotificationMsg(msg);
    setTimeout(() => setNotificationMsg(null), 3500);
  };

  const handleStartSession = () => {
    onUpdateControl({
      activeClass: selectedClass,
      currentWeek: selectedWeek,
      activeMeetingDay: selectedDay,
      sessionStatus: 'berlangsung',
      lockNavigationToNext: true
    });
    triggerNotice(`Sesi pembelajaran dimulai untuk kelas ${selectedClass} - Minggu ke-${selectedWeek} (${selectedDay}).`);
  };

  const handlePauseSession = () => {
    onUpdateControl({ sessionStatus: 'dijeda' });
    triggerNotice('Sesi pembelajaran dijeda sementara.');
  };

  const handleEndSession = () => {
    onUpdateControl({ sessionStatus: 'selesai' });
    triggerNotice('Sesi pembelajaran diakhiri. Seluruh hasil kerja siswa tersimpan aman.');
  };

  const handleToggleMenu = (menuKey: keyof typeof controlState.menuPermissions) => {
    const updated = {
      ...controlState.menuPermissions,
      [menuKey]: !controlState.menuPermissions[menuKey]
    };
    onUpdateControl({ menuPermissions: updated });
    triggerNotice(`Menu ${menuKey.toUpperCase()} berhasil ${updated[menuKey] ? 'diaktifkan' : 'dinonaktifkan'}.`);
  };

  const handleUnlockAll = () => {
    const allOn = {
      dashboard: true,
      materi: true,
      pertemuanAktif: true,
      simulasi: true,
      lkpd: true,
      kuis: true,
      portofolio: true,
      referensi: true,
      supervisi: false
    };
    onUpdateControl({
      menuPermissions: allOn,
      lockNavigationToNext: false,
      allowedSimulations: true
    });
    triggerNotice('Semua menu siswa berhasil dibuka.');
  };

  const handleLockAll = () => {
    const allLocked = {
      dashboard: true,
      materi: false,
      pertemuanAktif: true,
      simulasi: false,
      lkpd: false,
      kuis: false,
      portofolio: false,
      referensi: false,
      supervisi: false
    };
    onUpdateControl({
      menuPermissions: allLocked,
      lockNavigationToNext: true,
      allowedSimulations: false
    });
    triggerNotice('Semua menu dibatasi ke Pertemuan Aktif saja.');
  };

  const toggleUnitLock = (weekNum: number) => {
    let newUnits: number[];
    if (controlState.allowedUnits.includes(weekNum)) {
      newUnits = controlState.allowedUnits.filter(w => w !== weekNum);
    } else {
      newUnits = [...controlState.allowedUnits, weekNum].sort((a, b) => a - b);
    }
    onUpdateControl({ allowedUnits: newUnits });
    triggerNotice(`Unit Minggu ke-${weekNum} berhasil ${newUnits.includes(weekNum) ? 'dibuka' : 'dikunci'}.`);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Session Status */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
              <Settings className="w-4 h-4" />
              <span>Mode Guru · Kontrol Pembelajaran Terarah</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-1">Konsol Kendali Guru DD DKV</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Guru Pengampu: <strong className="text-slate-700">{controlState.updatedBy}</strong> · Terakhir Disinkronkan: {new Date(controlState.lastUpdated).toLocaleTimeString('id-ID')}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${
              controlState.sessionStatus === 'berlangsung'
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : controlState.sessionStatus === 'dijeda'
                ? 'bg-amber-100 text-amber-800 border border-amber-300'
                : 'bg-slate-100 text-slate-700 border border-slate-300'
            }`}>
              <span className={`w-2 h-2 rounded-full ${
                controlState.sessionStatus === 'berlangsung' ? 'bg-emerald-500' : controlState.sessionStatus === 'dijeda' ? 'bg-amber-500' : 'bg-slate-400'
              }`} />
              Status: {controlState.sessionStatus === 'berlangsung' ? 'Pembelajaran Berlangsung' : controlState.sessionStatus === 'dijeda' ? 'Pembelajaran Dijeda' : controlState.sessionStatus === 'selesai' ? 'Sesi Selesai' : 'Belum Dimulai'}
            </span>

            <button
              onClick={onLogout}
              className="px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg border border-red-200 transition-colors"
            >
              Keluar Mode Guru
            </button>
          </div>
        </div>

        {notificationMsg && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 text-blue-800 text-xs rounded-lg flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <span>{notificationMsg}</span>
          </div>
        )}

        {/* Live Controller Toolbar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kelas Terhubung</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {classesList.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Minggu Pembelajaran</label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {Array.from({ length: 36 }, (_, i) => i + 1).map(w => (
                <option key={w} value={w}>Minggu {w} (Semester {w <= 18 ? '1' : '2'})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Pertemuan Aktif (6 JP)</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value as any)}
              className="w-full text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-slate-800 font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="Senin">Pertemuan 1 · Senin (6 JP = 270 mnt)</option>
              <option value="Rabu">Pertemuan 2 · Rabu (6 JP = 270 mnt)</option>
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <div className="flex gap-2">
              <button
                onClick={handleStartSession}
                className="flex-1 px-3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Mulai Sesi</span>
              </button>
              <button
                onClick={handlePauseSession}
                className="px-3 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center transition-colors"
                title="Jeda Sesi"
              >
                <Pause className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleEndSession}
                className="px-3 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold rounded-lg flex items-center justify-center transition-colors"
                title="Akhiri Sesi"
              >
                <Square className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Lock Toggles (Sakelar Kontrol Menu Siswa) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4 mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">Hak Akses Menu Siswa (Menu Permissions)</h3>
            <p className="text-xs text-slate-500">Menu yang dinonaktifkan akan terkunci atau disembunyikan dari layar peserta didik.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleUnlockAll}
              className="px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors flex items-center gap-1"
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>Aktifkan Semua</span>
            </button>
            <button
              onClick={handleLockAll}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors flex items-center gap-1"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Kunci Semua</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { key: 'materi', label: 'Modul Materi Pembelajaran', desc: 'Buku teks semester 1 & 2' },
            { key: 'pertemuanAktif', label: 'Pertemuan Aktif (Senin/Rabu)', desc: 'Rancangan 6 JP harian' },
            { key: 'simulasi', label: 'Laboratorium Simulasi', desc: 'Tipografi, Kamera, Shaping' },
            { key: 'lkpd', label: 'LKPD & Penugasan Digital', desc: 'Pengumpulan lembar kerja' },
            { key: 'kuis', label: 'Kuis & Asesmen Formatif', desc: 'Uji kompetensi interaktif' },
            { key: 'portofolio', label: 'Portofolio Digital Siswa', desc: 'Arsip karya dan revisi' },
            { key: 'referensi', label: 'Glosarium & Referensi Sumber', desc: 'Istilah dan profil perbukuan' },
            { key: 'dashboard', label: 'Dashboard Siswa', desc: 'Ringkasan capaian mingguan' }
          ].map(item => {
            const isAllowed = controlState.menuPermissions[item.key as keyof typeof controlState.menuPermissions];
            return (
              <div
                key={item.key}
                className={`p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isAllowed ? 'bg-blue-50/40 border-blue-200' : 'bg-slate-50 border-slate-200 opacity-70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-900">{item.label}</span>
                    <button
                      onClick={() => handleToggleMenu(item.key as any)}
                      className={`w-9 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors ${
                        isAllowed ? 'bg-blue-600 justify-end' : 'bg-slate-300 justify-start'
                      }`}
                    >
                      <span className="bg-white w-3 h-3 rounded-full shadow-xs" />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
                <div className="mt-2 text-[10px] font-mono font-medium">
                  Status: {isAllowed ? <span className="text-emerald-700">Terbuka untuk Siswa</span> : <span className="text-red-700">Terkunci oleh Guru</span>}
                </div>
              </div>
            );
          })}
        </div>

        {/* Strict Lock Controls */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              checked={controlState.lockNavigationToNext}
              onChange={(e) => onUpdateControl({ lockNavigationToNext: e.target.checked })}
              className="rounded accent-blue-600 w-4 h-4"
            />
            <span>Kunci perpindahan siswa ke materi minggu berikutnya (Siswa hanya fokus pada minggu aktif)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
            <input
              type="checkbox"
              checked={controlState.allowedSimulations}
              onChange={(e) => onUpdateControl({ allowedSimulations: e.target.checked })}
              className="rounded accent-blue-600 w-4 h-4"
            />
            <span>Izinkan siswa menjalankan simulasi mandiri di laboratorium</span>
          </label>
        </div>
      </div>

      {/* 36 Weeks Selective Locking Matrix */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Matriks Pembukaan Unit Materi (Minggu 1 - 36)</h3>
            <p className="text-xs text-slate-500">Klik nomor minggu untuk mengaktifkan atau mengunci unit materi tertentu bagi kelas aktif.</p>
          </div>
          <div className="text-xs text-slate-600">
            Terbuka: <strong className="text-blue-600 font-mono">{controlState.allowedUnits.length} / 36 Unit</strong>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-2">
          {Array.from({ length: 36 }, (_, i) => i + 1).map(wk => {
            const isUnlocked = controlState.allowedUnits.includes(wk);
            const isCurrent = controlState.currentWeek === wk;
            return (
              <button
                key={wk}
                type="button"
                onClick={() => toggleUnitLock(wk)}
                className={`py-2 px-1 rounded-lg border text-center text-xs font-mono font-bold transition-all ${
                  isCurrent
                    ? 'ring-2 ring-blue-600 bg-blue-600 text-white border-blue-600'
                    : isUnlocked
                    ? 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
                    : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200 line-through'
                }`}
                title={`Minggu ${wk}: ${isUnlocked ? 'Terbuka' : 'Terkunci'}${isCurrent ? ' (Minggu Berjalan)' : ''}`}
              >
                M-{wk}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
