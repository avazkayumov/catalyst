import React from "react";
import styled from "styled-components";

const Purchase = (props) => {
  return (
    <Wrapper>
      <div className="select-purchase_title">
        <b>2</b>
        <p>Select your purchase type</p>
      </div>
    </Wrapper>
  );
};

export default Purchase;

const Wrapper = styled.div`
  margin-bottom: 12px;
  .select-purchase_title {
    display: flex;
    gap: 7px;
    b {
      width: 20.5px;
      height: 20.25px;
      background: #037847;
      border-radius: 33.75px;

      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 11.25px;
      line-height: 22px;
      color: #ffffff;
      text-align: center;
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #5d5d5d;
    }
  }
`;
