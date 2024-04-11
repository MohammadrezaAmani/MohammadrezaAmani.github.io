import { commonArgs } from "../configs/types";
import { siteConfig } from "../configs/site";

function Slug(props: commonArgs) {
  const lang = "en";
  let findLang = siteConfig.langs.find((item) => item.lang === lang);
  if (!findLang) {
    findLang = siteConfig.langs[0];
  }

  return (
    <a
      href={props.slug}
      className={`font-sacramento text-xl text-black dark:text-white`}
    >
      {findLang.title}
    </a>
  );
}

export default Slug;
