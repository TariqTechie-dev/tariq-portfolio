

/* ============================
   Assets Images
============================ */

const uomImage = "/assets/images/education/uom.png";
const gdcgImage = "/assets/images/education/GDCG.png";
const matricImage = "/assets/images/education/GHSSP.png";
const luxeScentImage = "/assets/images/projects/luxe-scent.png";

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
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
    ],
  },

  {
    title: "Backend",
    skills: [{ name: "Node.js" }, { name: "Express.js" }, { name: "EJS" }],
  },

  {
    title: "Database",
    skills: [{ name: "MongoDB" }, { name: "SQL" }],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Netlify" },
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
    title: "Luxe Scent",
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
  
];
