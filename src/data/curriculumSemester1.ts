import { LearningUnit } from '../types/curriculum';

export const UNITS_DATA: LearningUnit[] = [
  // ================= SEMESTER 1 (Minggu 1 - 18) =================
  {
    week: 1,
    semester: 1,
    babNumber: 1,
    babTitle: 'Profil Technopreneur, Peluang Usaha, dan Profesi di Bidang DKV',
    topic: 'Orientasi Pembelajaran DKV, Asesmen Diagnostik, dan Budaya Kreatif',
    sourceReference: 'Buku Semester 1 Bab 1 hlm. 1-6 & Instrumen Supervisi SMKN 3 Kuningan',
    isOfficialCurriculum: true,
    prerequisites: 'Kemampuan dasar mengamati karya visual di lingkungan sekitar',
    coreConcepts: [
      'Pengertian Technopreneur (Chua Eung Hwa & Jousma)',
      'Definisi Wirausaha menurut Richard Cantillon, Jean-Baptiste Say, Ahmad Sanusi, Raymond, & Joseph Schumpeter',
      'Karakteristik wirausahawan: disiplin, komitmen, jujur, kreatif, inovatif'
    ],
    summary: 'Mata pelajaran Dasar-Dasar DKV Fase E Kelas X membekali peserta didik dengan pemahaman technopreneurship, wawasan industri kreatif 4.0, standar K3, sketsa gambar, tipografi, fotografi dasar, dan komputer grafis.',
    glossaryTerms: [
      { term: 'Technopreneur', definition: 'Pengembangan diri pengusaha yang memanfaatkan kemajuan teknologi untuk menciptakan inovasi bernilai ekonomis.' },
      { term: 'Creativepreneur', definition: 'Sebutan wirausahawan kreatif di tingkat SMK/pelajar yang mengoptimalkan daya imajinasi menjadi karya visual bernilai.' }
    ],
    simulationId: 'technopreneur',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Pengenalan Dunia DKV & Asesmen Diagnostik Karakter Kreatif',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: [
          'Peserta didik mampu mendeskripsikan ruang lingkup DKV dan peran technopreneur di era digital',
          'Peserta didik mampu mengidentifikasi karakteristik wirausaha kreatif melalui asesmen diagnostik'
        ],
        triggerQuestion: 'Mengapa karya visual seperti logo, kemasan kuliner, dan poster di sekitar kita mampu mengubah bisnis kecil menjadi bernilai jutaan rupiah?',
        activities: {
          pendahuluan: [
            'Guru membuka dengan salam, doa bersama, dan pembiasaan budaya kerja 5R (Ringkas, Rapi, Resik, Rawat, Rajin)',
            'Apersepsi dan eksplorasi pengalaman peserta didik melihat iklan viral dan konten media sosial',
            'Penyampaian tujuan 6 JP dan kriteria asesmen formatif awal'
          ],
          inti: [
            'Eksplorasi konsep technopreneur menurut Chua Eung Hwa (2016) dan Jousma (2012)',
            'Pembedahan pemikiran para ahli: Cantillon (ketidakpastian risiko), Say (penyatuan alat produksi), Schumpeter (inovator kombinasi baru)',
            'Diskusi terarah: Mindful exploration tentang potensi diri peserta didik dalam bidang seni rupa dan teknologi'
          ],
          penutup: [
            'Refleksi berkesadaran: Menuliskan 1 impian profesi di bidang DKV',
            'Asesmen formatif singkat mengenai definisi technopreneur',
            'Instruksi persiapan data pengamatan untuk pertemuan Rabu'
          ]
        },
        deepLearning5C: {
          criticalThinking: 'Membandingkan konsep wirausaha konvensional dengan technopreneur berbasis teknologi digital',
          creativity: 'Menemukan gagasan awal transformasi produk lokal Kuningan ke media visual modern',
          collaboration: 'Diskusi kelompok membedah profil wirausahawan DKV inspiratif',
          communication: 'Menyampaikan argumentasi mengapa teknologi digital tidak bisa dipisahkan dari DKV',
          connectionToRealLife: 'Mengaitkan dengan industri kreatif lokal di Kabupaten Kuningan (kuliner tape ketan, batik kasepuhan, pariwisata)'
        },
        lkpdTask: {
          id: 'lkpd-w1-m1',
          title: 'LKPD 1.1: Pemetaan Potensi Diri dan Karakteristik Technopreneur',
          instruction: 'Analisis profil pribadi dan tentukan 3 karakteristik wirausaha (disiplin, jujur, inovatif) yang paling ingin kamu kembangkan selama kelas X di SMKN 3 Kuningan.',
          steps: [
            'Isi tabel asesmen diagnostik minat DKV',
            'Identifikasi kelebihan visual yang kamu miliki (menggambar, fotografi, mengoperasikan gadget)',
            'Tuliskan rencana aksi pembelajaran mendalam untuk semester ganjil'
          ],
          rubricCriteria: [
            { criteria: 'Kelengkapan analisis diri', weight: 40, maxScore: 100 },
            { criteria: 'Kedalaman refleksi profil wirausaha', weight: 30, maxScore: 100 },
            { criteria: 'Relevansi rencana aksi belajar', weight: 30, maxScore: 100 }
          ]
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Eksplorasi Profil Wirausaha & Simulasi Ide Technopreneur',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: [
          'Peserta didik mampu menguraikan tujuan wirausaha dan 5 elemen kewirausahaan',
          'Peserta didik mampu menyimulasikan perancangan ide technopreneur sederhana melalui canvas interaktif'
        ],
        triggerQuestion: 'Bagaimana cara seorang desainer pemula meminimalkan risiko usaha saat merintis jasa desain freelance?',
        activities: {
          pendahuluan: [
            'Tinjauan materi Senin dan refleksi kesiapan belajar (Mindful check-in)',
            'Presentasi singkat 2 siswa tentang tokoh desainer grafis favorit'
          ],
          inti: [
            'Praktik menggunakan Simulator Technopreneur: Menghitung modal dasar, biaya lisensi software, dan menentukan tarif per desain',
            'Menelaah 5 elemen kewirausahaan: Mengembangkan usaha, membentuk SDM, sumber pemasukan, leadership, tanggung jawab & meminimalkan risiko',
            'Kerja kelompok menyusun kanvas ide wirausaha DKV untuk UMKM Kuningan'
          ],
          penutup: [
            'Presentasi galeri keliling (peer-review)',
            'Umpan balik konstruktif guru berlandaskan rubrik 5C',
            'Pengunggahan karya ke Portofolio Digital Lab'
          ]
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung struktur harga jasa desain agar berkelanjutan secara ekonomi',
          creativity: 'Merancang nama brand dan nilai keunikan jasa visual',
          collaboration: 'Bagi tugas tim: riset target konsumen, penyusun portofolio, dan analis harga',
          communication: 'Pitching ide usaha 2 menit di hadapan guru dan rekan kelas',
          connectionToRealLife: 'Memberikan solusi visual riil bagi produk makanan atau kerajinan khas Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w1',
      title: 'Kuis Formatif Minggu 1: Dasar Technopreneurship DKV',
      questions: [
        {
          id: 'q1',
          question: 'Menurut Chua Eung Hwa (Triyono, 2016), apa yang dimaksud dengan Technopreneur?',
          options: [
            'Pengusaha yang hanya menjual perangkat keras komputer',
            'Pengembangan diri seorang pengusaha yang memanfaatkan teknologi untuk membuat penemuan baru/inovasi bernilai ekonomis',
            'Seniman rupa murni yang menolak penggunaan teknologi komputer',
            'Pedagang perantara barang impor tanpa proses kreasi'
          ],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 1 hlm. 3 menyatakan technopreneur adalah pemanfaatan teknologi untuk membuat inovasi baru yang mengeksploitasi pencapaian di pasar guna menghasilkan nilai ekonomis.'
        },
        {
          id: 'q2',
          question: 'Siapakah ahli yang mendefinisikan wirausaha sebagai agen yang menyatukan berbagai alat-alat produksi dan menemukan nilai produksinya pada tahun 1816?',
          options: ['Richard Cantillon', 'Jean-Baptiste Say', 'Ahmad Sanusi', 'Joseph Schumpeter'],
          correctIndex: 1,
          explanation: 'Jean-Baptiste Say (1816) mendefinisikan wirausaha sebagai agen pemersatu alat-alat produksi.'
        }
      ]
    }
  },
  {
    week: 2,
    semester: 1,
    babNumber: 1,
    babTitle: 'Profil Technopreneur, Peluang Usaha, dan Profesi di Bidang DKV',
    topic: 'Prospek Profesi Desainer Komunikasi Visual: Ilustrator, Komikus, Desainer Grafis, & Web',
    sourceReference: 'Buku Semester 1 Bab 1 hlm. 6-11',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman konsep dasar technopreneur minggu ke-1',
    coreConcepts: [
      'Peran tim ilustrator: sketcher (perancang), inker (peninta), dan colourist (pewarna)',
      'Komikus dan perbedaannya dengan ilustrator',
      'Desainer grafis: identitas visual, kemasan (packaging), kartu nama, spanduk',
      'Desainer web: tata letak interaktif dan konten promosi menarik'
    ],
    summary: 'Mempelajari ragam profesi DKV dalam rantai industri kreatif. Mengenal spesialisasi tim ilustrator (sketcher, inker, colourist), komikus Indonesia, desainer grafis, dan desainer web.',
    glossaryTerms: [
      { term: 'Sketcher', definition: 'Anggota tim ilustrator yang bertugas membuat rancangan gambar/sketsa kasar awal.' },
      { term: 'Inker', definition: 'Anggota tim ilustrator yang bertugas melakukan penintaan garis kontur (outline) yang tegas.' },
      { term: 'Colourist', definition: 'Anggota tim ilustrator yang bertugas mengisi warna, bayangan, dan tekstur visual.' }
    ],
    simulationId: 'technopreneur',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Eksplorasi Profesi Ilustrator & Peran Tim Ilustrasi',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: [
          'Peserta didik mampu memerinci peranan tim ilustrator (sketcher, inker, colourist)',
          'Peserta didik mampu membedakan tugas profesi ilustrator dan komikus'
        ],
        triggerQuestion: 'Bagaimana sebuah studio animasi atau komik membagi tugas tim agar dapat menghasilkan ratusan halaman tepat waktu?',
        activities: {
          pendahuluan: ['Doa bersama', 'Apersepsi: Membedah contoh halaman komik strip'],
          inti: ['Analisis alur kerja studio ilustrasi', 'Simulasi peran: pembagian kelompok menjadi sketcher, inker, dan colourist'],
          penutup: ['Refleksi kerja kolaboratif', 'Umpan balik guru']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis spesialisasi keahlian dalam industri kreatif',
          creativity: 'Mencoba teknik penintaan digital dan manual',
          collaboration: 'Praktik kolaboratif pembuatan 1 panel ilustrasi dalam kelompok 3 peran',
          communication: 'Mempresentasikan hasil koordinasi antar-peran',
          connectionToRealLife: 'Memahami budaya kerja studio komik dan agensi ilustrasi di Indonesia'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Desainer Grafis & Desainer Web: Peluang Usaha Percetakan dan Media Digital',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: [
          'Peserta didik mampu mengidentifikasi peluang usaha desainer grafis dan web di lingkungan sekitar',
          'Peserta didik mampu merancang portofolio layanan desain sederhana'
        ],
        triggerQuestion: 'Layanan desain apa yang paling mendesak dibutuhkan oleh UMKM di sekitar tempat tinggalmu?',
        activities: {
          pendahuluan: ['Review peran ilustrator', 'Ice breaking visual branding'],
          inti: ['Identifikasi kebutuhan desain kemasan dan web promo', 'Menyusun daftar jasa layanan desain (kartu nama, banner, medsos)'],
          penutup: ['Refleksi etika profesi', 'Penyimpanan draf portofolio']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai nilai tambah visual bagi UMKM lokal',
          creativity: 'Merancang paket penawaran jasa visual inovatif',
          collaboration: 'Peer-review kelayakan penawaran jasa antar-kelompok',
          communication: 'Menyampaikan simulasi promosi jasa ke calon klien',
          connectionToRealLife: 'Koneksi dengan pelaku UMKM Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w2',
      title: 'Kuis Formatif Minggu 2: Profesi DKV',
      questions: [
        {
          id: 'q1',
          question: 'Bagian dalam tim ilustrator yang bertugas melakukan proses penintaan pada hasil gambar sketsa disebut...',
          options: ['Sketcher', 'Inker', 'Colouring', 'Art Director'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 1 hlm. 7 menjelaskan inker adalah bagian penintaan.'
        }
      ]
    }
  },
  {
    week: 3,
    semester: 1,
    babNumber: 1,
    babTitle: 'Profil Technopreneur, Peluang Usaha, dan Profesi di Bidang DKV',
    topic: 'Profesi Animator, Fotografer, Videografer, Editor Video, dan Periklanan',
    sourceReference: 'Buku Semester 1 Bab 1 hlm. 9-11',
    isOfficialCurriculum: true,
    prerequisites: 'Pengenalan profesi visual statis minggu ke-2',
    coreConcepts: [
      'Animator: penciptaan gambar bergerak cepat untuk film, TV, game, dan medsos',
      'Fotografer indoor vs outdoor',
      'Videografer vs Editor Video (pengambilan sudut pandang vs manipulasi tata urutan visual)',
      'Advertising: media promosi lini atas dan lini bawah'
    ],
    summary: 'Mendalami profesi dinamis di bidang audio-visual dan periklanan. Memahami sinergi antara perekaman momen nyata (fotografi/videografi) dan pengolahan pascaproduksi (editing/motion).',
    glossaryTerms: [
      { term: 'Animator', definition: 'Seseorang yang menciptakan berbagai macam gambar yang dapat bergerak saat ditayangkan dengan cepat.' },
      { term: 'Editor Video', definition: 'Seseorang yang memanipulasi, menyunting, dan mengatur sudut pandang rekaman gambar agar tersaji komunikatif.' }
    ],
    simulationId: 'technopreneur',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mengenal Profesi Animator & Fotografer Profesional',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami lingkup kerja animator dan fotografer'],
        triggerQuestion: 'Apa perbedaan mendasar antara fotografer indoor studio dengan outdoor pemandangan?',
        activities: {
          pendahuluan: ['Mindful check-in', 'Menonton cuplikan animasi karya animator Indonesia'],
          inti: ['Membedah workflow fotografer dan animator', 'Studi kasus industri periklanan TV dan media sosial'],
          penutup: ['Refleksi minat karir', 'Asesmen formatif lisan']
        },
        deepLearning5C: {
          criticalThinking: 'Memahami tantangan teknis pembuatan frame-by-frame animation',
          creativity: 'Menyusun moodboard foto produk',
          collaboration: 'Diskusi kelompok',
          communication: 'Mengutarakan ide konsep visual',
          connectionToRealLife: 'Peluang content creator dan fotografer katalog produk'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Videografer, Editor Video, dan Agensi Periklanan',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Menguasai tahapan kerja videografer dan editor video dalam periklanan'],
        triggerQuestion: 'Mengapa hasil rekaman video mentah masih membutuhkan sentuhan editor agar pesannya sampai ke audiens?',
        activities: {
          pendahuluan: ['Review sesi Senin', 'Penjelasan AIDA dalam video iklan'],
          inti: ['Praktik menyusun storyboard iklan produk lokal 15 detik', 'Diskusi peran editor video dalam pacing dan emosi cerita'],
          penutup: ['Pemberian umpan balik', 'Pengunggahan lembar storyboard ke portofolio']
        },
        deepLearning5C: {
          criticalThinking: 'Mengevaluasi efektivitas pesan iklan dalam durasi singkat',
          creativity: 'Menciptakan alur cerita visual yang menggelitik (eye-catching)',
          collaboration: 'Kerja tim produksi storyboard',
          communication: 'Presentasi alur video',
          connectionToRealLife: 'Kebutuhan promosi UMKM di platform video vertikal'
        }
      }
    ],
    quiz: {
      id: 'quiz-w3',
      title: 'Kuis Formatif Minggu 3: Profesi Multimedia & Periklanan',
      questions: [
        {
          id: 'q1',
          question: 'Seseorang yang pekerjaannya merekam suatu momen atau objek gambar video dalam memproduksi suatu iklan atau film disebut...',
          options: ['Animator', 'Editor Video', 'Videografer', 'Komikus'],
          correctIndex: 2,
          explanation: 'Buku Semester 1 Bab 1 hlm. 10 mendefinisikan videografer sebagai perekam video momen/objek iklan atau film.'
        }
      ]
    }
  },
  {
    week: 4,
    semester: 1,
    babNumber: 1,
    babTitle: 'Profil Technopreneur, Peluang Usaha, dan Profesi di Bidang DKV',
    topic: 'Mengenal Potensi Desainer sejak Dini, Inovasi, dan Simulasi Proyek Usaha',
    sourceReference: 'Buku Semester 1 Bab 1 hlm. 11-16',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan materi bab 1 sub-bab A & B',
    coreConcepts: [
      'Inovatif menurut Zimmerer: melihat sesuatu yang lama lalu memikirkan sesuatu yang baru dan berbeda',
      '5 Aspek merintis usaha desain: mulai dari sederhana, jeli membaca peluang, jangan takut memulai, minimalisasi risiko, jalin kemitraan',
      'Simulasi proyek wirausaha muda DKV'
    ],
    summary: 'Mengkristalisasi pemahaman technopreneurship menjadi rancangan nyata. Menganalisis 5 pedoman merintis usaha desain dan meminimalkan risiko modal.',
    glossaryTerms: [
      { term: 'Minimalisasi Risiko', definition: 'Upaya menentukan batasan modal dan persiapan alternatif agar kerugian dapat ditekan.' },
      { term: 'Freelance', definition: 'Pekerjaan lepas mandiri tanpa ikatan kontrak tunggal, fleksibel namun menuntut disiplin tinggi.' }
    ],
    simulationId: 'technopreneur',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: '5 Aspek Merintis Usaha Desain Grafis Mandiri',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami langkah sistematis merintis usaha desain grafis'],
        triggerQuestion: 'Bagaimana cara seorang siswa SMK memulai jasa desain dengan modal minim tanpa takut rugi?',
        activities: {
          pendahuluan: ['Doa dan motivasi berwirausaha', 'Kuis interaktif kilas balik'],
          inti: ['Menganalisis studi kasus usaha sablon/stiker di lingkungan sekolah', 'Penerapan konsep Zimmerer dalam inovasi produk lama menjadi baru'],
          penutup: ['Refleksi mandiri', 'Penugasan proposal mini proyek']
        },
        deepLearning5C: {
          criticalThinking: 'Menemukan kelemahan kemasan produk lama dan merumuskan solusi baru',
          creativity: 'Menggagas konsep kemitraan desain dengan UMKM',
          collaboration: 'Diskusi kelompok',
          communication: 'Menyusun argumen nilai tambah jasa',
          connectionToRealLife: 'Simulasi kemitraan dengan pedagang kantin atau koperasi sekolah'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Simulasi Proyek Technopreneur: Desain Identitas & Logo Sederhana',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mempraktikkan perancangan logo wirausaha muda sederhana'],
        triggerQuestion: 'Simbol apa yang paling tepat menggambarkan karakter usahamu agar langsung diingat konsumen?',
        activities: {
          pendahuluan: ['Review prinsip logo', 'Kesiapan alat sketsa'],
          inti: ['Praktik mandiri di Lab: Sketsa 3 alternatif logo wirausaha DKV', 'Simulasi presentasi elevator pitch ke guru dan teman'],
          penutup: ['Penilaian sumatif lingkup materi Bab 1', 'Refleksi pencapaian kompetensi']
        },
        deepLearning5C: {
          criticalThinking: 'Memilih 1 dari 3 konsep logo terbaik berdasarkan kriteria keterbacaan dan keunikan',
          creativity: 'Eksplorasi bentuk simbolik dan tipografi logo',
          collaboration: 'Saling memberi masukan kritis pada sketsa teman',
          communication: 'Mempertahankan filosofi desain yang dibuat',
          connectionToRealLife: 'Pembuatan logo untuk unit produksi sekolah'
        }
      }
    ],
    quiz: {
      id: 'quiz-w4',
      title: 'Uji Kompetensi Bab 1: Technopreneur DKV',
      questions: [
        {
          id: 'q1',
          question: 'Menurut Zimmerer (Suryana, 2003), ide-ide kreatif sering muncul ketika wirausaha...',
          options: [
            'Meniru karya orang lain secara persis',
            'Melihat sesuatu yang lama kemudian berpikir sesuatu yang baru dan berbeda',
            'Menunggu bantuan modal dari pemerintah tanpa bertindak',
            'Menggunakan peralatan termahal di pasar'
          ],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 1 hlm. 11 menyebutkan ide kreatif muncul ketika melihat hal lama lalu memikirkan hal baru dan berbeda.'
        }
      ]
    }
  },
  {
    week: 5,
    semester: 1,
    babNumber: 2,
    babTitle: 'Keutamaan Keselamatan dan Kesehatan Kerja (K3)',
    topic: 'K3 Individu Pekerja: Sikap Duduk Ergonomis, Posisi Layar, & Durasi Kerja Komputer',
    sourceReference: 'Buku Semester 1 Bab 2 hlm. 17-24 & 31',
    isOfficialCurriculum: true,
    prerequisites: 'Kebiasaan bekerja di lab komputer',
    coreConcepts: [
      'Konsep K3 pada individu pekerja desain',
      'Posisi duduk ergonomis: tulang belakang tegak rileks, siku 90 derajat, lutut sejajar pinggul',
      'Pencegahan cedera otot tulang belakang dan tengkuk leher',
      'Manajemen jeda istirahat (istirahat peregangan setiap 2 jam sekali)'
    ],
    summary: 'Mempelajari prinsip ergonomi bagi desainer grafis dan operator komputer untuk menghindari Repetitive Strain Injury (RSI), sakit pinggang, dan ketegangan leher.',
    glossaryTerms: [
      { term: 'Ergonomi', definition: 'Penyesuaian lingkungan kerja, postur, dan peralatan agar serasi dengan kemampuan fisik tubuh manusia guna mencegah cedera.' },
      { term: 'K3', definition: 'Keselamatan dan Kesehatan Kerja: upaya menciptakan tempat kerja yang aman, sehat, dan bebas dari bahaya kecelakaan.' }
    ],
    simulationId: 'k3',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Ergonomi Duduk di Depan Komputer & Bahaya Cedera Tulang Belakang',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami postur duduk yang benar dan potensi bahaya duduk bungkuk'],
        triggerQuestion: 'Pernahkah kamu merasakan pegal pada leher atau pinggang setelah berjam-jam mendesain di depan layar?',
        activities: {
          pendahuluan: ['Doa bersama', 'Pemeriksaan kebersihan dan kerapian lab (Gerakan ASRI)'],
          inti: ['Pembedahan Gambar 2.1 & Gambar 2.3: sudut siku 90 derajat, kaki rata lantai', 'Simulasi interaktif K3 Ergonomi: Mengoreksi posisi duduk siswa di lab komputer'],
          penutup: ['Praktik gerakan peregangan otot sederhana', 'Refleksi kenyamanan kerja']
        },
        deepLearning5C: {
          criticalThinking: 'Mendiagnosis postur kerja yang tidak sehat di lingkungan sekitar',
          creativity: 'Merancang poster mikro pengingat ergonomi di lab komputer',
          collaboration: 'Praktik saling mengecek postur kerja rekan sebangku (Peer ergonomic check)',
          communication: 'Menjelaskan alasan ilmiah pentingnya posisi duduk tegak rileks',
          connectionToRealLife: 'Menerapkan budaya kerja sehat dalam aktivitas harian memakai smartphone/laptop'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Pengaturan Jarak Jangkauan Kerja & Manajemen Waktu Jeda Desainer',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menata meja kerja dalam batas jangkauan tangan dan menerapkan jeda istirahat teratur'],
        triggerQuestion: 'Mengapa memutar kursi putar jauh lebih aman dibanding memuntir punggung saat mengambil barang di belakang?',
        activities: {
          pendahuluan: ['Review ergonomi duduk', 'Peregangan singkat pembuka'],
          inti: ['Eksplorasi Gambar 2.2: Jangkauan tangan di meja kerja', 'Penerapan aturan jeda 2 jam dan batasan jam kerja desainer'],
          penutup: ['Pengisian jurnal refleksi K3', 'Formatif pemahaman ergonomi']
        },
        deepLearning5C: {
          criticalThinking: 'Menelaah dampak begadang dan duduk statis terhadap metabolisme tubuh',
          creativity: 'Menata layout meja kerja lab SMKN 3 Kuningan agar ergonomis',
          collaboration: 'Simulasi tim menjaga disiplin jam kerja proyek',
          communication: 'Berbagi pengalaman mencegah burnout dan kelelahan visual',
          connectionToRealLife: 'Kebiasaan hidup sehat siswa SMK di era serba digital'
        }
      }
    ],
    quiz: {
      id: 'quiz-w5',
      title: 'Kuis Formatif Minggu 5: Ergonomi & K3 Individu',
      questions: [
        {
          id: 'q1',
          question: 'Bagaimana posisi siku lengan yang ideal terhadap meja kerja komputer menurut standar ergonomi K3 DKV?',
          options: [
            'Menekuk ke atas membentuk sudut 45 derajat',
            'Tepat menekuk tegak lurus (90 derajat) sejajar meja komputer',
            'Menggantung bebas tanpa sandaran',
            'Menempel rapat ke dada'
          ],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 2 Gambar 2.3 & hlm. 21 menunjukkan posisi siku lengan tepat menekuk tegak lurus dengan meja komputer.'
        }
      ]
    }
  },
  {
    week: 6,
    semester: 1,
    babNumber: 2,
    babTitle: 'Keutamaan Keselamatan dan Kesehatan Kerja (K3)',
    topic: 'K3 Posisi Khusus: Mengangkat Beban, Following Shot, Tiarap, & Bersandar',
    sourceReference: 'Buku Semester 1 Bab 2 hlm. 24-28',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman ergonomi duduk minggu ke-5',
    coreConcepts: [
      'Posisi berdiri yang benar dan posisi kaki tumpuan dua kaki',
      'Kaki pivot saat berjalan mundur merekam video (following shot)',
      'Mengangkat beban berat dengan otot tungkai/betis bukan pinggang',
      'Posisi tiarap (low angle/makro) dan bersandar (fotografi tanpa tripod)'
    ],
    summary: 'Mempelajari K3 pada aktivitas produksi lapangan: merekam video dengan following shot, memotret low angle dengan posisi tiarap, dan teknik mengangkat perlengkapan lighting berat tanpa cedera pinggang.',
    glossaryTerms: [
      { term: 'Following Shot', definition: 'Teknik pengambilan video dengan kamera berjalan mengikuti pergerakan subjek.' },
      { term: 'Kaki Pivot', definition: 'Kaki yang menjadi tumpuan putaran saat berbalik arah ketika berjalan mundur merekam video.' }
    ],
    simulationId: 'k3',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Teknik Berdiri, Berjalan Mundur (Following Shot), dan Kaki Pivot',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami dan mempraktikkan teknik langkah aman saat merekam video dinamis'],
        triggerQuestion: 'Bagaimana cara seorang juru kamera merekam objek berjalan mundur tanpa risiko tersandung atau jatuh?',
        activities: {
          pendahuluan: ['Doa bersama', 'Pengenalan bahaya tersandung pada kabel dan medan outdoor'],
          inti: ['Menganalisis Gambar 2.8: Kaki kanan sebagai pivot berbalik arah saat following shot', 'Simulasi berjalan stabil membawa mock kamera di selasar sekolah'],
          penutup: ['Refleksi keseimbangan tubuh', 'Evaluasi postur']
        },
        deepLearning5C: {
          criticalThinking: 'Mengantisipasi rintangan lintasan kamera sebelum shooting dimulai',
          creativity: 'Menemukan rute gerak kamera yang mulus dan aman',
          collaboration: 'Praktik berpasangan: satu juru kamera dan satu spotter (pemandu jalan)',
          communication: 'Instruksi aba-aba yang jelas antara sutradara, kamerawan, dan spotter',
          connectionToRealLife: 'Standar keselamatan kru produksi video dan dokumentasi acara sekolah'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'K3 Mengangkat Beban Peralatan & Posisi Tiarap / Bersandar',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu mengangkat alat berat dengan otot tungkai dan menjaga keselamatan posisi pemotretan ekstrim'],
        triggerQuestion: 'Mengapa mengangkat boks proyektor atau lampu studio dengan membungkukkan badan sangat berbahaya bagi tulang punggung?',
        activities: {
          pendahuluan: ['Review kaki pivot', 'Pemanasan fisik ringan'],
          inti: ['Praktik mengangkat beban dengan berjongkok menggunakan kekuatan paha/betis (Gambar 2.9)', 'Praktik posisi tiarap di alas matras untuk foto sudut rendah (Gambar 2.4 & hlm. 27)'],
          penutup: ['Pemeriksaan keselamatan', 'Pengisian LKPD K3 Posisi Khusus']
        },
        deepLearning5C: {
          criticalThinking: 'Memahami biomekanika beban tulang belakang saat mengangkat peralatan',
          creativity: 'Memilih sudut bidik menarik tanpa mengorbankan keselamatan diri',
          collaboration: 'Gotong royong mengangkat alat studio berbobot berat secara tim',
          communication: 'Melaporkan potensi bahaya medan kerja kepada pembimbing',
          connectionToRealLife: 'Budaya kerja industri perfilman dan fotografi profesional'
        }
      }
    ],
    quiz: {
      id: 'quiz-w6',
      title: 'Kuis Formatif Minggu 6: K3 Posisi Kerja Lapangan',
      questions: [
        {
          id: 'q1',
          question: 'Bagian otot manakah yang harus digunakan sebagai tumpuan utama saat mengangkat peralatan studio yang berat?',
          options: ['Otot pinggang', 'Otot punggung', 'Otot tungkai/paha dan betis dengan posisi awal jongkok', 'Otot leher'],
          correctIndex: 2,
          explanation: 'Buku Semester 1 Bab 2 hlm. 26-27 menegaskan mengangkat beban harus dengan kekuatan otot tungkai/betis dari posisi jongkok, bukan membungkukkan punggung.'
        }
      ]
    }
  },
  {
    week: 7,
    semester: 1,
    babNumber: 2,
    babTitle: 'Keutamaan Keselamatan dan Kesehatan Kerja (K3)',
    topic: 'Alat Pelindung Diri (APD), Perawatan Alat Gambar, Fotografi, Komputer, & Hak Cipta',
    sourceReference: 'Buku Semester 1 Bab 2 hlm. 28-44',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman K3 individu minggu ke 5 & 6',
    coreConcepts: [
      'APD DKV: Pelindung kepala (proyek), kacamata anti-UV, masker zat kimia, sarung tangan panas/sablon, sepatu sol karet',
      'Perawatan alat gambar: pensil tidak boleh jatuh, kuas disimpan vertikal bulu ke atas',
      'Perawatan kamera: larangan menyentuh tirai shutter dan kaca lensa, dry box antilembap, hindari kapur barus',
      'Komputer: UPS/stabilisator, shutdown benar (bukan sleep/hibernate paksa)',
      'Keselamatan hasil kerja: Hak Cipta, backup cloud & offline'
    ],
    summary: 'Mempelajari proteksi menyeluruh dalam DKV: APD pekerja, SOP perawatan perangkat (kamera, lensa, kuas, komputer), dan perlindungan hak cipta atas karya visual.',
    glossaryTerms: [
      { term: 'Dry Box', definition: 'Lemari penyimpanan khusus berkontrol kelembapan dengan lampu penghangat untuk mencegah jamur pada lensa dan sensor kamera.' },
      { term: 'Hak Cipta', definition: 'Hak eksklusif pencipta yang timbul secara otomatis atas perwujudan karya visual yang orisinal.' }
    ],
    simulationId: 'k3',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Alat Pelindung Diri & Perawatan Peralatan Manual (Pensil, Kuas, Kertas)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami fungsi APD dan merawat perlengkapan gambar manual'],
        triggerQuestion: 'Mengapa kuas yang telah dicuci harus disimpan dengan posisi bulu menghadap ke atas?',
        activities: {
          pendahuluan: ['Doa bersama', 'Observasi kotak peralatan gambar siswa'],
          inti: ['Pembedahan APD kerja sablon dan cetak mug bersuhu tinggi', 'SOP penyimpanan kuas (Gambar 2.12) dan pencegahan patah grafit dalam pensil (hlm. 32-34)'],
          penutup: ['Praktik mencuci kuas dengan air sabun (bukan thinner perusak bulu)', 'Refleksi perawatan inventaris']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis dampak zat pelarut kimia keras terhadap kualitas bulu kuas',
          creativity: 'Membuat wadah pensil ergonomis dari bahan daur ulang (program Adiwiyata)',
          collaboration: 'Piket kebersihan dan inventarisasi alat lab studio',
          communication: 'Menyampaikan prosedur perawatan peralatan seni',
          connectionToRealLife: 'Penghematan biaya alat gambar melalui perawatan yang benar'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Perawatan Kamera DSLR, Komputer Grafis, dan Perlindungan Hak Cipta',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu merawat kamera digital, sistem komputer, serta memahami hak cipta karya'],
        triggerQuestion: 'Apa dampak buruk residu kapur barus jika diletakkan di dalam tas kamera?',
        activities: {
          pendahuluan: ['Review alat manual', 'Kuis kilat K3'],
          inti: ['Simulasi K3 Laboratorium: Menghindarkan lensa dari sentuhan jari dan sinar matahari langsung', 'Prosedur mematikan komputer dengan shutdown teratur', 'Diskusi perlindungan hak cipta dan pencegahan pembajakan visual'],
          penutup: ['Uji kompetensi Bab 2 K3', 'Refleksi komitmen budaya K3']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai risiko hukum dan etika mengambil aset visual sembarangan dari internet',
          creativity: 'Mencari sumber aset bebas lisensi (Creative Commons/Clip Art terverifikasi)',
          collaboration: 'Audit keselamatan instalasi listrik di lab komputer bersama guru',
          communication: 'Membuat deklarasi integritas orisinalitas karya',
          connectionToRealLife: 'Kepatuhan terhadap UU Hak Cipta dan pencegahan kerusakan laptop/kamera pribadi'
        }
      }
    ],
    quiz: {
      id: 'quiz-w7',
      title: 'Uji Kompetensi Bab 2: Keutamaan K3 DKV',
      questions: [
        {
          id: 'q1',
          question: 'Mengapa kita dilarang menyentuh bagian tirai shutter speed dan kaca lensa kamera DSLR dengan jari tangan secara langsung?',
          options: [
            'Dapat merusak keakuratan rana dan meninggalkan bekas lemak kulit pada lapisan coating lensa',
            'Kamera akan langsung meledak',
            'Warna bodi kamera akan berubah menjadi pudar',
            'Kartu memori akan langsung terformat'
          ],
          correctIndex: 0,
          explanation: 'Buku Semester 1 Bab 2 hlm. 36 menegaskan sentuhan jari dapat merusak tirai shutter dan meninggalkan minyak lemak pada coating kaca lensa.'
        }
      ]
    }
  },
  {
    week: 8,
    semester: 1,
    babNumber: 3,
    babTitle: 'Perkembangan Teknologi Industri dan Dunia Kerja Bidang DKV',
    topic: 'Perkembangan Proses Produksi Industri Kreatif dan Sejarah Revolusi Industri 1.0 - 4.0',
    sourceReference: 'Buku Semester 1 Bab 3 hlm. 51-56',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman pengantar DKV semester 1',
    coreConcepts: [
      'Empat gelombang revolusi industri: 1.0 (uap 1784), 2.0 (listrik 1870), 3.0 (komputer 1969), 4.0 (siber/IoT)',
      'Subsektor ekonomi kreatif menurut John Howkins (14 subsektor)',
      'Pergeseran dari seni terapan (applied art) -> desain grafis -> DKV'
    ],
    summary: 'Menelusuri sejarah perkembangan revolusi industri dari tenaga uap hingga era siber, serta evolusi desain dari seni terapan cetak menjadi Desain Komunikasi Visual multikanal.',
    glossaryTerms: [
      { term: 'Industri 4.0', definition: 'Era integrasi siber-fisik, Internet of Things (IoT), kecerdasan komputasi, dan jaringan data cepat dalam proses produksi.' },
      { term: 'Applied Art', definition: 'Seni terapan yang mengutamakan fungsi praktis pemakaian dalam kehidupan sehari-hari selain nilai estetik.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Sejarah Revolusi Industri 1.0 hingga 4.0 dalam Desain',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Menguraikan tonggak sejarah revolusi industri dan dampaknya pada media visual'],
        triggerQuestion: 'Bagaimana penemuan mesin cetak dan komputer mengubah cara manusia berkomunikasi?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menampilkan infografis linimasa industri (Gambar 3.1)'],
          inti: ['Analisis evolusi tenaga uap -> listrik massal -> komputer mikro -> IoT siber', 'Diskusi bagaimana istilah "Desain Grafis" lahir pada era revolusi industri Eropa'],
          penutup: ['Refleksi zaman', 'Kuis kilat linimasa sejarah']
        },
        deepLearning5C: {
          criticalThinking: 'Menghubungkan penemuan teknologi dengan lonjakan produksi materi visual',
          creativity: 'Membuat linimasa visual sederhana perkembangan teknologi cetak',
          collaboration: 'Diskusi kelompok',
          communication: 'Presentasi hasil analisis revolusi industri',
          connectionToRealLife: 'Penggunaan perangkat modern siswa di abad 21'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Subsektor Ekonomi Kreatif & Peran Strategis DKV',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mengidentifikasi kontribusi DKV dalam 14 subsektor ekonomi kreatif'],
        triggerQuestion: 'Mengapa bidang DKV menjadi motor penggerak bagi subsektor arsitektur, fashion, kuliner, dan game?',
        activities: {
          pendahuluan: ['Review sesi Senin', 'Peta konsep subsektor Howkins'],
          inti: ['Analisis peran DKV sebagai jembatan komunikasi visual produk', 'Pembedahan studi kasus branding kuliner dan pariwisata Jawa Barat'],
          penutup: ['Pembuatan ringkasan visual', 'Refleksi kontribusi profesi']
        },
        deepLearning5C: {
          criticalThinking: 'Mengevaluasi mengapa desain kemasan yang baik mampu menaikkan harga jual produk lokal',
          creativity: 'Merumuskan ide kampanye visual produk UMKM',
          collaboration: 'Kerja kelompok memetakan subsektor kreatif di Kabupaten Kuningan',
          communication: 'Menyampaikan hasil pemetaan potensi daerah',
          connectionToRealLife: 'Pengembangan potensi ekonomi kreatif lokal Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w8',
      title: 'Kuis Formatif Minggu 8: Revolusi Industri & DKV',
      questions: [
        {
          id: 'q1',
          question: 'Revolusi Industri 1.0 yang dimulai sekitar tahun 1784 ditandai dengan ditemukannya...',
          options: ['Internet of Things dan sistem siber', 'Mekanisasi dan tenaga uap', 'Komputer mikro dan elektronika', 'Produksi massal jalur perakitan listrik'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 3 Gambar 3.1 hlm. 54 menyatakan Industri 1.0 (1784) dicirikan oleh mekanisasi dan tenaga uap.'
        }
      ]
    }
  },
  {
    week: 9,
    semester: 1,
    babNumber: 3,
    babTitle: 'Perkembangan Teknologi Industri dan Dunia Kerja Bidang DKV',
    topic: 'Teknologi Digital dalam Industri DKV: Dari CTF, CTP, hingga Mesin Cetak Terkini',
    sourceReference: 'Buku Semester 1 Bab 3 hlm. 57-61',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman sejarah industri minggu ke-8',
    coreConcepts: [
      'Peralihan manual ke digital: kuas/airbrush -> digitizer pen tablet',
      'Evolusi pra-cetak: Pembuatan film manual -> Computer to Film (CTF) -> Computer to Plate (CTP)',
      'Mesin cetak digital modern: flatbed printer, image plotter, DTF (Direct to Film), DTG (Direct to Garment)'
    ],
    summary: 'Mempelajari transformasi alat produksi DKV: dari reproduksi film ofset analog menjadi alur digital CTP, mesin cetak kain DTF/DTG, serta digitizer tablet untuk ilustrasi presisi.',
    glossaryTerms: [
      { term: 'Computer to Plate (CTP)', definition: 'Teknologi pra-cetak modern di mana data digital komputer langsung diekspos ke pelat cetak ofset tanpa melalui media film.' },
      { term: 'Digitizer', definition: 'Papan peranti masukan gambar digital dengan pena khusus (stylus pen) untuk melukis dengan akurasi dan sensitivitas tekanan tinggi.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Transformasi Teknologi Pra-Cetak: Dari Film Manual ke CTP',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami alur reproduksi grafis dari ofset konvensional hingga CTP modern'],
        triggerQuestion: 'Mengapa teknologi Computer to Plate (CTP) jauh lebih cepat dan ramah lingkungan dibanding sistem pemisahan film manual?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menampilkan contoh pelat seng cetak ofset dan film separasi'],
          inti: ['Pembedahan tahapan separasi warna CMYK pada ofset tradisional', 'Analisis efisiensi alur CTP yang memangkas montase film manual (hlm. 59)'],
          penutup: ['Refleksi efisiensi kerja', 'Latihan membuat diagram alur']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung penghematan waktu dan bahan pada alur kerja CTP vs film',
          creativity: 'Membuat bagan alur produksi cetak yang mudah dipahami orang awam',
          collaboration: 'Diskusi kelompok',
          communication: 'Mempresentasikan alur kerja percetakan komersial',
          connectionToRealLife: 'Kunjungan virtual atau observasi percetakan di sekitar Kuningan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Teknologi Sablon Modern DTF, DTG, & Penggunaan Digitizer',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menjelaskan keunggulan teknologi sablon digital DTF/DTG dan penggunaan digitizer'],
        triggerQuestion: 'Mengapa sablon DTF (Direct to Film) sangat populer di kalangan wirausaha clothing muda saat ini?',
        activities: {
          pendahuluan: ['Review sesi CTP', 'Pengenalan contoh hasil sablon DTF dan manual'],
          inti: ['Mempelajari teknologi cetak tinta pigmen tekstil dan bubuk lem perekat DTF', 'Praktik eksplorasi menggambar dengan pena digital / digitizer di lab (Gambar 3.6)'],
          penutup: ['Evaluasi hasil gambar digitizer', 'Refleksi kenyamanan stylus pen']
        },
        deepLearning5C: {
          criticalThinking: 'Membandingkan biaya produksi sablon manual lusinan vs sablon digital satuan (DTF/DTG)',
          creativity: 'Mendesain artwork kaos sederhana dengan digitizer',
          collaboration: 'Saling mencoba dan mengevaluasi tekanan pena tablet',
          communication: 'Mendiskusikan kelebihan fleksibilitas kerja digital',
          connectionToRealLife: 'Peluang usaha print-on-demand merchandise di sekolah'
        }
      }
    ],
    quiz: {
      id: 'quiz-w9',
      title: 'Kuis Formatif Minggu 9: Teknologi Digital Industri DKV',
      questions: [
        {
          id: 'q1',
          question: 'Teknologi pra-cetak yang langsung mentransfer data desain dari komputer ke pelat cetak tanpa melalui film dan platemaker adalah...',
          options: ['Computer to Film (CTF)', 'Computer to Plate (CTP)', 'Direct to Garment (DTG)', 'Screen Printing'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 3 hlm. 59-60 menerangkan bahwa Computer to Plate (CTP) langsung mentransfer hasil desain ke pelat cetak tanpa melalui platemaker.'
        }
      ]
    }
  },
  {
    week: 10,
    semester: 1,
    babNumber: 3,
    babTitle: 'Perkembangan Teknologi Industri dan Dunia Kerja Bidang DKV',
    topic: 'Media Baru, Metaverse, NFT, AR/VR, dan Teknologi Layar Luar Ruang (Videotron)',
    sourceReference: 'Buku Semester 1 Bab 3 hlm. 56 & 61-64',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman teknologi digital minggu ke-9',
    coreConcepts: [
      'New Media: penyampaian informasi digital real-time melalui internet dan cloud',
      'Metaverse, Non-Fungible Token (NFT), Virtual Reality (VR), Augmented Reality (AR)',
      'Media luar ruang modern: Videotron 3D anamorphic vs baliho statis konvensional'
    ],
    summary: 'Mengeksplorasi ruang media kontemporer: aset digital NFT, realitas tertambah (AR), realitas virtual (VR), serta visual 3D ilusi anamorphic pada videotron perkotaan.',
    glossaryTerms: [
      { term: 'New Media', definition: 'Media komunikasi interaktif berbasis teknologi digital komputer dan internet.' },
      { term: 'Anamorphic 3D', definition: 'Metode ilusi optik proyeksi visual yang menciptakan efek kedalaman 3 dimensi nyata saat dilihat dari sudut pandang tertentu.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Eksplorasi Media Baru & Aset Digital (NFT, AR, VR)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami karakteristik new media dan teknologi imersif visual'],
        triggerQuestion: 'Bagaimana teknologi Augmented Reality (AR) dapat membuat poster kemasan menjadi hidup di layar smartphone?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menonton demonstrasi poster berteknologi AR'],
          inti: ['Diskusi interaktif konsep new media vs media cetak lama', 'Pembedahan konsep ruang virtual 3D dan kepemilikan aset digital kreatif'],
          penutup: ['Refleksi etika digital', 'Formatif pemahaman media baru']
        },
        deepLearning5C: {
          criticalThinking: 'Menilai keberlanjutan tren aset digital di era metaverse',
          creativity: 'Menggagas konsep pameran karya virtual 3D untuk siswa DKV',
          collaboration: 'Brainstorming kelompok',
          communication: 'Mempresentasikan ide integrasi AR pada poster sekolah',
          connectionToRealLife: 'Penerapan AR untuk media pembelajaran interaktif'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Media Iklan Luar Ruang: Dari Baliho Konvensional ke Videotron Anamorphic 3D',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menganalisis efektivitas videotron dibanding media luar ruang konvensional'],
        triggerQuestion: 'Mengapa videotron 3D raksasa di persimpangan jalan mampu memikat ribuan pejalan kaki?',
        activities: {
          pendahuluan: ['Review sesi Senin', 'Membedah Gambar 3.8: Videotron konten 3D metode anamorphic'],
          inti: ['Analisis prinsip visual anamorphic (distorsi sudut pandang yang menghasilkan ilusi timbul)', 'Praktik membuat rancangan storyboard iklan videotron 10 detik'],
          penutup: ['Penilaian mandiri', 'Penyimpanan hasil kerja ke portofolio']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis sudut pandang audiens (viewing angle) saat menikmati videotron',
          creativity: 'Menciptakan efek visual seolah-olah objek keluar dari bingkai layar',
          collaboration: 'Diskusi tim',
          communication: 'Pitching ide konten videotron',
          connectionToRealLife: 'Pengembangan media informasi publik di pusat Kota Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w10',
      title: 'Kuis Formatif Minggu 10: New Media & Videotron',
      questions: [
        {
          id: 'q1',
          question: 'Metode pembuatan konten video 3 dimensi yang menciptakan ilusi optik objek seolah-olah keluar dari layar videotron disebut metode...',
          options: ['Anamorphic', 'Isometrik', 'Orthogonal', 'Monokrom'],
          correctIndex: 0,
          explanation: 'Buku Semester 1 Bab 3 Gambar 3.8 hlm. 61 menjelaskan metode 3D anamorphic pada konten videotron.'
        }
      ]
    }
  },
  {
    week: 11,
    semester: 1,
    babNumber: 3,
    babTitle: 'Perkembangan Teknologi Industri dan Dunia Kerja Bidang DKV',
    topic: 'Penerapan DKV pada Industri Sektor Lain & Konsep Industri Hijau (Green Industry)',
    sourceReference: 'Buku Semester 1 Bab 3 hlm. 64-70',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman alur produksi industri minggu ke-8 sampai 10',
    coreConcepts: [
      'Penerapan DKV pada: penerbitan, arsitektur (EGD), musik, pameran seni budaya, riset & pengembangan',
      'Environmental Graphic Design (EGD): signage sistem penanda ruangan dan wayfinding',
      'Siklus industri: Praproduksi, Produksi, Pascaproduksi',
      'Konsep Industri Hijau: efisiensi energi, pencegahan polusi, pemanfaatan bahan terbarukan, prinsip 3R (Reduce, Reuse, Recycle)'
    ],
    summary: 'Mengkaji integrasi DKV pada tata ruang lingkungan (EGD) dan memegang teguh komitmen Industri Hijau untuk mereduksi limbah produksi cetak dan zat kimia berbahaya.',
    glossaryTerms: [
      { term: 'Environmental Graphic Design (EGD)', definition: 'Disiplin desain komunikasi visual yang merancang sistem penanda (signage), grafis lingkungan, dan informasi tata ruang.' },
      { term: 'Industri Hijau', definition: 'Industri yang dalam proses produksinya mengutamakan efisiensi pemakaian sumber daya secara berkelanjutan serta ramah lingkungan.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Environmental Graphic Design (EGD) & Wayfinding Sekolah',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami peran DKV dalam merancang identitas lingkungan arsitektur dan penanda ruangan'],
        triggerQuestion: 'Bagaimana desain papan penunjuk arah yang baik membantu orang pertama kali berkunjung ke SMKN 3 Kuningan menemukan ruang tata usaha?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 3.12: Desain EGD SMKN 15 Bandung gaya art deco'],
          inti: ['Survei lapangan di lingkungan sekolah: Identifikasi kebutuhan papan penanda ruang (signage)', 'Prinsip keterbacaan (legibility) dan kontras warna pada sistem penanda ruang publik'],
          penutup: ['Rangkuman hasil observasi', 'Refleksi kenyamanan navigasi ruang']
        },
        deepLearning5C: {
          criticalThinking: 'Mengevaluasi titik-titik krusial penempatan informasi penunjuk arah di sekolah',
          creativity: 'Merancang piktogram penanda ruang dengan kearifan lokal Sunda/Kuningan',
          collaboration: 'Kerja kelompok pemetaan denah sekolah',
          communication: 'Mempresentasikan sketsa desain sistem penanda ruang',
          connectionToRealLife: 'Integrasi program Gapura Pancawaluya dan penataan ramah lingkungan sekolah'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Konsep Industri Hijau & Pengelolaan Limbah DKV (Program Adiwiyata)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Menerapkan prinsip industri hijau dan 3R pada siklus praproduksi, produksi, dan pascaproduksi DKV'],
        triggerQuestion: 'Apa yang bisa kita perbuat terhadap potongan sisa kertas art paper dan kaleng tinta bekas di lab DKV agar tidak mencemari lingkungan?',
        activities: {
          pendahuluan: ['Review EGD', 'Apersepsi kepedulian lingkungan (Gerakan Indonesia ASRI & Adiwiyata)'],
          inti: ['Menganalisis Gambar 3.17: Alur konsep pola pikir industri hijau', 'Praktik memilah limbah kertas cetak untuk bahan uji coba (dumi kemasan) dan daur ulang (kertas samson)', 'Uji kompetensi Bab 3 Perkembangan Industri'],
          penutup: ['Refleksi komitmen desainer ramah lingkungan', 'Dokumentasi supervisi']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung jejak karbon dan volume limbah cetak dalam satu siklus produksi',
          creativity: 'Mengubah limbah kardus/kertas sisa menjadi prototype karya seni bermanfaat',
          collaboration: 'Aksi bersih lab dan pemilahan limbah anorganik bersama seluruh kelas',
          communication: 'Menyusun ikrar desainer muda peduli kelestarian bumi',
          connectionToRealLife: 'Mendukung status sekolah Adiwiyata di SMKN 3 Kuningan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w11',
      title: 'Uji Kompetensi Bab 3: Perkembangan Industri & Industri Hijau',
      questions: [
        {
          id: 'q1',
          question: 'Komunikasi grafis mengenai sebuah informasi yang ditemukan dalam suatu lingkungan arsitektur seperti sistem penanda dan denah ruangan disebut...',
          options: ['Web Design', 'Environmental Graphic Design (EGD)', 'Motion Graphic', 'Non-Fungible Token'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 3 hlm. 65 & 146 mendefinisikan Environmental Graphic Design (EGD) sebagai komunikasi grafis penanda dalam suatu lingkungan.'
        }
      ]
    }
  },
  {
    week: 12,
    semester: 1,
    babNumber: 4,
    babTitle: 'Teknik Dasar Proses Produksi pada Industri DKV',
    topic: 'Pengantar Kreativitas, Gagasan Inovatif, & Sejarah Johannes Gutenberg',
    sourceReference: 'Buku Semester 1 Bab 4 hlm. 75-80',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman sejarah perancangan visual',
    coreConcepts: [
      'Konsep kreativitas: ide untuk menjawab perumusan masalah sosial/ekonomi',
      'Sejarah mesin cetak huruf timah Johannes Gutenberg (1450 M) di Mainz Jerman',
      'Hierarki ide: Kreatif -> Inventif -> Inovatif (Gambar 4.1)',
      'Perbedaan Invensi (temuan baru) vs Inovasi (temuan baru yang bernilai guna dan diadopsi luas)'
    ],
    summary: 'Menyelami hakikat kreativitas sebagai proses pemecahan masalah manusia. Mengambil keteladanan dari Johannes Gutenberg yang menggabungkan keahlian emasnya menjadi teknologi cetak timah pertama.',
    glossaryTerms: [
      { term: 'Invensi', definition: 'Penemuan sesuatu yang benar-benar baru dan belum pernah ada sebelumnya.' },
      { term: 'Inovasi', definition: 'Pembaruan invensi yang telah terbukti memberikan manfaat nyata, nilai tambah, dan diadopsi oleh masyarakat luas.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Konsep Kreativitas & Keteladanan Johannes Gutenberg (1450 M)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami hakikat kreativitas sistematis dalam memecahkan masalah nyata manusia'],
        triggerQuestion: 'Bagaimana masalah lambatnya penulisan naskah tangan di Abad Pertengahan melahirkan ide kreatif mesin cetak logam?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menayangkan cuplikan sejarah pencetakan Alkitab Gutenberg'],
          inti: ['Menganalisis latar belakang masalah, eksplorasi, dan penemuan cetak timah bergerak Gutenberg', 'Diskusi mendalam: Membedakan ide kreatif mentah dengan realisasi inovasi'],
          penutup: ['Refleksi kegigihan berinovasi', 'Formatif pemahaman konsep']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis mengapa ide membutuhkan langkah-langkah sistematis agar menjadi kenyataan',
          creativity: 'Merumuskan 3 masalah di sekitar sekolah yang membutuhkan solusi desain grafis',
          collaboration: 'Diskusi kelompok',
          communication: 'Menyampaikan gagasan solusi masalah',
          connectionToRealLife: 'Mengembangkan pola pikir solutif bagi tantangan sehari-hari'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Membedah Siklus: Ide Kreatif, Inventif, hingga Inovatif',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu memetakan perbedaan ide kreatif, invensi, dan inovasi pada produk modern'],
        triggerQuestion: 'Mengapa aplikasi ojek online disebut sebagai inovasi, padahal moda transportasi ojek sudah ada sejak dulu?',
        activities: {
          pendahuluan: ['Review sesi Gutenberg', 'Membedah Gambar 4.6: Ojek Pangkalan vs Ojek Online'],
          inti: ['Analisis integrasi teknologi GPS, aplikasi mobile, dan identitas visual dalam transformasi ojek online', 'Praktik kelompok merancang modifikasi kreatif produk makanan tradisional menjadi kemasan inovatif'],
          penutup: ['Presentasi singkat ide inovasi', 'Refleksi nilai tambah ekonomis']
        },
        deepLearning5C: {
          criticalThinking: 'Membedah faktor apa yang membuat suatu aplikasi digital diadopsi jutaan pengguna',
          creativity: 'Menciptakan ide kemasan baru untuk produk tradisional yang sudah ada',
          collaboration: 'Kerja tim perumusan ide',
          communication: 'Pitching ide inovatif di depan kelas',
          connectionToRealLife: 'Mendorong jiwa technopreneurship berbasis kearifan lokal'
        }
      }
    ],
    quiz: {
      id: 'quiz-w12',
      title: 'Kuis Formatif Minggu 12: Konsep Kreativitas & Inovasi',
      questions: [
        {
          id: 'q1',
          question: 'Johannes Gutenberg menemukan mesin cetak huruf timah bergerak pada sekitar tahun...',
          options: ['114 M', '1450 M', '1816 M', '1987 M'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 4 hlm. 77-78 mencatat Gutenberg menemukan mesin cetak press huruf logam timah pada tahun 1450 M.'
        }
      ]
    }
  },
  {
    week: 13,
    semester: 1,
    babNumber: 4,
    babTitle: 'Teknik Dasar Proses Produksi pada Industri DKV',
    topic: 'Tahapan Berpikir Kreatif (Persiapan, Inkubasi, Iluminasi, Verifikasi Menurut Wallas)',
    sourceReference: 'Buku Semester 1 Bab 4 hlm. 80-84',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman konsep dasar kreativitas minggu ke-12',
    coreConcepts: [
      'Empat tahap berpikir kreatif menurut Wallas (Hawadi, 2004):',
      '1. Tahap Persiapan (pengumpulan data, riset masalah, perumusan)',
      '2. Tahap Inkubasi (menghentikan sementara, pengendapan ide di alam bawah sadar)',
      '3. Tahap Iluminasi (momen "Eureka!" pencerahan solusi kreatif)',
      '4. Tahap Verifikasi (pengujian, pengukuran, dan evaluasi hasil temuan)'
    ],
    summary: 'Memahami proses mental berpikir kreatif menurut Graham Wallas. Belajar bahwa ide gemilang tidak lahir tiba-tiba tanpa riset persiapan mendalam dan fase pengendapan (inkubasi).',
    glossaryTerms: [
      { term: 'Inkubasi', definition: 'Tahap penghentian sadar sejenak dari pemecahan masalah guna menyegarkan pikiran dan membiarkan alam bawah sadar memproses gagasan.' },
      { term: 'Iluminasi', definition: 'Fase pencerahan ("Eureka!") saat gagasan solusi kreatif muncul secara terang benderang.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mendalami 4 Tahapan Berpikir Kreatif Graham Wallas',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Memahami dan mengidentifikasi tahapan persiapan, inkubasi, iluminasi, dan verifikasi'],
        triggerQuestion: 'Mengapa ide terbaik seringkali muncul saat kita sedang mandi, berolahraga, atau berjalan santai?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menelaah Gambar 4.2 tangga berpikir kreatif'],
          inti: ['Pembedahan studi kasus Archimedes dan desainer logo profesional', 'Simulasi tahap persiapan: riset brief desain kemasan minuman herbal lokal'],
          penutup: ['Refleksi proses berpikir', 'Latihan identifikasi tahapan']
        },
        deepLearning5C: {
          criticalThinking: 'Menyadari bahwa kebuntuan ide (creative block) wajar dan dapat diatasi dengan fase inkubasi',
          creativity: 'Menghasilkan mind-map eksplorasi ide pada tahap persiapan',
          collaboration: 'Diskusi kelompok',
          communication: 'Menceritakan momen "Eureka" pribadi masing-masing siswa',
          connectionToRealLife: 'Membangun kebiasaan riset sebelum mulai menggambar desain'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Praktik Tahap Verifikasi: Menguji Kelayakan Ide Desain',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu melakukan verifikasi dan penyempurnaan atas ide desain yang ditemukan'],
        triggerQuestion: 'Kriteria apa saja yang membuktikan bahwa rancangan desain kita benar-benar menjawab kebutuhan klien?',
        activities: {
          pendahuluan: ['Review 4 tahap Wallas', 'Menyiapkan hasil temuan persiapan'],
          inti: ['Praktik tahap verifikasi: Menguji ukuran kemasan, keterbacaan teks, dan efisiensi bahan', 'Memberikan catatan perbaikan atas draf desain kelompok lain'],
          penutup: ['Pengunggahan hasil verifikasi', 'Refleksi siklus berpikir']
        },
        deepLearning5C: {
          criticalThinking: 'Menguji kekuatan struktural dan ergonomi lipatan kemasan',
          creativity: 'Menyempurnakan detail estetis berdasarkan umpan balik pengujian',
          collaboration: 'Peer-testing antar-anggota kelompok',
          communication: 'Menyampaikan saran perbaikan secara konstruktif dan santun',
          connectionToRealLife: 'Standar kontrol kualitas dalam industri grafis komersial'
        }
      }
    ],
    quiz: {
      id: 'quiz-w13',
      title: 'Kuis Formatif Minggu 13: 4 Tahap Berpikir Kreatif Wallas',
      questions: [
        {
          id: 'q1',
          question: 'Tahap ketika seseorang menghentikan sejenak pemecahan masalah untuk menyegarkan pikiran kembali, sehingga alam bawah sadar bekerja memunculkan gagasan, disebut tahap...',
          options: ['Persiapan', 'Inkubasi', 'Iluminasi', 'Verifikasi'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 4 hlm. 80-81 menjelaskan tahap inkubasi sebagai penghentian sejenak dari pemecahan masalah.'
        }
      ]
    }
  },
  {
    week: 14,
    semester: 1,
    babNumber: 4,
    babTitle: 'Teknik Dasar Proses Produksi pada Industri DKV',
    topic: 'Budaya Kerja Desainer: What to Say, Who to Say, & How to Say',
    sourceReference: 'Buku Semester 1 Bab 4 hlm. 85-92',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman tahapan berpikir kreatif minggu ke-13',
    coreConcepts: [
      'Pesan visual yang efektif harus memetakan:',
      '1. What to say: isi pesan (ajakan, perintah, larangan, imbauan, informasi)',
      '2. Who to say: analisis khalayak (demografis usia/pendidikan, geografis wilayah, behavior perilaku)',
      '3. How to say: cara penyampaian (media cetak konvensional vs media digital nonkonvensional)',
      'Budaya kerja profesional desainer: kepatuhan deadline, riset audiens, komunikasi klien'
    ],
    summary: 'Mempelajari pilar strategi komunikasi visual: merumuskan pesan pokok (what to say), membedah segmen audiens (who to say), dan memilih saluran media yang paling berdampak (how to say).',
    glossaryTerms: [
      { term: 'What to Say', definition: 'Pesan inti atau amanat pokok yang ingin disampaikan oleh pengiklan kepada khalayak sasaran.' },
      { term: 'Who to Say', definition: 'Profil target khalayak yang dituju ditinjau dari faktor demografis, geografis, dan psikografis/perilaku.' },
      { term: 'How to Say', definition: 'Strategi pemilihan gaya bahasa visual, nada komunikasi, dan media saluran publikasi.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Merumuskan What to Say & Membedah Audiens (Who to Say)',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu merumuskan pesan inti dan menganalisis demografis serta perilaku khalayak'],
        triggerQuestion: 'Mengapa poster promosi untuk remaja sekolah membutuhkan warna dan gaya bahasa yang berbeda dibanding poster untuk orang tua lanjut usia?',
        activities: {
          pendahuluan: ['Doa bersama', 'Analisis komparatif 2 poster berbeda target audiens'],
          inti: ['Pembedahan teori target audiens (demografis, geografis, behavioral)', 'Studi kasus kampanye hemat air sekolah: Menentukan what to say dan target spesifiknya'],
          penutup: ['Refleksi empati desain', 'Formatif pemetaan audiens']
        },
        deepLearning5C: {
          criticalThinking: 'Menghubungkan karakteristik psikologis target audiens dengan pemilihan elemen visual',
          creativity: 'Menuliskan slogan singkat padat yang menggelitik (copywriting kreatif)',
          collaboration: 'Diskusi kelompok',
          communication: 'Menyampaikan profil persona pengguna yang dituju',
          connectionToRealLife: 'Memahami kebutuhan komunikasi warga sekolah SMKN 3 Kuningan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Strategi Pemilihan Saluran Media (How to Say) & Budaya Kerja Tim',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu memilih saluran media yang tepat dan menyimulasikan budaya kerja tim DKV'],
        triggerQuestion: 'Kapan kita harus memilih media cetak brosur, dan kapan lebih efektif menggunakan feed Instagram atau videotron?',
        activities: {
          pendahuluan: ['Review what & who to say', 'Ice breaking budaya kerja 5S'],
          inti: ['Simulasi penentuan matriks media untuk promosi pentas seni sekolah', 'Penerapan etika profesional dan manajemen tenggat waktu (deadline)', 'Uji kompetensi Bab 4'],
          penutup: ['Penyusunan rekap proyek', 'Refleksi kepemimpinan tim']
        },
        deepLearning5C: {
          criticalThinking: 'Mengevaluasi anggaran dan jangkauan efektivitas media cetak vs media sosial',
          creativity: 'Mengombinasikan media cetak QR Code dengan tautan media sosial interaktif',
          collaboration: 'Kerja tim profesional dengan pembagian peran terstruktur',
          communication: 'Pitching strategi kampanye visual terpadu',
          connectionToRealLife: 'Kesiapan memasuki budaya kerja magang industri (PKL)'
        }
      }
    ],
    quiz: {
      id: 'quiz-w14',
      title: 'Uji Kompetensi Bab 4: Proses Produksi & Budaya Kerja DKV',
      questions: [
        {
          id: 'q1',
          question: 'Dalam strategi komunikasi visual, klasifikasi target sasaran berdasarkan usia, tingkat pendidikan, dan kondisi ekonomi termasuk dalam kategori...',
          options: ['What to say', 'Who to say secara demografis', 'Who to say secara geografis', 'How to say'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 4 hlm. 86 menerangkan usia, pendidikan, dan tingkat ekonomi merupakan aspek demografis dari Who to say.'
        }
      ]
    }
  },
  {
    week: 15,
    semester: 1,
    babNumber: 4,
    babTitle: 'Teknik Dasar Proses Produksi pada Industri DKV',
    topic: 'Alur Proses Produksi Lengkap: Praproduksi, Produksi, & Pascaproduksi',
    sourceReference: 'Buku Semester 1 Bab 3 hlm. 67-68 & Bab 4 hlm. 84-87',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman strategi komunikasi visual minggu ke-14',
    coreConcepts: [
      '3 Fase standar proses produksi DKV:',
      '1. Praproduksi: perancangan rencana, creative brief, riset, moodboard, sketsa thumbnail',
      '2. Produksi: eksekusi digital/manual, olah gambar vektor/bitmap, pemotretan, lay-out',
      '3. Pascaproduksi: proofing/cetak coba, uji kelayakan, revisi klien, packaging, distribusi'
    ],
    summary: 'Mempraktikkan alur produksi linier standar industri DKV mulai dari penerimaan brief pemesan, riset visual, eksekusi desain, hingga cetak coba dumi dan serah terima karya.',
    glossaryTerms: [
      { term: 'Creative Brief', definition: 'Dokumen panduan ringkas berisi tujuan proyek, latar belakang klien, target audiens, dan pesan kunci.' },
      { term: 'Proofing', definition: 'Uji cetak awal untuk mengecek keakuratan warna dan layout sebelum dicetak dalam jumlah banyak.' }
    ],
    simulationId: 'alur-produksi',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Alur Praproduksi: Bedah Creative Brief & Moodboard',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Menguasai tahapan praproduksi dalam proyek desain komunikasi visual'],
        triggerQuestion: 'Mengapa desainer yang langsung mendesain di software tanpa membuat sketsa dan moodboard sering mengalami penolakan dari klien?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menerima lembar studi kasus brief klien UMKM Kuningan'],
          inti: ['Analisis creative brief: tujuan, nilai merek, anggaran, dan tenggat waktu', 'Penyusunan moodboard referensi warna, tipografi, dan gaya visual'],
          penutup: ['Review moodboard oleh guru', 'Refleksi efisiensi praproduksi']
        },
        deepLearning5C: {
          criticalThinking: 'Menerjemahkan keinginan abstrak klien menjadi panduan visual yang konkret',
          creativity: 'Mengumpulkan kolase inspirasi visual yang orisinal dan estetis',
          collaboration: 'Diskusi tim',
          communication: 'Mempresentasikan moodboard kepada guru',
          connectionToRealLife: 'Standar operasional prosedur agensi desain dan periklanan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Produksi hingga Pascaproduksi: Cetak Coba & Uji Kelayakan',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu melaksanakan tahapan produksi dan pascaproduksi secara profesional'],
        triggerQuestion: 'Apa saja cacat visual yang harus dicari saat melakukan pemeriksaan proofing cetak pertama?',
        activities: {
          pendahuluan: ['Review sesi moodboard', 'Penjelasan checklist pascaproduksi'],
          inti: ['Simulasi alur produksi interaktif di simulator', 'Pemeriksaan contoh cetak coba (proofing): kerapian batas potong (trim), kejelasan teks, dan saturasi warna'],
          penutup: ['Penyusunan laporan alur produksi', 'Evaluasi mandiri']
        },
        deepLearning5C: {
          criticalThinking: 'Menemukan kesalahan cetak dan ketidaksesuaian warna sebelum produksi massal',
          creativity: 'Memberikan solusi perbaikan layout yang cepat dan tepat',
          collaboration: 'Kerja sama tim kontrol kualitas (quality control)',
          communication: 'Menyampaikan berita acara persetujuan cetak',
          connectionToRealLife: 'Menghindari kerugian finansial akibat kesalahan cetak di industri percetakan'
        }
      }
    ],
    quiz: {
      id: 'quiz-w15',
      title: 'Kuis Formatif Minggu 15: Alur Produksi DKV',
      questions: [
        {
          id: 'q1',
          question: 'Uji cetak coba pada media sesungguhnya sebelum dilakukan pencetakan massal dalam tahapan pascaproduksi dikenal dengan istilah...',
          options: ['Montase', 'Proofing', 'Thumbnail', 'Brainstorming'],
          correctIndex: 1,
          explanation: 'Proofing adalah proses cetak coba untuk memastikan kesesuaian warna dan layout sebelum pencetakan massal.'
        }
      ]
    }
  },
  {
    week: 16,
    semester: 1,
    babNumber: 5,
    babTitle: 'Sketsa dan Ilustrasi',
    topic: 'Konsep Sketsa, Teknik Gambar Manual (Arsir, Dussel, Pointilis, Aquarel), & Ragam Pensil',
    sourceReference: 'Buku Semester 1 Bab 5 hlm. 93-103',
    isOfficialCurriculum: true,
    prerequisites: 'Pemahaman konsep dasar menggambar bentuk',
    coreConcepts: [
      'Definisi sketsa: rancangan kasar cepat sebagai bagan/ide awal karya',
      '4 Teknik manual: Arsir (garis sejajar/silang), Dussel (gosokan pensil lunak/kain), Pointilis (titik kerapatan), Aquarel (sapuan basah transparan)',
      'Klasifikasi pensil: Keras (4H-9H), Sedang (H, HB, F, 2H, 3H), Lunak (2B-7B), pensil mekanik, konte, dermatograf, watercolor pencil, grafit stik'
    ],
    summary: 'Mempelajari keterampilan motorik visual fundamental: menguasai 4 teknik goresan manual (arsir, dussel, pointilis, aquarel) serta memilih jenis kekerasan pensil yang sesuai.',
    glossaryTerms: [
      { term: 'Teknik Dussel', definition: 'Teknik menggambar dengan menggosokkan goresan pensil/konte menggunakan kapas atau kertas khusus untuk menghasilkan gradasi gelap-terang halus.' },
      { term: 'Pointilis', definition: 'Teknik menggambar menggunakan sebaran titik-titik dengan variasi kerapatan untuk membentuk volume objek dan bayangan.' }
    ],
    simulationId: 'sketsa',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Eksplorasi Karakter Pensil (H vs B) & Teknik Arsir dan Dussel',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu membedakan jenis pensil dan mempraktikkan teknik arsir serta dussel'],
        triggerQuestion: 'Mengapa pensil grade H cocok untuk sketsa konstruksi sedangkan grade B digunakan untuk bayangan dan arsiran tebal?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menyiapkan kertas gambar dan set pensil berbagai tingkatan'],
          inti: ['Eksplorasi skala nada (value scale) 5 tingkat dengan pensil 2B, 4B, dan 6B', 'Praktik teknik arsir sejajar, silang (cross-hatching), dan dussel pada bentuk bola pejal (Gambar 5.1 & 5.2)'],
          penutup: ['Pameran meja karya siswa', 'Umpan balik kehalusan gradasi']
        },
        deepLearning5C: {
          criticalThinking: 'Menentukan intensitas tekanan tangan untuk mencapai transisi gelap terang yang halus',
          creativity: 'Menciptakan kesan volume tiga dimensi pada bidang dua dimensi',
          collaboration: 'Saling bertukar pensil konte dan dermatograf untuk mengeksplorasi tekstur',
          communication: 'Menjelaskan teknik yang digunakan dalam menghasilkan gradasi',
          connectionToRealLife: 'Dasar fundamental menggambar rancangan produk bagi desainer'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Teknik Pointilis, Aquarel Basah, dan Praktik Objek Benda Mati (Still Life)',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu menerapkan teknik pointilis dan sapuan aquarel pada objek still life'],
        triggerQuestion: 'Bagaimana kerapatan titik-titik pada teknik pointilis menciptakan ilusi cahaya dan bayangan pada kelopak bunga?',
        activities: {
          pendahuluan: ['Review sesi arsir', 'Menata objek still life (apel dan teko) di tengah meja studio'],
          inti: ['Praktik teknik pointilis menggunakan drawing pen (Gambar 5.3)', 'Eksplorasi sapuan transparan kuas cat air teknik aquarel (Gambar 5.4)'],
          penutup: ['Pembersihan kuas sesuai SOP K3', 'Pengunggahan hasil karya ke Portofolio Digital']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis arah datangnya cahaya utama (key light) dan bayangan jatuh objek',
          creativity: 'Menerapkan transparansi sapuan cat air bertingkat',
          collaboration: 'Penataan bersama komposisi still life',
          communication: 'Apresiasi karya teman',
          connectionToRealLife: 'Penguasaan media basah dan kering untuk sketsa konsep desain'
        }
      }
    ],
    quiz: {
      id: 'quiz-w16',
      title: 'Kuis Formatif Minggu 16: Teknik Sketsa & Ragam Pensil',
      questions: [
        {
          id: 'q1',
          question: 'Teknik menggambar dengan cara menggosok-gosokkan media pensil lunak pada kertas dengan bantuan kapas atau kain halus disebut...',
          options: ['Teknik Arsir', 'Teknik Dussel', 'Teknik Pointilis', 'Teknik Siluet'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 5 hlm. 96 menjelaskan teknik dussel dilakukan dengan menggosok media untuk menghasilkan gelap terang halus.'
        }
      ]
    }
  },
  {
    week: 17,
    semester: 1,
    babNumber: 5,
    babTitle: 'Sketsa dan Ilustrasi',
    topic: 'Karakteristik Media Kertas Gambar, Jenis Ilustrasi (Kartun 2D/3D, Karikatur, Cergam), & Sejarah Komik',
    sourceReference: 'Buku Semester 1 Bab 5 hlm. 98-106 & 124-125',
    isOfficialCurriculum: true,
    prerequisites: 'Kemampuan teknik dasar menggambar sketsa minggu ke-16',
    coreConcepts: [
      'Karakteristik 11 jenis kertas: HVS (bebas kayu), kalkir (transparan), art paper/carton (halus mengilap), matte paper, ivory (food grade), linen (tekstur garis), manila/BC, canson (>200 gsm air), kopenhagen, samson (daur ulang cokelat)',
      'Jenis ilustrasi: Kartun 2D & 3D, Karikatur (melebih-lebihkan karakter/tokoh), Cergam/Komik',
      'Sejarah komik: "The Funnies" (1929), Superman (1938), komik strip koran "Shinpo" oleh Kho Wang Gie (1930 di Indonesia), "Kisah Pendudukan Jogja" oleh Abdul Salam (1952)'
    ],
    summary: 'Mengenal sifat fisik kertas (gramatur gsm, daya serap air, serat) dan mengeksplorasi ragam gambar ilustrasi: kartun 2D/3D, karikatur figuratif, serta sejarah emas komik dunia dan Indonesia.',
    glossaryTerms: [
      { term: 'Gramatur', definition: 'Ukuran berat kertas yang dinyatakan dalam satuan gram per meter persegi (gsm / gram per square meter).' },
      { term: 'Karikatur', definition: 'Gambar ilustrasi yang mengandung kelucuan dan kritik dengan melebih-lebihkan ciri khas fisik objek atau tokoh tertentu.' }
    ],
    simulationId: 'sketsa',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Mengenal 11 Jenis Kertas Gambar & Uji Daya Serap Gramatur',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Mampu mengidentifikasi ciri dan fungsi 11 jenis kertas dalam industri DKV'],
        triggerQuestion: 'Mengapa kertas ivory sangat aman digunakan untuk kemasan makanan (food grade), sedangkan art paper lebih cocok untuk majalah mengilap?',
        activities: {
          pendahuluan: ['Doa bersama', 'Menghadirkan sampel fisik 11 jenis kertas'],
          inti: ['Eksplorasi taktil tekstur kertas: linen, canson, samson, kalkir, manila', 'Uji perbandingan ketahanan air antara HVS 80 gsm dan canson 250 gsm saat disapu cat air'],
          penutup: ['Penyusunan tabel katalog kertas mini siswa', 'Refleksi pemilihan media']
        },
        deepLearning5C: {
          criticalThinking: 'Mencocokkan jenis kertas yang paling hemat dan tepat guna untuk jenis proyek tertentu',
          creativity: 'Membuat katalog sampel kertas yang artistik',
          collaboration: 'Eksplorasi kelompok',
          communication: 'Menjelaskan alasan pemilihan jenis kertas kepada calon klien',
          connectionToRealLife: 'Pengetahuan esensial dalam menentukan spesifikasi order percetakan'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Ragam Ilustrasi: Kartun 2D/3D, Karikatur, & Sejarah Komik Indonesia',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu membedakan kartun, karikatur, cergam, serta memahami sejarah komik'],
        triggerQuestion: 'Apa perbedaan mendasar antara gambar kartun yang lucu dengan gambar karikatur yang memuat sindiran sosial?',
        activities: {
          pendahuluan: ['Review jenis kertas', 'Menampilkan karya R.A. Kosasih (Sri Asih) dan Charles Schulz (Snoopy)'],
          inti: ['Analisis ciri kartun 2D bidang datar vs 3D bervolume (Gambar 5.5 & 5.6)', 'Praktik membuat 1 karakter karikatur tokoh profesi dengan proporsi kepala melebih-lebihkan ciri khas'],
          penutup: ['Pameran galeri karikatur', 'Refleksi pesan moral karya']
        },
        deepLearning5C: {
          criticalThinking: 'Menangkap esensi ekspresi wajah dan bahasa tubuh tokoh dalam karikatur',
          creativity: 'Menggubah bentuk realis menjadi distorsi kartun yang humoris',
          collaboration: 'Saling menebak tokoh yang digambar rekan sekelas',
          communication: 'Menyampaikan pesan kritik sosial secara santun melalui bahasa gambar',
          connectionToRealLife: 'Peran kartun dan komik edukasi dalam kampanye literasi generasi muda'
        }
      }
    ],
    quiz: {
      id: 'quiz-w17',
      title: 'Kuis Formatif Minggu 17: Karakteristik Kertas & Jenis Ilustrasi',
      questions: [
        {
          id: 'q1',
          question: 'Buku komik pertama di Indonesia yang dicetak dalam bentuk buku pada tahun 1952 adalah karya Abdul Salam yang berjudul...',
          options: ['Sri Asih', 'Ardisoma', 'Kisah Pendudukan Jogja', 'Si Buta dari Gua Hantu'],
          correctIndex: 2,
          explanation: 'Buku Semester 1 Bab 5 hlm. 125 mencatat "Kisah Pendudukan Jogja" karya Abdul Salam (1952) sebagai buku komik pertama yang dicetak di Indonesia.'
        }
      ]
    }
  },
  {
    week: 18,
    semester: 1,
    babNumber: 5,
    babTitle: 'Sketsa dan Ilustrasi',
    topic: 'Unsur & Prinsip Desain, Konsep Karya Cetak (Poster, Logo, Kemasan), & Evaluasi Semester 1',
    sourceReference: 'Buku Semester 1 Bab 5 hlm. 107-144',
    isOfficialCurriculum: true,
    prerequisites: 'Penguasaan materi seluruh bab semester 1',
    coreConcepts: [
      'Unsur desain: titik, garis (lurus, lengkung, majemuk), bidang geometris/nongeometris, tekstur (visual & taktil), ruang, warna (Hue: primer/sekunder/tersier; Value; Intensity)',
      'Sistem warna: CMYK (subtraktif cetak) vs RGB (aditif layar display)',
      'Prinsip desain: kesatuan (unity), keseimbangan (simetris, asimetris, sederajat, radial), proporsi, penekanan (hierarki, skala, kontras), irama',
      'Desain poster menurut Lori Siebert, Lisa Ballard, & Robin Landa; Ragam poster (teks, bergambar, propaganda, wanted, kampanye, dll)',
      'Desain logo: lettermark/logotype, basic shape, picture mark',
      'Pola kemasan (packaging box net structure) dan dumi cetak'
    ],
    summary: 'Puncak integrasi materi Semester 1. Menerapkan unsur tata rupa dan 5 prinsip desain ke dalam perancangan karya cetak (poster, logo, dan jaring pola kemasan), diakhiri evaluasi sumatif akhir semester.',
    glossaryTerms: [
      { term: 'CMYK', definition: 'Model warna proses cetak subtraktif yang terdiri atas Cyan, Magenta, Yellow, dan Key (Black).' },
      { term: 'RGB', definition: 'Model warna aditif pencahayaan layar monitor yang terdiri atas Red, Green, dan Blue.' },
      { term: 'Keseimbangan Radial', definition: 'Keseimbangan tata letak yang berpusat melingkar memancar dari titik tengah (focal point).' }
    ],
    simulationId: 'packaging',
    meetings: [
      {
        meetingNumber: 1,
        day: 'Senin',
        jp: 6,
        durationMinutes: 270,
        title: 'Prinsip Desain, Model Warna CMYK vs RGB, & Poster Efektif',
        focus: 'Memahami & Eksplorasi',
        learningObjectives: ['Menguasai 5 prinsip desain, membedakan CMYK dan RGB, serta kriteria poster komunikatif'],
        triggerQuestion: 'Mengapa warna desain yang terlihat sangat cerah di layar RGB monitor seringkali berubah menjadi lebih gelap ketika dicetak printer CMYK?',
        activities: {
          pendahuluan: ['Doa bersama', 'Pembedahan lingkaran warna primer, sekunder, tersier (Gambar 5.31)'],
          inti: ['Analisis prinsip keseimbangan simetris vs asimetris (Gambar 5.18 & 5.19)', 'Eksplorasi kriteria poster menurut Siebert & Ballard: terbaca dari 10-15x lebar poster (hlm. 117)', 'Latihan mengidentifikasi jenis-jenis poster (kampanye, propaganda, afirmasi, komersial)'],
          penutup: ['Refleksi tata letak visual', 'Persiapan proyek dumi kemasan untuk hari Rabu']
        },
        deepLearning5C: {
          criticalThinking: 'Menganalisis keterbacaan tipografi dan kontras nilai warna dari jarak pandang jauh',
          creativity: 'Menyusun komposisi poster layanan masyarakat bertema lingkungan',
          collaboration: 'Diskusi kelompok',
          communication: 'Mempertahankan pilihan sistem warna CMYK untuk media cetak',
          connectionToRealLife: 'Penerapan standar warna percetakan profesional di industri'
        }
      },
      {
        meetingNumber: 2,
        day: 'Rabu',
        jp: 6,
        durationMinutes: 270,
        title: 'Praktik Desain Pola Kemasan (Packaging Net), Dumi Cetak, & Asesmen Sumatif Semester 1',
        focus: 'Mengaplikasi & Praktik / Refleksi',
        learningObjectives: ['Mampu merancang pola jaring kemasan kotak, membuat dumi coba, dan menyelesaikan asesmen sumatif'],
        triggerQuestion: 'Bagaimana sebuah jaring pola kertas dua dimensi dapat dilipat presisi menjadi kotak kemasan tiga dimensi yang kokoh?',
        activities: {
          pendahuluan: ['Review prinsip desain', 'Menyiapkan kertas manila/karton, penggaris, gunting, dan cutter'],
          inti: ['Menganalisis Gambar 5.43: Pola jaring kemasan kotak makanan', 'Praktik mandiri: Mengukur, memotong, melipat, dan mengelem dumi kemasan produk UMKM lokal', 'Pengerjaan tes sumatif semester 1 (soal objektif dan refleksi mendalam)'],
          penutup: ['Gelar karya dumi kemasan kelas X', 'Umpan balik komprehensif guru', 'Finalisasi rekap nilai semester 1']
        },
        deepLearning5C: {
          criticalThinking: 'Menghitung ketepatan lidah lem (gluing flap) agar kemasan terkunci sempurna',
          creativity: 'Menghias sisi kemasan dengan logo, tipografi nama produk, dan ilustrasi penunjang',
          collaboration: 'Saling membantu memotong dan melipat pola karton secara rapi',
          communication: 'Mempresentasikan keunggulan fungsi dan estetika dumi kemasan yang dibuat',
          connectionToRealLife: 'Membantu kemasan produk lokal Kuningan agar siap bersaing di pasar modern'
        },
        lkpdTask: {
          id: 'lkpd-w18-m2',
          title: 'LKPD 1.2: Pembuatan Dumi Kemasan Makanan Tradisional',
          instruction: 'Buatlah pola jaring kemasan kotak pada karton manila berukuran minimal 15x10x5 cm, sertakan logo brand, tipografi nama produk, dan ilustrasi pendukung.',
          steps: [
            'Gambar jaring pola kotak lengkap dengan lidah pengunci dan lidah lem',
            'Terapkan sketsa logo dan teks identitas produk',
            'Potong menggunakan cutter dan penggaris besi dengan mengutamakan K3',
            'Lipat dan rekatkan membentuk dumi kotak 3D'
          ],
          rubricCriteria: [
            { criteria: 'Ketepatan ukuran dan presisi lipatan', weight: 35, maxScore: 100 },
            { criteria: 'Kreativitas desain visual dan komposisi', weight: 35, maxScore: 100 },
            { criteria: 'Penerapan K3 dan kerapian hasil akhir', weight: 30, maxScore: 100 }
          ]
        }
      }
    ],
    quiz: {
      id: 'quiz-w18',
      title: 'Asesmen Sumatif Semester 1: Dasar-Dasar DKV Lengkap',
      questions: [
        {
          id: 'q1',
          question: 'Model warna yang menggunakan empat warna pokok (Cyan, Magenta, Yellow, Black) dan digunakan khusus dalam industri percetakan adalah...',
          options: ['RGB', 'CMYK', 'Monokrom', 'Pantone Hexachrome'],
          correctIndex: 1,
          explanation: 'Buku Semester 1 Bab 5 hlm. 115 menyatakan sistem warna CMYK digunakan dalam dunia percetakan.'
        },
        {
          id: 'q2',
          question: 'Menurut Siebert dan Ballard, ukuran huruf poster sebaiknya dibuat besar sehingga dapat terbaca dari jarak sekitar...',
          options: ['1-2 kali lebar poster', '5-7 kali lebar poster', '10-15 kali lebar poster', '30-40 kali lebar poster'],
          correctIndex: 2,
          explanation: 'Buku Semester 1 Bab 5 hlm. 117 menyebutkan huruf poster harus terbaca dari jarak sekitar 10-15 kali lebar poster.'
        }
      ]
    }
  }
];
