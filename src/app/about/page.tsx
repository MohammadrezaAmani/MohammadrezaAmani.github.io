import React from "react";
import { commonArgs } from "../../configs/types";
import data, { contact_type } from "../../configs/about/data";
import { langs } from "../../configs/langs";
import { useLang } from "../../hooks/langHook";
import { useTheme } from "../../hooks/themeHook";

interface ContactWayProps {
  way: contact_type;
}

const ContactWay: React.FC<ContactWayProps> = ({ way }) => (
  <a
    href={way.url}
    className="contact-way flex bg-gray-400 rounded-lg shadow-md hover:shadow-xl flex-wrap sm:w-50 sm:h-20 px-4 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 flex-row sm:flex-col sm:px-4 rtl:space-x-reverse space-x-1"
    target="_blank"
    rel="noreferrer"
  >
    {<way.icon className="contact-icon w-6 h-6 mr-2 text-gray-600" />}
    <span className="contact-text text-sm text-gray-600">{way.content}</span>
  </a>
);

const About: React.FC<commonArgs> = () => {
  const { lang } = useLang();
  const keylang = lang as keyof typeof langs;
  const { title, content, contact_ways } = data[keylang];

  return (
    <div className="flex container mx-auto py-10 px-4 md:px-0 justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="about-image">
          <img
            src={data.image}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="about-content flex  justify-between flex-col">
          <div>
            <p className="font-semibold mb-4 text-xl">{title}</p>
            <p className="text-gray-700 prose mb-6 mt-1">{content}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {contact_ways.ways.map((way, index) => (
              <div key={index} className="sm:px-2">
                <ContactWay way={way} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
