import Line from "../../components/line/line";
import {
  Box,
  Components,
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

      <Components>
        <Content>
          <h3>Line Horizontal</h3>
          <br />
          <Line direction="horizontal"/>
        </Content>

        <Content>
          <h3>Line Vertical</h3>
          <br />
          <Line direction="vertical"/>
        </Content>

      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Line Horizontal</p>
          <Content>
            <Components>
              <Detail>
                <code>&lt;Line direction="horizontal"/&gt;</code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Line Vertical</p>
          <Content>
            <Components>
              <Detail>
              <code>&lt;Line direction="vertical"/&gt;</code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>Use this attribute to compose the component</SmallDetail>
          <Content>
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
                Direction of the line, valid options are "horizontal" and "vertical"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
