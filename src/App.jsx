import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
{/* 🔥 Glow Background */}
function App() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    
    <div className="bg-[#0f172a] min-h-screen px-4 py-10 relative overflow-hidden">

  {/* 🔥 Glow Background */}
  <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] rounded-full"></div>

      {/* 🌍 Language Switch */}
      <div className="absolute top-5 right-5 flex gap-2">
        <button onClick={() => i18n.changeLanguage("en")} className="text-white text-sm hover:text-cyan-400">
          EN
        </button>
        <button onClick={() => i18n.changeLanguage("ar")} className="text-white text-sm hover:text-cyan-400">
          AR
        </button>
        <button onClick={() => i18n.changeLanguage("id")} className="text-white text-sm hover:text-cyan-400">
          ID
        </button>
      </div>
      <div className="fixed top-0 left-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50">
  <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">

    <h5 className="text-white font-bold">Abdalghali Abdallah.</h5>

    <div className="flex gap-6 text-sm text-gray-300">
      <a href="#about" className="hover:text-cyan-400">About</a>
      <a href="#projects" className="hover:text-cyan-400">Projects</a>
      <a href="#skills" className="hover:text-cyan-400">Skills</a>
      <a href="#contact" className="hover:text-cyan-400">Contact</a>
    </div>

  </div>
</div>
      {/* ===== HERO ===== */}
<div className="flex items-center justify-center py-15">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          
          
          {/* الصورة */}
          <motion.img
            src="/profile.jpeg"
            alt="Ghali"
            className="w-40 h-40 mx-auto rounded-full border-4 border-purple-500 shadow-[0_0_30px_#7c3aed]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* الاسم */}
          <motion.h1
className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Abdalghali Abdallah
          </motion.h1>

          {/* اللقب */}
          <motion.h2
            className="text-xl md:text-2xl text-cyan-400 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Full-Stack Developer & Media Officer
          </motion.h2>

          {/* الوصف */}
          <motion.p
            className="text-gray-50 mt-4 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            3rd Place Winner – International Indonesian Language Competition  
IT Student in Indonesia building real-world web applications  
Fast learner with strong communication and leadership skills
          </motion.p>

          {/* الأزرار */}
          <motion.div
            className="mt-6 flex justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="#"
className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg hover:scale-110 hover:bg-purple-700 transition"            >
              {t("download")}
            </a>

            <a
              href="https://www.linkedin.com/in/abdalghali-abdallah-210026265"
              target="_blank"
              rel="noreferrer"
className="px-6 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black hover:scale-110 transition"            >
              {t("contact")}
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-4 flex justify-center gap-6 text-sm text-gray-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <a href="https://github.com/alghali-shory" target="_blank" rel="noreferrer" className="hover:text-white transition">
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/abdalghali-abdallah-210026265" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/alghali_shory" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition">
              Instagram
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* ===== ABOUT ===== */}
<div className="mt-24 max-w-4xl mx-auto text-center">

  <h2 className="text-3xl font-bold text-white mb-6">
    About Me
  </h2>
  

  <motion.p
    className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    I am an IT student in Indonesia passionate about building modern web applications and solving real-world problems.

I adapt quickly and love learning new skills — including mastering Indonesian in a short time.

Currently, I work as a Media Officer, managing content, design, and digital presence.

I enjoy creating impactful projects and continuously improving both technically and personally.
<br /><br />
You can scroll down to know more about me 😊

  </motion.p>

</div>
{/* ===== ACHIEVEMENTS ===== */}
<div className="mt-24 max-w-5xl mx-auto text-center">

  <h2 className="text-3xl font-bold text-white mb-10">
    Achievements
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      "🥉 3rd Place – International Indonesian Language Competition (Fastival Handai Indonesia 2024)",
      "📍 Finalist in Bali, Indonesia",
      "🎤 Delivered full presentation in Indonesian",
      "⚡ Learned Indonesian language in 3 months",
      "🎯 Media Officer – Sudanese Students Association (2024–2026)",
    ].map((item, index) => (

      <motion.div
        key={index}
        className="bg-[#1e293b] p-5 rounded-xl text-white shadow-lg hover:scale-105 transition"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        {item}
      </motion.div>

    ))}

  </div>
