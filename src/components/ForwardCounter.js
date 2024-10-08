import { useState, useEffect } from "react";
import Card from "./UI/Card/Card";
import UseCounter from "../Hooks/UseCounter";

const ForwardCounter = () => {
  const counter = UseCounter(true);
  console.log("counter", counter);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
