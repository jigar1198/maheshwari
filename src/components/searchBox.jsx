import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import Grid from "@material-ui/core/Grid";

class SearchBox extends Component {
  data = [
    {
      key: "aditya",
      value: "Aditya Sanil"
    },
    {
      key: "ajinkya",
      value: "Ajinkya Phule"
    },
    {
      key: "ajeet",
      value: "Ajeet Singh"
    }
  ];

  render() {
    return (
      <Grid justify="center">
        <ReactSearchBox
          placeholder="Placeholder"
          value="Doe"
          data={this.data}
          callback={record => console.log(record)}
        />
      </Grid>
    );
  }
}

export default SearchBox;