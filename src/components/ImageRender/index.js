import React from "react";

const ImageRender = ({ item }) => {
  const handleImages = () => {
    if (item.images.length === 2) {
    } else if (item.images.length === 2) {
    } else {
      return <div>ImageRender</div>;
    }
  };
  return { handleImages };
};

export default ImageRender;
