import React from "react";
import "../css/ProductCard.css";
import img from "../images/logo192.png";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function ProductCard({ imageSrc, name, value, starts }) {
  return (
    <>
      <div className="pcard-main">
        <div className="pcard-image">
          <div></div>
          <img src={img} alt="Product Image" />
          <div></div>
        </div>
        <div className="pcard-name">
          <h3>{name}</h3>
        </div>
        <div className="pcard-value">{value}</div>
        <div className="pcard-star">
          <AiFillStar className="color-star" />
          <AiFillStar className="color-star" />
          <AiFillStar className="color-star" />
          <AiFillStar className="color-star" />
          <AiOutlineStar />
        </div>
        <div className="pcard-button">
          <div></div>
          <button className="pcard-view">View Product</button>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
