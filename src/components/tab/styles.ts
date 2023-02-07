import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const Container = styled.div<any>`
  display: flex;
  gap: 10px;
  flex-direction: column;
  color: ${(props) => props.theme.default.color};
  width: 100%;
`;
export const Content = styled.div<any>`
  position: relative;
  display: flex;
  gap: 15px;
  border-bottom: 1px solid ${(props) => props.theme.line.color};
  ${(props: any) => props.styleContentActive && styleContentActive[props.styleContentActive]}
`;

export const ContainerTitle = styled.div<any>`
  position: relative;
  top: 1px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 15px 5px;
  border-radius: 4px 4px 0 0;
  min-width: 110px;
  justify-content: center;
  cursor: pointer;
  ${(props) => props.styleTabActive && styleTabActive[props.styleTabActive]}

  &:hover {
    background-color: #3e7bfa14;
  }
`;

export const Title = styled.div<any>`
  cursor: pointer;
`;

// export const Icon = styled(FontAwesomeIcon)`
//   cursor: pointer;
//   font-size: 10px;
//   color: #9fa8b2;
//   width: 10px;
//   height: 10px;
//   border-radius: 50px;

//   &:hover {
//     padding: 1px;
//     color: ${(props) => props.theme.colors.black};
//     border: 1px solid ${(props) => props.theme.colors.black};
//   }
// `;

export const Body = styled.div<any>`
  padding: 10px;
`;

const styleTabActive: any = {
  default: css`
    border-bottom: 1px solid ${(props: any) =>
      props.isActive ? props.theme.button.bgBtnPrimary : "none"};
  `,

  around: css`
    border-bottom: 1px solid ${(props: any) => props.isActive ? props.theme.default.bgAlternative1 : props.theme.line.color};
    border-top: 1px solid ${(props: any) => (props.isActive ? props.theme.button.bgBtnPrimary : "none")};
    border-right: 1px solid ${(props: any) => (props.isActive ? props.theme.button.bgBtnPrimary : "none")};
    border-left: 1px solid ${(props: any) => (props.isActive ? props.theme.button.bgBtnPrimary : "none")};
  `,
};

const styleContentActive = {
  around: css`
    border-bottom: 1px solid ${(props) => props.theme.line.color};
  `,
};
