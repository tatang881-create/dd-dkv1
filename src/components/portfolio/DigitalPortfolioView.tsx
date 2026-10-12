import React, { useState } from 'react';
import { FolderGit2, Plus, Star, ExternalLink, Calendar, CheckCircle2, User, Award } from 'lucide-react';
import { StudentPortfolioItem } from '../../types/curriculum';

interface Props {
  items: StudentPortfolioItem[];
  onAddItem: (item: Omit<StudentPortfolioItem, 'id' | 'dateCreated'>) => void;
  isTeacher: boolean;
}

export const DigitalPortfolioView: React.FC<Props> = ({ items, onAddItem, isTeacher }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // New item form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<StudentPortfolioItem['category']>('Sketsa');
  const [week, setWeek] = useState(1);
  const [description, setDescription] = useState('');
  const [reflectionGrowth, setReflectionGrowth] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const categories = ['all', 'Sketsa', 'Tipografi', 'Fotografi', 'Vektor', 'Bitmap', 'Packaging', 'Technopreneur'];

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(it => it.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddItem({
      studentId: 'dkv-001',
      studentName: 'Ahmad Fauzi Ridwan',
      title,
      category,
      week,
      status: 'Draft',
      description,
      reflectionGrowth,
      imageUrl: imageUrl || undefined
    });
    setShowAddModal(false);
    setTitle('');
    setDescription('');
    setReflectionGrowth('');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4" />
            <span>Portofolio Digital Siswa · Showcase Kompetensi Visual</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">Galeri Rekam Jejak Karya 36 Minggu</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Dokumentasi autentik karya sketsa, tipografi, fotografi, komputer grafis, dan dumi kemasan berstandar industri.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Unggah Karya Baru</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs font-medium">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white font-semibold shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat === 'all' ? 'Semua Kategori' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <div key={item.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
            <div>
              {/* Image Banner / Fallback */}
              <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-4">
                    <span className="text-xs font-mono text-blue-400">[{item.category.toUpperCase()}]</span>
                    <div className="text-sm font-bold text-white mt-1">{item.title}</div>
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded border border-slate-700">
                  Minggu ke-{item.week}
                </span>
                <span className={`absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded ${
                  item.status === 'Final Terverifikasi' ? 'bg-emerald-500 text-white' : 'bg-amber-400 text-slate-900'
                }`}>
                  {item.status}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-2.5">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3 text-slate-400" /> {item.studentName}
                  </span>
                  <span>{item.dateCreated}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{item.description}</p>

                {/* Growth Reflection */}
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-[11px] text-slate-600">
                  <strong className="text-blue-700 block mb-0.5">Refleksi Diri (Deep Learning):</strong>
                  {item.reflectionGrowth}
                </div>

                {/* Teacher Feedback */}
                {item.teacherReview && (
                  <div className="p-2.5 bg-emerald-50/70 rounded-lg border border-emerald-200 text-[11px] text-emerald-900">
                    <div className="flex items-center justify-between font-bold mb-0.5">
                      <span>Ulasan Guru:</span>
                      {item.score && <span className="font-mono text-emerald-700">Nilai: {item.score}</span>}
                    </div>
                    {item.teacherReview}
                  </div>
                )}
              </div>
            </div>

            <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between text-xs mt-3">
              <span className="text-[11px] text-slate-500 font-mono">ID: {item.id}</span>
              <button className="text-blue-600 hover:underline font-semibold flex items-center gap-1">
                <span>Rincian Karya</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-slate-200 w-full max-w-lg p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-slate-900 text-sm">Unggah Dokumen Karya Portofolio</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-semibold"
              >
                Tutup
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Judul Karya Visual</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800"
                  placeholder="Contoh: Sketsa Logo Vektor Batik Kuningan"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Kategori Karya</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 font-medium"
                  >
                    {categories.filter(c => c !== 'all').map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Minggu Pembelajaran</label>
                  <select
                    value={week}
                    onChange={(e) => setWeek(Number(e.target.value))}
                    className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800 font-medium"
                  >
                    {Array.from({ length: 36 }, (_, i) => i + 1).map(w => (
                      <option key={w} value={w}>Minggu {w}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Deskripsi & Proses Pembuatan</label>
                <textarea
                  rows={2}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800"
                  placeholder="Jelaskan teknik yang dipakai, alat/software, dan tahap pengerjaannya..."
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Refleksi Perkembangan Diri (Deep Learning)</label>
                <textarea
                  rows={2}
                  required
                  value={reflectionGrowth}
                  onChange={(e) => setReflectionGrowth(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800"
                  placeholder="Apa pembelajaran bermakna (meaningful) dan tantangan yang kamu rasakan saat mengerjakan karya ini?"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tautan URL Gambar / Karya (Opsional)</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full p-2.5 rounded-lg border border-slate-300 text-slate-800"
                  placeholder="https://..."
                />
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 font-medium"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                >
                  Simpan Karya ke Portofolio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
