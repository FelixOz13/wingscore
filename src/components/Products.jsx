import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Chilaquiles de la Casa Chica",
      price: "$126.00",
      description:"Chilaquiles Crujientes capeados con Huevo,Chorizo, Cebolla y queso , bañados en Salsa Roja servidos con frijoles refritos(Un poco picosos"
    },
    {
      image: product2,
      name: "Rancheros OUI",
      price: "$129.00",
      description:"Tamales elaborados en Casa con Suculenta carne de Puerco en Adobo., Fritos y Servidos con Huevos al Gusto y Frijoles Fritos"
    },
    {
      image: product3,
      name: "Ponciano",
      price: "$149.00",
      description:"Carne con Chile y Papa , Receta Tipica del Campo"
    },

    {
      image: product4,
      name: "Machaca Norteña con Huevo",
      price: "$169.00",
      description:" Platillo Regio carne seca importada de el Estado de Nuevo Leon hecha con Huevo Guisada con jitomate , cebolla y chile verde"
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          Los Favoritos de Todos los Tiempos!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>{product.description}</p>
             
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
     
      ${imageZoomEffect};
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
          object-fit: cover;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        font-size: 1.4rem;
        color: white;
        border-radius: 4rem;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d04);
        text-transform: uppercase;
        &:hover {
          background: linear-gradient(to right, #e85d04, #fc4958);
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
