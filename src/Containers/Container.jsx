import React from "react";
import styled from "styled-components";
import Carousel from "../Components/Carousel";
import Form from "../Components/Form";

const Container = () => {
  return (
    <Wrapper>
      <Carousel />
      <Form />
    </Wrapper>
  );
};

export default Container;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

  @media (max-width: 375px) {
    background-color: red;
  }
 `;
