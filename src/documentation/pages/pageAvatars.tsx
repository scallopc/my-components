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
import styled from "styled-components";
import Avatar from "../../components/avatar/avatar";

const ContentAvatars = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export default function PageAvatars() {
  return (
    <Container>
      <H2>Avatar</H2>

      <Components>
        <div>
          <Content>
            <h3>label</h3>
            <ContentAvatars>
              <Avatar size="small" label="JC" />
              <Avatar size="medium" label="JC" />
              <Avatar size="large" label="JC" />
            </ContentAvatars>
          </Content>
        </div>
        <div>
          <Content>
            <h3>label - active</h3>
            <ContentAvatars>
              <Avatar size="small" label="JC" active="on" />
              <Avatar size="medium" label="JC" active="on" />
              <Avatar size="large" label="JC" active="on" />
            </ContentAvatars>
          </Content>
        </div>

    
        <div>
          <Content>
            <h3>Icon</h3>
            <ContentAvatars>
              <Avatar size="small" />
              <Avatar size="medium" />
              <Avatar size="large" />
            </ContentAvatars>
          </Content>
        </div>
        <div>
          <Content>
            <h3>Icon - active</h3>
            <ContentAvatars>
              <Avatar size="small" active="on" />
              <Avatar size="medium" active="on" />
              <Avatar size="large" active="on" />
            </ContentAvatars>
          </Content>
        </div>
   
        <div>
          <Content>
            <h3>Image</h3>
            <ContentAvatars>
              <Avatar
                size="small"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
              />
              <Avatar
                size="medium"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
              />
              <Avatar
                size="large"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
              />
            </ContentAvatars>
          </Content>
        </div>
        <div>
          <Content>
            <h3>Image - active</h3>
            <ContentAvatars>
              <Avatar
                size="small"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
                active="on"
              />
              <Avatar
                size="medium"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
                active="on"
              />
              <Avatar
                size="large"
                image="https://avatars.githubusercontent.com/u/39253660?v=4"
                active="on"
              />
            </ContentAvatars>
          </Content>
        </div>
      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>
            Avatar has three viewing modes: "Label", "Icon" and "Image".
          </SmallDetail>
          <Content>
            <Components>
              <Detail><code>&lt;Avatar size="small" label="JC" /&gt;</code></Detail>
            </Components>
            <Components>
            <Detail><code>&lt;Avatar size="small" /&gt;</code></Detail>
            </Components>
            <Components>
            <Detail><code>&lt;Avatar size="small" image="image.png" /&gt;</code></Detail>
            </Components>
          </Content>
          <br />

          <p>Active</p>
          <SmallDetail>
            A status can be added to an Avatar with the "active" property
          </SmallDetail>
          <Content>
            <Components>
            <Detail><code>&lt;Avatar size="small" label="JC" active="on" /&gt;</code></Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>We use some attributes to compose the component</SmallDetail>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>label</div>
                <div>string</div>
                <div>Defines the initial to display</div>
              </TableRow>
              <TableRow>
                <div>icon</div>
                <div>string</div>
                <div>Defines the icon to display</div>
              </TableRow>
              <TableRow>
                <div>size</div>
                <div>string</div>
                <div>
                  Size of the element, valid options are "small", "medium" and
                  "large"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
