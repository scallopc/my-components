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

import { useEffect, useRef, useState } from "react";

export default function PageProgress() {
  const [value1, setValue1] = useState(0);
  const interval = useRef(null);
  const bar = '<ProgressBar value={value1} />';
  const indeterminate = '<ProgressBar mode="indeterminate" />';

  useEffect(() => {
    let val = value1;
    interval.current = setInterval(() => {
      val += Math.floor(Math.random() * 10) + 1;

      if (val >= 100) {
        val = 100;
        clearInterval(interval.current);
      }

      setValue1(val);
    }, 2000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
        interval.current = null;
      }
    };
  }, []);

  return (
    <Container>
       <H2>Progress</H2>
      <Box>
        <H5>Documentation</H5>

        <DocumentationContainer>
          <SmallDetail>
          Is a process status indicator.
          </SmallDetail>
          
          <Content>
            <h3>Indeterminate</h3>
            <Detail>{indeterminate}</Detail>
            {/* <ProgressBar mode="indeterminate" /> */}
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
                <div>id</div>
                <div>string</div>
                <div>Unique identifier of the element</div>
              </TableRow>
              <TableRow>
                <div>value</div>
                <div>number</div>
                <div>Current value of the progress</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
