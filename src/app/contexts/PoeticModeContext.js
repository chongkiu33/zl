// contexts/PoeticModeContext.js
import { createContext, useContext, useState } from 'react'

const PoeticModeContext = createContext({
  isPoeticMode: false,
  setIsPoeticMode: () => {}  // 注意这里改成了 setIsPoeticMode
})

export function PoeticModeProvider({ children }) {
  const [isPoeticMode, setIsPoeticMode] = useState(false)

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