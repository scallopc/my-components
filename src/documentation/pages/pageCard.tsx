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
  H2,
} from "../styles";

import Card from "../../components/card/card";
import Heading from "../../components/heading/heading";

export default function PageCards() {
  const cardDefault = '<Card type="default"> </Card>';

  return (
    <Container>
      <H2>Card</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Here we have some card options.</p>
          <Content>
            <h3>Card Default</h3>
            <SmallDetail>Customizable Cards</SmallDetail>
            <Detail>{cardDefault}</Detail>
            <Card>
              <div className="flex flex-column gap-1 align-items-center">
                <Heading type="heading" headingSize="h3">
                  Title
                </Heading>
                <Heading type="heading" headingSize="h5">
                  Subtitle
                </Heading>
                <Heading type="text" textSize="md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis, rerum.
                </Heading>
              </div>
            </Card>
          </Content>
          <br />
          <Content>
            <h3>Properties </h3>
            <SmallDetail>Properties used here</SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>type</div>
                <div>string</div>
                <div>
                  If you
                  don't specify the type, it will be default
                </div>
              </TableRow>           
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}