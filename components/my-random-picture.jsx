import React from "react";
// import { ShowPropertyProps } from "adminjs";
import { Box } from "@adminjs/design-system";

const RandomPictures = (props) => {
  const url = "https://picsum.photos/200";

  return <img src={url} />;
};

export default RandomPictures;
