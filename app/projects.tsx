
    import React, { useState } from 'react';
    import Sidebar from '../components/Sidebar';
    import Card from '../components/Card';
    import styles from '../styles/Home.module.css';


    const projects = [
    {
        title: 'Project 1 // UI Animations',
        description: 'A project showcasing UI animations with React and CSS.',
        imageUrl: '/images/project1.png',
        techStack: ['React', 'CSS']
    },
    {
        title: 'Project 2 // Tetris Game',
        description: 'A simple Tetris game built with Vue.js.',
        imageUrl: '/images/project2.png',
        techStack: ['Vue']
    },
    {
        title: 'Project 3 // Ethereum Dapp',
        description: 'A decentralized application built on Ethereum blockchain.',
        imageUrl: '/images/project3.png',
        techStack: ['Ethereum', 'React']
    },
    ];

    const Projects: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string[]>([]);

    const handleSelectTech = (tech: string) => {
        setSelectedTech((prevSelected) => 
        prevSelected.includes(tech)
            ? prevSelected.filter(t => t !== tech)
            : [...prevSelected, tech]
        );
    };

    const filteredProjects = projects.filter(project =>
        selectedTech.some(tech => project.techStack.includes(tech))
    );

    return (
        <div className={styles.container}>
        <Sidebar selectedTech={selectedTech} onSelectTech={handleSelectTech} />
        <div className={styles.mainContent}>
            {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
                <Card
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                techStack={project.techStack}
                />
            ))
            ) : (
            <p>No projects match the selected technology.</p>
            )}
        </div>
        </div>
    );
    };

    export default Projects;
