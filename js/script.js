// --------------------
// مدیریت تم روشن / تاریک
// --------------------
const themeButton = document.getElementById("btn-theme");
const iconSun = document.getElementById("icon-sun");
const iconMoon = document.getElementById("icon-moon");

function updateThemeIcons(isDark) {
  if (isDark) {
    iconSun.classList.remove("hidden");
    iconMoon.classList.add("hidden");
  } else {
    iconSun.classList.add("hidden");
    iconMoon.classList.remove("hidden");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    updateThemeIcons(true);
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
    updateThemeIcons(false);
  } else {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    updateThemeIcons(prefersDark);
  }
}

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcons(isDark);
});

initTheme();

// --------------------
// داده‌های دو زبانه
// --------------------
const texts = {
  fa: {
    subtitle: "توسعه‌دهنده وب و برنامه‌نویس فول‌استک",
    skillsTitle: "مهارت‌ها",
    skills: [
      {
        title: "برنامه نویس پایتون",
        desc: "توسعه برنامه‌های کاربردی با زبان Python",
      },
      { title: "برنامه نویس راست", desc: "توسعه نرم‌افزار با زبان Rust" },
      {
        title: "توسعه دهنده نرم افزار",
        desc: "توسعه نرم‌افزارهای سفارشی و عمومی",
      },
      {
        title: "توسعه دهنده وب (Tailwind, HTML, CSS)",
        desc: "طراحی و پیاده‌سازی رابط کاربری واکنش‌گرا",
      },
      {
        title: "وب اسکرپینگ و اتوماسیون",
        desc: "جمع‌آوری داده‌ها و اتوماسیون کارها",
      },
      { title: "متخصص لینوکس", desc: "مدیریت و پیکربندی سیستم‌های لینوکسی" },
    ],
    githubText: "صفحه گیت‌هاب من",
    langLabel: "زبان",
    heroTitle: "توسعه‌دهنده وب و برنامه‌نویس فول‌استک",
    heroDesc: "طراحی و توسعه وبسایت‌ها و اپلیکیشن‌های مدرن و واکنش‌گرا",
    heroGithub: "گیت‌هاب من",
    heroContact: "تماس با من",
  },
  en: {
    subtitle: "Web Developer & Full-Stack Programmer",
    skillsTitle: "Skills",
    skills: [
      {
        title: "Python Developer",
        desc: "Developing applications with Python",
      },
      { title: "Rust Developer", desc: "Developing software with Rust" },
      {
        title: "Software Developer",
        desc: "Building custom and general software",
      },
      {
        title: "Web Developer (Tailwind, HTML, CSS)",
        desc: "Designing and implementing responsive UIs",
      },
      {
        title: "Web Scraping & Automation",
        desc: "Collecting data and automating tasks",
      },
      {
        title: "Linux Specialist",
        desc: "Managing and configuring Linux systems",
      },
    ],
    githubText: "My GitHub Page",
    langLabel: "Lang",
    heroTitle: "Web Developer & Full-Stack Programmer",
    heroDesc: "Designing and building modern responsive websites and apps",
    heroGithub: "My GitHub Page",
    heroContact: "Contact Me",
  },
};

// --------------------
// مدیریت زبان و منوی کشویی
// --------------------
const langBtn = document.getElementById("btn-lang");
const langMenu = document.getElementById("lang-menu");
const langLabel = document.getElementById("lang-label");
let currentLang =
  localStorage.getItem("lang") ||
  (navigator.language.startsWith("fa") ? "fa" : "en");

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const data = texts[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  // تغییر متن صفحه
  document.getElementById("subtitle").textContent = data.subtitle;
  document.getElementById("skills-title").textContent = data.skillsTitle;
  document.getElementById("lang-label").textContent = data.langLabel;

  const skillBoxes = document.querySelectorAll(".skill-box");
  skillBoxes.forEach((box, i) => {
    box.querySelector(".skill-title").textContent = data.skills[i].title;
    box.querySelector(".skill-desc").textContent = data.skills[i].desc;
  });

  document.querySelector("footer a").textContent = data.githubText;

  // تغییر متن هیرو
  document.getElementById("hero-title").textContent = data.heroTitle;
  document.getElementById("hero-desc").textContent = data.heroDesc;
  document.getElementById("hero-github").textContent = data.heroGithub;
  document.getElementById("hero-contact").textContent = data.heroContact;
}

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
  if (!langBtn.contains(e.target)) langMenu.classList.add("hidden");
});

langMenu.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLanguage(btn.getAttribute("data-lang"));
    langMenu.classList.add("hidden");
  });
});

// مقدار اولیه زبان
setLanguage(currentLang);

// --------------------
// هدر هنگام اسکرول فاصله پدینگ بگیره
// --------------------
const headerInner = document.getElementById("header-inner");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    headerInner.classList.add("mt-4");
  } else {
    headerInner.classList.remove("mt-4");
  }
});
