import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: ${({ width }) => width || 1330}px;
  max-width: 100%;
  padding: 0 24px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 12px;
  }
`;

export default Container;
