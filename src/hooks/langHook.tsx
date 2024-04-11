import React, {
  createContext,
  useContext,
  useState,
  startTransition,
} from "react";
import { langs } from "../configs/langs";

interface LangContextType {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function useLang() {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error("useLang must be used within a LangProvider");
  }
  return context;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState(langs.en.short);
  const updateLanguage = (newLang: string) => {
    if (!Object.keys(langs).includes(newLang)) {
      newLang = Object.keys(langs)[0];
    }
    startTransition(() => {
      document.documentElement.dir = langs[newLang as keyof typeof langs].dir;
      document.documentElement.lang =
        langs[newLang as keyof typeof langs].short;
      setLang(newLang as keyof typeof langs);
      localStorage.setItem("lang", newLang);
    });
  };
  const toggleLang = () => {
    const arrayLangs = Object.keys(langs);
    updateLanguage(
      arrayLangs[(arrayLangs.indexOf(lang) + 1) % arrayLangs.length]
    );
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
