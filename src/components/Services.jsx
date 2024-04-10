import React from "react";
import styled from "styled-components";
import Services1 from "../assets/mug.png";
import Services2 from "../assets/wingsicon.png";
import Services3 from "../assets/pizzaicon.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">
        Av Aztlán 3588-Int 13, Cd del Sol, 45050 Zapopan, Jal.</h1>
        <p>
          Ven a disfrutar de los partidos y deportes mas emocionantes del momento,
          Cerveza Fria , Variedad de Sabores en Alitas, Hamburguesas deliciosas, Pizzas y mucho mas , Ven a Probar.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            Pizzas Hechas en Casa con Variedad de Ingredientes<br/>
             <span>Alitas, Pizzas, Hamburguesas y Mucho mas</span>{" "} 
          
          </p>
          
          
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            Cervezas Frias Importadas y Nacionales <span>Prueba nuestras promociones en Cerveza de Barril</span>{" "}
             500ml y Litros.
          </p>
          
         
          
        </div>
        <div className="service">
          <img src={Services3} alt="" />
           <p>
            Variedad de Sabores en Alitas. y Pizzas Hechas en Casa{" "}
            para disfrutar de una tarde excepcional.
          </p>
          
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 2rem 4rem;
  ${TitleStyles};
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10vw;
    margin-top: 4rem;
    .service {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5vw;
      padding: 0 3vw;
      img {
        height: 2.8rem;
      }
      p {
        text-align: center;
        line-height: 2rem;
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
      }
      button {
        padding: 0.6rem 3rem;
        letter-spacing: 0.2rem;
        border-radius: 2rem;
        font-size: 1.1rem;
        border: none;
        color: white;
        background-color: #fc4958;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f9c74f;
        }
      }
    }
    .yellow {
      button {
        background-color: #f9c74f;
        &:hover {
          background-color: #fc4958;
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    margin: 2rem;
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
