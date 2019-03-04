import React from "react";
import unsplash from "./unsplash";
import ImageList from "./ImageList";

class Photos extends React.Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.onSearchSubmit();
  }

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: "school" }
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Photos;
