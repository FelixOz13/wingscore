import React from "react";
import styled from "styled-components";

import menu1 from "../assets/menu1.jpeg";
import menu2 from "../assets/menu2.jpeg";
import menu3 from "../assets/menu3.jpeg";
import menu4 from "../assets/menu4.jpeg";
import menu5 from "../assets/menu5.jpeg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title" style={{ marginTop: "50px" }}>
          <h1>
            <span>Nuestro Menu</span>
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
      background-color:black;
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
            margin-top: 8.5vw;
            height: 40rem;
            width: 20rem;
            
             
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
