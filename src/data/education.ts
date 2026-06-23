import type { EducationRecord } from "../types";

const ndCourses = [
  "Probability & Statistics for Data Science",
  "R Programming for Data Science",
  "Python Programming for Data Science & AI",
  "Introduction to Machine Learning",
  "Linear Models",
  "Databases and Data Architectures",
  "Storytelling & Communications for Data Scientists",
  "Ethics for AI and Data Science",
  "Behavioral Data Science",
  "Advanced Machine Learning",
  "Advanced Data Visualization",
  "Advanced Linear Models",
  "Data Science Capstone",
];

const esuCourses = [
  "Programming With C++",
  "Algorithms & Data Structures",
  "HTML Programming",
  "Program Logic & Design",
  "Intro to Microcomputer Applications",
  "Management Information Systems",
  "COBOL Programming",
  "Advanced COBOL Programming",
  "Business Computer Systems Analysis",
  "Database Concepts",
  "Telecommunications & Networking",
  "Information Systems Design & Development",
  "Web-Based Business Applications",
  "Business Statistics",
  "Modern Physics",
  "Digital Electronics",
  "Financial Accounting",
  "Managerial Accounting",
  "Operations Management",
];

export const educationRecords: EducationRecord[] = [
  {
    school: "University of Notre Dame",
    location: "Notre Dame, IN",
    degree: "MS Data Science",
    dates: "Aug, 2024 - May, 2026",
    courses: ndCourses,
  },
  {
    school: "Emporia State University",
    location: "Emporia, KS",
    degree: "BS Computer Information Systems",
    dates: "Aug, 1999 - May, 2004",
    note: "Cum Laude · Physics minor",
    courses: esuCourses,
    variant: "orange",
  },
];
