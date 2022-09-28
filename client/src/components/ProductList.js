import React, { useContext } from "react";
import styled from "styled-components";
import { ProductContext } from "../ProductContext";
import Button from "./Button";
import Header from "./Header";
import Catagory from "./Catagory";
import Wrapper from "./Wrapper";

const Ul = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 0.5rem 1rem;
`;

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Li = styled.li`
  font-size: 0.8rem;
`;

const StyledProductAction = styled.div`
  display: flex;
  gap: 5px;
`;

const StyledProductList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function ProductList() {
  const { newproducts, buttonValues, handleDelete, handleUpdate } =
    useContext(ProductContext);
  console.log("button values", buttonValues);
  return (
    <>
      <Header />
      <Wrapper>
        <StyledProductList>
          <div>
            <Catagory />
          </div>

          <div>
            <div>Product List</div>
            {newproducts.map((product) => {
              return (
                <Ul key={product._id}>
                  <StyledProductInfo>
                    <Li>
                      <strong>Product name:</strong> {product.name}
                    </Li>
                    <Li>
                      <strong>Price:</strong> {product.price}
                    </Li>
                  </StyledProductInfo>
                  <StyledProductAction>
                    <Button
                      width='auto'
                      buttonColor='red'
                      backgroundColor='#F44336'
                      buttonValue='Delete'
                      product={product}
                      onClick={() => handleDelete(product._id)}
                    />
                    <Button
                      width='auto'
                      backgroundColor='#3f51b5'
                      buttonColor='#3f51b5'
                      buttonValue='Update'
                      product={product}
                      onClick={() => handleUpdate(product._id)}
                    />
                  </StyledProductAction>
                </Ul>
              );
            })}
          </div>
        </StyledProductList>
      </Wrapper>
    </>
  );
}

export default ProductList;
