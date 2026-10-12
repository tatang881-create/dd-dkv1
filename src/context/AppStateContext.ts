import { useState, useEffect } from 'react';
import { TeacherControlState, StudentSubmission, StudentPortfolioItem, SupervisionRecord, LearningUnit } from '../types/curriculum';
import { ALL_36_WEEKS_UNITS } from '../data/curriculumIndex';

const INITIAL_TEACHER_CONTROL: TeacherControlState = {
  activeClass: 'X DKV 1',
  currentWeek: 1,
  activeMeetingDay: 'Senin',
  sessionStatus: 'berlangsung',
  lockNavigationToNext: true,
  allowedSimulations: true,
  menuPermissions: {
    dashboard: true,
    materi: true,
    pertemuanAktif: true,
    simulasi: true,
    lkpd: true,
    kuis: true,
    portofolio: true,
    referensi: true,
    supervisi: false
  },
  allowedUnits: Array.from({ length: 36 }, (_, i) => i + 1),
  lastUpdated: new Date().toISOString(),
  updatedBy: 'Tatang S.Pd. (Guru DD DKV)'
};

const INITIAL_SUBMISSIONS: StudentSubmission[] = [
  {
    id: 'sub-1',
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    studentClass: 'X DKV 1',
    week: 1,
    meetingNumber: 1,
    taskTitle: 'LKPD 1.1: Pemetaan Potensi Diri dan Karakteristik Technopreneur',
    submittedAt: '2026-07-20 11:30',
    content: 'Saya memiliki minat besar pada desain vektor dan ilustrasi komik. Karakteristik wirausaha yang ingin saya latih adalah disiplin waktu pengerjaan dan komitmen mutu karya visual.',
    reflection: 'Saya menyadari bahwa keterampilan menggambar tanpa pemahaman bisnis technopreneur akan sulit bersaing di pasar modern.',
    grade: 92,
    teacherFeedback: 'Refleksi sangat matang dan terarah. Terus pertahankan semangat belajarnya!',
    status: 'graded'
  },
  {
    id: 'sub-2',
    studentId: 'dkv-002',
    studentName: 'Siti Nur Aisyah',
    studentClass: 'X DKV 1',
    week: 19,
    meetingNumber: 2,
    taskTitle: 'Aktivitas 1.1: Eksplorasi Huruf Phoenicia, Yunani, dan Romawi',
    submittedAt: '2026-01-12 10:15',
    content: 'Aksara Phoenicia berjumlah 22 karakter menjadi loncatan luar biasa dari hieroglif piktogram menuju sistem bunyi fonetis yang efisien. Bangsa Romawi menyempurnakan proporsi geometrisnya hingga menjadi alfabet latin modern.',
    reflection: 'Sangat mengagumi ketelitian seniman Romawi memahat huruf Trajan Column yang abadi hingga kini.',
    grade: 95,
    teacherFeedback: 'Analisis sejarah sangat mendalam dan sesuai referensi buku bab 1.',
    status: 'graded'
  },
  {
    id: 'sub-3',
    studentId: 'dkv-003',
    studentName: 'Bagas Aditya Pratama',
    studentClass: 'X DKV 1',
    week: 26,
    meetingNumber: 2,
    taskTitle: 'Praktik 2.3: Uji Coba Segitiga Eksposur Kamera DSLR',
    submittedAt: '2026-02-23 14:00',
    content: 'Telah memotret objek bergerak di lapangan SMKN 3 Kuningan dengan setelan Aperture f/4, Shutter Speed 1/1000s, dan ISO 200 di bawah cahaya terik matahari. Hasil foto freeze tajam tanpa blur.',
    reflection: 'Memahami bahwa mempercepat shutter speed harus dikompensasi bukaan aperture yang cukup agar foto tidak under-exposure.',
    grade: 88,
    teacherFeedback: 'Bagus, komposisi freeze sudah berhasil. Coba eksplorasi sudut low angle pada sesi berikutnya.',
    status: 'graded'
  }
];

