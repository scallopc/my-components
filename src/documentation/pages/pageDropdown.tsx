import {
  Container,
  Box,
  Content,
  H2,
  H5,
  DocumentationContainer,
  Table,
  TableRow,
  Detail,
  SmallDetail,
} from "../styles";
import { Dropdown } from "../../components/dropdowns/dropdown";

export default function PageDropdowns() {
  const dpChip ="<Dropdown isFilterable isMulti placeholder=Select... options={options the dropdown} onChange={(value) => console.log(value)} />";
  const dpBasic ="<Dropdown placeholder=Select... options={options the dropdown} onChange={(value) => console.log(value)} />";

  const cities = [
    {
      label: "New York",
      value: "NY",
      image: "https://avatars.githubusercontent.com/u/39253660?v=4",
    },
    {
      label: "Rome",
      value: "RM",
      image: "https://avatars.githubusercontent.com/u/39253660?v=4",
    },
    {
      label: "London",
      value: "LDN",
      image: "https://avatars.githubusercontent.com/u/39253660?v=4",
    },
    {
      label: "Istanbul",
      value: "IST",
      image: "https://avatars.githubusercontent.com/u/39253660?v=4",
    },
    {
      label: "Paris",
      value: "PRS",
      image: "https://avatars.githubusercontent.com/u/39253660?v=4",
    },
  ];

  const citiesIcones = [
    { label: "New York", value: "NY", icon: "fa-solid fa-user" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];

  return (
    <Container>
      <H2>DropDown</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Chip</h3>
            <SmallDetail>
            Selected values are displayed as a comma separated list by default, setting display as chip displays them as chips.
            </SmallDetail>
           <Detail> {dpChip} </Detail>
            <Dropdown
              isFilterable
              isMulti
              placeholder="Select..."
              options={cities}
              onChange={(value) => console.log(value)}
            />
          </Content>
          <Content>
            <h3>Basic</h3>
            <Detail> {dpBasic} </Detail>
            <Dropdown
              placeholder="Select..."
              options={cities}
              onChange={(value) => console.log(value)}
            />
          </Content>
          <Content>
            <h3>Image</h3>
            <Dropdown
              placeholder="Select..."
              options={cities}
              onChange={(value) => console.log(value)}
              isMulti
            />
          </Content>
          <Content>
            <h3>Icon</h3>
            <Dropdown
              placeholder="Select..."
              options={citiesIcones}
              onChange={(value) => console.log(value)}
            />
          </Content>

          <br />
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
                <div>isMulti</div>
                <div>boolean</div>
                <div>MultiSelect is used to select multiple items from a collection</div>
              </TableRow>
              <TableRow>
                <div>options</div>
                <div>Array</div>
                <div>List with items to be displayed in the dropdown</div>
              </TableRow>
              <TableRow>
                <div>placeholder</div>
                <div>string</div>
                <div>Default text to display when no option is selected</div>
              </TableRow>
              <TableRow>
                <div>isFilterable</div>
                <div>boolean</div>
                <div>Filtering that is enabled by adding the filter property</div>
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
                <div>onChange</div>
                <div>
                  event.originalEvent: Browser event event.value: Current
                  selected values
                </div>
                <div>Callback to invoke when value changes</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
