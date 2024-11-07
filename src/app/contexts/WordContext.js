// contexts/WordContext.js
"use client";

import React, { createContext, useState, useContext } from 'react';

// 创建一个 Context 用来存储和共享点击的单词
const WordContext = createContext();

// 创建一个 Provider 组件来提供状态
export const WordProvider = ({ children }) => {
  const [selectedWord, setSelectedWord] = useState(null);

  // 更新选中的单词
  const setWord = (word) => {
    setSelectedWord(word);
  };

  return (
    <WordContext.Provider value={{ selectedWord, setWord }}>
      {children}
    </WordContext.Provider>
  );
};

// 自定义 Hook 来使用 WordContext
export const useWord = () => {
  return useContext(WordContext);
};
