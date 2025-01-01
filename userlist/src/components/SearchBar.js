import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Searching for:", searchQuery);
  // };

  return (
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-bar"
      />
      {/* <button type="submit" onClick={handleSearchSubmit}>
          Search
        </button> */}
    </div>
  );
};

export default SearchBar;
