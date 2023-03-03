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
import ToggleSwitch from "../../components/toggleSwitch/toggleSwitch";
import { useState } from "react";

const ContentToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export default function PageToggleSwitch() {
  const [toggled, settoggled] = useState(false);

  return (
    <Container>
      <H2>Toggle Switch</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>The ToggleButton use onChange. </p>
          <Content>
            <Detail>
              <code>&lt;ToggleSwitch onChange= "handleOnChange" /&gt;</code>
            </Detail>
            <ToggleSwitch onChange={(e) => settoggled(e.target.checked)} />
          </Content>

          <br />
          <Content>
            <h3>Properties </h3>
            <SmallDetail>
              We use some attributes to compose the component
            </SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>onChange</div>
                <div>event</div>
                <div>Defines the event of the toggle</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
