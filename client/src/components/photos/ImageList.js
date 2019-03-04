import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = ({ images }) => {
  const imag = images.map(image => {
    console.log(image);
    return <ImageCard key={image.id} image={image} />;
  });
  return (
    <div>
      <h1>Photos du classe</h1>
      <div className="image-list">{imag}</div>
    </div>
  );
};

export default ImageList;
