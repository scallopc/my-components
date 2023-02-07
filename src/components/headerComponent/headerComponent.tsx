import Line from "../line/line";
import { Container } from "./styles";

export function HeaderComponent({ children, style }) {
  return (
    <>
      <Container style={style}>{children}</Container>
      <Line direction="horizontal" />
    </>
  );
}
