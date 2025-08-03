import zivakaLogo from "../assets/zivaka-logo.png";
import acmLogo from "../assets/acm-logo.svg";
import mnmLogo from "../assets/MnM.png";
const workExp = [
  {
    role: "Web Developer",
    Company: "Maya & Maya Enterprises",
    image: mnmLogo,
    link: "https://maya-and-maya.com",
    desc: [
      "Built a scalable business website from the ground up, with integrated modules for user authentication, fleet tracking, trip package creation, and automated form handling, centralizing customer and internal workflows.",
      "Engineered automation systems linking the website with Google Sheets via Apps Script, including auto trip creation UI and a Vision API-based OCR for fuel receipts, significantly improving processing speed and reducing manual errors observed during testing.",
    ],
  },
  {
    role: "ReactJs Developer",
    Company: "Zivaka",
    image: zivakaLogo,
    link: "https://www.zivaka.com",
    desc: [
      "Developed a modular, responsive frontend for a business portal, integrating 10+ APIs with dynamic dashboards, charts, and comprehensive custom calendars for better visibility.",
      "Implemented role-based access control (RBAC) using React Router for secure, tiered user experiences.",
      "Replaced manual onboarding with responsive 7 e-forms, improving accuracy and streamlining HR operations.",
    ],
  },
  {
    role: "Full Stack Developer",
    Company: "USS ACM",
    image: acmLogo,
    link: "https://usict.acm.org",
    desc: [
      "Developed a MERN-based member portal used by a growing community user base, enabling personalized profiles and real-time project showcase with full CRUD functionality.",
      "Automated internal operations by replacing manual processes with reusable templates, decreasing setup time from hours to minutes.",
      "Collaborated with 3 teams to ensure seamless deployment, CI/CD integration, and feature iteration using Git workflows.",
    ],
  },
];

export default workExp;
