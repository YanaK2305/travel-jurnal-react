import React from "react";
import Card from "./Card";
import { data } from "../data";

export default function Cards() {
  console.log(data);

  return (
    <div className="container">
      {data.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  );
}
