import {
  Container,
  Box,
  Content,
  H5,
  DocumentationContainer,
  SmallDetail,
  Detail,
  Table,
  TableRow,
  Link,
  H2,
} from "../styles";
import Line from "../../components/line/line";
import Heading from "../../components/heading/heading";

export default function PageHeading() {
  const h1 = '<Heading type="heading" headingSize="h1">Heading h1</Heading>';
  const h2 =
    '<Heading type="heading" headingSize="h2" textTransform="uppercase"> Heading h2 uppercase </Heading>';
  const h3 = '<Heading type="heading" headingSize="h3"> Heading h3 </Heading>';
  const h4 = '<Heading type="heading" headingSize="h4"> Heading h4 </Heading>';
  const h5 =
    '<Heading type="heading" headingSize="h5" textTransform="lowercase"> Heading h5 lowercase </Heading>';
  const h6 = '<Heading type="heading" headingSize="h6"> Heading h6 </Heading>';
  const xsm =
    '<Heading type="text" textSize="xsm"> Text extra small </Heading>';
  const sm = '<Heading type="text" textSize="sm">  Text small </Heading>';
  const md =
    '<Heading type="text" textSize="md" fontStyle="italic" textTransform="uppercase">  Text medium italic uppercase </Heading>';
  const lg = '<Heading type="text" textSize="lg">  Text large </Heading>';

  return (
    <Container>
      <H2>Heading</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Heading</h3>
            <SmallDetail>Heading types</SmallDetail>
              <div className="flex flex-column gap-3">
              <Heading type="heading" headingSize="h1">
                  Heading h1
                </Heading>
                <Detail>{h1}</Detail>
                <Line direction="horizontal" />

                <Heading
                  type="heading"
                  headingSize="h2"
                  textTransform="uppercase"
                >
                  Heading h2 uppercase
                </Heading>
                <Detail>{h2}</Detail>
                <Line direction="horizontal" />

                <Heading type="heading" headingSize="h3">
                  Heading h3
                </Heading>
                <Detail>{h3}</Detail>
                <Line direction="horizontal" />

                <Heading type="heading" headingSize="h4">
                  Heading h4
                </Heading>
                <Detail>{h4}</Detail>
                <Line direction="horizontal" />

                <Heading
                  type="heading"
                  headingSize="h5"
                  textTransform="lowercase"
                >
                  Heading h5 lowercase
                </Heading>
                <Detail>{h5}</Detail>
                <Line direction="horizontal" />

                <Heading type="heading" headingSize="h6">
                  Heading h6
                </Heading>
                <Detail>{h6}</Detail>
                <Line direction="horizontal" />
              </div>
          </Content>

          <Content>
            <h3>Text</h3>
            <SmallDetail>
              Text types
            </SmallDetail>
              <div className="flex flex-column gap-3">
                <Heading type="text" textSize="xsm">
                  Text extra small
                </Heading>
                <Detail>{xsm}</Detail>
                <Line direction="horizontal" />

                <Heading type="text" textSize="sm">
                  Text small
                </Heading>
                <Detail>{sm}</Detail>
                <Line direction="horizontal" />

                <Heading
                  type="text"
                  textSize="md"
                  fontStyle="italic"
                  textTransform="uppercase"
                >
                  Text medium italic
                </Heading>
                <Detail>{md}</Detail>
                <Line direction="horizontal" />

                <Heading type="text" textSize="lg">
                  Text large
                </Heading>
                <Detail>{lg}</Detail>
              </div>
          </Content>
          <br />
          <Content>
          <h3>Properties </h3>
          <SmallDetail>Properties general</SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>type</div>
                <div>string</div>
                <div>Valid options for text "heading" | "text"</div>
              </TableRow>
              <TableRow>
                <div>textTransform</div>
                <div>string</div>
                <div>
                  Text transform. Valid options "uppercase" | "initial" |
                  "lowercase";
                </div>
              </TableRow>
              <TableRow>
                <div>fontStyle</div>
                <div>string</div>
                <div>Text style. Valid options "italic" | "initial"</div>
              </TableRow>
              <TableRow>
                <div>fontWeight</div>
                <div>string</div>
                <div>Font weight. Valid options "bold" | "light"</div>
              </TableRow>
            </Table>
          </Content>
          <br />
          <Content>
          <h3>Properties </h3>
          <SmallDetail>Properties type="heading"</SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>headingSize</div>
                <div>string</div>
                <div>
                  Heading size. Valid options "h1" | "h2" | "h3" | "h4" | "h5" |
                  "h6"
                </div>
              </TableRow>
            </Table>
          </Content>
          <br />
          <Content>
          <h3>Properties </h3>
          <SmallDetail>Properties type="text"</SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>headingSize</div>
                <div>string</div>
                <div>Text size. Valid options "xsm" | "sm" | "md" | "lg"</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
