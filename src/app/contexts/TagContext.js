// TagContext.js
import { createContext, useContext, useState } from 'react';

const TagContext = createContext();

export function TagProvider({ children }) {
  const [selectedTags, setSelectedTags] = useState([]); // selectedTags 改为数组

  // 切换标签的选中状态
  const toggleTag = (tag) => {
    setSelectedTags(prevTags => 
      prevTags.includes(tag) 
        ? prevTags.filter(t => t !== tag) // 如果标签已被选中，则移除
        : [...prevTags, tag] // 否则添加该标签
    );
  };

  return (
    <TagContext.Provider value={{ selectedTags, toggleTag }}>
      {children}
    </TagContext.Provider>
  );
}

export function useTag() {
  return useContext(TagContext);
}
