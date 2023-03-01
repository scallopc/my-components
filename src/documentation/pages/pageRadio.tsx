import {
  Box,
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
import { useEffect, useState } from "react";
import { Radio } from "../../components/radio/radio";

export default function PageRadio() {
  const [select, setSelect] = useState("Dog");

  const handleSelectChangePet = (event) => {
    const value = event.target.value;
    setSelect(value);
  };

  const drinks = [
    {
      label: "Coffee",
    },
    {
      label: "Tea",
    },
    {
      label: "Juice",
    },
    {
      label: "Soda",
    },
    {
      label: "Beer",
    },
    {
      label: "Whisky",
    },
  ];

  const [selectedValue, setSelectedValue] = useState<string>(drinks[0].label);
  const handleChangeMap = (e) => {
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  const radioOptions =
    "<Radio " +
    ' label="label name" ' +
    " checked={item selected} " +
    " onChange={method that returns the modification}/>";

  const radioDisabled = '<Radio label="Disabled" disabled />';
  const radioDisabledChecked = '<Radio label="Checked disabled" checked={true} disabled />';

  return (
    <Container>
      <H2>Radio</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>
            The Radio button uses the properties: checked, onChange, disabled
            and label
          </p>
          <Content>
            <h3>Radio options</h3>
            <Detail>{radioOptions}</Detail>
            <div style={{ display: "flex", gap: "10px" }}>
              {drinks?.map((item, index) => (
                <Radio
                  key={index}
                  label={item.label}
                  checked={selectedValue === item.label}
                  onChange={(e) => handleChangeMap(e)}
                />
              ))}
            </div>
          </Content>
          <Content>
            <h3>Radio disabled</h3>
            <Detail>{radioDisabled}</Detail>
            <Radio label="Disabled" disabled />
            <Radio label="Checked disabled" checked={true} disabled />
          </Content>

          <br />
          <Content>
            <h3>Properties </h3>
            <SmallDetail>
              We use some attributes to compose the component
            </SmallDetail>
            <Table>
              <TableRow>
                <b>Name</b>
                <b>Type</b>
                <b>Description</b>
              </TableRow>
              <TableRow>
                <div>label</div>
                <div>string</div>
                <div>Defines the label of the radio</div>
              </TableRow>
              <TableRow>
                <div>value</div>
                <div>string</div>
                <div>Defines the value of the radio</div>
              </TableRow>
              <TableRow>
                <div>checked</div>
                <div>boolean</div>
                <div>Defines the selected value</div>
              </TableRow>
              <TableRow>
                <div>onChange</div>
                <div>event</div>
                <div>Defines the event of the radio</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
