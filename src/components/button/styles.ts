import { IButton } from "./button";
import styled, { css } from "styled-components";

const typeButton: any = {
  primary: css`
    color: ${(props) => props.theme.button.colorBtnPrimary};
    background-color: ${(props) => props.theme.button.bgBtnPrimary};
    border: none;
    &:hover {
      background-color: ${(props) => props.theme.button.bgBtnPrimaryHover};
    }
    &:focus {
      background-color: ${(props) => props.theme.button.bgBtnPrimaryFocus};
    }
  `,
  outline: css`
    color: ${(props) => props.theme.button.bgBtnPrimary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.button.bgBtnPrimary};

    &:hover {
      background-color: ${(props) => props.theme.button.bgBtnPrimaryHover};
      color: ${(props) => props.theme.button.colorBtnPrimary};
      border: 1px solid transparent;
    }

    &:focus {
      background-color: ${(props) => props.theme.button.bgBtnPrimaryFocus};
      color: ${(props) => props.theme.button.colorBtnPrimary};
    }
  `,
  text: css`
    color: ${(props) => props.theme.button.bgBtnPrimary};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.button.borderBtnText};

    &:hover {
      background-color: ${(props) => props.theme.button.bgBtnPrimaryHover};
      color: ${(props) => props.theme.button.colorBtnPrimary};
      border: 1px solid transparent;
    }
  `,
  danger: css`
    color: ${(props) => props.theme.button.colorBtnPrimary};
    background-color: #ff3b3b;
    border: none;
    &:hover {
      background-color: #de4747;
    }
    &:focus {
      background-color: #de4747;
    }
  `,
};

const sizeButton: any = {
  small: css`
    padding: 6px 24px;
    height: 24px;
    font-size: 10px;
  `,
  medium: css`
    padding: 8px 24px;
    height: 32px;
    font-size: 12px;
  `,
  large: css`
    padding: 6px 24px;
    height: 40px;
    font-size: 14px;
  `,
};

const disabled = css`
  cursor: not-allowed;
  background: ${(props) => props.theme.button.bgBtnDisabled};
  color: ${(props) => props.theme.button.colorBtnDisabled};
  border: 1px solid;

  &:hover {
    background: ${(props) => props.theme.button.bgBtnDisabled};
    color: ${(props) => props.theme.button.colorBtnDisabled};
    border: 1px solid;
  }
`;

export const Container = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 500;
  letter-spacing: 0.2px;
  border-radius: 4px;
  width: fit-content;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;
  ${(props) => props.type && typeButton[props.type]}
  ${(props) => props.size && sizeButton[props.size]}
  ${(props) => props.disabled && disabled}
`;

export const Span = styled.span`
  position: relative;
  top: 1px;
`;
