import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchText,
        setSearchText,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);

export default SearchContextProvider;
