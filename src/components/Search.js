import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../redux/actions/Actions";
function Search() {
  const dispatch = useDispatch();
  const changeSearchText = (e) => {
    dispatch(setSearchText(e.target.value));
  }
  return (
    <div>
      <input className="search" type="text" placeholder= "Search" onChange={changeSearchText}/>
    </div>
  );
}

export default Search;
