import {
  Box,
  Container,
  Content,
  DocumentationContainer,
  H2,
  H5,
  SmallDetail,
  Table,
  TableRow,
} from "../styles";
import styled from "styled-components";
import Avatar from "../../components/avatar/avatar";
import Line from "../../components/line/line";

const ContentAvatars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export default function PageAvatars() {
  const label = '<Avatar size="small" label="JC" />';
  const icon = '<Avatar size="small" />';
  const image = '<Avatar size="small" image="image"/>';
  const active = '<Avatar size="medium" active="on | off"/>';

  return (
    <Container>
      <H2>Nome do component</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <SmallDetail>O que é o component</SmallDetail>
          <Content>
            <h3>Label</h3>
            <SmallDetail>
              It is with the label property, showing only the user's initials.
            </SmallDetail>
            <SmallDetail><code>{label}</code></SmallDetail>
            <div className="flex">
              <ContentAvatars>
                <Avatar size="small" label="JC" />
                <Avatar size="medium" label="JC" />
                <Avatar size="large" label="JC" />
              </ContentAvatars>
            </div>
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
              <Line direction="horizontal" />
              <TableRow>
                <div>label</div>
                <div>string</div>
                <div>Defines the initial to display</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>icon</div>
                <div>string</div>
                <div>Defines the icon to display</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>active</div>
                <div>string</div>
                <div>Logged in user indicator, 'on' | 'off'</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
