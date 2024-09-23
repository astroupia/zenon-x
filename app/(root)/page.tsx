'use client';

import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProjectCard from '../components/Card';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const handleSelectTech = (tech: string) => {
    setSelectedTech((prevSelectedTech) =>
      prevSelectedTech.includes(tech)
        ? prevSelectedTech.filter((t) => t !== tech)
        : [...prevSelectedTech, tech]
    );
  };

  return (
    <div className={styles.container}>
      <Sidebar selectedTech={selectedTech} onSelectTech={handleSelectTech} />
      <div className={styles.cardsContainer}>
        {selectedTech.length > 0 ? (
          selectedTech.map((tech) => <ProjectCard key={tech} tech={tech} />)
        ) : (
          <p>No projects selected.</p>
        )}
      </div>
    </div>
  );
};

export default Home;




//i capt your codes just in case you wanna change it dawg 

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <h1>ZEONO-X - Client View</h1>
//       </div>
//     </main>
//   );
// }
