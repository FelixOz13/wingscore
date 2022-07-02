import React from "react";
import styled from "styled-components";
import Services1 from "../assets/Services1.png";
import Services2 from "../assets/Services2.png";
import Services3 from "../assets/Services3.png";
import { TitleStyles } from "./ReusableStyles";
export default function Services() {
  return (
    <Section id="services">
      <div className="title">
        <h1 className="yellow">Lopez Cotilla #2171
        Col.Arcos Vallarta, Guadalajara, Jalisco</h1>
        <p>
          Ven y Prueba Desayunos Tipicos e Internacionales,
          Jugos 100% Naturales Elaborados  a Diario y con Los Mas Frescos Citricos. Pan Hecho en Casa Y  el mejor café gourmet de grano.
        </p>
      </div>
      <div className="services">
        <div className="service">
          <img src={Services2} alt="" />
          <p>
            Amplio Menu para Desayunar<br/>
             <span>Chilaquiles Famosos de la Casa Chica</span>{" "} y
            Desayunos Tipicos 
          </p>
          
          
        </div>
        <div className="service yellow">
          <img src={Services1} alt="" />
          <p>
            Jugos 100% Naturales. <span>Jugos Citricos Frescos</span>{" "}
             100% Naturales preparados diario.
          </p>
          
         
          
        </div>
        <div className="service">
          <img src={Services3} alt="" />
           <p>
            Cafe de Granos Organicos. y Pan Hecho en Casa{" "}
            para un buen despertar.
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
