import React from "react";
import styled from "styled-components";

import {FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          
          <p>
            Alcanzanos atraves de nuestras redes sociales .
          </p>
          <ul>
             
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ouirestaurantbar/"
              className='icons-instagram'>
              <FaInstagramSquare />
            </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RestaurantOui"
              className='icons-fb'>
              <FaFacebook /></a>
            
            </li>
            <li>
               <a target="_blank" rel="noreferrer" href="https://web.whatsapp.com/+52 1 33 1416 7675"
                className='icons-whatsapp'>
                <FaWhatsapp />
               </a>
              
            </li>
          </ul>
         <div>
               <a target="_blank" rel="noreferrer" href="https://oui-sugerencias.netlify.app/">
                <button className="suggest">Quejas y Sugerencias</button>
               </a>
             </div> 
        </div>
         
        
           
            
          
       
        <div className="about container">
          <div className="title">
            <h3>Contacto</h3>
          </div>
          <p>+52 (33)615-36-41</p>
          <p>+52 (33)615-06-14</p>
          <p>ouirestauranty@yahoo.com</p>
          <p>Lopez Cotilla # 2171
            Col.Arcos Vallarta,
          Zapopan, Jalisco C.P 44130</p>
        </div>
          
        <div className="contact container">
          <div className="title">
            <h3>Acerca</h3>
          </div>
          <p>
            Un lugar de tradición en Guadalajara, desde su inicio se ha caracterizado por su arquitectura y diseño, su decoración integra la calidez de la madera con el latón, que rodea todo el Restaurant, creando así un ambiente inigualable 
          </p>
        </div>
      </Section>
      
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right,  darkred, #e85d04, darkred);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  } 
  

  
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
     padding: 0.8rem;
      border-radius: 2rem;
      background-color:black;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);}
          }
          
      
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: goldenrod;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
        &:hover {
        }
      }
    }
  }
  button{
    background-color:black;
  border-radius: 10px;
  color: white;
  transition-duration: 0.4s;
  margin-top: 55px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;}
  
  img {
    filter: brightness(0) invert(1);
    width: 10vw;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
 
  
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
      
    }
  }
`;

styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;

  h2 {
    span {
    color: #fc4958;
    text - transform: uppercase;
  }
}
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      span {
        display: block;
      }
    }
  }
`;
