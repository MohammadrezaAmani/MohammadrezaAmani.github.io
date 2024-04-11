import React, { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
    // update the localStorage
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    // update background color
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "#1a202c";
    } else {
      document.documentElement.style.backgroundColor = "#fff";
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
