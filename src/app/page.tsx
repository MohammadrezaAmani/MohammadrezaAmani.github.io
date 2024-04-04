import Hero from "./../components/hero";
import { commonArgs } from "./../configs/types";

export default function Home({ theme, lang, slug }: commonArgs) {
  return <Hero lang={lang} theme={theme} slug={slug} />;
}
