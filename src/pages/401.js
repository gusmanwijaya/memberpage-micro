import React from "react";
import { Link } from "react-router-dom";

export default function Unauthenticated({
  fallbackUrl,
  fallbackText,
  external,
}) {
  return (
    <section className="h-screen flex flex-col items-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/illustration-private.jpg`}
        alt="Illustration Private"
      />
      <h1 className="text-3xl text-gray-900 mt-12 text-center">
        Wow! How you did get here?
      </h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
        Sorry, you don't have access to this page.
      </p>
      {external ? (
        <a
          href={fallbackUrl}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
        >
          {fallbackText || "Logging me in"}
        </a>
      ) : (
        <Link
          to={fallbackUrl || "/login"}
          className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 mt-5"
        >
          {fallbackText || "Logging me in"}
        </Link>
      )}
    </section>
  );
}
