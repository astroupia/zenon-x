"use client";

import React, { useState } from "react";
import Sidebar from "@/components/side-bar";
import ProjectCard from "@/components/project-card";
import styles from "../styles/developer-project.module.css";

const DeveloperProject: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]); 
  const handleSelectTech = (tech: string) => {
    // Move this line outside of the return statement
    setSelectedTech((prevSelectedTech) =>
      prevSelectedTech.includes(tech)
        ? prevSelectedTech.filter((t) => t !== tech)
        : [...prevSelectedTech, tech]
    );
  };

  return (
    // Ensure this return statement is correctly formatted
    <div className={styles.container}>
      <Sidebar selectedTech={selectedTech} onSelectTech={handleSelectTech} />
      <div className={styles.cardsContainer}>
        {selectedTech.length > 0 ? (
          selectedTech.map((tech) => (
            <ProjectCard
              key={tech}
              tech={tech}
              description="Your description here" // Add appropriate description
              imageUrl="Your image URL here" // Add appropriate image URL
            />
          )) // Changed 'technology' to 'tech'
        ) : (
          <p>No projects selected.</p>
        )}
      </div>
    </div>
  );
};

export default DeveloperProject;
