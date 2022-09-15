import React from "react";
import styled from "styled-components";

const Formula = () => {
  return (
    <Wrapper>
      <div className="select-formula_title">
        <b>1</b>
        <p>Select a formula</p>
      </div>
      <div className="select-formula_infos">
        <div className="select-formula_buttons">
          <button className="active">Healthy cat</button>
          <button>Multi-cat</button>
          <button>Unscented</button>
        </div>
        <p>
          Catalyst Healthy Cat is the only cat litter engineered from upcycled
          soft wood fiber to offer performance and peace of mind.
        </p>
      </div>
    </Wrapper>
  );
};

export default Formula;

const Wrapper = styled.div`
    margin-bottom: 30px;
    width: 100%;

    @media (max-width: 375px) {
      width: 356px;
    }

    .select-formula_title {
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
    .select-formula_infos {
      width: 100%;
      .select-formula_buttons {
        display: flex;
        gap: 10px;
        margin-bottom: 12px;

        @media (max-width: 375px) {
          button {
            width: 100px;
          }
        }

        button {
          width: 100%;
          height: 38px;
          border-radius: 5px;
          background-color: white;
          border: none;

          font-family: "Domine";
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          color: #1c1c1c;
          cursor: pointer;
        }
        button:nth-child(2), button:nth-child(3) {
          border: 1px solid grey;
        }
        .active {
          background: #037847;
          border: 1px solid #037847;
          color: #ffffff;
        }
      }
      p {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: #1c1c1c;
      }
    }
`;
