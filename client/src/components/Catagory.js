import React, { useContext } from "react";
import ProductContext from "../ProductContext";
import styled from "styled-components";

const StyledCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 0;
  background-color: transparent;
  min-width: 150px;
  max-width: 300px;
  border: 1px solid #3f51b5;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 1s;
  &:hover {
    background-color: #3f51b5;
    color: #fff;
  }
`;

const greaterThan = " >= 20";

function Catagory() {
  const { handleFilter } = useContext(ProductContext);
  return (
    <>
      <StyledCategory>
        <h4>Price</h4>
        <StyledButton onClick={() => handleFilter("price")}>
          {greaterThan}
        </StyledButton>
        <h4>Departement</h4>
        <StyledButton onClick={() => handleFilter("stationary")}>
          Stationary
        </StyledButton>
        <StyledButton onClick={() => handleFilter("clothing")}>
          Clothing and Shoes
        </StyledButton>
      </StyledCategory>
    </>
  );
}

export default Catagory;
