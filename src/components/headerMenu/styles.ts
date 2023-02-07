import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  background-color: ${(props) => props.theme.default.bgAlternative1};
  padding: 12px 19px 12px 24px;
  width: 100%;
  height: 56px;
  gap: 30px;
  z-index: 1;
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;
