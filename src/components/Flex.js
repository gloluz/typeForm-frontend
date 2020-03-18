import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex: ${({ flex }) => flex || "0 1 auto"};
`;

export default Flex;
