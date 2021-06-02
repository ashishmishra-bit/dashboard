import react from "react";
import "../css/Product.css";
import ProductCard from "../Components/ProductCard";
import img from "../images/logo192.png";

function Product() {
  return (
    <>
      <div className="product-main-container">
        <div className="div-one">
          <ProductCard name="Product" value="1000" starts="4" />
          <ProductCard name="Product" value="1000" starts="4" />
          <ProductCard name="Product" value="1000" starts="4" />
        </div>
        <div className="div-one">
          
          <ProductCard name="Product" value="1000" starts="4" />
          <ProductCard name="Product" value="1000" starts="4" />
          <ProductCard name="Product" value="1000" starts="4" />
        </div>
      </div>
    </>
  );

  }
export default Product;
