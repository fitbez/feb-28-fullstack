import React, { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { ProductContext } from "../ProductContext";

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

function Register() {
  const { handleUserChange, handleUserSubmit } = useContext(ProductContext);
  return (
    <>
      <div>Register</div>
      <StyledLoginWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='username'>Username:</StyledLabel>
          <StyledInput
            type='text'
            placeholder='enter your username'
            name='username'
            onChange={(e) => handleUserChange(e)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='email'>Email:</StyledLabel>
          <StyledInput
            type='email'
            placeholder='enter your email'
            name='email'
            onChange={(e) => handleUserChange(e)}
          />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <StyledLabel htmlFor='password'>Password:</StyledLabel>
          <StyledInput
            type='password'
            placeholder='enter your password'
            name='password'
            onChange={(e) => handleUserChange(e)}
          />
        </StyledInputWrapper>
        <Button
          width='100%'
          buttonValue='Register'
          backgroundColor='#3f51b5'
          buttonColor='#3f51b5'
          onClick={(e) => handleUserSubmit(e)}
        />
      </StyledLoginWrapper>
    </>
  );
}

export default Register;
