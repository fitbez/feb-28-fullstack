import React from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  outline: none;
  border: 1px solid 3f51b5
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const StyledLoginWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  text-align: left;
`;

function Login() {
  return (
    <StyledLoginWrapper>
      <div>Login</div>
      <div>
        <StyledInputWrapper>
          <StyledLabel htmlFor='username'>Username:</StyledLabel>
          <StyledInput type='text' placeholder='enter your username' />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='password'>Password:</StyledLabel>
          <StyledInput type='text' placeholder='enter your password' />
        </StyledInputWrapper>
      </div>
      <Button
        width='30%'
        buttonValue='Login'
        backgroundColor='#3f51b5'
        buttonColor='#3f51b5'
      />
    </StyledLoginWrapper>
  );
}

export default Login;
