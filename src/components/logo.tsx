import { commonArgs } from "../configs/types";
import { siteConfig } from "../configs/site";

function Slug({ theme, lang, slug }: commonArgs) {
  return (
    <a href={slug} className={`font-sacramento text-xl ${theme.black}`}>
      {siteConfig.en.title}
    </a>
  );
}

export default Slug;
