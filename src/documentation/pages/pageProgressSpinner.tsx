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
} from "../styles";

import { useState } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import Line from "../../components/line/line";

export default function PageProgressSpinner() {
  const spinner = "<ProgressSpinner />";

  return (
    <Container>
      <Box>
        <H5>Documentation</H5>
      
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>Components from the "PrimeReact" library.</SmallDetail>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/progressspinner/"
              target={"_blank"}
            >
              More about progress spinner
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <div className="flex flex-column">
                {spinner}
                <ProgressSpinner />
                </div>
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
                <b>Parameters</b>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>id</div>
                <div>string</div>
                <div>Unique identifier of the element</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
