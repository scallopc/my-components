import List, { IList } from "../../components/list/list";
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

export default function PageList() {
  const list = [
    { id: 2, name: "Vue" },
    { id: 3, name: "Node" },
    { id: 4, name: "Angular" },
    { id: 1, name: "React" },
  ];

  const cities = [
    { id: 2, name: "New York" },
    { id: 3, name: "Rome" },
    { id: 4, name: "London" },
    { id: 1, name: "Istanbul" },
  ];

  return (
    <Container>
      <H2>List</H2>

      <Components>
        <Content>
          <h3>List Configurate</h3>
          <br />
          {cities?.map((item: IList, index: any) => (
            <List key={index} type="configurate" list={cities} name={item.name}/>
          ))}
        </Content>

        <Content>
          <h3>List Device</h3>
          <br />
          {list?.map((item: IList, index: any) => (
            <List key={index} type="device" list={list} name={item.name}/>
          ))}
        </Content>
      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Configurate List</p>
          <SmallDetail>
            Configuration list, which brings the icons for configuring and
            deleting
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <code>&lt;List list=list type="configurate" name="name"/&gt;</code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Device List</p>
          <SmallDetail>
            Device list, which brings up the icon for adding a device
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <code>&lt;List list=list type="device" name="name"/&gt;</code>
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
              <TableRow>
                <div>type</div>
                <div>string</div>
                <div>
                  Type of the list, valid options are "device" and "configurate"
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
