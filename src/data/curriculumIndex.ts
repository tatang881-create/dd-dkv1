import { UNITS_DATA } from './curriculumSemester1';
import { UNITS_DATA_SEMESTER_2 } from './curriculumSemester2';
import { LearningUnit } from '../types/curriculum';

export const ALL_36_WEEKS_UNITS: LearningUnit[] = [
  ...UNITS_DATA,
  ...UNITS_DATA_SEMESTER_2
];

export const SCHOOL_IDENTITY = {
  name: 'SMK Negeri 3 Kuningan',
  address: 'Jalan Raya Cirendang - Cigugur Kabupaten Kuningan. Telp: (0232) 876833',
  subject: 'Dasar-Dasar Desain Komunikasi Visual (DD DKV)',
  grade: 'Kelas X / Fase E',
  supervisorName: 'SAIDUN, S.Pd., M.M.',
  supervisorNip: '197009201994021002',
  academicYear: '2026/2027',
  schoolPrograms: [
    'Adiwiyata (Peduli & Berbudaya Lingkungan Hidup)',
    'Gapura Pancawaluya (Karakter Jawa Barat)',
    'Gerakan Indonesia ASRI (Aman, Sehat, Rapi, Indah)',
    'Gerakan Literasi & Numerasi Visual',
    'S3 (Senyum, Salam, Sapa)',
    'Simpanan Pelajar (SimPel Technopreneur)'
  ],
  defaultSchedule: {
    mondayJp: 6,
    mondayMinutes: 270,
    wednesdayJp: 6,
    wednesdayMinutes: 270,
    totalWeeks: 36,
    totalJp: 432,
    jpMinutes: 45
  }
};
