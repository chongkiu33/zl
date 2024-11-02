'use client'
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 选择合适的样式文件
import styles from './CodeBlock.module.css';

const CodeBlock = ({ children, language = "javascript" }) => {
    useEffect(() => {
      hljs.highlightAll();
    }, []);
  
    return (
      <pre className={styles.pre}>
        <code data-language={language} className={styles.code}>
          {children}
        </code>
      </pre>
    );
  };

export default CodeBlock;
