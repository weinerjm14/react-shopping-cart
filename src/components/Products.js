import React, { useContext } from "react";

// Components
import Product from "./Product";
import { ProductsContext } from "../contexts/ProductContext";

const Products = () => {
  const { products, addItem } = useContext(ProductsContext);
  return (
    console.log(products),
    (
      <div className="products-container">
        {products.map(product => (
          <Product key={product.id} product={product} addItem={addItem} />
        ))}
      </div>
    )
  );
};

export default Products;
