import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";
import product4 from "../assets/product4.jpeg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Products() {
  const data = [
    {
      image: product2,
      name: "Win65core Classic Burger",
      price: "Empezando  desde $99.00",
      description:"150gr de carne de res o pollo, queso americano, vegetales,pepinillos y aderezo win65core acompañada con nuestras salsas especiales opcion de doble y triple carne o la increible tamaño Superbowl"
    },
    {
      image: product1,
      name: "15 Sabores de Alitas",
      price: "$79.00 - $129.00",
      description:"Alitas Picositas Buffalo con Distintos Sabores de Intensidad y Sabores Agradables de mas baja Intensidad"
    },
    {
      image: product3,
      name: "Pizzas con Variedad de Ingredientes",
      price: "$89.00 - $149.00",
      description:"Pizzas hechas en Casa con distinas combinaciones de Ingredientes Para Cenar"
    },

    {
      image: product4,
      name: "Ensaladas",
      price: "$99.00 - $150.00",
      description:"Ensaladas, Sandwiches, y Variedad de Botanas"
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
    fontFamily: 'Bungee Spice'
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
