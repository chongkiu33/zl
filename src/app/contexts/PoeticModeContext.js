// contexts/PoeticModeContext.js
import { createContext, useContext, useState ,useEffect} from 'react';
import {useRouter , useSearchParams} from 'next/navigation'


const PoeticModeContext = createContext({
  isPoeticMode: false,
  setIsPoeticMode: () => {}  // 注意这里改成了 setIsPoeticMode
})

export function PoeticModeProvider({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const [isPoeticMode, setIsPoeticMode] = useState(false)

  useEffect(() => {
    // 在组件加载时，检查 URL 查询参数是否有 poeticMode
    const queryPoeticMode = searchParams.get('poeticMode');
    if (queryPoeticMode === 'true') {
      setIsPoeticMode(true);
    } else {
      setIsPoeticMode(false);
    }
  }, [searchParams]);

  useEffect(() => {
    // 如果 poeticMode 状态发生变化，更新 URL 查询参数
    const params = new URLSearchParams(searchParams.toString());

    if (isPoeticMode) {
      params.set('poeticMode', 'true');
    } else {
      params.delete('poeticMode');
    }

    // 使用 router.push 来更新 URL，但不刷新页面
    router.replace(`?${params.toString()}`, { shallow: true });
  }, [isPoeticMode, router, searchParams]);

  


  return (
    <PoeticModeContext.Provider value={{ isPoeticMode, setIsPoeticMode }}>
      {children}
    </PoeticModeContext.Provider>
  )
}

export function usePoeticMode() {
  const context = useContext(PoeticModeContext)
  if (context === undefined) {
    throw new Error('usePoeticMode must be used within a PoeticModeProvider')
  }
  return context
}