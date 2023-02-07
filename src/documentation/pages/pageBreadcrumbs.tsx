import {
  Box,
  Components,
  Container,
  Content,
  Detail,
  DocumentationContainer,
  H2,
  H5,
  Link,
  SmallDetail,
  Table,
  TableRow,
} from "../styles";
import styled from "styled-components";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import Line from "../../components/line/line";

const ContentToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export default function pageBreadcrumbs() {
  const breadcrumbs = '<Breadcrumbs />'
  return (
    <Container>
      <H2>Breadcrumbs</H2>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Breadcrumb</p>
          {/* <Components>
            <Content>
              <ContentToggle>
               {breadcrumbs}
              </ContentToggle>
            </Content>
          </Components> */}

          <Content>
            <Components>
              <Detail>
              {breadcrumbs}
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Breadcrumb route to home</p>
          <Components>
            <Content>
              <ContentToggle>
                <Breadcrumbs
                  home={true}
                  homeLink="#/home"
                  homeName={"Início"}
                />
              </ContentToggle>
            </Content>
          </Components>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;Breadcrumbs home<code>&#123;</code>true<code>&#125;</code>{" "}
                  homeLink=<code>&#123;</code>'topology/demo'<code>&#125;</code>{" "}
                  homeName=<code>&#123;</code>'Início'<code>&#125;</code>/&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>Properties used here</SmallDetail>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>home</div>
                <div>boolean</div>
                <div>Define if the component will have a home</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>homeLink</div>
                <div>string </div>
                <div>Set the home route</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>homeName</div>
                <div>string </div>
                <div>Set the fixed route name</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
