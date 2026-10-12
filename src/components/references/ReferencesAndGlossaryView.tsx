import React from 'react';
import { BookOpen, Layers, ExternalLink, Bookmark, Search, Award } from 'lucide-react';
import { ALL_36_WEEKS_UNITS, SCHOOL_IDENTITY } from '../../data/curriculumIndex';

export const ReferencesAndGlossaryView: React.FC = () => {
  // Aggregate all unique glossary terms across 36 units
  const allGlossaries = ALL_36_WEEKS_UNITS.flatMap(u =>
    u.glossaryTerms.map(gt => ({
      ...gt,
      week: u.week,
      babTitle: u.babTitle
    }))
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Sumber Rujukan Kurikulum & Glosarium Resmi DKV</span>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mt-1">Dokumen Acuan, Glosarium Istilah, & Profil Perbukuan</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Semua materi disinkronkan dengan Buku Teks Kurikulum Merdeka Kemdikbudristek (2022) & Instrumen Supervisi SMKN 3 Kuningan.
        </p>
      </div>

      {/* 3 Main Official Reference Books */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">SUMBER RESMI 1</span>
          <h3 className="font-bold text-slate-900 text-sm">Dasar-Dasar Desain Komunikasi Visual Semester 1</h3>
          <p className="text-xs text-slate-600">
            Penulis: Maylinda Ambarwati · Penerbit: Pusat Perbukuan Kemdikbudristek (2022) · xii, 164 hlm · ISBN: 978-623-194-049-0
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
            Mencakup: Bab 1 Technopreneur, Bab 2 K3 Ergonomi, Bab 3 Perkembangan Industri 4.0, Bab 4 Proses Produksi, Bab 5 Sketsa & Ilustrasi.
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">SUMBER RESMI 2</span>
          <h3 className="font-bold text-slate-900 text-sm">Dasar-Dasar Desain Komunikasi Visual Semester 2</h3>
          <p className="text-xs text-slate-600">
            Penulis: Maylinda Ambarwati & Dwi Kurnia Kuswahyuni · Penerbit: Pusat Perbukuan Kemdikbudristek (2022) · xiv, 170 hlm · ISBN: 978-602-427-884-7
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
            Mencakup: Bab 1 Tipografi (James Craig, Kerning/Leading), Bab 2 Fotografi Dasar DSLR, Bab 3 Komputer Grafis (Shaping Corel & Photoshop).
          </div>
        </div>

        <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">SUMBER RESMI 3</span>
          <h3 className="font-bold text-slate-900 text-sm">Instrumen Supervisi Akademik Kurikulum Merdeka</h3>
          <p className="text-xs text-slate-600">
            Pendekatan Deep Learning (Mindful, Meaningful, Joyful) · SMKN 3 Kuningan · Supervisor: SAIDUN, S.Pd., M.M. (NIP. 197009201994021002)
          </p>
          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
            Mencakup: Matriks 5C (Critical Thinking, Creativity, Collaboration, Communication, Connection) & integrasi Adiwiyata serta Gapura Pancawaluya.
          </div>
        </div>
      </div>

      {/* Comprehensive Glossary Terms */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Glosarium Istilah Pokok DKV (Buku hlm. 145-149 & 157-158)</h3>
            <p className="text-xs text-slate-500">Daftar istilah baku bahasa Indonesia dan teknis desain grafis yang diverifikasi dari teks buku.</p>
          </div>
          <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
            {allGlossaries.length} Istilah Rujukan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allGlossaries.map((g, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-blue-900">{g.term}</span>
                <span className="text-[10px] font-mono text-slate-400">M-{g.week}</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">{g.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
