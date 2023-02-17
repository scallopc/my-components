import styled, { keyframes, css } from "styled-components";

export const Content = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  background: ${(props) => props.theme.default.bgAlternative1};
  width: 100%;
`;

export const H2 = styled.h2<any>`
  color: inherit;
`;

export const Detail = styled.div<any>`
  color: ${(props) => props.theme.default.colorAlternative2};
  font-size: 12px;
  line-height: 2;
  word-spacing: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const SmallDetail = styled.div<any>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export const Container = styled.div<any>`
  position: relative;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow-x: auto;
  width: 100%;
`;

export const Box = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Components = styled.div<any>`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

// DocumentationContainer
export const DocumentationContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const H5 = styled.h5<any>`
 color: ${(props) => props.theme.default.colorAlternative1};
  font-size: 14px;
`;

export const Table = styled.div<any>`
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const TableRow = styled.div<any>`
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
