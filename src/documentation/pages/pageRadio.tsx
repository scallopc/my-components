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
import styled from "styled-components";
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

  const radio = '<Radio '+' label="Dog" '+' value="Dog" '+' checked={select === "Dog"} '+' onChange={(event) => handleSelectChangePet(event)}/>';

  return (
    <Container>
      <H2>Radio</H2>

      <Components>
        <Content>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px", flexWrap:'wrap' }}
            >
              <span>Radio options map</span>
              <div  style={{ display: "flex", gap: "10px" }}>
                {drinks?.map((item, index) => (
                  <Radio
                    key={index}
                    label={item.label}
                    checked={selectedValue === item.label}
                    onChange={(e) => handleChangeMap(e)}
                  />
                ))}
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span>Radio disabled</span>
              <Radio label="Disabled" disabled />
              <Radio label="Checked disabled" checked={true} disabled />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span>Radio options single</span>
              <Radio
                label="Dog"
                value="Dog"
                checked={select === "Dog"}
                onChange={(event) => handleSelectChangePet(event)}
              />
              <Radio
                label="Cat"
                value="Cat"
                checked={select === "Cat"}
                onChange={(event) => handleSelectChangePet(event)}
              />
            </div>
          </div>
        </Content>
      </Components>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Start</p>
          <SmallDetail>
            The Radio button uses the properties: checked, onChange, disabled
            and label
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                <div>
                  {radio}
                </div>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Properties </p>
          <SmallDetail>
            We use some attributes to compose the component
          </SmallDetail>
          <Content>
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
