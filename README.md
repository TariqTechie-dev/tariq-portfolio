# Tariq Hussain | MERN Stack Developer Portfolio

A responsive personal portfolio built with React and Vite to present Tariq Hussain's development work, technical skills, education, certifications, and ways to connect.

## Overview

This project is a single-page portfolio for a MERN Stack Developer and Computer Science student. Its content is organized as reusable React components and data-driven sections rather than a collection of separate static pages.

The site includes project detail dialogs, responsive navigation, a persisted light/dark theme preference, resume actions, and contact workflows that open a pre-filled Gmail compose window.

## Features

- Responsive layout for mobile, tablet, and desktop viewports.
- Fixed navigation bar with smooth section scrolling.
- Mobile navigation drawer with overlay, Escape-to-close behavior, focus management, and keyboard focus containment.
- Light/dark theme toggle with the preference stored in `localStorage` and an operating-system preference fallback.
- Animated role text in the hero section using Typewriter Effect.
- Data-driven skills, projects, education, and certification sections.
- Project cards that open a detailed modal with tags, descriptions, source-code links, and live-app links.
- Expandable certification descriptions and certificate links.
- Resume viewing and PDF download links.
- Contact form that opens a pre-filled Gmail compose page.
- Floating WhatsApp contact button with a pre-filled message.
- Accessibility attributes for navigation controls, dialogs, images, status messages, and interactive buttons.

## Portfolio Sections

### About

The hero section introduces Tariq Hussain, identifies the MERN Stack Developer role, displays a profile image, and provides resume actions.

### Skills

Skills are grouped into four categories:

- **Frontend:** HTML, CSS, JavaScript, Bootstrap, React.js, and Tailwind CSS
- **Backend:** Node.js, Express.js, EJS, and Python
- **Database:** MongoDB and SQL
- **Tools:** Git, GitHub, Postman, Vercel, and Netlify

### Projects

Project cards present the portfolio's featured work. Selecting a card opens a modal with the project image, date, technology tags, description, GitHub repository, and live application link.

### Education

An academic timeline covers the University of Malakand, GDC Gulabad Dir Lower, and GHSS Pingal Dir Lower.

### Certifications

Certification cards include the issuing organization, date, description, logo, and a Google Drive link to the certificate.

### Contact

The contact form collects a name, email address, subject, and message. Submission opens Gmail with those values prepared in a new compose window. The page also provides direct social and WhatsApp contact actions.

## Featured Projects

### Luxe Scents

A full-stack perfume e-commerce platform. Its portfolio description highlights product browsing, carts, wishlists, orders, reviews, and administrative management features.

Technologies represented in the project data include HTML, CSS, JavaScript, Tailwind CSS, EJS, Node.js, Express.js, MongoDB, and Mongoose.

- [Source code](https://github.com/TariqTechie-dev/luxe-scents)
- [Live application](https://luxe-scents.onrender.com)

### WanderLust

An Airbnb-style travel listing platform with authentication, reviews, image uploads, and MongoDB session storage.

- [Source code](https://github.com/TariqTechie-dev/WanderLust)
- [Live application](https://wanderlust-1iua.onrender.com/)

## Education

- **Bachelor of Science in Computer Science** — University of Malakand (UOM) | September 2023 – September 2026 | 3.25 CGPA
- **Intermediate in Computer Science (ICS)** — GDC Gulabad Dir Lower | September 2021 – July 2022 | 70%
- **Matric in Science** — GHSS Pingal Dir Lower | April 2019 – April 2020 | 75%

## Certifications

- **Fullstack Web Development** — Apna College | Issued January 2025
- **E-Commerce** — Bano Qabil | 2024–2025

Certificate links are available from the certification cards in the application.

## Technologies Used

### Application Stack

- React 19
- JavaScript with JSX
- Vite
- Tailwind CSS 4 with PostCSS

### UI and Interaction Libraries

- Material UI and Material UI Lab for icons and the education timeline
- React Icons for navigation and social icons
- Typewriter Effect for animated role text
- Emotion for Material UI styling support

### Development Tools

- ESLint
- Git and GitHub
- Postman

### Showcased Backend and Data Technologies

The portfolio presents experience with Node.js, Express.js, EJS, MongoDB, Mongoose, SQL, and Python through its skills and project data. These technologies are not server dependencies of this portfolio site itself.

## Project Structure

```text
src/
├── App.jsx                  # Application root
├── main.jsx                 # React entry point
├── page.jsx                 # Portfolio page composition
├── index.css                # Tailwind entry and global theme styles
└── components/
	├── data/                # Portfolio content and asset references
	├── layout/              # Navbar, wrapper, footer, and WhatsApp action
	└── sections/            # Hero, skills, projects, education, etc.

public/
└── assets/images/           # Education, certification, and project images
```

## Resume and Contact Links

- [GitHub](https://github.com/TariqTechie-dev)
- [LinkedIn](https://www.linkedin.com/in/tariq-hussain-65bbb3288)
- [Instagram](https://www.instagram.com/tariqdevo/)
- [View resume](https://docs.google.com/document/d/1uRa9U5wH-c5HsN7BtcZUKSSp9xIDoYM-poFG4iqx-Ig/edit?usp=sharing)
- [Download resume PDF](https://docs.google.com/document/d/1uRa9U5wH-c5HsN7BtcZUKSSp9xIDoYM-poFG4iqx-Ig/export?format=pdf)

The contact form uses the email address configured in the component to create a Gmail compose link. 
## Getting Started

### Prerequisites

- Node.js and npm

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Linting

```bash
npm run lint
```

### Production preview

```bash
npm run build
npm run preview
```

`npm run build` generates the production output in `dist`, while `npm run preview` serves that output locally.

## Deployment

The project uses the standard Vite production build and does not include a `vercel.json` file or custom deployment configuration. It can be connected to a hosting provider that supports Vite by using:

- **Build command:** `npm run build`
- **Output directory:** `dist`

The repository contains Vercel and Netlify in the displayed tools list, but this README does not claim that the portfolio is currently deployed to either platform.

## Future Improvements

Possible next steps that fit the current project include:

- Add automated tests for navigation, theme persistence, contact behavior, and project modals.
- Replace the Gmail-only form workflow with a hosted form endpoint or backend contact service.
- Add a deployment status or live portfolio URL once one is officially available.
- Add stronger modal focus restoration and focus trapping for keyboard users.

## License

No license file is currently included in the repository.
























