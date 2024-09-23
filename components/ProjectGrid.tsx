import React from 'react';
import Card from './Card';
import styles from '../styles/ProjectGrid.module.css';

interface Project {
    title: string;
    description: string;
    imageUrl: string;
}

const projects: Project[] = [
    { title: 'Project 1', description: 'This is project 1.', imageUrl: '/images/project1.png' },
    { title: 'Project 2', description: 'This is project 2.', imageUrl: '/images/project2.png' },
    { title: 'Project 3', description: 'This is project 3.', imageUrl: '/images/project1.png' },
];

const ProjectGrid: React.FC = () => {
    return (
        <div className={styles.grid}>
        {projects.map((project, index) => (
            <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            />
        ))}
        </div>
    );
};

export default ProjectGrid;
