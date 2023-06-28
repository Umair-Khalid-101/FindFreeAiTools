import React, { useContext, createContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  // STATES
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [search, setSearch] = useState("");

  return (
    <StateContext.Provider
      value={{
        open,
        setOpen,
        user,
        setUser,
        selectedTab,
        setSelectedTab,
        search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
