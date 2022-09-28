import React from "react";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Wrapper from "./Wrapper";

const StyledHomeWrapper = styled.div`
  width: auto;
  padding: 2rem;
`;

function HomeWrapper() {
  return (
    <>
      <StyledHomeWrapper>
        <Register />
        <Login />
      </StyledHomeWrapper>
    </>
  );
}

export default HomeWrapper;
