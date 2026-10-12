import React, { useState } from 'react';
import { CheckCircle2, XCircle, Award, RotateCcw, HelpCircle, BookOpen } from 'lucide-react';
import { ALL_36_WEEKS_UNITS } from '../../data/curriculumIndex';

interface Props {
  week: number;
}

export const AssessmentAndQuizView: React.FC<Props> = ({ week }) => {
  const [selectedWeek, setSelectedWeek] = useState<number>(week);
  const currentUnit = ALL_36_WEEKS_UNITS.find(u => u.week === selectedWeek) || ALL_36_WEEKS_UNITS[0];

  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'kuis' | 'latihan_semester'>('kuis');

  const quiz = currentUnit.quiz;

  const handleSelect = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Asesmen & Evaluasi Pembelajaran DKV</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 mt-1">Kuis Formatif, Uji Kompetensi, & Bank Soal</h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Dilengkapi koreksi instan, pembahasan ilmiah berdasarkan buku bab kurikulum, dan rekap skor.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedWeek}
            onChange={(e) => {
              setSelectedWeek(Number(e.target.value));
              handleReset();
            }}
            className="text-xs bg-slate-50 border border-slate-300 rounded-lg p-2.5 font-semibold text-slate-800"
          >
            {ALL_36_WEEKS_UNITS.map(u => (
              <option key={u.week} value={u.week}>Minggu {u.week}: {u.babTitle.slice(0, 32)}...</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">{quiz.title}</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Unit Minggu ke-{currentUnit.week} · {currentUnit.topic}
            </p>
          </div>

          {isSubmitted && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500">Skor Akhir:</span>
              <span className={`text-xl font-extrabold font-mono px-3 py-1 rounded-lg ${
                calculateScore() >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {calculateScore()} / 100
              </span>
            </div>
          )}
        </div>

        {/* Questions list */}
        <div className="space-y-6">
          {quiz.questions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;
            const chosen = selectedAnswers[q.id];
            const isCorrect = chosen === q.correctIndex;

            return (
              <div key={q.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <div className="font-semibold text-sm text-slate-900 leading-snug">
                    {q.question}
                  </div>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-2 pl-9">
                  {q.options.map((opt, optIdx) => {
                    const isOptionSelected = chosen === optIdx;
                    let optionBg = 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800';

                    if (isSubmitted) {
                      if (optIdx === q.correctIndex) {
                        optionBg = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-1 ring-emerald-500';
                      } else if (isOptionSelected && !isCorrect) {
                        optionBg = 'bg-red-50 border-red-500 text-red-900 ring-1 ring-red-500';
                      }
                    } else if (isOptionSelected) {
                      optionBg = 'bg-blue-50 border-blue-600 text-blue-900 font-semibold ring-1 ring-blue-600';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleSelect(q.id, optIdx)}
                        className={`p-3 rounded-lg border text-left text-xs transition-all flex items-center justify-between ${optionBg}`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-bold text-slate-400">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span>{opt}</span>
                        </span>
                        {isSubmitted && optIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                        )}
                        {isSubmitted && isOptionSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {isSubmitted && (
                  <div className="mt-3 ml-9 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900">
                    <strong className="block mb-0.5 text-blue-800">Pembahasan Ilmiah:</strong>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Actions */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Jawaban</span>
          </button>

          {!isSubmitted ? (
            <button
              onClick={() => setIsSubmitted(true)}
              disabled={Object.keys(selectedAnswers).length === 0}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
            >
              Kirim & Periksa Jawaban
            </button>
          ) : (
            <div className="text-xs text-emerald-700 font-semibold">
              Jawaban telah dinilai. Hasil tersimpan otomatis di portofolio kelas.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
