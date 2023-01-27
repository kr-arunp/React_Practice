import React from "react";

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];
const EleRendering = () => {
  return (
    <div>
      <h1>Arrays Items are</h1>
      <ul style={{ listStyle: "number" }}>
        {products.map((ele) => {
          return <li key={ele.id}>{ele.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default EleRendering;
