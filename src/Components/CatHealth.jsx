import React from "react";
import styled from "styled-components";

import CatHealthImg from "../assets/cat-health.png";

const CatHealth = () => {
  return (
    <Wrapper>
      <div className="cathealth_content">
        <img src={CatHealthImg} alt="" />
        <p>
          Catalyst Healthy Cat is the only cat litter engineered from upcycled
          soft wood fiber to offer performance and peace of mind. It leads in
          Superior Odor Control, Unrivaled Cat Acceptance, Great Clumping, Low
          Dust and Light Weight
        </p>
      </div>
    </Wrapper>
  );
};

export default CatHealth;

const Wrapper = styled.div`
  margin-top: 30px;

  .cathealth_content {
    text-align: center;
    background: #edf4f1;
    border: 1px solid #f6f6f6;
    border-radius: 8px;
    padding: 11px 20px;
    img {
      margin-bottom: 20px;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
      color: #5d5d5d;
    }
  }
`;
