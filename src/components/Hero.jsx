import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpg";
import heroDesign from "../assets/HeroDesign.png";
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
          <h2>Bienvenido</h2>
          <h5>
            Ven y Desayuna en un Lugar muy exlcusivo de Guadalajara con 50 años de Tradicion
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
      left: 10%;
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
      top: 5%;
      left: 20%;
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
