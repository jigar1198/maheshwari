import React, { Component } from "react";
import SearchBox from "./searchBox";
import SearchCard from "./searchCard";

class SearchPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Search page</h1>
        <SearchBox />
        <SearchCard />

      </React.Fragment>
    );
  }
}

export default SearchPage;
