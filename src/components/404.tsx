import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NotFoundPage = () => {
  return (
    <Box className="flex flex-col md:flex-row items-center justify-center h-screen">
      <Box className="text-center md:text-left">
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Oops! Page Not Found</Typography>
        <Typography variant="body1">
          Sorry, but the page you are looking for does not exist.
          <br /> <br />{" "}
          <a href="/" className="shadow-lg rounded-md p-4 text-green-500">
            {" "}
            Visit Home Page{" "}
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
