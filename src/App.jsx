import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowDown, FaArrowRight, FaArrowUpRightFromSquare, FaAward,
  FaCode, FaEnvelope, FaGithub, FaGlobe, FaInstagram, FaLinkedin,
  FaMobileScreenButton, FaPalette, FaSchool, FaRobot, FaServer,
  FaBars, FaXmark, FaCheck, FaLaptopCode, FaUsers
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const copy = {
  en: {
    nav: ["About", "Projects", "Skills", "Journey", "Contact"],
    eyebrow: "INFORMATICS ENGINEERING · INDONESIA",
    greeting: "Hello, I'm",
    name: "Abdalghali Abdallah",
    role: "Full-Stack Developer & Media Creator",
    intro: "I build practical digital experiences — from web platforms used by a real school to community websites and AI experiments.",
    explore: "Explore my work", contact: "Let's connect", scroll: "SCROLL TO EXPLORE",
    available: "Open to learning and collaboration",
    aboutLabel: "A LITTLE ABOUT ME", aboutTitle: "Building with purpose.",
    aboutText: "I'm an Informatics Engineering student at Universitas Muhammadiyah Purwokerto, Indonesia. I enjoy turning ideas into useful digital products, learning through hands-on projects, and contributing to my community through technology and media.",
    aboutNote: "I value thoughtful design, practical problem-solving, and building things people can actually use.",
    facts: [{a:"3rd year",b:"Informatics Engineering"},{a:"Upper-intermediate",b:"English proficiency"},{a:"Solo developer",b:"Project ownership"}],
    projectLabel: "SELECTED WORK", projectTitle: "Projects with a purpose.", projectIntro: "A selection of projects at different stages — from deployed community work to products still being developed.",
    status: {live:"Completed · In use", completed:"Completed · Working", progress:"In progress", prototype:"Working prototype"},
    projects: [
      {title:"School Management System", category:"Web application", desc:"A web-based school management system built to support day-to-day school workflows. The system is completed, working, and currently used by the school.", tags:["PHP", "MySQL", "Web development"], status:"live", icon:"school", featured:true, proof:"Real-world use"},
      {title:"Sudanese Students Association Website", category:"Community platform", desc:"The association’s public website, created to present the community and make its information accessible online.", tags:["PHP", "Responsive web"], status:"completed", icon:"globe", link:"https://sudanpwt.free.nf/", action:"Visit website"},
      {title:"Sudanese Students Association Android App", category:"Android application", desc:"An Android app for the student association. The project is completed and working.", tags:["Kotlin", "Android Studio"], status:"completed", icon:"mobile"},
      {title:"ZOL AI", category:"AI assistant", desc:"An AI assistant project with a React interface and a FastAPI backend connected to Ollama. Development is ongoing.", tags:["React", "FastAPI", "Ollama"], status:"progress", icon:"robot", repo:"https://github.com/alghali-shory/zol-ai", action:"View repository"},
      {title:"Hanan Chat", category:"Messaging application", desc:"A working messaging-app prototype focused on a familiar, mobile-first chat experience.", tags:["PHP", "MySQL", "JavaScript"], status:"prototype", icon:"server"},
    ],
    skillsLabel:"TOOLS & TECHNOLOGIES", skillsTitle:"What I work with.", skillsIntro:"Technologies used across my projects and learning journey.",
    skills:["HTML & CSS", "JavaScript", "React", "Tailwind CSS", "PHP", "MySQL", "FastAPI", "Ollama", "Kotlin / Android", "Git & GitHub"],
    journeyLabel:"BEYOND THE CODE", journeyTitle:"Community, creativity & growth.",
    achievementsTitle:"Highlights", awardTitle:"Third Place", awardText:"Festival Handai Indonesia 2024", awardNote:"Indonesian language and cultural competition.", poetryTitle:"Indonesian Poetry", poetryText:"Participated twice", poetryNote:"Participation noted; no placement claimed.",
    communityTitle:"Media & Community", communityText:"Media team — Sudanese Students Association", communityNote:"Designed posters and managed social media content.",
    contactLabel:"HAVE A PROJECT IN MIND?", contactTitle:"Let’s build something useful.", contactText:"I’m happy to connect about technology, community projects, and opportunities to learn and collaborate.", github:"GitHub profile", linkedin:"LinkedIn profile", instagram:"Instagram profile", footer:"Designed and built with curiosity.", top:"Back to top"
  },
  ar: {
    nav: ["نبذة عني", "المشاريع", "المهارات", "المسيرة", "تواصل"],
    eyebrow: "هندسة المعلوماتية · إندونيسيا", greeting: "مرحباً، أنا", name: "عبدالغالي عبدالله", role: "مطور Full-Stack وصانع محتوى إعلامي",
    intro: "أبني تجارب رقمية عملية، من نظام ويب تستخدمه مدرسة فعلياً إلى مواقع مجتمعية وتجارب في الذكاء الاصطناعي.", explore: "استكشف أعمالي", contact: "تواصل معي", scroll: "انزل لاكتشاف المزيد", available: "منفتح على التعلم والتعاون",
    aboutLabel: "نبذة بسيطة عني", aboutTitle: "تقنية لها هدف.", aboutText: "أنا طالب هندسة معلوماتية في جامعة المحمدية بورواكرتو بإندونيسيا. أستمتع بتحويل الأفكار إلى منتجات رقمية مفيدة، والتعلم من خلال المشاريع العملية، وخدمة مجتمعي بالتقنية والإعلام.", aboutNote: "أهتم بالتصميم المدروس، وحل المشكلات عملياً، وبناء أشياء يستفيد منها الناس فعلاً.",
    facts:[{a:"السنة الثالثة",b:"هندسة المعلوماتية"},{a:"فوق المتوسط",b:"مستوى الإنجليزية"},{a:"مطور مستقل",b:"تنفيذ المشاريع"}],
    projectLabel:"أعمال مختارة", projectTitle:"مشاريع لها هدف.", projectIntro:"مجموعة من المشاريع بمراحل مختلفة، من أعمال مجتمعية منشورة إلى منتجات لا تزال قيد التطوير.",
    status:{live:"مكتمل · قيد الاستخدام",completed:"مكتمل ويعمل",progress:"قيد التطوير",prototype:"نموذج أولي يعمل"},
    projects:[
      {title:"نظام إدارة المدرسة",category:"تطبيق ويب",desc:"نظام ويب لإدارة أعمال المدرسة اليومية. المشروع مكتمل ويعمل وتستخدمه المدرسة حالياً.",tags:["PHP","MySQL","تطوير ويب"],status:"live",icon:"school",featured:true,proof:"استخدام فعلي"},
      {title:"موقع جمعية الطلاب السودانيين",category:"منصة مجتمعية",desc:"الموقع الرسمي للجمعية للتعريف بالمجتمع وإتاحة معلوماته عبر الإنترنت.",tags:["PHP","تصميم متجاوب"],status:"completed",icon:"globe",link:"https://sudanpwt.free.nf/",action:"زيارة الموقع"},
      {title:"تطبيق جمعية الطلاب لأندرويد",category:"تطبيق أندرويد",desc:"تطبيق أندرويد خاص بالجمعية، والمشروع مكتمل ويعمل.",tags:["Kotlin","Android Studio"],status:"completed",icon:"mobile"},
      {title:"ZOL AI",category:"مساعد ذكاء اصطناعي",desc:"مشروع مساعد ذكي بواجهة React وخلفية FastAPI متصلة بـ Ollama. ما زال التطوير مستمراً.",tags:["React","FastAPI","Ollama"],status:"progress",icon:"robot",repo:"https://github.com/alghali-shory/zol-ai",action:"عرض المستودع"},
      {title:"Hanan Chat",category:"تطبيق مراسلة",desc:"نموذج أولي يعمل لتطبيق مراسلة بتجربة استخدام مناسبة للهواتف.",tags:["PHP","MySQL","JavaScript"],status:"prototype",icon:"server"}
    ],
    skillsLabel:"الأدوات والتقنيات",skillsTitle:"التقنيات التي أستخدمها.",skillsIntro:"تقنيات استخدمتها في مشاريعي ورحلتي التعليمية.",skills:["HTML وCSS","JavaScript","React","Tailwind CSS","PHP","MySQL","FastAPI","Ollama","Kotlin / Android","Git وGitHub"],
    journeyLabel:"ما وراء البرمجة",journeyTitle:"المجتمع والإبداع والتطور.",achievementsTitle:"أبرز المحطات",awardTitle:"المركز الثالث",awardText:"Festival Handai Indonesia 2024",awardNote:"مسابقة في اللغة والثقافة الإندونيسية.",poetryTitle:"الشعر الإندونيسي",poetryText:"المشاركة مرتين",poetryNote:"أذكر المشاركة فقط دون ادعاء ترتيب.",communityTitle:"الإعلام والمجتمع",communityText:"الفريق الإعلامي — جمعية الطلاب السودانيين",communityNote:"تصميم الملصقات وإدارة محتوى وسائل التواصل الاجتماعي.",
    contactLabel:"لديك فكرة مشروع؟",contactTitle:"لنبنِ شيئاً مفيداً معاً.",contactText:"يسعدني التواصل حول التقنية والمشاريع المجتمعية وفرص التعلم والتعاون.",github:"حساب GitHub",linkedin:"حساب LinkedIn",instagram:"حساب Instagram",footer:"صُنع بفضول وشغف بالتعلم.",top:"العودة للأعلى"
  },
  id: {
    nav:["Tentang", "Proyek", "Keahlian", "Perjalanan", "Kontak"], eyebrow:"TEKNIK INFORMATIKA · INDONESIA", greeting:"Halo, saya", name:"Abdalghali Abdallah", role:"Full-Stack Developer & Kreator Media",
    intro:"Saya membangun pengalaman digital yang praktis — dari sistem web yang digunakan sekolah hingga situs komunitas dan eksperimen AI.", explore:"Jelajahi proyek", contact:"Hubungi saya", scroll:"GULIR UNTUK MENJELAJAHI", available:"Terbuka untuk belajar dan kolaborasi",
    aboutLabel:"TENTANG SAYA",aboutTitle:"Membangun dengan tujuan.",aboutText:"Saya mahasiswa Teknik Informatika di Universitas Muhammadiyah Purwokerto, Indonesia. Saya senang mengubah ide menjadi produk digital yang bermanfaat, belajar melalui proyek langsung, dan berkontribusi kepada komunitas melalui teknologi dan media.",aboutNote:"Saya menghargai desain yang matang, pemecahan masalah praktis, dan produk yang benar-benar berguna.",facts:[{a:"Tahun ke-3",b:"Teknik Informatika"},{a:"Menengah atas",b:"Kemampuan bahasa Inggris"},{a:"Pengembang mandiri",b:"Kepemilikan proyek"}],
    projectLabel:"KARYA PILIHAN",projectTitle:"Proyek yang bermanfaat.",projectIntro:"Pilihan proyek dalam berbagai tahap — dari karya komunitas yang sudah digunakan hingga produk yang masih dikembangkan.",status:{live:"Selesai · Digunakan",completed:"Selesai · Berfungsi",progress:"Dalam pengembangan",prototype:"Prototipe berfungsi"},
    projects:[
      {title:"Sistem Manajemen Sekolah",category:"Aplikasi web",desc:"Sistem berbasis web untuk mendukung aktivitas sekolah sehari-hari. Proyek ini selesai, berfungsi, dan saat ini digunakan oleh sekolah.",tags:["PHP","MySQL","Pengembangan web"],status:"live",icon:"school",featured:true,proof:"Digunakan secara nyata"},
      {title:"Situs Asosiasi Mahasiswa Sudan",category:"Platform komunitas",desc:"Situs publik asosiasi untuk memperkenalkan komunitas dan menyediakan informasi secara daring.",tags:["PHP","Web responsif"],status:"completed",icon:"globe",link:"https://sudanpwt.free.nf/",action:"Kunjungi situs"},
      {title:"Aplikasi Android Asosiasi Mahasiswa",category:"Aplikasi Android",desc:"Aplikasi Android untuk asosiasi mahasiswa. Proyek selesai dan berfungsi.",tags:["Kotlin","Android Studio"],status:"completed",icon:"mobile"},
      {title:"ZOL AI",category:"Asisten AI",desc:"Proyek asisten AI dengan antarmuka React dan backend FastAPI yang terhubung ke Ollama. Pengembangan masih berlangsung.",tags:["React","FastAPI","Ollama"],status:"progress",icon:"robot",repo:"https://github.com/alghali-shory/zol-ai",action:"Lihat repositori"},
      {title:"Hanan Chat",category:"Aplikasi pesan",desc:"Prototipe aplikasi pesan yang berfungsi dengan pengalaman penggunaan yang mengutamakan perangkat seluler.",tags:["PHP","MySQL","JavaScript"],status:"prototype",icon:"server"}
    ],
    skillsLabel:"TEKNOLOGI",skillsTitle:"Teknologi yang saya gunakan.",skillsIntro:"Teknologi dari proyek dan perjalanan belajar saya.",skills:["HTML & CSS","JavaScript","React","Tailwind CSS","PHP","MySQL","FastAPI","Ollama","Kotlin / Android","Git & GitHub"],journeyLabel:"DI LUAR KODE",journeyTitle:"Komunitas, kreativitas & pertumbuhan.",achievementsTitle:"Pencapaian",awardTitle:"Juara 3",awardText:"Festival Handai Indonesia 2024",awardNote:"Kompetisi bahasa dan budaya Indonesia.",poetryTitle:"Puisi Indonesia",poetryText:"Berpartisipasi dua kali",poetryNote:"Partisipasi dicatat tanpa mengklaim peringkat.",communityTitle:"Media & Komunitas",communityText:"Tim media — Asosiasi Mahasiswa Sudan",communityNote:"Mendesain poster dan mengelola konten media sosial.",contactLabel:"PUNYA IDE PROYEK?",contactTitle:"Mari membangun sesuatu yang berguna.",contactText:"Saya terbuka untuk berdiskusi tentang teknologi, proyek komunitas, dan peluang belajar atau kolaborasi.",github:"Profil GitHub",linkedin:"Profil LinkedIn",instagram:"Profil Instagram",footer:"Dirancang dengan rasa ingin tahu.",top:"Kembali ke atas"
  }
};

