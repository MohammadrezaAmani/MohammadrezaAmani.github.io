import { langs as languages } from "../../langs";
import { Data as DataType } from "../../types";

const englishData: JSX.Element = (
  <div className="mx-auto max-w-2xl p-4 md:p-8">
    <p className="italic">
      made by AbrLabs (
      <a
        href="https://github.com/MohammadrezaAmani"
        className="text-blue-500 hover:underline block"
      >
        Mohammadreza Amani
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/MobinaAfsharii"
        className="text-blue-500 hover:underline block"
      >
        Mobina Afshari
      </a>
      ) 🌕☁️
    </p>
    <h1 id="price-changes-dataset-overview" className="text-3xl font-bold mt-4">
      Price Changes Dataset Overview
    </h1>
    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 my-4">
      <p className="mb-2">
        info: to get live data from the website simply call:{" "}
        <a
          href="https://call5.tgju.org/ajax.json"
          className="text-blue-500 hover:underline block"
        >
          https://call5.tgju.org/ajax.json
        </a>{" "}
        🍭
      </p>
      <p className="mb-2">
        info: to get cryptos simply call:{" "}
        <a
          href="https://api.tgju.org/v1/market/dataservice/crypto-assets"
          className="text-blue-500 hover:underline block"
        >
          https://api.tgju.org/v1/market/dataservice/crypto-assets
        </a>
      </p>
      <p className="mb-2">
        info: to get more trustable information call:{" "}
        <a
          href="https://api.cryptorank.io/v0/coins/"
          className="text-blue-500 hover:underline block"
        >
          https://api.cryptorank.io/v0/coins/
        </a>{" "}
        🥊
      </p>
      <p>
        info: to get all M1 data use:{" "}
        <a
          href="https://forexsb.com/historical-forex-data"
          className="text-blue-500 hover:underline block"
        >
          https://forexsb.com/historical-forex-data
        </a>
      </p>
    </blockquote>
    <h2 id="introduction" className="text-2xl font-bold">
      Introduction
    </h2>
    <p className="my-4">
      This dataset comprises 2000 JSON files, each containing valuable
      information about price changes spanning the last 12 years that crawled
      from{" "}
      <a href="https://www.tgju.org/" className="text-blue-500 hover:underline">
        tgju.org
      </a>
      . The data covers a diverse range of financial and economic indicators,
      providing a comprehensive perspective on the dynamics of various markets.
      The files are organized into separate folders for ease of navigation,
      ensuring efficient retrieval and analysis.
    </p>
    <h2 id="dataset-structure" className="text-2xl font-bold">
      Dataset Structure
    </h2>
    <p className="my-4">
      The dataset encompasses a multitude of fields, each offering insights into
      specific aspects of the financial landscape. The key fields include:
    </p>
    <ul className="list-disc list-inside my-4">
      <li className="mb-2">
        <strong>Currency</strong>: Information related to currency exchange
        rates.
      </li>
      <li className="mb-2">
        <strong>Gold Chart</strong>: Data on the performance of gold over time.
      </li>
      <li className="mb-2">
        <strong>Coin</strong>: Details about various coins and their price
        fluctuations.
      </li>
      <li className="mb-2">
        <strong>قیمت-سکه-پارسیان</strong>: Persian-specific information on the
        price of gold coins.
      </li>
      <li className="mb-2">
        <strong>نرخ-ارز-نیمایی</strong>: Exchange rates for half currencies.
      </li>
      <li className="mb-2">
        <strong>Sana</strong>: Daily changes in the Sana index.
      </li>
      <li className="mb-2">
        <strong>Bank</strong>: Financial data related to banking institutions.
      </li>
      <li className="mb-2">
        <strong>Currency Minor</strong>: Additional details about minor
        currencies.
      </li>
      <li className="mb-2">
        <strong>Global Stocks</strong>: Insights into global stock markets.
      </li>
      <li className="mb-2">
        <strong>World Market/Currency</strong>: Currency-related information on
        the world market.
      </li>
      <li className="mb-2">
        <strong>Diff</strong>: Comparative data highlighting differences.
      </li>
      <li className="mb-2">
        <strong>Commodities</strong>: Price changes in various commodities.
      </li>
      <li className="mb-2">
        <strong>Energy</strong>: Trends and shifts in the energy sector.
      </li>
      <li className="mb-2">
        <strong>Basemetal</strong>: Data specific to the basemetal market.
      </li>
      <li className="mb-2">
        <strong>Gold Global</strong>: Global trends in the gold market.
      </li>
      <li className="mb-2">
        <strong>Transfer</strong>: Information about currency transfers.
      </li>
      <li className="mb-2">
        <strong>Crypto</strong>: Details on cryptocurrency price changes.
      </li>
    </ul>
    <h2 id="temporal-coverage" className="text-2xl font-bold">
      Temporal Coverage
    </h2>
    <p className="my-4">
      The dataset provides a comprehensive view of price changes over the past
      12 years, allowing analysts and researchers to explore long-term trends
      and identify patterns. This temporal dimension adds a valuable historical
      context to the dataset, enabling a deeper understanding of market
      dynamics.
    </p>
    <h2 id="potential-applications" className="text-2xl font-bold">
      Potential Applications
    </h2>
    <p className="my-4">
      Given the breadth and depth of the dataset, it can be utilized for a
      variety of applications, including:
    </p>
    <ul className="list-disc list-inside my-4">
      <li className="mb-2">
        <strong>Market Research</strong>: Analyzing trends and patterns in
        different markets.
      </li>
      <li className="mb-2">
        <strong>Financial Modeling</strong>: Building models to predict future
        price changes.
      </li>
      <li className="mb-2">
        <strong>Risk Assessment</strong>: Evaluating the volatility and risk
        associated with various financial instruments.
      </li>
      <li className="mb-2">
        <strong>Investment Strategy</strong>: Informing investment decisions
        based on historical performance.
      </li>
    </ul>
    <h2 id="conclusion" className="text-2xl font-bold">
      Conclusion
    </h2>
    <p className="my-4">
      This dataset, with its rich variety of fields and extensive temporal
      coverage, serves as a valuable resource for anyone interested in gaining
      insights into the dynamic world of financial markets. Its well-organized
      structure facilitates easy access and analysis, making it a powerful tool
      for researchers, analysts, and data scientists.
    </p>
  </div>
);
const persianData: JSX.Element = (
  <div className="">
    <p className="italic">
      ساخته شده توسط AbrLabs (
      <a
        href="https://github.com/MohammadrezaAmani"
        className="text-blue-500 hover:underline"
      >
        محمدرضا امانی
      </a>{" "}
      |{" "}
      <a
        href="https://github.com/MobinaAfsharii"
        className="text-blue-500 hover:underline"
      >
        مبینا افشاری
      </a>
      ) 🌕☁️
    </p>
    <h1 id="price-changes-dataset-overview" className="text-3xl font-bold mt-4">
      بررسی مجموعه داده‌های تغییرات قیمت
    </h1>
    <blockquote className="border-l-4 border-gray-300 py-2 my-4">
      <p className="mb-2">
        اطلاعات: برای دریافت داده‌های زنده از وب‌سایت، به آدرس زیر مراجعه کنید:{" "}
        <a
          href="https://call5.tgju.org/ajax.json"
          className="text-blue-500 hover:underline"
        >
          https://call5.tgju.org/ajax.json
        </a>{" "}
        🍭
      </p>
      <p className="mb-2">
        اطلاعات: برای دریافت اطلاعات رمزارزها به آدرس زیر مراجعه کنید:{" "}
        <a
          href="https://api.tgju.org/v1/market/dataservice/crypto-assets"
          className="text-blue-500 hover:underline"
        >
          https://api.tgju.org/v1/market/dataservice/crypto-assets
        </a>
      </p>
      <p className="mb-2">
        اطلاعات: برای دریافت اطلاعات قابل اطمینان بیشتر به آدرس زیر مراجعه کنید:{" "}
        <a
          href="https://api.cryptorank.io/v0/coins/"
          className="text-blue-500 hover:underline"
        >
          https://api.cryptorank.io/v0/coins/
        </a>{" "}
        🥊
      </p>
      <p>
        اطلاعات: برای دریافت همه داده‌های M1 از لینک زیر استفاده کنید:{" "}
        <a
          href="https://forexsb.com/historical-forex-data"
          className="text-blue-500 hover:underline"
        >
          https://forexsb.com/historical-forex-data
        </a>
      </p>
    </blockquote>
    <h2 id="introduction" className="text-2xl font-bold">
      مقدمه
    </h2>
    <p className="my-4">
      این مجموعه داده شامل 2000 فایل JSON است، هر کدام شامل اطلاعات ارزشمند
      درباره تغییرات قیمت در طی 12 سال گذشته است که از{" "}
      <a href="https://www.tgju.org/" className="text-blue-500 hover:underline">
        tgju.org
      </a>{" "}
      جمع‌آوری شده‌اند. این داده‌ها شامل یک طیف گسترده از شاخص‌های مالی و
      اقتصادی است، که منظری جامع از دینامیک بازارهای مختلف را ارائه می‌دهد.
      فایل‌ها برای دسترسی و تجزیه و تحلیل آسان، به پوشه‌های جداگانه سازماندهی
      شده‌اند.
    </p>
    <h2 id="dataset-structure" className="text-2xl font-bold">
      ساختار مجموعه داده
    </h2>
    <p className="my-4">
      این مجموعه داده شامل یک مجموعه متعددی از فیلدها است، هر کدام اطلاعاتی راجع
      به جنبه‌های خاصی از منظر مالی ارائه می‌دهند. فیلدهای کلیدی شامل:
    </p>
    <ul className="list-disc list-inside my-4">
      <li className="mb-2">
        <strong>ارز</strong>: اطلاعات مربوط به نرخ ارز.
      </li>
      <li className="mb-2">
        <strong>نمودار طلا</strong>: اطلاعات درباره عملکرد طلا در طول زمان.
      </li>
      <li className="mb-2">
        <strong>سکه</strong>: جزئیات درباره انواع مختلف سکه‌ها و نوسانات قیمت
        آن‌ها.
      </li>
      <li className="mb-2">
        <strong>قیمت-سکه-پارسیان</strong>: اطلاعات مربوط به قیمت سکه‌های طلایی
        فارسی.
      </li>
      <li className="mb-2">
        <strong>نرخ-ارز-نیمایی</strong>: نرخ‌های مربوط به ارزهای نیمایی.
      </li>
      <li className="mb-2">
        <strong>سانا</strong>: تغییرات روزانه در شاخص سانا.
      </li>
      <li className="mb-2">
        <strong>بانک</strong>: اطلاعات مالی مربوط به موسسات بانکی.
      </li>
      <li className="mb-2">
        <strong>ارز کوچک</strong>: جزئیات اضافی درباره ارزهای کوچک.
      </li>
      <li className="mb-2">
        <strong>بورس جهانی</strong>: بررسی‌ها درباره بازارهای سهام جهانی.
      </li>
      <li className="mb-2">
        <strong>بازار جهانی/ارز</strong>: اطلاعات مربوط به ارز در بازار جهانی.
      </li>
      <li className="mb-2">
        <strong>تفاوت</strong>: داده‌های مقایسه‌ای که تفاوت‌ها را برجسته می‌کند.
      </li>
      <li className="mb-2">
        <strong>کالاها</strong>: تغییرات قیمت در کالاهای مختلف.
      </li>
      <li className="mb-2">
        <strong>انرژی</strong>: روندها و تغییرات در بخش انرژی.
      </li>
      <li className="mb-2">
        <strong>بازار پایه‌ای</strong>: داده‌های خاص به بازار پایه‌ای.
      </li>
      <li className="mb-2">
        <strong>طلای جهانی</strong>: روندهای جهانی در بازار طلا.
      </li>
      <li className="mb-2">
        <strong>انتقال</strong>: اطلاعات درباره انتقال ارز.
      </li>
      <li className="mb-2">
        <strong>رمزارز</strong>: جزئیات درباره تغییرات قیمت رمزارزها.
      </li>
    </ul>
    <h2 id="temporal-coverage" className="text-2xl font-bold">
      پوشش زمانی
    </h2>
    <p className="my-4">
      این مجموعه داده یک دید جامع از تغییرات قیمت در طول 12 سال گذشته را ارائه
      می‌دهد، که به تحلیلگران و پژوهشگران امکان می‌دهد تا روندها و الگوها را
      بررسی کرده و شناسایی کنند. این بُعد زمانی یک زمینه تاریخی ارزشمند را به
      مجموعه داده اضافه می‌کند، که تفاهم عمیق‌تری از دینامیک بازار را فراهم
      می‌کند.
    </p>
    <h2 id="potential-applications" className="text-2xl font-bold">
      کاربردهای ممکن
    </h2>
    <p className="my-4">
      با توجه به گستردگی و عمق مجموعه داده، می‌توان از آن برای مجموعه‌ای از
      کاربردها استفاده کرد که شامل موارد زیر می‌شود:
    </p>
    <ul className="list-disc list-inside my-4">
      <li className="mb-2">
        <strong>تحقیقات بازار</strong>: تحلیل روندها و الگوها در بازارهای مختلف.
      </li>
      <li className="mb-2">
        <strong>مدلسازی مالی</strong>: ساخت مدل‌ها برای پیش‌بینی تغییرات قیمت در
        آینده.
      </li>
      <li className="mb-2">
        <strong>ارزیابی ریسک</strong>: ارزیابی ولتاژ و ریسک مرتبط با ابزارهای
        مالی مختلف.
      </li>
      <li className="mb-2">
        <strong>استراتژی سرمایه‌گذاری</strong>: اطلاعات تاریخی را برای
        تصمیم‌گیری‌های سرمایه‌گذاری بر اساس عملکرد استفاده کرد.
      </li>
    </ul>
    <h2 id="conclusion" className="text-2xl font-bold">
      نتیجه‌گیری
    </h2>
    <p className="my-4">
      این مجموعه داده، با تنوع فراوان فیلدها و پوشش زمانی گسترده خود، به عنوان
      یک منبع ارزشمند برای هر کسی که علاقه‌مند به درک جهان پویای بازارهای مالی
      است، خدمت می‌کند. ساختار سازمان‌دهی شده آن دسترسی و تجزیه و تحلیل آسان را
      فراهم می‌کند، که این ابزار قدرتمند را برای پژوهشگران، تحلیلگران و
      دانشمندان داده فراهم می‌کند.
    </p>
  </div>
);

export const economicDatasets: DataType = {
  logo: "/logo192.png",
  image: "/assets/img/economic.webp",
  langs: [
    {
      lang: languages.en.short,
      title: "Price Changes Dataset",
      description:
        "A dataset containing 2000 JSON files about price changes of various commodities and cryptocurrencies in the last 12 years",
      data: englishData,
    },
    {
      lang: languages.fa.short,
      title: "مجموعه داده تغییرات قیمت",
      description:
        "مجموعه داده ای شامل 2000 فایل JSON  درباره تغییرات قیمت انواع کالا و رمز ارز در 12 سال گذشته",
      data: persianData,
    },
  ],
  slug: "introduction-to-react-hooks",
  related_posts: ["react-context-api", "react-performance-optimization"],
  tags: ["React", "Hooks", "Frontend Development"],
  category: ["Web Development", "Frontend"],
  created_at: "2023-09-15",
  updated_at: "2023-10-02",
};
