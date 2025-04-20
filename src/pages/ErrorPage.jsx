import React from "react";
import Navbar from "../components/Navbar";
import { Link, useRouteError } from "react-router";
import Button from "../components/ui/Button";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <Navbar />
      <div className="py-24 text-center">
        <h1 className="mb-8 text-7xl font-thin text-gray-900">
          {error?.status || 4000}
        </h1>
        <p className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
          {error?.status?.message || "something went wrong"}
        </p>
        <Link to="/">
          <Button label="Go To Homepage" />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
