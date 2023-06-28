import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";

import { Navbar, Search, ListCard, Loader } from "../components";
import { collection, query, db, where, getDocs } from "../services";

const CategorySearch = () => {
  const location = useLocation();
  const { category } = useParams();
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTools();
  }, [location]);

  // GET TOOLS
  const getTools = async () => {
    setIsLoading(true);
    try {
      setTools([]);
      const myData = [];
      const q = query(
        collection(db, "tools"),
        where("category", "==", category)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot?.empty) {
        setIsLoading(false);
        setTools([]);
        return;
      }

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        myData.push(doc?.data());
      });
      setTools(myData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Search />
      {!isLoading && (
        <>
          <div
            className="flex justify-start items-center
      w-full gap-2
      "
          >
            <p
              className="text-gray-700
            ml-36
            "
            >
              AI Tools for:{" "}
            </p>
            <p
              className="text-black font-Helvetica
        font-semibold text-[18px]
        "
            >
              {category}
            </p>
          </div>
          <div className="my-5">
            {tools.map((tool) => (
              <ListCard
                key={Math.random()}
                title={tool?.title}
                description={tool?.description}
                link={tool?.link}
                tags={tool?.tags}
              />
            ))}
          </div>
        </>
      )}
      {isLoading && <Loader title={`Getting AI Tools for: ${category}`} />}
    </>
  );
};

export default CategorySearch;
