import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SqaureCard from "../Card/SqaureCard";

const Products = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductSection>
      <div className="headerProducts">
        <div className="productName">
          <div className="product">
            <span>New products</span>
            <div className="horizontalSection"></div>
          </div>
          <div className="arrowSection">
            <img src="../Photo/arrow2.png" />
            <img src="../Photo/arrow1.png" />
          </div>
        </div>
        <div className="productFilter">
          <div className="filter">
            <li>Apparel</li>
            <li>Accessories</li>
            <li>Best sellers</li>
            <li>50% off</li>
          </div>
          <div className="items">
            {productData.map((product) => (
              <SqaureCard
                key={product.id}
                imageSrc={product.image}
                productName={product.title}
                productDescription={product.description}
                productPrice={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </ProductSection>
  );
};

const ProductSection = styled.section`
  width: 100%;
  min-height: 70vh;

  .headerProducts {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .productName {
    width: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
  .productName span {
    font-size: 3rem;
    font-weight: 600;
  }

  .arrowSection {
    display: flex;
    gap: 20px;
  }
  .horizontalSection {
    width: 25vw;
    height: 0.2vh;
    background-color: black;
  }

  .productFilter {
    width: 90%;
    display: flex;
    margin-top: 2rem;
  }
  .filter {
    width: 20%;
    list-style: none;
  }
  .filter li {
    padding-bottom: 25px;
  }
  .items {
    width: 80%;
    display: flex;
    overflow-x: scroll;
    cursor: pointer;
  }
  .items::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 576px) {
    .productName span {
      font-size: 2rem;
    }
    .productName {
      width: 90%;
      margin-top: 1rem;
    }
    .horizontalSection {
      width: 50vw;
    }
    .productFilter {
      width: 90%;
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .filter {
      width: 90%;
      list-style: none;
      display: flex;
    }
    .filter li {
      padding-bottom: 5px;
      padding-left: 10px;
      font-size: 0.9rem;
      font-weight: 400;
    }
    .items {
      width: 100%;
    }
  }
`;

export default Products;
