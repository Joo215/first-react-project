import { useState, useEffect } from "react";
import Card from "./UI/Card/Card";
import UseCounter from "../Hooks/UseCounter";

const BackwardCounter = () => {
  const counter = UseCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
