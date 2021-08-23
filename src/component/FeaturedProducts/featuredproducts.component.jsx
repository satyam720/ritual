import "./featuredproduct.styles.scss";
import { FeaturedProductsList } from "../../data";
import { useState } from "react";

const FeaturedProducts = () => {
  const [hoverImage, setHoverImage] = useState(false);

  return (
    <div className="featuredproduct">
      <div className="container1">
        <span className="float-start">
          <h1>Featured Products</h1>
        </span>
        <span className="shop-link mt-2">Shop All</span>
      </div>

      <div className="row row-cols-md-4 row-cols-lg-4 product">
        {FeaturedProductsList.map((product) => (
          <div key={product.id} className="arrange-content">
            <div className="col">
              {hoverImage ? (
                <img
                  src={product.img2}
                  alt={product.title}
                  onMouseLeave={() => setHoverImage(false)}
                  style={{ width: "280px", height: "280px" }}
                />
              ) : (
                <img
                  id={product.id}
                  onMouseEnter={() => setHoverImage(true)}
                  src={product.img1}
                  alt={product.title}
                />
              )}
            </div>

            <div className="text-content">
              <span>
                <em>{product.title}</em>
              </span>
              <br />
              <span style={{ fontWeight: "500", fontSize: "20px" }}>
                {product.subtitle}
              </span>
              <br />
              <span className="bottom-text" style={{ opacity: "0.6" }}>
                {product.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
