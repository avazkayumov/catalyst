import React, { Fragment, useState } from "react";
import styled from "styled-components";

import { ReactComponent as Stars } from "../assets/stars.svg";
import CatHealth from "./CatHealth";
import Formula from "./Formula";
import OneTime from "./OneTime";
import Purchase from "./Purchase";
import SubscribeDelivery from "./SubscribeDelivery";

const Form = () => {
  const [purchase, setPurchase] = useState(false);
  const [selected, setSelected] = useState(1);
  const purchaseTypes = ["Subscribe and Save", "One time purchase"];
  let [counter, setCounter] = useState(4);

  const [changeCats, setChangeCats] = useState([
    {
      id: 1,
      content: 1,
    },
    {
      id: 2,
      content: 2,
    },
    {
      id: 3,
      content: 3,
    },
  ]);

  return (
    <Wrapper>
      <div className="title-container">
        <p>Soft Wood Cat Litter</p>
        <h3>Cat Litter Healthy Cat Formula</h3>
      </div>

      <div className="rate-container">
        <Stars />
        <p>278 Reviews</p>
      </div>

      <Formula />
      <Purchase />

      <div className="select-purchase_buttons">
        {purchaseTypes.map((purchaseType, index) => {
          const id = "radio-" + purchaseType.split(" ").join("-");
          return (
            <Fragment>
              <input
                type="radio"
                name="purchase_type"
                id={id}
                hidden
                defaultChecked={index === 1}
                onClick={() => setPurchase(index === 0, true)}
              />
              <label htmlFor={id}>{purchaseType}</label>
            </Fragment>
          );
        })}
      </div>
      <p className="purchase_subtitle">
        Choose fewer shipments and we pass along the savings to you.
      </p>

      <div className="cats-count-container">
        <div className="cats-count_title">
          <b>3</b>
          <p>How many cats do you have?</p>
        </div>

        <div className="cats-count_buttons">
          {changeCats.map((cat, index) => {
            return (
              <Fragment key={cat.id}>
                <input
                  onClick={() => setSelected(cat.id)}
                  type="radio"
                  name="number-of-cats"
                  id={cat.content}
                  hidden
                  defaultChecked={index === 0}
                />
                <label className="count-buttons" htmlFor={cat.content}>{cat.content}</label>
              </Fragment>
            );
          })}
          <input type="radio" name="number-of-cats" id="4" hidden />
          <label
            className="count-label"
            htmlFor="4"
            onClick={() => setSelected(counter)}
          >
            <div
              className={counter === 4 ? "bg-color center" : "center"}
              onClick={() =>
                setCounter(counter === 4 ? (counter = 4) : counter - 1)
              }
            >
              -
            </div>
            <span>{counter}</span>
            <div
              className={counter === 8 ? "bg_color center" : "center"}
              onClick={() =>
                setCounter(counter === 8 ? (counter = 8) : counter + 1)
              }
            >
              +
            </div>
          </label>
        </div>
      </div>

      {purchase ? (
        <SubscribeDelivery selectedCat={selected} />
      ) : (
        <OneTime
          purchaseNumber={(catValue) => setSelected(catValue)}
          selectedCat={selected}
        />
      )}

      <CatHealth />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  background-color: #fff;
  padding: 31px 50px;

  @media (max-width: 475px) {
    padding: 31px 15px;
    width: 375px;
  }

  .title-container {
    width: 100%;
    margin-bottom: 15px;
    p {
      font-family: "Domine";
      font-style: normal;
      font-weight: 700;
      font-size: 25px;
      line-height: 29px;
      color: #ddad26;
    }
    h3 {
      font-family: "Domine";
      font-style: normal;
      font-weight: 700;
      font-size: 42px;
      line-height: 48px;
      text-transform: capitalize;
      color: #5d5d5d;
    }
  }

  .rate-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    p {
      color: #585757;
      font-size: 14px;
      font-family: Domine, serif;
    }
  }

  .select-purchase_buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 12px;
    cursor: pointer;

    .purchase_subtitle {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #5d5d5d;
    }

    label {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      border-radius: 4px;
      border: 1px solid #d5d5d5;

      font-family: "Domine";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      text-transform: capitalize;
      color: #5d5d5d;
      cursor: pointer;
      user-select: none;
    }

    label::before {
      content: " ";
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid black;
    }

    input:checked + label::before {
      background-color: #037847;
      border-color: white;
      outline: 1px solid #037847;
    }

    input:checked + label {
      background-color: #d5d5d5;
    }
  }

  .purchase_subtitle {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5d5d5d;
  }

  .cats-count-container {
    margin-bottom: 30px;
    margin-top: 30px;
    cursor: pointer;
    .cats-count_title {
      display: flex;
      gap: 7px;
      margin-bottom: 15px;
      b {
        width: 20.5px;
        height: 20.25px;
        background: #037847;
        border-radius: 33.75px;

        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 11.25px;
        line-height: 20px;
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

    .cats-count_buttons {
      display: flex;
      gap: 10px;

      .cats-count_active {
        background: #037847;
        color: white;
        border: 1px solid #037847;
      }

      label {
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #5d5d5d;
        border-radius: 5px;
       
        
        cursor: pointer;

      }
      @media (max-width: 375px) {
        .count-buttons {
          width: 120px;
        }
      }

      input:checked +  label {
        background: #037847;
        color: white;

        .bg-color {
          background-color: white;
          color: #d5d5d5;
          border-top: 1px solid #5d5d5d;
          border-bottom: 1px solid #5d5d5d;
          border-radius: 5px 0 0 5px;
        }
        .bg_color {
          background-color: white;
          color: #d5d5d5;
          border-top: 1px solid #5d5d5d;
          border-bottom: 1px solid #5d5d5d;
          border-radius: 0 5px 5px 0px;
        }
      }

      .count-label {
        width: 100%;
        border: 1px solid #5d5d5d;

        div {
          width: 100%;
          height: 40px;
          font-size: 21px;
          font-family: Domine, serif;
          text-align: center;
          background-color: transparent;
        }
        span {
          width: 143px;
          height: 40px;
          font-size: 16px;
          line-height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #5d5d5d;
          border-left: 1px solid #5d5d5d;
          border-right: 1px solid #5d5d5d;
          background-color: white;
          color: black;
        }
        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
