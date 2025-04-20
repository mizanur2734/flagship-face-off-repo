import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
  return (
    <div className="py-24 text-center">
      <h1 className="mb-3 text-6xl font-thin text-gray-900">No data Found</h1>
      <p className="mb-8 text-gray-900 md:text-2xl">
        Browse, search phones, Add to cart, Favorites.
      </p>
      <Link to="/">
        <button label="Browse Phone" />
      </Link>
    </div>
  );
};

export default EmptyState;
