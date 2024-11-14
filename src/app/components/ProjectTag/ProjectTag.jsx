
import React from 'react';
import styles from './ProjectTag.module.css';

const projects = [
  { title: 'Am I Too Much?', tags: ["serious game", "creative coding"] },
  { title: 'Enhanced Memory', tags: ["critical technology", "creative coding"] },
  { title: 'ChatGPT as Tarot Reader', tags: ["critical technology", "webpage","creative coding"] },
  { title: '“Listen! Pied Piper is playing”', tags: ["folklore","serious game", "creative coding"] },
  { title: 'Mirror', tags: ["serious game", "creative coding"] },
  { title: 'Seaweed hairband', tags: ["material"] },
  { title: 'Cocoon', tags: ["material"] },
  { title: 'Yong', tags: ["animation","fashion","graphic design"] },
  { title: 'Gui', tags: ["animation","graphic design"] },
  { title: 'Mayan Language', tags: ["graphic design"] },
  { title: 'Sound Visualization', tags: ["graphic design"] },
  { title: 'Stupa', tags: ["3d modeling"] },
  { title: 'Window Frames For Ancient China Pavilion', tags: ["3d modeling"] },
  { title: 'Solidarity', tags: ["Film"] },
  { title: 'Qilin', tags: ["animation"] },
  
  // 可以继续添加更多项目
];

const ProjectTags = ({ projectName }) => {
  const project = projects.find((p) => p.title === projectName);

  if (!project) return <p>Project not found</p>;

  return (
    <div className={styles.tags}>
       {project.tags.map((tag) => (
        <span key={tag} className={styles.projectTag}>{tag}</span>
      ))} 
     
    </div>
  );
};

export default ProjectTags;
