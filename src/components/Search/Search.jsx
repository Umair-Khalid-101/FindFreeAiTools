import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

// CONTEXT
import { useStateContext } from "../../context";

const Search = () => {
  const navigate = useNavigate();
  const { search, setSearch } = useStateContext();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  // console.log("Search: ", search);

  return (
    <div>
      <h1
        className="text-center
      font-Avenir font-[600] md:text-[44px]
      mt-[50px] text-[24px]
      "
      >
        Find best Free AI Tools available
      </h1>
      <p
        className="text-center
      md:text-[20px] text-[14px]
      "
      >
        Improve Your Skills, Share wih Your Friends 📣
      </p>

      {/* Search */}
      <div
        className="flex items-center justify-center mt-10
      "
      >
        <div className="relative">
          <input
            type="text"
            className="md:w-[60vw] w-[90vw] pl-10 pr-4 py-4 rounded-[40px] 
            border border-icons focus:border-none
            focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
          />
          <div className="absolute inset-y-0 right-4 pl-3 flex items-center">
            <AiOutlineSearch
              className="h-6 w-6 text-gray-400 cursor-pointer"
              onClick={() => {
                navigate(`/search/${search}`);
              }}
            />
          </div>
        </div>
      </div>
      {/* Search */}

      {/* Categories */}
      <div
        className="md:flex justify-center items-center
      mt-4 mb-2 hidden
      "
      >
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Business and Data AI")}
        >
          Business and Data AI,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/AI Avatars")}
        >
          AI Avatars,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Games AI")}
        >
          Games AI,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Research")}
        >
          Research,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Social Media")}
        >
          Social Media,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/AI Translator")}
        >
          AI Translator,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Chatbots")}
        >
          Chatbots,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/AI Videos")}
        >
          AI Videos,
        </p>
      </div>
      <div
        className="md:flex justify-center items-center
      mb-6 hidden
      "
      >
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Music and Voice AI")}
        >
          Music and Voice AI,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Writing")}
        >
          Writing,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/AI Detector")}
        >
          AI Detector,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/AI in Development")}
        >
          AI in Development,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Email AI bots")}
        >
          Email AI bots,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Generative Design and Images")}
        >
          Generative Design and Images,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Legal AI")}
        >
          Legal AI,
        </p>
        <p
          className="cursor-pointer
          hover:text-red-400 text-red-600
        text-center font-[600] underline mx-1
        "
          onClick={() => navigate("/tools/Marketing and SEO AI")}
        >
          Marketing and SEO AI
        </p>
      </div>
      {/* Categories */}
    </div>
  );
};

export default Search;
