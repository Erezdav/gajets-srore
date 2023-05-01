import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg2 from "../assets/hero-bcg.svg";
import heroBcg from "../assets/hero-bcg-2.svg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1> We enjoy our gadjets</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          temporibus odit quod illum laborum rerum. Animi, facere recusandae?
          Qui vitae eaque nemo a, animi sint ad quasi quisquam repellendus
          maxime.
        </p>
        <Link to="products" className="btn hero-btn">
          shop now
        </Link>
        <article className="img-container">
          <img src={heroBcg} alt="table picture" className="main-img" />
          <img src={heroBcg2} alt="table picture" className="accent-img" />
        </article>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 65vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 1rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.75rem;
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
      
    }
    .main-img {
      
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    
        
      }
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    // .img-container::before {
    //   content: "";
    //   position: absolute;
    //   width: 10%;
    //   height: 80%;
    //   background: var(--clr-primary-9);
    //   bottom: 0%;
    //   left: -8%;
    //   border-radius: var(--radius);
    // }
  }
`;

export default Hero;
