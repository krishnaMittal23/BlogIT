// BlogCard.jsx
import React from 'react';
import { useNavigate } from 'react-router';

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow-md cursor-pointer
                 transform transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
    >
      <img src={image} alt={title} className="aspect-video object-cover w-full" />
      <span className="inline-block bg-primary/20 text-primary text-xs rounded-full px-3 py-1 mt-3 ml-5 select-none">
        {category}
      </span>
      <div className="p-5">
        <h5 className="mb-2 font-semibold text-gray-900">{title}</h5>
        <p className="text-gray-600 text-sm" dangerouslySetInnerHTML={{"__html": description.slice(0,90)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
