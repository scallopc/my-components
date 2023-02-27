import Line from "../../components/line/line";
import {
  Box,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
  SmallDetail,
  Table,
  TableRow,
} from "../styles";

export default function PageLine() {
  return (
    <Container>
      <H2>Line</H2>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Line Horizontal</h3>
            <Detail>
              <code>&lt;Line direction="horizontal"/&gt;</code>
            </Detail>
            <Line direction="horizontal" />
          </Content>

          <Content>
            <h3>Line Vertical</h3>
            <Detail>
              <code>&lt;Line direction="vertical"/&gt;</code>
            </Detail>
            <Line direction="vertical" />
          </Content>

          <br />
          <Content>
            <h3>Properties </h3>
            <SmallDetail>
              Use this attribute to compose the component
            </SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>direction</div>
                <div>string</div>
                <div>
                  Direction of the line, valid options are "horizontal" and
                  "vertical"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
