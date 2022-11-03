import React from "react";
import "./Item.css";

// React Component to display individual item
const Item = ({ genre, category }) => (
  <div className="item-container">
    <div>
      <span className="item-label">Name:</span>
      {genre}
    </div>
    <div>
      <span className="item-label">Category:</span>
      {category}
    </div>
  </div>
);