import React, { createContext, useState, useContext, useEffect } from "react";


const LoadingContext = createContext();

export const LoadingProvider = ({ children , pathname }) => {
    const [isLoading, setIsLoading] = useState(pathname === "/" ? true : false);

    useEffect(() => {
        // 仅在 "/" 页面时触发加载逻辑
        if (pathname === "/") {
          const hasVisited = localStorage.getItem("hasVisited");

          const loadingTimer = setTimeout(() => {
            setIsLoading(false);
          }, 4000);
    
        
        }
      }, [pathname]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};


export const useLoading = () => useContext(LoadingContext);
