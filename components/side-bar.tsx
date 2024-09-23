"use client";
import React, { useState } from "react";
import styles from "@/styles/side-bar.module.css";

interface SidebarProps {
  selectedTech: string[];
  onSelectTech: (tech: string) => void;
}

const technologies = [
  { name: "React", img: "/images/react-icon.png" },
  { name: "HTML", img: "/images/html-icon.png" },
  { name: "CSS", img: "/images/css-icon.png" },
  { name: "Vue", img: "/images/vue-icon.png" },
  { name: "Angular", img: "/images/angular-icon.png" },
  { name: "Gatsby", img: "/images/gatsby-icon.png" },
  { name: "Flutter", img: "/images/flutter-icon.png" },
];

const Sidebar: React.FC<SidebarProps> = ({ selectedTech, onSelectTech }) => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);

  const handleChange = (tech: string) => onSelectTech(tech);

  return (
    <div className={styles.sidebar}>
      <div className={styles.sectionTitle} onClick={toggleProjects}>
        Projects
        <span className={styles.arrow}>{isProjectsOpen ? "▲" : "▼"}</span>
      </div>
      <ul
        className={`${styles.projectList} ${isProjectsOpen ? styles.open : ""}`}
      >
        {technologies.map((tech) => (
          <li key={tech.name} className={styles.projectItem}>
            <input
              type="checkbox"
              id={tech.name}
              value={tech.name}
              onChange={() => handleChange(tech.name)}
              checked={selectedTech.includes(tech.name)}
              className={styles.checkbox}
            />
            <label htmlFor={tech.name} className={styles.projectName}>
              {tech.name}
            </label>
          </li>
        ))}
      </ul>

      {/* Find Me Section */}
      <div className={styles.findMe}>
        <div>Find Me</div>
        <div className={styles.socialLinks}>
          <img
            src="/images/icons8-twitterx-500.png"
            alt="twitter"
            className={styles.socialIcon}
          />
          <img
            src="/images/github.png"
            alt="GitHub"
            className={styles.socialIcon}
          />
          <img
            src="/images/linkedin-icon.png"
            alt="LinkedIn"
            className={styles.socialIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
