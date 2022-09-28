import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  width: ${(props) => props.width};
  border: 1px solid ${(props) => props.buttonColor};
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 1s;
  &:hover {
    background-color: ${(props) => props.backgroundColor};
    color: #fff;
    border: none;
  }
`;

export default function Button({
  product,
  buttonColor,
  buttonValue,
  backgroundColor,
  width,
  onClick,
}) {
  return (
    <StyledButton
      width={width}
      buttonColor={buttonColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {buttonValue}
    </StyledButton>
  );
}
