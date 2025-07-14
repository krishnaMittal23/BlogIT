import React from 'react';

const ShimmerLoader = () => {
  return (
    <div className="animate-pulse px-5 md:px-0 max-w-5xl mx-auto my-10 mt-20">
      {/* Image placeholder */}
      <div className="bg-gray-300 rounded-3xl h-64 w-full mb-5"></div>

      {/* Title placeholder */}
      <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>

      {/* subTitle placeholder */}
      <div className="h-5 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* Text lines placeholders */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      {/* Comments placeholder */}
      <div className="mt-10 space-y-4">
        {[1,2,3].map((_, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerLoader;
