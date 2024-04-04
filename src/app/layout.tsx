import Header from "./../components/header";
import Footer from "./../components/footer";
import { veryFullArgs } from "./../configs/types";

export function Layout({
  lang,
  toggleLang,
  theme,
  toggleTheme,
  children,
}: veryFullArgs) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col w-full">
        <Header
          lang={lang}
          toggleLang={toggleLang}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        {children}
      </div>
      <Footer lang={lang} theme={theme} slug="/" />
    </div>
  );
}
