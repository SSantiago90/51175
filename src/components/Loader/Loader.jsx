import React from "react";
import "./loader.css";
import { Ring } from "@uiball/loaders";

function Loader() {
  return <Ring size={220} lineWeight={5} speed={3} color="green" />;
}

export default Loader;
