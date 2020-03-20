import styled, { css } from "styled-components";
import { COLORS } from "../constants";
import PropTypes from "prop-types";

export const icons = [
  "arrow-right",
  "arrow-left",
  "star",
  "file-text",
  "trash",
  "check",
  "chevron-right",
  "chevron-left",
  "chevron-down",
  "chevron-up",
  "add"
];

const Icon = styled.i`
  font-family: "Formnest" !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: ${({ size }) => size || "20px"};

  ${({ color }) =>
    color &&
    css`
      color: ${COLORS[color]};
    `}
  
  ${({ icon }) =>
    icon === "arrow-right" &&
    css`
      &:before {
        content: "\\e909";
      }
    `}
  
  ${({ icon }) =>
    icon === "arrow-left" &&
    css`
      &:before {
        content: "\\e90a";
      }
    `}

  ${({ icon }) =>
    icon === "star" &&
    css`
      &:before {
        content: "\\e900";
      }
    `}

  ${({ icon }) =>
    icon === "file-text" &&
    css`
      &:before {
        content: "\\e901";
      }
    `}

  ${({ icon }) =>
    icon === "trash" &&
    css`
      &:before {
        content: "\\e902";
      }
    `}

  ${({ icon }) =>
    icon === "check" &&
    css`
      &:before {
        content: "\\e903";
      }
    `}

  ${({ icon }) =>
    icon === "chevron-right" &&
    css`
      &:before {
        content: "\\e904";
      }
    `}

  ${({ icon }) =>
    icon === "chevron-left" &&
    css`
      &:before {
        content: "\\e905";
      }
    `}

  ${({ icon }) =>
    icon === "chevron-down" &&
    css`
      &:before {
        content: "\\e906";
      }
    `}

  ${({ icon }) =>
    icon === "chevron-up" &&
    css`
      &:before {
        content: "\\e907";
      }
    `}

  ${({ icon }) =>
    icon === "add" &&
    css`
      &:before {
        content: "\\e908";
      }
    `}
`;

Icon.propTypes = {
  icon: PropTypes.oneOf(icons).isRequired,
  size: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(COLORS))
};

Icon.defaultProps = {
  size: "20px"
};

export default Icon;
