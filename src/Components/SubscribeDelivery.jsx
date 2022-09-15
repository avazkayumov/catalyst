import React, { Fragment } from "react";
import styled from "styled-components";

import { data } from "../Datas/SubscribeData";
import CatHealth from "./CatHealth";

const SubscribeDelivery = ({ selectedCat }) => {
  return (
    <Wrapper>
      <div className="subscribe-delivery_title">
        <b>4</b>
        <p>Select your delivery option</p>
      </div>

      <div className="subcsribe-delivery_prices">
        {data[`cat_${selectedCat}`]?.map((cat, index) => (
          <Fragment>
            <input
              type="radio"
              name="checked-cat"
              id={cat.lbs}
              hidden
              defaultChecked={index === 0}
            />
            <label htmlFor={cat.lbs}>
              <div className="month-lbs">
                <p className="bold">Every {cat.month} Month</p>
                <p>{cat.lbs}lbs</p>
              </div>
              <div className="price">
                <p className="bold">${cat.price}</p>
                <p>${cat.perMonth}/Month</p>
              </div>
            </label>
          </Fragment>
        ))}
      </div>
      <Button>ADD TO CARD</Button>

    </Wrapper>
  );
};

export default SubscribeDelivery;

const Wrapper = styled.div`
  .subscribe-delivery_title {
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

  .subcsribe-delivery_prices {
    display: flex;
    gap: 10px;
  }

  label {
    width: 100%;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    padding: 12px 10px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  input:checked + label {
    background-color: #037847;
    color: white;
  }

  .bold {
    font-weight: 900;
  }

  .month-lbs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;

    p {
      font-size: 16px;
      font-family: Domine, serif;
    }
  }
  .price {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-family: Domine, serif;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  height: 53px;
  background: #037847;
  border-radius: 5px;
  border: none;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;
