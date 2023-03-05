import {
  Container,
  Box,
  Components,
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

import { useState } from "react";
import { ColorPicker } from "primereact/colorpicker";

export default function PageColorPicker() {
  const [color2, setColor2] = useState(null);
  const showColor2 = localStorage.getItem("color2");

  return (
    <Container>
      <H2>ColorPicker</H2>
      <Box>
        <H5>Documentation</H5>
        <Content>
          <div>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <ColorPicker
                value={color2}
                onChange={(e: any) =>
                  setColor2(
                    localStorage.setItem("color2", "#" + e.target.value)
                  )
                }
              />
              <span>{color2 && color2}</span>
            </div>
          </div>
        </Content>

        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>Components from the "PrimeReact" library.</SmallDetail>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/colorpicker/"
              target={"_blank"}
            >
              More about ColorPicker
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>&lt;ColorPicker value=value onChange=onChange /&gt;</code>
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
                <b>any</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>value</div>
                <div>boolean</div>
                <div>Value of the component</div>
              </TableRow>
              <TableRow>
                <div>inline</div>
                <div>string</div>
                <div>Whether to display as an overlay or not</div>
              </TableRow>
            </Table>
          </Content>
          <br />
          <p>
            <strong>Events</strong>{" "}
          </p>
          <Content>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>onChange</div>
                <div>
                  value: Selected color value whose type depends on the format
                </div>
                <div>Callback to invoke when a color is selected</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
