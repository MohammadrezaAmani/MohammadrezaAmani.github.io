import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center h-screen">
      <div className="text-center sm:text-left">
        <h1 className="text-4xl sm:text-8xl font-bold">404</h1>
        <h2 className="text-2xl sm:text-6xl font-bold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg sm:text-xl">
          Sorry, but the page you are looking for does not exist.
          <br /> <br />{" "}
          <a
            href="/"
            className="inline-block shadow-lg rounded-md p-4 text-green-500 hover:bg-green-100 transition duration-300 ease-in-out"
          >
            {" "}
            Visit Home Page{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
