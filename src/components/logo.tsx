import { commonArgs } from "../configs/types";
import { siteConfig } from "../configs/site";

function Slug({ theme, lang, slug }: commonArgs) {
  lang = "en"
  let findLang = siteConfig.langs.find((item) => item.lang === lang);
  if (!findLang) {
    findLang = siteConfig.langs[0];
  }

  return (
    <a href={slug} className={`font-sacramento text-xl ${theme.black}`}>
      {findLang.title}
    </a>
  );
}

export default Slug;
