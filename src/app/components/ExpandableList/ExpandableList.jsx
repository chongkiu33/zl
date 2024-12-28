import React, { useState } from 'react';
import styles from './Expand.module.css'; // 替换成你的样式路径

const ExpandableList = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShow = () => {
    setIsOpen(!isOpen); // toggle between true and false
  };

  return (
    <div>
      <div className={styles.title}>
        <button className={`${styles.button} ${isOpen ? styles.open : ''}`} onClick={toggleShow}>▶</button> {title}
      </div>
      {isOpen && (
        <div>
        <ul className={styles.nobullets}>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default ExpandableList;
