import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

import { Navbar, Search as SearchComponent } from "../components";
import { collection, query, db, getDocs } from "../services";

// CONTEXT
import { useStateContext } from "../context";

const Search = () => {
  const { search } = useStateContext();
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTools();
  }, []);

  // GET TOOLS
  const getTools = async () => {
    setIsLoading(true);
    try {
      setTools([]);
      const myData = [];
      const q = query(collection(db, "tools"));

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
      // let latesttools = reverseArray(myData);
      // const latest = myData.slice(0, 12);
      // console.log(myData);
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
      <SearchComponent />
      <div>Search Results for: {search}</div>
    </>
  );
};

export default Search;