</div>

      {/* ===== PROJECTS ===== */}
      <div className="mt-16 max-w-4xl mx-auto px-2">

        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Projects
        </h2>

        <motion.div
  className="grid md:grid-cols-2 gap-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }}
>

  {/* Project 1 */}
  <motion.div
    className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
      alt="Students Website"
      className="w-full h-48 object-cover"
    />

    <div className="p-10">
      <h3 className="text-xl text-white font-semibold">
        Sudanese Students Association Website
      </h3>

      <ul className="text-gray-50 mt-2 text-sm space-y-1">
  <li>• Built full website for student community</li>
  <li>• Responsive design for all devices</li>
  <li>• Organized content & navigation</li>
  <li>• Deployed and used by real users</li>
</ul>
<p className="text-gray-200 mt-2 text-sm">
  If you want to explore the Sudanese Students Association in Purwokerto, check out the official website.
</p>

      <a
  href="https://sudanpwt.free.nf"
  target="_blank"
  className="inline-block mt-4 text-cyan-400 hover:underline"
>
  Visit Association Website →
</a>
    </div>
  </motion.div>

  {/* Project 2 */}
  <motion.div
    className="bg-[#1e293b] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
  >
    <img
      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      alt="Dashboard"
      className="w-full h-48 object-cover"
    />

    <div className="p-4">
      <h3 className="text-xl text-white font-semibold">
        Smart Dashboard System
      </h3>

      <p className="text-gray-50 mt-2 text-sm">
  Developed a modern dashboard system for managing data, analytics, and user activity in real-time.

  <br /><br />

  Designed interactive UI components to visualize data clearly and improve user decision-making.

  <br /><br />

  Implemented structured layouts and reusable components for scalability and performance.

  <br /><br />

  Focused on user experience by creating clean and responsive interfaces.
</p>

      <a
        href="#"
        className="inline-block mt-4 text-cyan-400 hover:underline"
      >
        Coming Soon →
      </a>
    </div>
  </motion.div>

</motion.div>

        </div>
        {/* ===== EXPERIENCE ===== */}
<div className="mt-24 max-w-5xl mx-auto">

  <h2 className="text-3xl font-bold text-white text-center mb-10">
    Experience
  </h2>

  <motion.div
    className="bg-[#1e293b] p-6 rounded-xl text-white shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >

    <h3 className="text-xl font-semibold mb-2">
      Media Officer – Sudanese Students Association
    </h3>

    <p className="text-sm text-gray-100 mb-4">
      2024 – 2026
    </p>

    <ul className="text-gray-50 space-y-2 text-sm">
      <li>• Managed and grew social media platforms</li>
      <li>• Designed posters and visual content</li>
      <li>• Handled photography and video editing</li>
      <li>• Organized and supported events</li>
    </ul>

  </motion.div>

</div>
        {/* ===== SKILLS ===== */}
<div className="mt-24 max-w-5xl mx-auto">

  {/* العنوان */}
  <h2 className="text-3xl font-bold text-white text-center mb-10">
    Skills
  </h2>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    {[
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
      { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
      { name: "Networking", icon: "🌐" },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500 text-2xl" /> },
      { name: "Problem Solving", icon: "🧠" },
    ].map((skill, index) => (

      <motion.div
        key={index}
        className="bg-[#1e293b] p-4 rounded-xl text-white shadow-lg hover:scale-110 transition flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        {skill.icon}
        <span>{skill.name}</span>
      </motion.div>

    ))}

  </div>
</div>
<div className="mt-24 text-center text-gray-200 text-sm">
  © 2026 Abdalghali Abdallah. All rights reserved.
</div>

      </div>

    
  );
}

export default App;