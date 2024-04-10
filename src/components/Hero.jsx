import React from "react";
import styled from "styled-components";
import hero from "../assets/combos.jpeg";
import heroDesign from "../assets/alitas.jpeg";
export default function Hero() {
  return (
    <Section id="home">
      <div className="background">
        <img src={hero} alt="sofa" />
      </div>
      <div className="content">
        <div className="sale">
          <img src={heroDesign} alt="" />
          
        </div>
        <div className="info">
          <h2>Sports Bar</h2>
          <h5>
            Ven a Probar Alitas, Botanas  Hamburguesas, Pizzas y Las Cervezas mas frias en Colonia cd del Sol!
          </h5>
          
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
  .background {
    height: 100%;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      filter: brightness(60%);
    }
  }
  .content {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .sale {
      position: relative;
      left: 5%;
      img {
        height: 70vh;
      }
      h1 {
        color: black;
        position: absolute;
        top: 25vh;
        left: 25vh;
        font-size: 4.5rem;
        span {
          display: block;
          font-size: 5vw;
        }
      }
    }
    .info {
      position: absolute;
      top: 20%;
      right: 10%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
      h2 {
        color: #f9c74f;
        font-size: 4rem;
        letter-spacing: 0.5rem;
        background-color:black;
        border-radius:10px;
        padding:5px;
      }
     
      h5 {
        color: white;
        font-style:bold;
        width: 40%;
        text-align: end;
        font-size: 1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
        background-color:black;
        border-radius:10px;
        padding:15px;
      }
     
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .content {
      flex-direction: column;
      .sale {
        display: none;
      }
      .info {
        top: 25%;
        h2 {
          font-size: 2rem;
        }
        em {
          width: 90%;
        }
      }
    }
  }
`;