const projectIcons = { school: FaSchool, globe: FaGlobe, mobile: FaMobileScreenButton, robot: FaRobot, server: FaServer };
const skillIcons = [FaCode, FaCode, FaLaptopCode, FaPalette, FaServer, FaServer, FaRobot, FaRobot, FaMobileScreenButton, FaGithub];

function App() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = copy[lang] || copy.en;
  const rtl = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lang, rtl]);

  const changeLanguage = (value) => {
    setLang(value);
    i18n.changeLanguage(value);
    setMenuOpen(false);
  };
  const links = [
    { label: t.nav[0], href: "#about" }, { label: t.nav[1], href: "#projects" },
    { label: t.nav[2], href: "#skills" }, { label: t.nav[3], href: "#journey" }, { label: t.nav[4], href: "#contact" }
  ];
  const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className={`site-shell ${rtl ? "rtl" : ""}`}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="nav-wrap">
          <a href="#home" className="brand" aria-label="Abdalghali Abdallah home"><span className="brand-mark">G<span>.</span></span><span>Abdalghali <b>Abdallah</b></span></a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
            <div className="mobile-languages"><LanguageSwitch lang={lang} onChange={changeLanguage} /></div>
          </nav>
          <div className="nav-actions"><LanguageSwitch lang={lang} onChange={changeLanguage} /><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <FaXmark /> : <FaBars />}</button></div>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow"><span className="eyebrow-dot" />{t.eyebrow}</motion.div>
            <motion.p className="hero-greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .12 }}>{t.greeting}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }}>{t.name}<span className="name-period">.</span></motion.h1>
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>{t.role}</motion.h2>
            <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4 }}>{t.intro}</motion.p>
            <motion.div className="hero-availability" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .45 }}><span className="availability-dot" />{t.available}</motion.div>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}>
              <a className="button button-primary" href="#projects">{t.explore}<FaArrowRight className="button-arrow" /></a>
              <a className="button button-secondary" href="#contact"><FaEnvelope />{t.contact}</a>
            </motion.div>
            <motion.div className="hero-socials" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>
              <SocialLink href="https://github.com/alghali-shory" label="GitHub" icon={<FaGithub />} />
              <SocialLink href="https://www.linkedin.com/in/abdalghali-abdallah-210026265" label="LinkedIn" icon={<FaLinkedin />} />
              <SocialLink href="https://www.instagram.com/alghali_shory/" label="Instagram" icon={<FaInstagram />} />
            </motion.div>
          </div>
          <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-frame"><img src="/profile.jpeg" alt="Portrait of Abdalghali Abdallah" /></div>
            <div className="floating-card floating-code"><span className="float-icon purple"><FaCode /></span><span><b>Build</b><small>Ideas into products</small></span></div>
            <div className="floating-card floating-community"><span className="float-icon cyan"><FaUsers /></span><span><b>Community</b><small>Tech with impact</small></span></div>
            <div className="visual-caption"><span>01 /</span> {lang === "ar" ? "أتعلم، أبني، وأطوّر" : lang === "id" ? "Belajar · Membangun · Bertumbuh" : "Learn · Build · Improve"}</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" />{t.scroll}<FaArrowDown /></a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading label={t.aboutLabel} title={t.aboutTitle} />
          <div className="about-grid">
            <motion.div className="about-main glass-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: .55 }}>
              <span className="card-kicker">01 — ABOUT</span><p>{t.aboutText}</p><p className="muted-copy">{t.aboutNote}</p>
            </motion.div>
            <div className="fact-list">{t.facts.map((fact, i) => <motion.div className="fact-card" key={fact.a} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .1 }}><span className="fact-index">0{i + 1}</span><div><strong>{fact.a}</strong><span>{fact.b}</span></div><FaArrowUpRightFromSquare className="fact-arrow" /></motion.div>)}</div>
          </div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading label={t.projectLabel} title={t.projectTitle} description={t.projectIntro} />
          <div className="project-grid">
            {t.projects.map((project, index) => {
              const Icon = projectIcons[project.icon] || FaLaptopCode;
              const href = project.link || project.repo;
              return <motion.article className={`project-card ${project.featured ? "featured-project" : ""}`} key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} transition={{ delay: (index % 2) * .1, duration: .5 }}>
                <div className="project-card-top"><span className={`project-icon icon-${project.icon}`}><Icon /></span><span className={`status-pill status-${project.status}`}><span />{t.status[project.status]}</span></div>
                <div className="project-category">{project.category}</div><h3>{project.title}</h3><p className="project-description">{project.desc}</p>
                {project.proof && <div className="proof-note"><FaCheck />{project.proof}</div>}
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-card-footer">{href ? <a href={href} target="_blank" rel="noreferrer">{project.action}<FaArrowUpRightFromSquare /></a> : <span className="private-note">{lang === "ar" ? "تفاصيل إضافية عند الطلب" : lang === "id" ? "Detail tambahan tersedia jika diminta" : "More details available on request"}</span>}<span className="project-number">0{index + 1}</span></div>
              </motion.article>;
            })}
          </div>
          <div className="github-callout"><div className="github-callout-icon"><FaGithub /></div><div><strong>{lang === "ar" ? "اكتشف المزيد من الكود" : lang === "id" ? "Jelajahi lebih banyak kode" : "Explore more of my code"}</strong><p>{lang === "ar" ? "تصفّح مستودعاتي العامة على GitHub." : lang === "id" ? "Lihat repositori publik saya di GitHub." : "Browse my public repositories and ongoing experiments."}</p></div><a href="https://github.com/alghali-shory" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><FaArrowUpRightFromSquare /></a></div>
        </section>

        <section className="skills-section" id="skills"><div className="section-wrap"><SectionHeading label={t.skillsLabel} title={t.skillsTitle} description={t.skillsIntro} /><div className="skills-grid">{t.skills.map((skill, i) => {const Icon = skillIcons[i] || FaCode; return <motion.div key={skill} className="skill-chip" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * .035 }}><span><Icon /></span>{skill}</motion.div>;})}</div></div></section>

        <section className="section-wrap journey-section" id="journey"><SectionHeading label={t.journeyLabel} title={t.journeyTitle} /><div className="journey-grid">
          <motion.article className="journey-card award-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="journey-icon"><FaAward /></div><span className="card-kicker">ACHIEVEMENT</span><h3>{t.awardTitle}</h3><strong>{t.awardText}</strong><p>{t.awardNote}</p><div className="award-seal">2024</div></motion.article>
          <motion.article className="journey-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .1 }}><div className="journey-icon cyan-bg"><FaPalette /></div><span className="card-kicker">PARTICIPATION</span><h3>{t.poetryTitle}</h3><strong>{t.poetryText}</strong><p>{t.poetryNote}</p></motion.article>
          <motion.article className="journey-card" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: .2 }}><div className="journey-icon blue-bg"><FaUsers /></div><span className="card-kicker">COMMUNITY</span><h3>{t.communityTitle}</h3><strong>{t.communityText}</strong><p>{t.communityNote}</p></motion.article>
        </div></section>

        <section className="contact-section" id="contact"><div className="section-wrap"><div className="contact-panel"><div className="contact-orb" /><div className="contact-copy"><span className="section-label">{t.contactLabel}</span><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-socials"><SocialLink href="https://github.com/alghali-shory" label={t.github} icon={<FaGithub />} /><SocialLink href="https://www.linkedin.com/in/abdalghali-abdallah-210026265" label={t.linkedin} icon={<FaLinkedin />} /><SocialLink href="https://www.instagram.com/alghali_shory/" label={t.instagram} icon={<FaInstagram />} /></div></div><div className="contact-decoration"><FaEnvelope /></div></div></div></section>
      </main>
      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">G<span>.</span></span><span>Abdalghali <b>Abdallah</b></span></a><p>© {new Date().getFullYear()} Abdalghali Abdallah. {t.footer}</p><a href="#home" className="back-top">{t.top}<FaArrowUpRightFromSquare /></a></div></footer>
    </div>
  );
}

function LanguageSwitch({ lang, onChange }) {
  return <div className="language-switch" aria-label="Choose language">{[{id:"en",label:"EN"},{id:"ar",label:"AR"},{id:"id",label:"ID"}].map((item) => <button key={item.id} className={lang === item.id ? "active" : ""} onClick={() => onChange(item.id)} aria-pressed={lang === item.id}>{item.label}</button>)}</div>;
}
function SocialLink({ href, label, icon }) { return <a className="social-link" href={href} target="_blank" rel="noreferrer">{icon}<span>{label}</span><FaArrowUpRightFromSquare className="social-external" /></a>; }
function SectionHeading({ label, title, description }) { return <motion.div className="section-heading" variants={{ hidden:{opacity:0,y:18}, visible:{opacity:1,y:0} }} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:.5}}><span className="section-label">{label}</span><h2>{title}</h2>{description && <p>{description}</p>}</motion.div>; }

export default App;
