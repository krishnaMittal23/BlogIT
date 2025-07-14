import React from 'react';
import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt } = comment;
  const BlogDate = new Date(createdAt);

  return (
    <>
      <tr className="hover:bg-gray-50 transition-colors duration-200">
        <td className="px-6 py-5">
          <div className="space-y-1">
            <p>
              <span className="font-semibold text-gray-700">Blog:</span>{' '}
              <span className="text-gray-800">{blog.title}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-700">Name:</span>{' '}
              <span className="text-gray-800">{comment.name}</span>
            </p>
            <p>
              <span className="font-semibold text-gray-700">Comment:</span>{' '}
              <span className="text-gray-600">{comment.content}</span>
            </p>
          </div>
        </td>

        <td className="px-6 py-5 max-sm:hidden text-gray-600">
          {BlogDate.toLocaleDateString()}
        </td>

        <td className="px-6 py-5">
          <div className="flex items-center gap-4">
            {!comment.isApproved ? (
              <button
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-3 py-1 text-xs transition transform hover:scale-105"
              >
                Approve
              </button>
            ) : (
              <span className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
                Approved
              </span>
            )}

            <button className="hover:scale-110 transition-transform">
              <img src={assets.bin_icon} className="w-5" alt="Delete" />
            </button>
          </div>
        </td>
      </tr>

      {/* Horizontal line and margin after each comment */}
      <tr>
        <td colSpan="3">
          <hr className="my-4 border-gray-300" />
        </td>
      </tr>
    </>
  );
};

export default CommentTableItem;