const INITIAL_PORTFOLIO: StudentPortfolioItem[] = [
  {
    id: 'port-1',
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    title: 'Sketsa Still Life Apel & Teko Teknik Dussel',
    category: 'Sketsa',
    week: 16,
    dateCreated: '2026-11-03',
    status: 'Final Terverifikasi',
    description: 'Sketsa manual objek still life menggunakan pensil 2B dan 4B dengan teknik dussel memanfaatkan kapas untuk menghasilkan gradasi gelap terang halus.',
    reflectionGrowth: 'Melatih kepekaan arah datang cahaya dan bayangan jatuh pada objek bundar.',
    teacherReview: 'Gradasi bayangan sangat halus dan proporsi teko presisi. Sangat layak masuk portofolio utama.',
    score: 94
  },
  {
    id: 'port-2',
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    title: 'Desain Tipografi Wordmark "Kuningan Heritage"',
    category: 'Tipografi',
    week: 24,
    dateCreated: '2026-02-09',
    status: 'Final Terverifikasi',
    description: 'Wordmark berbasis font Serif dengan modifikasi kerning manual dan perpaduan aksara lokal bernuansa anggun dan kokoh.',
    reflectionGrowth: 'Belajar bahwa spasi manual optik (kerning) antar huruf jauh lebih nyaman dibaca dibanding kerning default.',
    teacherReview: 'Keseimbangan huruf AV dan TA sangat rapi. Estetika klasik tercapai dengan baik.',
    score: 90
  },
  {
    id: 'port-3',
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    title: 'Koleksi Foto Aksi Low Angle Olahraga Bola Basket',
    category: 'Fotografi',
    week: 28,
    dateCreated: '2026-03-09',
    status: 'Final Terverifikasi',
    description: 'Pengambilan gambar sudut rendah (low angle) membidik aksi lay-up pemain basket di lapangan terbuka SMKN 3 Kuningan dengan shutter speed 1/1250 detik.',
    reflectionGrowth: 'Belajar menjaga stabilitas kamera saat membidik dari sudut rendah dengan lutut menekuk aman (prinsip K3).',
    teacherReview: 'Momen puncak (decisive moment) tertangkap sempurna, ekspresi wajah dramatis.',
    score: 95
  },
  {
    id: 'port-4',
    studentId: 'dkv-001',
    studentName: 'Ahmad Fauzi Ridwan',
    title: 'Dumi Kemasan Kotak Keripik Pisang Khas Kuningan',
    category: 'Packaging',
    week: 36,
    dateCreated: '2026-05-18',
    status: 'Final Terverifikasi',
    description: 'Desain pola jaring kemasan kotak pada CorelDRAW menggunakan teknik PowerClip Inside dan dirakit fisik pada kertas art carton 260 gsm.',
    reflectionGrowth: 'Memahami keterkaitan antara perancangan digital di layar dengan ketepatan perakitan fisik di dunia nyata.',
    teacherReview: 'Kuncian kotak sangat presisi, warna CMYK keluar sempurna pada art carton. Standar industri!',
    score: 96
  }
];

const INITIAL_SUPERVISION: SupervisionRecord = {
  id: 'sup-2026-01',
  schoolName: 'SMK Negeri 3 Kuningan',
  teacherName: 'Tatang S.Pd.',
  teacherNip: '198804122015031004',
  supervisorName: 'SAIDUN, S.Pd., M.M.',
  supervisorNip: '197009201994021002',
  subject: 'Dasar-Dasar Desain Komunikasi Visual',
  gradePhase: 'Fase E / Kelas X',
  date: '2026-09-14',
  semester: 1,
  weekObserved: 7,
  scores: {
    c1_perencanaan: { tujuan: 4, materi: 4, strategi: 4, diferensiasi: 3 },
    c2_pelaksanaan: { pendahuluan: 4, interaksi: 4, aktivitas: 4, kolaborasi: 4, teknologi: 4 },
    c3_deepLearning: { criticalThinking: 4, creativity: 4, collaboration: 4, communication: 4, connectionToRealLife: 4 },
    c4_asesmen: { formatif: 4, sumatif: 4, refleksiGuru: 4, refleksiMurid: 4 }
  },
  schoolProgramsIntegrated: [
    'Adiwiyata (Peduli & Berbudaya Lingkungan Hidup)',
    'Gapura Pancawaluya',
    'Gerakan Indonesia ASRI',
    'Gerakan Literasi & Numerasi'
  ],
  notesSupervisor: {
    perencanaan: 'Modul ajar Kurikulum Merdeka dirancang sangat komprehensif, tujuan pembelajaran menekankan 5C dan terhubung langsung dengan sumber buku teks resmi.',
    pelaksanaan: 'Guru memfasilitasi proses pembelajaran secara interaktif dengan media digital DKV Learning Lab. Siswa terlibat aktif mencoba simulasi K3 dan perawatan kamera.',
    deepLearning: 'Penerapan prinsip Deep Learning (Mindful, Meaningful, Joyful) tampak nyata pada antusiasme siswa saat membedah etika hak cipta dan perawatan aset visual.',
    asesmen: 'Asesmen formatif dan rubrik penilaian proses berjalan secara autentik dengan catatan umpan balik yang membangun.'
  },
  recommendations: {
    forTeacher: 'Pertahankan diferensiasi pembelajaran berbasis gaya belajar visual dan kinestetik siswa SMK.',
    forStudent: 'Tingkatkan pendokumentasian refleksi berkala di portofolio digital masing-masing.',
    forSchool: 'Perluas akses perangkat digitizer tablet di laboratorium komputer DKV untuk mendukung pembelajaran mendalam.'
  }
};

