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
import { MultiSelect } from "primereact/multiselect";
import Line from "../../components/line/line";

export default function PageSelect() {
  const [selectedCities1, setSelectedCities1] = useState(null);

  const onCityChange = (e) => {
    setSelectedCities1(e.value);
  };

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
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

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        {option.states && <i className="pi pi-map-marker mr-2" />}
        {option.cities && <i className="pi pi-compass mr-2" />}
        {option.cname && <i className="pi pi-map-marker mr-2" />}
        <span>{option.cname || option.name}</span>
      </div>
    );
  };

  return (
    <Container>
      <Box>
        <Components>
          <div>
            <Content>
              <h3>MultiSelect Basic</h3>

              <MultiSelect
                value={selectedCities1}
                options={cities}
                onChange={onCityChange}
                optionLabel="name"
                placeholder="Basic"
                maxSelectedLabels={3}
              />
              <h3>MultiSelect Chip</h3>
              <MultiSelect
                value={selectedCities1}
                options={cities}
                onChange={onCityChange}
                optionLabel="name"
                placeholder="Chip"
                display="chip"
              />
            </Content>
          </div>
        </Components>
      </Box>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>Components from the "PrimeReact" library.</SmallDetail>
          <br />
          <p>MultiSelect Basic</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/multiselect/"
              target={"_blank"}
            >
              More about multiSelect
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;MultiSelect value=value options=options onChange=onChange
                  optionLabel="name" placeholder="Basic"
                  maxSelectedLabels=3/&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>MultiSelect Chip</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/multiselect/"
              target={"_blank"}
            >
              More about multiSelect chip
            </Link>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;MultiSelect value=value options=options onChange=onChange
                  optionLabel="name" placeholder="Chip" display="chip"/&gt;
                </code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Dropdown</p>
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
              <Line direction="horizontal"/>
              <TableRow>
                <div>optionGroupLabel</div>
                <div>string</div>
                <div>
                  Property name or getter function to use as the label of an
                  option group
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>optionGroupChildren</div>
                <div>string</div>
                <div>
                  Property name or getter function to retrieve the items of a
                  group
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>optionLabel</div>
                <div>string</div>
                <div>
                  Property name or getter function to use as the label of an
                  option
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>value</div>
                <div>array</div>
                <div>Value of the component</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>display</div>
                <div>string</div>
                <div>
                  Used mode to display the selected item. Valid values are
                  'comma' and 'chip'
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>placeholder</div>
                <div>string</div>
                <div>Default text to display when no option is selected</div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>options</div>
                <div>array</div>
                <div>
                  An array of selectitems to display as the available options
                </div>
              </TableRow>
              <Line direction="horizontal"/>
              <TableRow>
                <div>itemTemplate</div>
                <div>any</div>
                <div>The template of items</div>
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
              <Line direction="horizontal"/>
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
