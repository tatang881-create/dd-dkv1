import { StudentSubmission, StudentPortfolioItem } from '../types/curriculum';

export interface StudentProgressRecord {
  studentId: string;
  studentName: string;
  studentClass: string;
  nisn: string;
  attendancePct: number;
  quizzes: { [week: number]: { score: number; completedAt: string } };
  lkpdTasks: { [week: number]: { score: number; status: 'Belum Kumpul' | 'Menunggu Koreksi' | 'Dinilai' | 'Perlu Revisi'; feedback?: string } };
  practicalProjects: { [week: number]: { score: number; status: 'Draft' | 'Revisi' | 'Tuntas' } };
  remedialCompleted: boolean;
  enrichmentCompleted: boolean;
}

export const INITIAL_STUDENTS_RECORD: StudentProgressRecord[] = [
  {
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    studentClass: 'X DKV 1',
    nisn: '0078239102',
    attendancePct: 98,
    quizzes: {
      1: { score: 95, completedAt: '2026-07-20' },
      2: { score: 90, completedAt: '2026-07-27' },
      5: { score: 85, completedAt: '2026-08-17' },
      16: { score: 92, completedAt: '2026-11-02' },
      19: { score: 100, completedAt: '2026-01-12' },
      26: { score: 90, completedAt: '2026-02-23' },
      33: { score: 95, completedAt: '2026-04-20' },
      36: { score: 96, completedAt: '2026-05-18' }
    },
    lkpdTasks: {
      1: { score: 92, status: 'Dinilai', feedback: 'Analisis potensi technopreneur sangat tajam.' },
      7: { score: 90, status: 'Dinilai', feedback: 'Langkah K3 perawatan kamera dan kuas lengkap.' },
      18: { score: 94, status: 'Dinilai', feedback: 'Dumi kemasan makanan presisi dan rapi.' },
      24: { score: 88, status: 'Dinilai', feedback: 'Tipografi kemasan memenuhi kaidah AIDA.' },
      30: { score: 95, status: 'Dinilai', feedback: 'Koleksi 3 foto toleransi memiliki nilai estetika tinggi.' },
      36: { score: 96, status: 'Dinilai', feedback: 'Dumi kemasan pizza art carton 260 gsm berstandar industri.' }
    },
    practicalProjects: {
      4: { score: 90, status: 'Tuntas' },
      18: { score: 94, status: 'Tuntas' },
      28: { score: 92, status: 'Tuntas' },
      36: { score: 96, status: 'Tuntas' }
    },
    remedialCompleted: false,
    enrichmentCompleted: true
  },
  {
    studentId: 'dkv-002',
    studentName: 'Siti Nur Aisyah',
    studentClass: 'X DKV 1',
    nisn: '0078239103',
    attendancePct: 100,
    quizzes: {
      1: { score: 90, completedAt: '2026-07-20' },
      2: { score: 95, completedAt: '2026-07-27' },
      19: { score: 95, completedAt: '2026-01-12' },
      26: { score: 85, completedAt: '2026-02-23' }
    },
    lkpdTasks: {
      1: { score: 90, status: 'Dinilai', feedback: 'Refleksi etika wirausaha mendalam.' },
      19: { score: 95, status: 'Dinilai', feedback: 'Analisis evolusi aksara Phoenicia ke Romawi sangat rinci.' }
    },
    practicalProjects: {
      4: { score: 92, status: 'Tuntas' },
      18: { score: 90, status: 'Tuntas' }
    },
    remedialCompleted: false,
    enrichmentCompleted: true
  },
  {
    studentId: 'dkv-003',
    studentName: 'Bagas Aditya Pratama',
    studentClass: 'X DKV 1',
    nisn: '0078239104',
    attendancePct: 92,
    quizzes: {
      1: { score: 75, completedAt: '2026-07-20' },
      5: { score: 70, completedAt: '2026-08-17' },
      26: { score: 88, completedAt: '2026-02-23' }
    },
    lkpdTasks: {
      1: { score: 75, status: 'Dinilai', feedback: 'Tingkatkan kerapian tabel analisis.' },
      26: { score: 88, status: 'Dinilai', feedback: 'Foto freeze aksi lapangan tajam.' }
    },
    practicalProjects: {
      4: { score: 78, status: 'Tuntas' }
    },
    remedialCompleted: true,
    enrichmentCompleted: false
  },
  {
    studentId: 'dkv-004',
    studentName: 'Dewi Lestari Ningrum',
    studentClass: 'X DKV 1',
    nisn: '0078239105',
    attendancePct: 96,
    quizzes: {
      1: { score: 85, completedAt: '2026-07-20' },
      19: { score: 90, completedAt: '2026-01-12' }
    },
    lkpdTasks: {
      1: { score: 85, status: 'Dinilai', feedback: 'Bagus, terus kembangkan ide desain.' }
    },
    practicalProjects: {
      4: { score: 86, status: 'Tuntas' }
    },
    remedialCompleted: false,
    enrichmentCompleted: false
  }
];
