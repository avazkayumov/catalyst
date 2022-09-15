import React, { useState } from "react";
import styled from "styled-components";

import { data } from "../Datas/PurchaseData";
import CatHealth from "./CatHealth";

const OneTime = ({ selectedCat, purchaseNumber }) => {
  const title = document.querySelector(".cathealth_title");

  return (
    <Wrapper>
      <div className="onetime_title">
        <b>4</b>
        <p>Select your delivery option</p>
      </div>

      <div className="onetime_prices">
        {data[`cat_${selectedCat}`]?.map((cat) => (
          <>
          <div className="onetime_buttons">

            <div className="onetime_lbs">
              <button
                onClick={() =>
                  purchaseNumber(
                    selectedCat === 1 ? (selectedCat = 1) : selectedCat - 1
                  )
                }
              >
                -
              </button>
              <div className="bold">
                <p>{cat.lbs}lbs</p> <span> for 1 month</span>
              </div>
              <button
                onClick={() =>
                  purchaseNumber(
                    selectedCat === 8 ? (selectedCat = 8) : selectedCat + 1
                  )
                }
                className="button-plus"
              >
                +
              </button>
            </div>

            <div className="onetime_price">
              <p>
                {" "}
                <span>${cat.price}</span>{" "}
                <span className="shipping">{cat.shipping}</span>
              </p>
              <b>Add To Cart</b>
            </div>
          </div>

          <h2 className="qualified_title">{cat.title}</h2>
          </>
        ))}
      </div>
    </Wrapper>
  );
};

export default OneTime;

const Wrapper = styled.div`
  .onetime_title {
    display: flex;
    gap: 7px;
    margin-bottom: 17px;

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

  .onetime_buttons {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 15px;

    @media (max-width: 375px) {
      .onetime_lbs  {
        grid-column: 1 / 4;
        width: 315px;
      } 

    }
  }
  .qualified_title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 28px;
    letter-spacing: 0.5px;
    color: #5d5d5d;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
  }

  .onetime_lbs {
    display: flex;
    width: 170px;
    min-height: 50px;
    border: 1px solid grey;

    button {
      height: 47px;
      width: 40%;
      background-color: white;
      padding: 6px 1px;
      border: none;
      border-right: 1px solid grey;
      cursor: pointer;
    }
    .button-plus {
      border: none;
      border-left: 1px solid grey;
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 100%;
      cursor: pointer;
      position: relative;
      top: 65%;
      transform: translateY(-50%);

      p {
        font-family: "Domine";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 100%;
        text-transform: capitalize;
        color: #1c1c1c;
      }
      span {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 100%;
        color: #1c1c1c;
      }
    }
  }

  .onetime_price {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #037847;
    padding: 15px;
    height: 50px;
    border-radius: 5px;

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      span {
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 22px;
        color: #ffffff;
        font-family: Montserrat;
        margin-right: 20px;
      }
      .shipping {
        font-size: 14px;
      }
    }
    b {
      cursor: pointer;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 19px;
      line-height: 23px;
      text-align: center;
      text-transform: capitalize;
      color: #ffffff;
    }
  }
`;
