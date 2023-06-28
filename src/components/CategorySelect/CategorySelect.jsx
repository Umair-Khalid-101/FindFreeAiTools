import React from "react";

const CategorySelect = ({ selectedCategory, setSelectedCategory }) => {
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="relative inline-block w-full">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded-lg shadow-sm transition ease-in-out duration-200 focus:outline-none focus:border-blue-500"
      >
        <option value="">Select a category</option>
        <option value="Business and Data AI">Business and Data AI</option>
        <option value="AI Avatars">AI Avatars</option>
        <option value="Games AI">Games AI</option>
        <option value="Research">Research</option>
        <option value="Social Media">Social Media</option>
        <option value="AI Translator">AI Translator</option>
        <option value="Chatbots">Chatbots</option>
        <option value="AI Videos">AI Videos</option>
        <option value="Music and Voice AI">Music and Voice AI</option>
        <option value="Writing">Writing</option>
        <option value="AI Detector">AI Detector</option>
        <option value="AI in Development">AI in Development</option>
        <option value="Email AI bots">Email AI bots</option>
        <option value="Generative Design and Images">
          Generative Design and Images
        </option>
        <option value="Legal AI">Legal AI</option>
        <option value="Marketing and SEO AI">Marketing and SEO AI</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6.293 6.293a1 1 0 0 1 1.414 0L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategorySelect;
