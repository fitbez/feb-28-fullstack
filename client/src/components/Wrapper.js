import styled from "styled-components";

const StyledWrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  background-color: #f4f4f4;
  text-align: center;
`;

function Wrapper(props) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

export default Wrapper;
