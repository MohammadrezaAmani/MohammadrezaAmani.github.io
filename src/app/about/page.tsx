import React from "react";
import { commonArgs } from "../../configs/types";
import data, { contact_type } from "../../configs/about/data";
import { langs } from "../../configs/site";

interface ContactWayProps {
  way: contact_type;
}

const ContactWay: React.FC<ContactWayProps> = ({ way }) => (
  <a
    href={way.url}
    className="contact-way flex bg-gray-100 rounded-lg shadow-md hover:shadow-xl flex-nowrap sm:w-40 sm:h-20 flex-col p-3"
    target="_blank"
    rel="noreferrer"
  >
    <way.icon className="contact-icon w-6 h-6 mr-2 text-gray-600" />
    <span className="contact-text text-sm text-gray-600 hidden sm:block">
      {way.content}
    </span>
  </a>
);

const About: React.FC<commonArgs> = ({ lang }) => {
  const keylang = lang as keyof typeof langs;
  const { title, content, contact_ways } = data[keylang];

  return (
    <section className="container mx-auto px-4 pt-10 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="about-image">
          <img
            src={data.image}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        <div className="about-content max-w-md col-span-1">
          <h2 className="about-title text-2xl font-semibold mb-4">{title}</h2>
          <div className="about-text text-gray-700 prose mb-6">{content}</div>
          <div className="contact-ways grid grid-cols-3 gap-3 gap-x-7">
            {contact_ways.ways.map((way, index) => (
              <ContactWay key={index} way={way} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
