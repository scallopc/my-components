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
      <H2>Avatar</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Avatar represents people using icons, labels and images.</p>
          <Content>
            <h3>Label</h3>
            <SmallDetail>
              It is with the label property, showing only the user's initials.
            </SmallDetail>
            <Detail>{label}</Detail>
            <div className="flex">
              <ContentAvatars>
                <Avatar size="small" label="JC" />
                <Avatar size="medium" label="JC" />
                <Avatar size="large" label="JC" />
              </ContentAvatars>
            </div>
          </Content>

          <Content>
            <h3>Icon</h3>
            <SmallDetail>
              It is set with the icon property, showing only one icon as user
              image.
            </SmallDetail>
            <Detail>{icon}</Detail>
            <div className="flex">
              <ContentAvatars>
                <Avatar size="small" />
                <Avatar size="medium" />
                <Avatar size="large" />
              </ContentAvatars>
            </div>
          </Content>

          <Content>
            <h3>Image</h3>
            <SmallDetail>
              It is set with the image property, showing an image of the user.
            </SmallDetail>
            <Detail>{image}</Detail>
            <div className="flex">
              <ContentAvatars>
                <Avatar
                  size="medium"
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
            </div>
          </Content>

          <Content>
            <h3>Active</h3>

            <Detail>{active}</Detail>
            <div className="flex">
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
                <Avatar size="medium" label="JC" active="off" />
              </ContentAvatars>
            </div>
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
