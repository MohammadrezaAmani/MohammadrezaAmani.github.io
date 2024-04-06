import React from "react";
import { commonArgs } from "../../configs/types";
import data, { contact_type } from "../../configs/about/data";
import { langs } from "../../configs/langs";
import { Typography, Grid, Container } from "@mui/material";

interface ContactWayProps {
  way: contact_type;
}

const ContactWay: React.FC<ContactWayProps> = ({ way }) => (
  <a
    href={way.url}
    className="contact-way flex bg-gray-100 rounded-lg shadow-md hover:shadow-xl flex-nowrap sm:w-40 sm:h-20 flex-col p-3 transition duration-300 ease-in-out transform hover:-translate-y-1"
    target="_blank"
    rel="noreferrer"
  >
    {<way.icon className="contact-icon w-6 h-6 mr-2 text-gray-600" />}
    <span className="contact-text text-sm text-gray-600">{way.content}</span>
  </a>
);

const About: React.FC<commonArgs> = ({ lang }) => {
  const keylang = lang as keyof typeof langs;
  const { title, content, contact_ways } = data[keylang];

  return (
    <Container maxWidth="lg" className="py-10">
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} className="about-image">
          <img
            src={data.image}
            alt={title}
            className="w-full rounded-lg shadow-md"
          />
        </Grid>
        <Grid item xs={12} sm={6} className="about-content">
          <Typography variant="h2" className="font-semibold mb-4">
            {title}
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-700 prose mb-6"
            sx={{
              marginTop: "1rem",
            }}
          >
            {content}
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            {contact_ways.ways.map((way, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <ContactWay way={way} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
