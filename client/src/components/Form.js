import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../ProductContext";
import Header from "./Header";
import Button from "./Button";
import Wrapper from "./Wrapper";

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const ProductName = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const ProductPrice = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const StyledForm = styled.form`
  display: flex;
  width: auto;
  margin: auto;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Label = styled.label`
  color: #333;
`;

const Form = function () {
  const { handleChange, handleSubmit, newProduct, product } =
    useContext(ProductContext);

  const { name, price } = newProduct;
  return (
    <>
      <Header />
      <Wrapper>
        <Title>Product Entry Form</Title>
        <StyledForm>
          <div style={styledProduct}>
            <Label forhtml='name'>Product name: </Label>
            <ProductName
              type='text'
              name='name'
              value={product.name}
              id='name'
              placeholder='product name'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <Label forhtml='price'>Product price: </Label>
            <ProductPrice
              type='text'
              name='price'
              value={product.price}
              id='price'
              placeholder='price'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <Button
            width='100%'
            buttonValue='Submit'
            backgroundColor='#3f51b5'
            buttonColor='#3f51b5'
            onClick={(e) => handleSubmit(e)}
          />
        </StyledForm>
      </Wrapper>
    </>
  );
};

const styledProduct = {
  display: "flex",
  gap: "8px",
};

export default Form;
