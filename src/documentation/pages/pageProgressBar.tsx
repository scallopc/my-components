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

import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import Line from "../../components/line/line";

export default function PageProgressBar() {
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
      <Box>
        <H5>Documentation</H5>

        <DocumentationContainer>
          <SmallDetail>
            here we have two progress bar options. Components from the "PrimeReact"
            library.
          </SmallDetail>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/progressbar/"
              target={"_blank"}
            >
              More about progress bar
            </Link>
          </SmallDetail>
          <br />
          <p>Indeterminate</p>
          <Content>
            <Components>
              <Detail>{indeterminate}</Detail>
              <ProgressBar mode="indeterminate" />
            </Components>
          </Content>
          <br />

          <p>Dynamic</p>
          <Content>
            <Components>
              <Detail>{bar}</Detail>
          <ProgressBar value={value1} />
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
              <Line direction="horizontal" />
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
