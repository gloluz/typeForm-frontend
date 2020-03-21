import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FlexStyled = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "flex-start"};
  align-items: ${({ align }) => align || "flex-start"};
  flex-direction: ${({ direction }) => direction || "row"};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex: ${({ flex }) => flex || "0 1 auto"};
`;

const Flex = ({ ...props }) => <FlexStyled {...props} />;

Flex.propTypes = {
  flex: PropTypes.string,
  justify: PropTypes.oneOf([
    "flex-start",
    "space-between",
    "space-around",
    "center",
    "flex-end"
  ]),
  align: PropTypes.oneOf([
    "flex-start",
    "space-between",
    "space-around",
    "center",
    "flex-end"
  ]),
  direction: PropTypes.oneOf([
    "row",
    "column",
    "row-reverse",
    "column-reverse"
  ]),
  wrap: PropTypes.bool
};

export default Flex;
