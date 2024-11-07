// components/TextSplitter.js
"use client";
import React from 'react';
import { useWord } from '../../contexts/WordContext';  // 导入 useWord Hook

import styles from './TextSplitter.module.css';

const TextSplitter = ({ text }) => {
  // 从 WordContext 获取 setWord 方法
  const { setWord } = useWord();

  // 分割文本并嵌套字母
  const splitWordsAndLetters = (text, wordClass, letterClass) => {
    return text.split(' ').map((word, wordIndex) => (
      <span
        key={wordIndex}
        className={wordClass}
        onClick={() => setWord(word)}  // 点击单词时更新 Context
      >
        {/* 将单词拆分为字母 */}
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className={letterClass}>
            {char}
          </span>
        ))}
        {/* 为了正确显示空格，添加一个空格元素 */}
        <span className={styles.space}> </span>
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      <div>
        {splitWordsAndLetters(text, styles.word, styles.letter)}
      </div>
    </div>
  );
};

export default TextSplitter;
