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

import { useEffect, useState } from "react";
import users from "../service/users";

import axios from "axios";

export default function PageTable() {
  const [dataTable, setDataTable] = useState([]);

  
  console.log(dataTable);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setDataTable(res.data))
      .catch((err) => console.log(err));
  }, []);


  const column = [
    { heading: "Name", value: "name" },
    { heading: "Email", value: "email" },
    { heading: "Phone", value: "phone" },
    { heading: "City", value: "address.city" },
  ];

  return (
    <Container>
      <H2>Table</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Basic</h3>
            <Detail></Detail>

            <Table data={dataTable} column={column} />
          </Content>

          <Content>
            <h3>Properties </h3>
            <SmallDetail>Properties used here</SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>value</div>
                <div>array</div>
                <div>Value of the component</div>
              </TableRow>
              <TableRow>
                <div>responsiveLayout</div>
                <div>string</div>
                <div>Applies "scroll" to the table</div>
              </TableRow>
              <TableRow>
                <div>selectionMode</div>
                <div>string</div>
                <div>Selection mode, valid options "single" or "multiple"</div>
              </TableRow>
              <TableRow>
                <div>selection</div>
                <div>string</div>
                <div>Selected item</div>
              </TableRow>
              <TableRow>
                <div>metaKeySelection</div>
                <div>boolean</div>
                <div>When false, allows you to select multiple rows</div>
              </TableRow>
              <TableRow>
                <div>dragSelection</div>
                <div>string</div>
                <div>Allows dragging to select items from the table</div>
              </TableRow>
            </Table>
          </Content>
          <br />
          <Content>
            <h3>Events</h3>{" "}
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Parameters</b>
              </TableRow>
              <TableRow>
                <div>onSelectionChange</div>
                <div>Event</div>
                <div>Callback to invoke when value changes</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
