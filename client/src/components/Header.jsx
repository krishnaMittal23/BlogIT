import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} className="w-2.5" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700 mt-3">
          Your own <span className="text-primary">blogging</span> <br />
          platform
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500">
          Welcome to blogIt, your personal space to explore, create, and share
          stories that inspire. Whether you’re writing about technology,
          lifestyle, travel, or your daily reflections, our platform empowers
          you to express your thoughts effortlessly
        </p>

        <form className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
          <input
            type="text"
            placeholder="Search for blogs"
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary  transition duration-200"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:from-indigo-600 hover:to-purple-700 transition duration-200"
          >
            Search
          </button>
        </form>
      </div>
      <img
        src={assets.gradientBackground}
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
