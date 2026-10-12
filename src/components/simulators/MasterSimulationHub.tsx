import React, { useState } from 'react';
import { Layers, Type, Camera, Cpu, Lightbulb, Presentation, AlertCircle, Sparkles } from 'lucide-react';
import { TypographySimulator } from './TypographySimulator';
import { PhotographySimulator } from './PhotographySimulator';
import { GraphicSimulator } from './GraphicSimulator';
import { ProductionAndK3Simulator } from './ProductionAndK3Simulator';
import { SketchIllustrationLab } from './SketchIllustrationLab';
import { DkvStudioProjectLab } from './DkvStudioProjectLab';

interface Props {
  images: {
    typography: string;
    camera: string;
    vector: string;
    packaging: string;
  };
}

export const MasterSimulationHub: React.FC<Props> = ({ images }) => {
  const [activeLabTab, setActiveLabTab] = useState<
    'typography' | 'photography' | 'bitmap_vector' | 'workflow' | 'k3' | 'sketch' | 'studio'
  >('typography');

  const labNavs = [
    { id: 'typography', label: '1. Typography Lab', icon: Type, desc: 'Font, Leading, Kerning, & Hierarchy' },
    { id: 'photography', label: '2. Photography Lab', icon: Camera, desc: 'Aperture, Shutter, ISO, & 5 Lighting' },
    { id: 'bitmap_vector', label: '3. Bitmap vs Vector', icon: Layers, desc: 'Zoom 4000%, Shaping, & Layers' },
    { id: 'workflow', label: '4. Production Workflow', icon: Cpu, desc: 'Praproduksi, Produksi, & Pasca' },
    { id: 'k3', label: '5. K3 & Ergonomics', icon: Cpu, desc: 'Sikap Kerja Aman & SOP Studio' },
    { id: 'sketch', label: '6. Sketch & Illustration', icon: Lightbulb, desc: 'Brief, Ide, Komposisi, & Evaluasi' },
    { id: 'studio', label: '7. Studio DKV Project', icon: Presentation, desc: 'Siklus Proyek Brief ke Presentasi' },
  ];

  return (
    <div className="space-y-6">
      {/* Top Disclaimer / Simulator Notice */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Laboratorium Simulasi Digital Terintegrasi</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">7 Wahana Praktik Interaktif Kejuruan DKV</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Menerima input dinamis pengguna, menampilkan perubahan visual seketika, menyediakan umpan balik evaluatif, dan tombol reset.
          </p>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs max-w-md">
          <div className="font-bold flex items-center gap-1.5 mb-0.5">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Pemberitahuan Model Simulasi Edukatif:</span>
          </div>
          Seluruh visualisasi adalah model komputasi matematis/SVG simulatif untuk tujuan pembelajaran konsep, bukan pengganti fisik optik lensa kamera atau software desktop profesional.
        </div>
      </div>

      {/* 7 Lab Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {labNavs.map(lab => {
          const Icon = lab.icon;
          const isActive = activeLabTab === lab.id;

          return (
            <button
              key={lab.id}
              onClick={() => setActiveLabTab(lab.id as any)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <div>
                <Icon className={`w-4 h-4 mb-2 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                <div className="font-bold text-xs leading-snug">{lab.label}</div>
              </div>
              <div className={`text-[10px] mt-2 line-clamp-1 ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                {lab.desc}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Lab Component */}
      <div className="pt-2">
        {activeLabTab === 'typography' && (
          <TypographySimulator imageSrc={images.typography} />
        )}

        {activeLabTab === 'photography' && (
          <PhotographySimulator imageSrc={images.camera} />
        )}

        {activeLabTab === 'bitmap_vector' && (
          <GraphicSimulator imageSrc={images.vector} />
        )}

        {activeLabTab === 'workflow' && (
          <ProductionAndK3Simulator />
        )}

        {activeLabTab === 'k3' && (
          <ProductionAndK3Simulator />
        )}

        {activeLabTab === 'sketch' && (
          <SketchIllustrationLab />
        )}

        {activeLabTab === 'studio' && (
          <DkvStudioProjectLab />
        )}
      </div>
    </div>
  );
};
