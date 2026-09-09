/* ============================
   Assets Images
============================ */

const uomImage = "/assets/images/education/uom.png";
const gdcgImage = "/assets/images/education/GDCG.png";
const matricImage = "/assets/images/education/GHSSP.png";
const luxeScentImage = "/assets/images/projects/luxe-scent.png";
const wanderlustImage = "/assets/images/projects/wanderlust.png";
const apnaCollegeLogo = "/assets/images/certifications/apna-college.png";

/* =========================================================
   1. BIO SECTION
========================================================= */
export const Bio = {
  name: "Tariq Hussain",

  roles: ["Programmer", "MERN Stack Developer", "Computer Science Student"],

  description:
    "I'm a Computer Science student and aspiring Full-Stack Web Developer with a strong foundation in modern web development. I enjoy building practical web applications and learning how different technologies work together to solve real problems. My experience includes working with HTML, CSS, JavaScript, Tailwind CSS, Node.js, Express.js, EJS, MongoDB, and SQL. I have built projects such as Luxe Scent, a perfume e-commerce website, and I'm continuously improving my skills through hands-on development. I'm looking for opportunities where I can contribute, learn from experienced developers, and grow as a professional.",

  github: "https://github.com/TariqTechie-dev",

  resume: "",

  linkedin: "https://www.linkedin.com/in/tariq-hussain-65bbb3288",

  twitter: "",

  insta: "https://www.instagram.com/tariqdevo/",

  facebook: "https://www.facebook.com/tariq.hussain.793515/",
};

/* =========================================================
   2. SKILLS SECTION
========================================================= */

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
      {
        name: "bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "React.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      },
      {
        name: "Express.js",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      },
      {
        name: "EJS",
        image:
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/ejs/default.svg",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
      },
      {
        name: "SQL",
        image:
          "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image:
          "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png",
      },
      {
        name: "GitHub",
        image:
          "https://img.icons8.com/?size=100&id=CexFs1lac6J7&format=png&color=000000",
      },
      {
        name: "Postman",
        image:
          "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png",
      },
      {
        name: "Vercel",
        image: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "Netlify",
        image:
          "https://www.netlify.com/assets/badges/netlify-badge-color-accent.svg",
      },
    ],
  },
];

/* =========================================================
   6. EDUCATION SECTION
========================================================= */
export const education = [
  {
    id: 1,
    img: uomImage,
    school: "University of Malakand (UOM)",
    date: "Sep 2021 - Sep 2026",
    grade: "3.25 CGPA",
    desc: "Completed BS in Computer Science, built a strong foundation in programming, algorithms, data structures, and software engineering through coursework and practical projects.",
    degree: "Bachelor of Science in Computer Science",
  },
  {
    id: 2,
    img: gdcgImage,
    school: "GDC Gulabad Dir Lower",
    date: "Sep 2021 - July 2022",
    grade: "70%",
    desc: "Completed Intermediate in Computer Science with a strong foundation in computer science and programming concepts.",
    degree: "Intermediate in Computer Science (ICS)",
  },
  {
    id: 3,
    img: matricImage,
    school: "GHSS Pingal Dir Lower",
    date: "Apr 2019 - Apr 2020",
    grade: "75%",
    desc: "Completed Matriculation in Science with strong academic foundation.",
    degree: "Matric in Science",
  },
];

/* =========================================================
   7. PROJECTS SECTION
========================================================= */

export const projects = [
  {
    id: 1,
    title: "Luxe Scents",
    date: "2025 - 2026",
    description:
      "Luxe Scents is a full-stack web-based perfume e-commerce platform built with Node.js, Express.js, MongoDB, Mongoose, and EJS. The platform allows customers to browse perfumes, manage their cart and wishlist, place orders, and submit product reviews. It also provides an admin dashboard for managing products, orders, customers, and analytics.",

    image: luxeScentImage,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    category: "web app",
    github: "https://github.com/TariqTechie-dev/luxe-scents",
    webapp: "https://luxe-scents.onrender.com",
  },

  {
    id: 2,
    title: "WanderLust",
    date: "2025 - 2025",
    description:
      "A full-stack Airbnb-style travel listing platform with authentication, reviews, image uploads, and MongoDB session storage.",
    image: wanderlustImage,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "EJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    category: "web app",
    github: "https://github.com/TariqTechie-dev/WanderLust",
    webapp: "https://wanderlust-1iua.onrender.com/",
  },
];

/* =========================================================
   5. CERTIFICATIONS SECTION
========================================================= */

export const certifications = [
  {
    id: 1,
    title: "Fullstack Web Development",
    organization: "Apna College",
    logo: apnaCollegeLogo,
    date: "Issued Jan 2025",
    description:
      "Comprehensive full-stack web development program covering MERN stack, modern JavaScript, and industry best practices for building scalable web applications.",
    pdfUrl:
      "https://drive.google.com/file/d/1u1E26Hpcyt0HkKt2atXFDw8YBi9_t4AK/view?usp=sharing",
  },
];
