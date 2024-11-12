"use client";

import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [layout, setLayout] = useState('default');

    const toggleLayout = (newLayout) => setLayout(newLayout);

    return (
        <LayoutContext.Provider value={{ layout, toggleLayout }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);
