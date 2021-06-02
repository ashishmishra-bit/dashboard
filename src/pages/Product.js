import react from "react";
import "../css/Product.css";
import ProductCard from "../Components/ProductCard";
import img from "../images/logo192.png";

function Product() {
  return (
    <>
      <div className="product-main-container">
        <div className="div-one">
          <div className="div-in-one">
            <div>
              <ProductCard name="Product" value="1000" starts="4" />
            </div>
            <div className="div-inside-one">
              <ProductCard name="Product" value="1000" starts="4" />
            </div>
          </div>
          <ProductCard name="Product" value="1000" starts="4" />
        </div>

        <div className="div-one">
          <div className="div-in-one">
            <div>
              <ProductCard name="Product" value="1000" starts="4" />
            </div>
            <div>
              <ProductCard name="Product" value="1000" starts="4" />
            </div>
          </div>
          <ProductCard name="Product" value="1000" starts="4" />
        </div>
      </div>
    </>
  );

  }
export default Product;
