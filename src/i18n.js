import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Full-Stack Developer",
        description: "Passionate IT student building modern web applications and solving real-world problems.",
        download: "Download CV",
        contact: "Contact Me"
      }
    },
    ar: {
      translation: {
        title: "مطور ويب متكامل",
        description: "طالب تقنية معلومات شغوف ببناء تطبيقات حديثة وحل المشاكل الواقعية.",
        download: "تحميل السيرة الذاتية",
        contact: "تواصل معي"
      }
    },
    id: {
      translation: {
        title: "Pengembang Full-Stack",
        description: "Mahasiswa IT yang bersemangat membangun aplikasi modern dan memecahkan masalah nyata.",
        download: "Unduh CV",
        contact: "Hubungi Saya"
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;