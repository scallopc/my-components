import {
  Container,
  Box,
  Components,
  Content,
  H2,
  H5,
  DocumentationContainer,
  Table,
  TableRow,
  Detail,
  SmallDetail,
  Link,
} from "../styles";

import Line from "../../components/line/line";
import { Dropdown } from "../../components/dropdowns/dropdown";

export default function PageDropdowns() {

  const cities = [
    { label: "New York", value: "NY", image:"https://avatars.githubusercontent.com/u/39253660?v=4" },
    { label: "Rome", value: "RM", image:"https://avatars.githubusercontent.com/u/39253660?v=4" },
    { label: "London", value: "LDN", image:"https://avatars.githubusercontent.com/u/39253660?v=4" },
    { label: "Istanbul", value: "IST", image:"https://avatars.githubusercontent.com/u/39253660?v=4" },
    { label: "Paris", value: "PRS", image:"https://avatars.githubusercontent.com/u/39253660?v=4" },
  ];

  const citiesIcones = [
    { label: "New York", value: "NY", icon:"fa-solid fa-user" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];


  return (
    <Container>
      <H2>DropDown</H2>
      <Box>
        <Components>
            <Content>
              <h3>chip</h3>
              <Dropdown
                isSearchable
                isMulti
                placeHolder="Select..."
                options={cities}
                onChange={(value) => console.log(value)}
              />
            </Content>
            <Content>
              <h3>Basic</h3>
              <Dropdown
                placeHolder="Select..."
                options={cities}
                onChange={(value) => console.log(value)}
              />
            </Content>
            <Content>
              <h3>Image</h3>
              <Dropdown
                placeHolder="Select..."
                options={cities}
                onChange={(value) => console.log(value)}
                isImage
                
              />
            </Content>
            <Content>
              <h3>Icon</h3>
              <i className="fa-regular fa-flag" />
              <Dropdown
                placeHolder="Select..."
                options={citiesIcones}
                onChange={(value) => console.log(value)}
                
              />
            </Content>
        </Components>
      </Box>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Basic</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/dropdown/"
              target={"_blank"}
            >
              More about dropdown
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;Dropdown value=value options=options onChange=onChange
                  optionLabel="name" placeholder="Dropdown" /&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Custom</p>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;Dropdown value=value options=options onChange=onChange
                  optionLabel="name" placeholder="Dropdown"
                  itemTemplate=templateCustom/&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>CascadeSelect</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/cascadeselect/"
              target={"_blank"}
            >
              More about cascadeSelect
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;CascadeSelect value=value options=options
                  onChange=onChange optionLabel="name" placeholder="Cascade"
                  optionGroupLabel="name"
                  optionGroupChildren="optionGroupChildren"
                  itemTemplate=itemTemplate /&gt;
                </code>
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
                <b>Description</b>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>value</div>
                <div>object</div>
                <div>item selected</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>options</div>
                <div>Array</div>
                <div>list with items to be displayed in the dropdown</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>placeholder</div>
                <div>string</div>
                <div>Default text to display when no option is selected</div>
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
              <Line direction="horizontal" />
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
