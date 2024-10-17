import React from "react";

const SearchBox = (props) => {
  return (
    <div className=" search-box col col-sm-6">
      <input
        className="form-control "
        placeholder="Type to search..."
        type="text"
      ></input>
    </div>
  );
};

export default SearchBox;
