import React, { memo } from "react";

const DummyText = (props) => {
  console.log("child Component Rendered!");

  return <p>{props.text}</p>;
};

export default memo(DummyText);
