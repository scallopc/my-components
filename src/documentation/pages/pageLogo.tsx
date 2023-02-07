import styled from "styled-components";
import Line from "../../components/line/line";
import Logo from "../../components/logo/logo";
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

const ContentLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

export default function PageLogo() {
  return (
    <Container>
      <H2>Logo</H2>

      <Components>
        <Content>
          <br />
          <h3>Logo Eleeva</h3>
          <ContentLogo>
            <Logo size="small" src="eleeva" />
            <Logo size="medium" src="eleeva" />
            <Logo size="large" src="eleeva" />
          </ContentLogo>
        </Content>

        <Content>
          <br />
          <h3>Logo Vértice</h3>
          <ContentLogo>
            <Logo size="small" src="vertice" />
            <Logo size="medium" src="vertice" />
            <Logo size="large" src="vertice" />
          </ContentLogo>
        </Content>

        <Content>
          <br />
          <h3>Logo Vértice Light</h3>
          <ContentLogo>
            <Logo size="small" src="verticeLight" />
            <Logo size="medium" src="verticeLight" />
            <Logo size="large" src="verticeLight" />
          </ContentLogo>
        </Content>

        <Content>
          <br />
          <h3>Logo Vértice Dark</h3>
          <ContentLogo>
            <Logo size="small" src="verticeDark" />
            <Logo size="medium" src="verticeDark" />
            <Logo size="large" src="verticeDark" />
          </ContentLogo>
        </Content>
      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>
            The logo has some viewing modes: "eleeva", "vertice", "verticeText",
            "verticeLight", and "verticeDark"
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <code>&lt;Logo size="small" logo="eleeva"/&gt;</code>
              </Detail>
            </Components>
            <Components>
              <Detail>
                <code>&lt;Logo size="small" logo="vertice"/&gt;</code>
              </Detail>
            </Components>
            <Components>
              <Detail>
                <code>&lt;Logo size="small" logo="verticeLight"/&gt;</code>
              </Detail>
            </Components>
            <Components>
              <Detail>
                <code>&lt;Logo size="small" logo="verticeDark"/&gt;</code>
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
              <Line direction="horizontal"/>
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>logo</div>
                <div>string</div>
                <div>
                  Type of logos, valid options are "eleeva", "vertice",
                  "verticeLight", and "verticeDark"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
