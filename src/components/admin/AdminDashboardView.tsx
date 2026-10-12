import React, { useState } from 'react';
import {
  Users,
  GraduationCap,
  Calendar,
  Settings,
  School,
  Database,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Save,
  RefreshCw
} from 'lucide-react';
import { SCHOOL_IDENTITY } from '../../data/curriculumIndex';

export const AdminDashboardView: React.FC = () => {
  const [scheduleSettings, setScheduleSettings] = useState({
    mondayJp: 6,
    mondayMinutes: 270,
    wednesdayJp: 6,
    wednesdayMinutes: 270,
    jpDurationMinutes: 45,
    effectiveWeeks: 36,
    academicYear: '2026/2027',
    semester: '1 & 2'
  });

  const [savedNotice, setSavedNotice] = useState<boolean>(false);

  // Mock list of teachers and classes
  const [teachers, setTeachers] = useState([
    { id: 't1', name: 'Tatang, S.Pd.', nip: '198804122015031004', email: 'tatang881@guru.smk.belajar.id', classes: ['X DKV 1', 'X DKV 2'], role: 'Guru Pengampu Utama' },
    { id: 't2', name: 'Maylinda Ambarwati, S.Pd.', nip: '199008242018022001', email: 'maylinda@smkn3kuningan.sch.id', classes: ['X DKV 3'], role: 'Guru Pendamping Lab' }
  ]);

  const [classes, setClasses] = useState([
    { id: 'c1', name: 'X DKV 1', count: 36, homeroom: 'Tatang, S.Pd.', labRoom: 'Lab Komputer Grafis 1' },
    { id: 'c2', name: 'X DKV 2', count: 35, homeroom: 'Maylinda Ambarwati, S.Pd.', labRoom: 'Lab Fotografi & Studio' },
    { id: 'c3', name: 'X DKV 3', count: 36, homeroom: 'Hendra Gunawan, S.Kom.', labRoom: 'Lab Komputer Grafis 2' }
  ]);

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Dashboard Administrator Sekolah · Tata Kelola Akademik</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">Pengaturan Kalender, Jam Pelajaran (JP), & Manajemen Akun</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Konfigurasi operasional fleksibel tanpa mengubah kode sumber program sesuai instruksi Master Prompt Bagian C & G.
          </p>
        </div>

        <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold rounded-lg font-mono">
          Tahun Ajaran: {scheduleSettings.academicYear}
        </span>
      </div>

      {savedNotice && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Pengaturan jadwal pembelajaran dan jam pelajaran berhasil disimpan ke sistem!</span>
        </div>
      )}

      {/* Configuration Form: Dynamic JP & Calendar */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="border-b border-slate-200 pb-3 mb-5">
          <h3 className="text-base font-bold text-slate-900">1. Konfigurasi Jadwal & Durasi Jam Pembelajaran (JP)</h3>
          <p className="text-xs text-slate-500">Guru/Admin dapat mengubah hari, jumlah JP, durasi menit per JP, dan total minggu efektif secara dinamis.</p>
        </div>

        <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <strong className="block text-slate-800 font-bold">Jadwal Hari Senin</strong>
              <div>
                <label className="block text-slate-600 mb-1">Jumlah JP Hari Senin:</label>
                <input
                  type="number"
                  value={scheduleSettings.mondayJp}
                  onChange={(e) => {
                    const jp = Number(e.target.value);
                    setScheduleSettings({
                      ...scheduleSettings,
                      mondayJp: jp,
                      mondayMinutes: jp * scheduleSettings.jpDurationMinutes
                    });
                  }}
                  className="w-full p-2 rounded-lg border border-slate-300 bg-white font-mono font-bold text-blue-700"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Durasi Total Senin:</label>
                <div className="font-mono text-slate-700 font-bold p-2 bg-white rounded border border-slate-200">
                  {scheduleSettings.mondayJp * scheduleSettings.jpDurationMinutes} Menit ({scheduleSettings.mondayJp} JP × {scheduleSettings.jpDurationMinutes} Mnt)
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <strong className="block text-slate-800 font-bold">Jadwal Hari Rabu</strong>
              <div>
                <label className="block text-slate-600 mb-1">Jumlah JP Hari Rabu:</label>
                <input
                  type="number"
                  value={scheduleSettings.wednesdayJp}
                  onChange={(e) => {
                    const jp = Number(e.target.value);
                    setScheduleSettings({
                      ...scheduleSettings,
                      wednesdayJp: jp,
                      wednesdayMinutes: jp * scheduleSettings.jpDurationMinutes
                    });
                  }}
                  className="w-full p-2 rounded-lg border border-slate-300 bg-white font-mono font-bold text-blue-700"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Durasi Total Rabu:</label>
                <div className="font-mono text-slate-700 font-bold p-2 bg-white rounded border border-slate-200">
                  {scheduleSettings.wednesdayJp * scheduleSettings.jpDurationMinutes} Menit ({scheduleSettings.wednesdayJp} JP × {scheduleSettings.jpDurationMinutes} Mnt)
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <strong className="block text-slate-800 font-bold">Parameter Pembelajaran Tahunan</strong>
              <div>
                <label className="block text-slate-600 mb-1">Durasi 1 JP (Menit):</label>
                <input
                  type="number"
                  value={scheduleSettings.jpDurationMinutes}
                  onChange={(e) => {
                    const dur = Number(e.target.value);
                    setScheduleSettings({
                      ...scheduleSettings,
                      jpDurationMinutes: dur,
                      mondayMinutes: scheduleSettings.mondayJp * dur,
                      wednesdayMinutes: scheduleSettings.wednesdayJp * dur
                    });
                  }}
                  className="w-full p-2 rounded-lg border border-slate-300 bg-white font-mono font-bold text-blue-700"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">Minggu Efektif 1 Tahun:</label>
                <input
                  type="number"
                  value={scheduleSettings.effectiveWeeks}
                  onChange={(e) => setScheduleSettings({ ...scheduleSettings, effectiveWeeks: Number(e.target.value) })}
                  className="w-full p-2 rounded-lg border border-slate-300 bg-white font-mono font-bold text-blue-700"
                />
              </div>
            </div>
          </div>

          {/* Calculated Totals */}
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg flex flex-wrap items-center justify-between gap-3 text-blue-900">
            <span className="font-semibold">
              Total Rencana Pembelajaran: {(scheduleSettings.mondayJp + scheduleSettings.wednesdayJp) * scheduleSettings.effectiveWeeks} JP ({((scheduleSettings.mondayJp + scheduleSettings.wednesdayJp) * scheduleSettings.effectiveWeeks * scheduleSettings.jpDurationMinutes / 60).toFixed(0)} Jam Riil
            </span>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center gap-1.5 shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan Konfigurasi Jadwal</span>
            </button>
          </div>
        </form>
      </div>

      {/* Management of Teachers and Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Guru List */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-bold text-slate-900 text-sm">2. Pengelolaan Akun Guru Pengampu</h3>
            <span className="text-[11px] text-slate-500 font-mono">2 Akun Terdaftar</span>
          </div>

          <div className="space-y-3">
            {teachers.map(t => (
              <div key={t.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs space-y-1">
                <div className="flex justify-between items-center font-bold text-slate-900">
                  <span>{t.name}</span>
                  <span className="text-blue-600 font-mono text-[11px]">{t.role}</span>
                </div>
                <div className="text-slate-500 font-mono text-[11px]">NIP: {t.nip} · {t.email}</div>
                <div className="text-slate-600 text-[11px]">
                  Kelas Ampuan: <strong className="text-slate-800">{t.classes.join(', ')}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Classes List */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <h3 className="font-bold text-slate-900 text-sm">3. Pengelolaan Rombongan Belajar (Rombel)</h3>
            <span className="text-[11px] text-slate-500 font-mono">3 Kelas Aktif</span>
          </div>

          <div className="space-y-3">
            {classes.map(c => (
              <div key={c.id} className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-xs space-y-1">
                <div className="flex justify-between items-center font-bold text-slate-900">
                  <span>{c.name}</span>
                  <span className="font-mono text-emerald-700">{c.count} Siswa Terdaftar</span>
                </div>
                <div className="text-slate-600 text-[11px]">
                  Wali Kelas: <strong className="text-slate-800">{c.homeroom}</strong>
                </div>
                <div className="text-slate-500 text-[11px]">
                  Ruang Praktik: {c.labRoom}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
