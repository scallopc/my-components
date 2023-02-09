import { useState } from "react";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Line from "../../components/line/line";
import { DropdownTeste } from "../../components/dropdowns/dropdown";

export default function PageDropdowns() {
  const [selectedCities1, setSelectedCities1] = useState(null);
  const [selectedCities2, setSelectedCities2] = useState(null);
  const [selectedCity1, setSelectedCity1] = useState(null);

  const onCityChange = (e) => {
    setSelectedCities1(e.value);
  };

  const onCityChange2 = (e) => {
    setSelectedCities2(e.value);
  };

  const cities = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" },
  ];

  const countries = [
    {
      name: "Australia",
      code: "AU",
      states: [
        {
          name: "New South Wales",
          cities: [
            { cname: "Sydney", code: "A-SY" },
            { cname: "Newcastle", code: "A-NE" },
            { cname: "Wollongong", code: "A-WO" },
          ],
        },
        {
          name: "Queensland",
          cities: [
            { cname: "Brisbane", code: "A-BR" },
            { cname: "Townsville", code: "A-TO" },
          ],
        },
      ],
    },
    {
      name: "Canada",
      code: "CA",
      states: [
        {
          name: "Quebec",
          cities: [
            { cname: "Montreal", code: "C-MO" },
            { cname: "Quebec City", code: "C-QU" },
          ],
        },
        {
          name: "Ontario",
          cities: [
            { cname: "Ottawa", code: "C-OT" },
            { cname: "Toronto", code: "C-TO" },
          ],
        },
      ],
    },
    {
      name: "United States",
      code: "US",
      states: [
        {
          name: "California",
          cities: [
            { cname: "Los Angeles", code: "US-LA" },
            { cname: "San Diego", code: "US-SD" },
            { cname: "San Francisco", code: "US-SF" },
          ],
        },
        {
          name: "Florida",
          cities: [
            { cname: "Jacksonville", code: "US-JA" },
            { cname: "Miami", code: "US-MI" },
            { cname: "Tampa", code: "US-TA" },
            { cname: "Orlando", code: "US-OR" },
          ],
        },
        {
          name: "Texas",
          cities: [
            { cname: "Austin", code: "US-AU" },
            { cname: "Dallas", code: "US-DA" },
            { cname: "Houston", code: "US-HO" },
          ],
        },
      ],
    },
  ];

  const selectedCountryTemplate: any = (option: any, props: any) => {
    if (option) {
      return (
        <div
          className="country-item country-item-value"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>{option.name}</div>
          <FontAwesomeIcon icon={faFlag} />
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option) => {
    return (
      <div
        className="country-item"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {option.states && <i className="pi pi-map-marker mr-2" />}
        {option.cities && <i className="pi pi-compass mr-2" />}
        {option.cname && <i className="pi pi-map-marker mr-2" />}
        <span>{option.cname || option.name}</span>
      </div>
    );
  };

  return (
    <Container>
      <H2>DropDown</H2>
      <Box>
        <Components>
            <Content>
              <h3>Basic</h3>
              <DropdownTeste
                isSearchable
                isMulti
                placeHolder="Select..."
                options={cities}
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
