import React from 'react';
import styles from '../styles/Card.module.css';

    interface ProjectCardProps {
        tech: string;
    }


    const projectData: Record<string, { title: string; description: string; imageUrl: string; techStack?: string[] }> = {
    
        React: {
            title: 'Project 1: React App',
            description: 'UI Animations built with React.',
            imageUrl: '/images/react-icon.png',
            techStack: ['React', 'JavaScript', 'CSS']
        },
        Vue: {
            title: 'Project 2: Vue App',
            description: 'Tetris Game built with Vue.',
            imageUrl: '/images/vue-icon.png',
            techStack: ['Vue', 'JavaScript', 'CSS']
        },
        Ethereum: {
            title: 'Project 3: Ethereum App',
            description: 'Ethereum-based application.',
            imageUrl: '/images/ethereum-project.png',
            techStack: ['Ethereum', 'Solidity', 'JavaScript']
        },
        HTML: {
            title: 'Project 4: HTML Template',
            description: 'A basic HTML template with styled components.',
            imageUrl: '/images/html-icon.png',
            techStack: ['HTML', 'CSS']
        },
        CSS: {
            title: 'Project 5: CSS Animations',
            description: 'Various CSS animations and effects.',
            imageUrl: '/images/css-icon.png',
            techStack: ['CSS', 'JavaScript']
        },
        Angular: {
            title: 'Project 6: Angular Dashboard',
            description: 'Dashboard application built with Angular.',
            imageUrl: '/images/angular-icon.png',
            techStack: ['Angular', 'TypeScript', 'CSS']
        },
        Gatsby: {
            title: 'Project 7: Gatsby Site',
            description: 'Static site built with Gatsby.',
            imageUrl: '/images/gatsby-icon.png',
            techStack: ['Gatsby', 'React', 'GraphQL']
        },
    };

    const ProjectCard: React.FC<ProjectCardProps> = ({ tech }) => {
        const project = projectData[tech];

        if (!project) {
            return <div className={styles.card}>Project not found.</div>;
        }

        return (
            <div className={styles.card}>
                <img src={project.imageUrl} alt={`${tech} project`} className={styles.cardImage} />
            <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.cardDescription}>{project.description}</p>
                    {project.techStack && (
                    <div className={styles.techStack}>
                        {project.techStack.map((techItem) => (
                        <span key={techItem} className={styles.tech}>{techItem}</span>
                        ))}
                    </div>
                    )}
            </div>
            </div>
        );
    };

    export default ProjectCard;







