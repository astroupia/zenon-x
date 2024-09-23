import React from "react";
import Card from "@/components/project-card";
import styles from "../../styles/project-grid.module.css";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description: "This is project 1.",
    imageUrl: "/images/project1.png",
  },
  {
    title: "Project 2",
    description: "This is project 2.",
    imageUrl: "/images/project2.png",
  },
  {
    title: "Project 3",
    description: "This is project 3.",
    imageUrl: "/images/project3.png",
  }, // Fixed imageUrl for Project 3
];

const ProjectGrid: React.FC = () => {
  return (
    <div className={styles.grid}>
      {projects.map(
        (
          project // Removed index parameter
        ) => (
          <Card
            key={project.title} // Changed key to use project.title
            tech={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        )
      )}
    </div>
  );
};

export default ProjectGrid;
