// Fade animation on scroll
function revealOnScroll() {
  const faders = document.querySelectorAll('.fade');
  const windowHeight = window.innerHeight;
  faders.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= windowHeight - 80) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Visi Misi bilingual toggle
const visiMisiContentID = document.getElementById("visiMisiContent");
const switchLangBtn = document.getElementById("switchLangBtn");

const visiMisi = {
  id: {
    judul: "Visi & Misi",
    visi: "<strong>Visi</strong><br>Menjadi Web Developer & Engineer yang inovatif, profesional, dan berkontribusi dalam menciptakan solusi digital yang bermanfaat, efisien, dan berkelanjutan.",
    misi: `<strong>Misi</strong>
<ul>
  <li>Mengembangkan keterampilan pemrograman dan teknologi web secara berkelanjutan sesuai perkembangan industri.</li>
  <li>Menciptakan website dan aplikasi dengan desain yang responsif, aman, dan ramah pengguna.</li>
  <li>Mengimplementasikan praktik pengembangan perangkat lunak yang efisien dan terstruktur.</li>
  <li>Berkontribusi dalam proyek-proyek teknologi yang dapat memberikan dampak positif bagi masyarakat.</li>
  <li>Membangun kolaborasi dan komunikasi yang baik dengan tim serta klien untuk mencapai hasil terbaik.</li>
</ul>`
  },
  en: {
    judul: "Vision & Mission",
    visi: "<strong>Vision</strong><br>To become an innovative and professional Web Developer & Engineer who contributes to creating impactful, efficient, and sustainable digital solutions.",
    misi: `<strong>Mission</strong>
<ul>
  <li>Continuously develop programming and web technology skills in line with industry trends.</li>
  <li>Create websites and applications with responsive, secure, and user-friendly designs.</li>
  <li>Implement efficient and structured software development practices.</li>
  <li>Contribute to technology projects that deliver a positive impact on society.</li>
  <li>Build strong collaboration and communication with teams and clients to achieve the best results.</li>
</ul>`
  }
};

let lang = "id";

function showVisiMisi() {
  visiMisiContentID.innerHTML = visiMisi[lang].visi + "<br><br>" + visiMisi[lang].misi;
  document.getElementById("visiMisiTitle").textContent = visiMisi[lang].judul;
  switchLangBtn.textContent = lang === "id" ? "English" : "Indonesia";
}
if (visiMisiContentID && switchLangBtn) {
  showVisiMisi();
  switchLangBtn.addEventListener("click", function() {
    lang = lang === "id" ? "en" : "id";
    showVisiMisi();
  });
}

// Navbar hamburger menu toggle (mobile)
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMobileMenu = document.querySelector('.navbar-mobile-menu');
const navbarMenuLinks = document.querySelectorAll('.navbar-mobile-menu a');

function closeMobileMenu() {
  navbarMobileMenu.classList.remove('active');
  navbarMobileMenu.classList.add('inactive');
  navbarToggle.classList.remove('open');
  navbarToggle.setAttribute('aria-expanded', 'false');
}
// Open/close menu on hamburger click
if(navbarToggle && navbarMobileMenu){
  navbarToggle.addEventListener('click', function() {
    const isActive = navbarMobileMenu.classList.contains('active');
    if (isActive) {
      closeMobileMenu();
    } else {
      navbarMobileMenu.classList.add('active');
      navbarMobileMenu.classList.remove('inactive');
      navbarToggle.classList.add('open');
      navbarToggle.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu when click link
  navbarMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
  // Optionally, close menu on outside click
  window.addEventListener('click', function(e){
    if (navbarMobileMenu.classList.contains('active')) {
      if (!navbarMobileMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });
}