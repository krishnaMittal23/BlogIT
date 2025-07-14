import React from 'react';

const NewsLetter = () => {
  return (
    <div className="max-w-3xl mx-auto my-6 px-6 py-12 bg-white rounded-2xl shadow-xl text-center border border-gray-200">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
        Stay Updated with Our Blogs
      </h1>
      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Join our newsletter to receive the latest posts and insights directly in your inbox. No spam, we promise.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-80 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
          required
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
