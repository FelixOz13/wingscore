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
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/win65core/"
              className='icons-instagram' style={{color:"yellow"}}>
              <FaInstagramSquare />
            </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/win65core"
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
        </div>
         
        
           
            
          
       
        <div className="about container">
          <div className="title">
            <h3>Contacto</h3>
          </div>
          <p>+52 (33)2305-0655</p>
          
          <p>isaotakata@hotmail.com</p>
          <p>
          Av Aztlán 3588-Int 13, Cd del Sol, 45050 Zapopan, Jal.</p>
        </div>
          
        <div className="contact container">
          <div className="title">
            <h3>Acerca</h3>
          </div>
          <p>
            Un lugar para disfrutar de lo deportes y botanas y amistades en Ciudad del Sol!
          </p>
        </div>
      </Section>
      
    </div>
  );
}

const Section = styled.footer`
  margin: 0;
  background-color: yellow;
  color: black;
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
        background-color: yellow;
        svg {
          transform: scale(1.2);}
          }
          
      
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: yellow;
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
  background-color: yellow;
  color: white;
  padding: 1rem;

  h2 {
    span {
    color:yellow;
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