export function useAppState() {
  const [userRole, setUserRole] = useState<'student' | 'teacher'>('student');
  const [isTeacherAuthenticated, setIsTeacherAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('dkv_teacher_auth') === 'true';
  });
  const [currentWeek, setCurrentWeek] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('materi');

  // Custom unit content edited by teacher
  const [unitsData, setUnitsData] = useState<LearningUnit[]>(() => {
    const saved = localStorage.getItem('dkv_units_custom');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return ALL_36_WEEKS_UNITS;
  });

  const [teacherControl, setTeacherControl] = useState<TeacherControlState>(() => {
    const saved = localStorage.getItem('dkv_teacher_control');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_TEACHER_CONTROL;
  });

  const [submissions, setSubmissions] = useState<StudentSubmission[]>(() => {
    const saved = localStorage.getItem('dkv_submissions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SUBMISSIONS;
  });

  const [portfolioItems, setPortfolioItems] = useState<StudentPortfolioItem[]>(() => {
    const saved = localStorage.getItem('dkv_portfolio');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_PORTFOLIO;
  });

  const [supervisionRecord, setSupervisionRecord] = useState<SupervisionRecord>(() => {
    const saved = localStorage.getItem('dkv_supervision');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SUPERVISION;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('dkv_units_custom', JSON.stringify(unitsData));
  }, [unitsData]);

  useEffect(() => {
    localStorage.setItem('dkv_teacher_control', JSON.stringify(teacherControl));
  }, [teacherControl]);

  useEffect(() => {
    localStorage.setItem('dkv_submissions', JSON.stringify(submissions));
  }, [submissions]);

  useEffect(() => {
    localStorage.setItem('dkv_portfolio', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  useEffect(() => {
    localStorage.setItem('dkv_supervision', JSON.stringify(supervisionRecord));
  }, [supervisionRecord]);

  const loginTeacher = (password: string): boolean => {
    if (password === 'dkvsmk3kuningan' || password === 'guru2026' || password === 'admin123') {
      setIsTeacherAuthenticated(true);
      setUserRole('teacher');
      localStorage.setItem('dkv_teacher_auth', 'true');
      return true;
    }
    return false;
  };

  const logoutTeacher = () => {
    setIsTeacherAuthenticated(false);
    setUserRole('student');
    localStorage.removeItem('dkv_teacher_auth');
  };

  const updateTeacherControl = (partial: Partial<TeacherControlState>) => {
    setTeacherControl(prev => ({
      ...prev,
      ...partial,
      lastUpdated: new Date().toISOString()
    }));
  };

  const updateUnitContent = (updatedUnit: LearningUnit) => {
    setUnitsData(prev => prev.map(u => u.week === updatedUnit.week ? updatedUnit : u));
  };

  const addSubmission = (sub: Omit<StudentSubmission, 'id' | 'submittedAt' | 'status'>) => {
    const newSub: StudentSubmission = {
      ...sub,
      id: `sub-${Date.now()}`,
      submittedAt: new Date().toLocaleString('id-ID'),
      status: 'pending'
    };
    setSubmissions(prev => [newSub, ...prev]);
  };

  const gradeSubmission = (id: string, grade: number, feedback: string) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, grade, teacherFeedback: feedback, status: 'graded' } : s));
  };

  const addPortfolioItem = (item: Omit<StudentPortfolioItem, 'id' | 'dateCreated'>) => {
    const newItem: StudentPortfolioItem = {
      ...item,
      id: `port-${Date.now()}`,
      dateCreated: new Date().toISOString().split('T')[0]
    };
    setPortfolioItems(prev => [newItem, ...prev]);
  };

  return {
    userRole,
    setUserRole,
    isTeacherAuthenticated,
    loginTeacher,
    logoutTeacher,
    currentWeek,
    setCurrentWeek,
    activeTab,
    setActiveTab,
    unitsData,
    updateUnitContent,
    teacherControl,
    updateTeacherControl,
    submissions,
    addSubmission,
    gradeSubmission,
    portfolioItems,
    addPortfolioItem,
    supervisionRecord,
    setSupervisionRecord
  };
}
