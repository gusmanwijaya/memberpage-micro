import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="h-screen flex flex-col items-center">
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/illustration-notfound.jpg`}
        alt="Illustration Not Found"
      />
      <h1 className="text-3xl text-gray-900 mt-12">Opps! We're losing you.</h1>
      <p className="text-lg text-gray-600 mt-4 mb-8 mx-auto text-center">
        This page that you requested is not found in our system
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3"
      >
        Back to home
      </Link>
    </section>
  );
}
