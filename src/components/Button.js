import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { COLORS } from "../constants";
import { icons } from "./Icon";
import Icon from "./Icon";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 0 16px;
  height: 50px;
  border: 1px solid transparent;
  font-family: "Averta", sans-serif;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all ease;
  outline: none;


  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ hasCenteredIcon, size }) =>
    hasCenteredIcon &&
    size === "small" &&
    css`
      padding: 0;
      width: 40px;
      justify-content: center;
    `}

    ${({ hasCenteredIcon, size }) =>
      hasCenteredIcon &&
      size === "big" &&
      css`
        padding: 0;
        width: 50px;
        justify-content: center;
      `}

  ${({ size }) =>
    size === "small" &&
    css`
      font-size: 14px;
      height: 40px;
    `}

  ${({ color }) => css`
    &:not(:disabled):focus {
      box-shadow: 0 0 0 1px ${COLORS[color]};
    }
  `};

  ${({ appearance, color }) =>
    appearance === "fill" &&
    css`
      background-color: ${COLORS[color]};
      border-color: ${COLORS[color]};
      color: ${COLORS.white};

      &:not(:disabled):hover {
        background-color: transparent;
        border-color: ${COLORS[color]};
        color: ${COLORS[color]};
      }
    `}

  ${({ appearance, color }) =>
    appearance === "outline" &&
    css`
      background-color: transparent;
      border-color: ${COLORS[color]};
      color: ${COLORS[color]};

      &:not(:disabled):hover {
        background-color: ${COLORS[color]};
        border-color: ${COLORS[color]};
        color: ${COLORS.white};
      }
    `}

  ${({ appearance, color }) =>
    appearance === "text" &&
    css`
      border-color: transparent;
      background: transparent;
      color: ${COLORS[color]};

      &:not(:disabled):hover {
        border-color: ${COLORS[color]};
      }
    `}

  ${({ appearance, color }) =>
    appearance === "bgWhite" &&
    css`
      background: ${COLORS.white};
      color: ${COLORS[color]};

      &:not(:disabled):hover {
        border-color: ${COLORS[color]};
      }
    `}

`;

const Button = ({
  children,
  appearance,
  color,
  iconAfter,
  iconCenter,
  iconBefore,
  onClick,
  size,
  iconSize,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      appearance={appearance}
      color={color}
      onClick={onClick}
      disabled={disabled}
      hasCenteredIcon={iconCenter !== undefined}
      size={size || "big"}
      {...props}
    >
      {iconBefore && (
        <Icon
          icon={iconBefore}
          size={iconSize || "18px"}
          style={{ marginRight: 8, marginLeft: -2 }}
        />
      )}
      {iconCenter && (
        <Icon
          icon={iconCenter}
          size={iconSize || "18px"}
          style={{ marginRight: -2, marginLeft: -2 }}
        />
      )}
      {children}
      {iconAfter && (
        <Icon
          icon={iconAfter}
          size={iconSize || "18px"}
          style={{ marginLeft: 8, marginRight: -2 }}
        />
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  appearance: PropTypes.oneOf(["fill", "text", "outline", "bgWhite"])
    .isRequired,
  color: PropTypes.oneOf(Object.keys(COLORS)).isRequired,
  iconAfter: PropTypes.oneOf(icons),
  iconCenter: PropTypes.oneOf(icons),
  iconBefore: PropTypes.oneOf(icons),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "big"]),
  disabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  size: "big"
};

export default Button;
