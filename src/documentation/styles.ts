import styled, { keyframes, css } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  background: ${(props) => props.theme.default.bgAlternative1};
  width: 100%;
`;

export const H2 = styled.h2`
  color: inherit;
`;

export const Detail = styled.div`
  color: ${(props) => props.theme.default.colorAlternative2};
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const SmallDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: auto;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Components = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

// DocumentationContainer
export const DocumentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const H5 = styled.h5`
 color: ${(props) => props.theme.default.colorAlternative1};
  font-size: 14px;
`;

export const Table = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 0;
  gap: 5px;
  border-bottom: 1px solid ${(props) => props.theme.line.color};
  font-size: 12px;

  &:last-of-type {
    border-bottom: 0;
  }
`;
