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
import Line from "../../components/line/line";

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

      <Components>
        <Content>
          <ContentToggle>
            <ToggleSwitch onChange={(e) => settoggled(e.target.checked)} />
          </ContentToggle>
        </Content>
      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>
            The ToggleButton uses the properties: checked, onChange, disabled
            and size
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;ToggleSwitch checked= "switchStat" onChange=
                  "handleOnChange" size="small" /&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>
            We use some attributes to compose the component
          </SmallDetail>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <Line direction="horizontal"/>
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
