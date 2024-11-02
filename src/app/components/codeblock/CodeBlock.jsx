'use client';
import { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // 选择合适的样式文件
import styles from './CodeBlock.module.css';

const CodeBlock = ({ children, language = "javascript" }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current); // 仅高亮当前的代码块
    }
  }, [children]); // 只有代码内容改变时才重新高亮

  return (
    <pre className={styles.pre}>
      <code ref={codeRef} className={`${styles.code} ${language}`}>
        {children}
      </code>
    </pre>
  );
};

export default CodeBlock;
