import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: #3f51b5;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  color: #fff;
`;

function Header() {
  return (
    <StyledHeader>
      <div className='logo' style={{ fontSize: "2rem", marginLeft: "2rem" }}>
        {" "}
        Product
      </div>
      <div className='menu-item'>
        <ul style={styleMenuItem}>
          <Link to='/' style={styleListItems}>
            Home
          </Link>
          <Link to='/product-entry' style={styleListItems}>
            Product Entry
          </Link>
          <Link to='/product-list' style={styleListItems}>
            Product List
          </Link>
        </ul>
      </div>
    </StyledHeader>
  );
}

const styleMenuItem = {
  display: "flex",
  justifyContnet: "center",
  gap: "0.5rem",
  listStyle: "none",
  marginRight: "2rem",
};

const styleListItems = {
  cursor: "pointer",
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    color: "#f4f4f4f",
  },
};

export default Header;
