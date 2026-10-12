import { describe, it, expect } from 'vitest';
import { ALL_36_WEEKS_UNITS, SCHOOL_IDENTITY } from './data/curriculumIndex';
import { INITIAL_STUDENTS_RECORD } from './data/studentAssessmentData';

describe('Audit Kurikulum dan Alokasi Waktu 36 Minggu DD DKV', () => {
  it('harus memiliki tepat 36 unit pembelajaran', () => {
    expect(ALL_36_WEEKS_UNITS.length).toBe(36);
  });

  it('setiap minggu harus memiliki tepat 2 pertemuan: Senin dan Rabu', () => {
    ALL_36_WEEKS_UNITS.forEach(unit => {
      expect(unit.meetings.length).toBe(2);
      expect(unit.meetings[0].day).toBe('Senin');
      expect(unit.meetings[1].day).toBe('Rabu');
    });
  });

  it('alokasi setiap pertemuan harus tepat 6 JP (270 Menit) dan total 12 JP per minggu', () => {
    ALL_36_WEEKS_UNITS.forEach(unit => {
      const p1 = unit.meetings[0];
      const p2 = unit.meetings[1];
      expect(p1.jp).toBe(6);
      expect(p1.durationMinutes).toBe(270);
      expect(p2.jp).toBe(6);
      expect(p2.durationMinutes).toBe(270);
      expect(p1.jp + p2.jp).toBe(12);
    });
  });

  it('total jam pelajaran selama 36 minggu harus tepat 432 JP', () => {
    const totalJp = ALL_36_WEEKS_UNITS.reduce((acc, u) => acc + u.meetings[0].jp + u.meetings[1].jp, 0);
    expect(totalJp).toBe(432);
  });

  it('setiap pertemuan harus memiliki tujuan, pertanyaan pemantik, 3 tahap aktivitas, dan 5C', () => {
    ALL_36_WEEKS_UNITS.forEach(unit => {
      unit.meetings.forEach(m => {
        expect(m.learningObjectives.length).toBeGreaterThan(0);
        expect(m.triggerQuestion.length).toBeGreaterThan(5);
        expect(m.activities.pendahuluan.length).toBeGreaterThan(0);
        expect(m.activities.inti.length).toBeGreaterThan(0);
        expect(m.activities.penutup.length).toBeGreaterThan(0);
        expect(m.deepLearning5C.criticalThinking.length).toBeGreaterThan(0);
        expect(m.deepLearning5C.creativity.length).toBeGreaterThan(0);
        expect(m.deepLearning5C.collaboration.length).toBeGreaterThan(0);
        expect(m.deepLearning5C.communication.length).toBeGreaterThan(0);
        expect(m.deepLearning5C.connectionToRealLife.length).toBeGreaterThan(0);
      });
    });
  });

  it('identitas supervisi harus sesuai dengan dokumen SMKN 3 Kuningan', () => {
    expect(SCHOOL_IDENTITY.name).toBe('SMK Negeri 3 Kuningan');
    expect(SCHOOL_IDENTITY.supervisorName).toBe('SAIDUN, S.Pd., M.M.');
    expect(SCHOOL_IDENTITY.supervisorNip).toBe('197009201994021002');
  });
});
