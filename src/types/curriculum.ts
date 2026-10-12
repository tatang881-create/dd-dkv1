export interface MeetingPlan {
  meetingNumber: 1 | 2; // 1 = Senin, 2 = Rabu
  day: 'Senin' | 'Rabu';
  jp: number; // 6 JP
  durationMinutes: number; // 270 minutes
  title: string;
  focus: 'Memahami & Eksplorasi' | 'Mengaplikasi & Praktik / Refleksi';
  learningObjectives: string[];
  triggerQuestion: string; // Pertanyaan Pemantik
  activities: {
    pendahuluan: string[];
    inti: string[]; // Memahami / Mengaplikasi (Deep Learning: Mindful, Meaningful, Joyful)
    penutup: string[]; // Merefleksi & Formatif
  };
  deepLearning5C: {
    criticalThinking: string;
    creativity: string;
    collaboration: string;
    communication: string;
    connectionToRealLife: string;
  };
  lkpdTask?: {
    id: string;
    title: string;
    instruction: string;
    steps: string[];
    rubricCriteria: { criteria: string; weight: number; maxScore: number }[];
  };
}

export interface LearningUnit {
  week: number;
  semester: 1 | 2;
  babNumber: number;
  babTitle: string;
  topic: string;
  sourceReference: string; // e.g., "Buku Semester 1 Bab 1 hlm. 1-16"
  isOfficialCurriculum: boolean; // True jika bersumber tepat dari buku teks
  notesForTeacher?: string; // Catatan verifikasi untuk guru jika perlu penyesuaian kalender/ATP
  prerequisites: string;
  coreConcepts: string[];
  summary: string;
  glossaryTerms: { term: string; definition: string }[];
  simulationId?: 'technopreneur' | 'k3' | 'alur-produksi' | 'sketsa' | 'tipografi' | 'fotografi' | 'komputer-grafis' | 'packaging';
  meetings: [MeetingPlan, MeetingPlan]; // Pertemuan 1 (Senin) & Pertemuan 2 (Rabu)
  quiz: {
    id: string;
    title: string;
    questions: {
      id: string;
      question: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }[];
  };
}

export interface TeacherControlState {
  activeClass: string; // e.g. "X DKV 1"
  currentWeek: number; // 1 - 36
  activeMeetingDay: 'Senin' | 'Rabu';
  sessionStatus: 'belum_mulai' | 'berlangsung' | 'dijeda' | 'selesai';
  lockNavigationToNext: boolean; // Kunci siswa tidak bisa loncat ke minggu berikutnya
  allowedSimulations: boolean;
  menuPermissions: {
    dashboard: boolean;
    materi: boolean;
    pertemuanAktif: boolean;
    simulasi: boolean;
    lkpd: boolean;
    kuis: boolean;
    portofolio: boolean;
    referensi: boolean;
    supervisi: boolean;
  };
  allowedUnits: number[]; // Array of week numbers unlocked for students
  lastUpdated: string;
  updatedBy: string;
}

export interface StudentSubmission {
  id: string;
  studentId: string;
  studentName: string;
  studentClass: string;
  week: number;
  meetingNumber: 1 | 2;
  taskTitle: string;
  submittedAt: string;
  content: string;
  mediaUrl?: string;
  reflection: string;
  grade?: number;
  teacherFeedback?: string;
  status: 'pending' | 'graded';
}

export interface StudentPortfolioItem {
  id: string;
  studentId: string;
  studentName: string;
  title: string;
  category: 'Sketsa' | 'Tipografi' | 'Fotografi' | 'Vektor' | 'Bitmap' | 'Packaging' | 'Technopreneur';
  week: number;
  dateCreated: string;
  status: 'Draft' | 'Revisi' | 'Final Terverifikasi';
  description: string;
  imageUrl?: string;
  reflectionGrowth: string;
  teacherReview?: string;
  score?: number;
}

export interface SupervisionRecord {
  id: string;
  schoolName: string;
  teacherName: string;
  teacherNip: string;
  supervisorName: string;
  supervisorNip: string;
  subject: string;
  gradePhase: string;
  date: string;
  semester: 1 | 2;
  weekObserved: number;
  scores: {
    c1_perencanaan: { [key: string]: number }; // ASPEK 1-4 (Tujuan, Materi, Strategi, Diferensiasi)
    c2_pelaksanaan: { [key: string]: number }; // ASPEK 1-5 (Pendahuluan, Interaksi, Aktivitas, Kolaborasi, Teknologi)
    c3_deepLearning: { [key: string]: number }; // ASPEK 1-5 (Critical Thinking, Creativity, Collaboration, Communication, Connection)
    c4_asesmen: { [key: string]: number }; // ASPEK 1-4 (Formatif, Sumatif, Refleksi Guru, Refleksi Murid)
  };
  schoolProgramsIntegrated: string[]; // Adiwiyata, Gapura Pancawaluya, Gerakan Indonesia ASRI, Literasi & Numerasi, S3, SimPel
  notesSupervisor: {
    perencanaan: string;
    pelaksanaan: string;
    deepLearning: string;
    asesmen: string;
  };
  recommendations: {
    forTeacher: string;
    forStudent: string;
    forSchool: string;
  };
}
