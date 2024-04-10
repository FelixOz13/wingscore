import React, { useState } from "react";
import styled from "styled-components";
import foodYummy from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <>
      <Nav>
        <div className="brand">
          <img src={foodYummy} alt="Icon" style={{ width: "160px", borderRadius:'80px', border:'groove', borderWidth:'5px' ,borderColor:'yellow'}} />
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
        </div>
        <ul className="links">
          <li>
            <a href="#home" className="active">
              Inicio
            </a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#testimonials">Menu</a>
          </li>
          
         
          <li>
            <a href="#products">Platillos</a>
          </li>
          <li>
            <a href="#newsletter">Reservaciones</a>
          </li>
           <li>
            <a href= "https://oui-sugerencias.netlify.app/">Sugerencias</a>
          </li>
        </ul>
      </Nav>
      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <ul>
          <li>
            <a
              href="#inicio"
              className="active"
              onClick={() => setNavbarState(false)}
            >
              Inicio
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setNavbarState(false)}>
              Servicio
            </a>
          </li>
          
           <li>
            <a href="#testimonials" onClick={() => setNavbarState(false)}>
               Menu
            </a>
          </li>
          
          <li>
            <a href="#products" onClick={() => setNavbarState(false)}>
              Platillos
            </a>
          </li>
          <li>
            <a href="#newsletter" onClick={() => setNavbarState(false)}>
              Reservaciones
            </a>
          </li>
           <li>
            <a href="https://oui-sugerencias.netlify.app/" onClick={() => setNavbarState(false)}>
              Sugerencias
            </a>
          </li>
        </ul>
      </ResponsiveNav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  background-color:black;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  .brand {
    img {
      margin-top: 1rem;
      cursor: pointer;
    }
    .toggle {
      display: none;
    }
  }
  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        color: white;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: goldenrod;
        }
      }
      .active {
        color: black;
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      top: 0;
      .toggle {
        display: block;
      }
    }
    .links {
      display: none;
    }
  }
`;
const ResponsiveNav = styled.div`
  position: fixed;
  right: -100vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.3s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  ul {
    list-style-type: none;
    width: 100%;
    margin-top: 3rem;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: darkred;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #fc4958;
        }
      }
      &:first-of-type {
        a {
          color: darkred;
          font-weight: 900;
        }
      }
    }
  }
`;
