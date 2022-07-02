import React from "react";
import styled from "styled-components";

import menu1 from "../assets/ouimenu6.png";
import menu2 from "../assets/ouimenu2.png";
import menu3 from "../assets/ouimenu4.jpg";
import menu4 from "../assets/ouimenu5.png";
import menu5 from "../assets/ouimenu3.png";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>Nuestro Menu Completo</span>
          </h1>
        </div>

        <div className="testimonials">
          
          
         

          <div className="testimonial">
            <div className="image">
              <img src={menu1} alt="" />
            
           </div> 
          </div>

          <div className="testimonial">
            <div className="image">
              <img src={menu2} alt="" />
            </div>
           </div>

          <div className="testimonial">
            <div className="image">
              <img src={menu3} alt="" />
            </div>
            </div>

            <div className="testimonial">
            <div className="image">
              <img src={menu4} alt="" />
            </div>
          </div>
          
              <div className="testimonial">
            <div className="image">
              <img src={menu5} alt="" />
            </div>
            </div>
            
          
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
 
  
    
    ${TitleStyles};
    .title {
      position: absolute;
      top: -5rem;
      left: 25%;
      padding: 0 2rem;
      background-color: goldenrod;
    }
    .testimonials {
      display: flex;
      
        flex-direction:column;
        flex-wrap:wrap;
      justify-content: space-between;
      align-items: center;
      gap: .1vw;
      margin-top: 2vw;
      margin:auto;
     
      
      .testimonial {
        padding: 0 0vw;
       align-items: center;
        text-align: center;
        gap: .3rem;
        
        
        }
        ${imageZoomEffect};
        .image {
          overflow: visible;
          width: max-content;
          max-height: 55rem;
          
          img {
            margin-top: 3.5vw;
            height: 40rem;
            width: 25rem;
            
             
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
