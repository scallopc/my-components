import { useEffect, useState } from "react";
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
} from "../styles";
import Input from "../../components/input/input";
import AutoComplete from "../../components/input/autoComplete";
import Line from "../../components/line/line";

export default function PageInputs() {
  const [itemSelected, setItemSelected] = useState(null);
  const useInput =
    'Input label="Usuário" placeholder="Placeholder" type="text" />';
  const useInputIcon =
    'Input label="E-mail" placeholder="email@email.com" type="text" iconLeft="fa-solid fa-envelope"/>';
  const useInputError =
    '<Input label="Senha" placeholder="Placeholder" type="password" error="error" iconLeft="fa-solid fa-lock" />';

  const cities = [
    { id: 1, name: "Brasilia" },
    { id: 2, name: "Goiana" },
    { id: 3, name: "Cuiaba" },
    { id: 4, name: "Campo Grande" },
    { id: 5, name: "São Paulo" },
    { id: 6, name: "Rio de Janeiro" },
    { id: 7, name: "Belo Horizonte" },
    { id: 8, name: "Vitória" },
    { id: 9, name: "Florianópolis" },
    { id: 10, name: "Curitiba" },
    { id: 11, name: "Porto Alegre" },
    { id: 12, name: "Teste 1" },
    { id: 13, name: "Teste 2" },
    { id: 14, name: "Teste 3" },
    { id: 15, name: "Teste 4" },
    { id: 16, name: "Teste 5" },
    { id: 17, name: "Teste 6" },
    { id: 18, name: "Teste 7" },
    { id: 19, name: "Teste 8" },
    { id: 20, name: "Teste 9" },
    { id: 21, name: "Teste 10" },
    { id: 22, name: "Teste 11" },
    { id: 23, name: "Teste 12" },
  ];

  const topologias = [
    {
      name: "Vertice",
      description: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      name: "Vertice 2",
      description: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      name: "Vertice 3",
      description: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      name: "Vertice",
      description: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
  ];

  useEffect(() => {
    console.log(itemSelected);
  }, [itemSelected]);

  return (
    <Container>
      <H2>Inputs</H2>
      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <Content>
            <h3>Input text</h3>
            <SmallDetail>
              Input Text is a basic input for entering text or a number
            </SmallDetail>
            <Detail>{useInput}</Detail>
            <Input label="Usuário" placeholder="Placeholder" type="text" />
          </Content>

          <Content>
            <h3>Input with icon</h3>
            <SmallDetail>
              Use "iconLeft" to add icons to the left of the input
            </SmallDetail>
            <Detail>{useInputIcon}</Detail>
            <Input
              label="E-mail"
              placeholder="email@email.com"
              type="text"
              iconLeft="fa-solid fa-envelope"
            />
          </Content>

          <Content>
            <h3>Input error</h3>
            <SmallDetail>
              Use "error" to add error message for the input
            </SmallDetail>
            <Detail>{useInputError}</Detail>
            <Input
              label="Senha"
              placeholder="Placeholder"
              type="password"
              error="error"
              iconLeft="fa-solid fa-lock"
            />
          </Content>

          <Content>
            <h3>Input autocomplete</h3>
            <SmallDetail>
              AutoComplete is a component that requires a list of suggestions to
              query the results.
            </SmallDetail>
            <Detail>
              <code>
                &lt;AutoComplete placeholder="Search" type="text" data="data
                list" selected="method that returns the chosen suggestion"
                handlerChange="method that returns the modification in the
                input"&gt;
              </code>
              <code>&lt;/AutoComplete&gt;</code>
            </Detail>
            <AutoComplete
              placeholder="Capitais do Brasil"
              data={cities}
              selected={(item: any) => console.log(item)}
              handlerChange={(item: any) => console.log(item)}
            />
          </Content>

          <Content>
            <h3>Input autocomplete with tags</h3>
            <SmallDetail>
            If this list returns tags, we use the "tags" property
            </SmallDetail>
            <Detail>
              <code>
                &lt;AutoComplete placeholder="Search" type="text" data="data
                list" selected="method that returns the chosen suggestion"
                handlerChange="method that returns the modification in the
                input" tags&gt;
              </code>
              <code>&lt;/AutoComplete&gt;</code>
            </Detail>
            <AutoComplete
              placeholder="Search"
              data={topologias}
              selected={(item: any) => console.log(item)}
              handlerChange={(item: any) => console.log(item)}
              tags
            />
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
              <Line direction="horizontal" />
              <TableRow>
                <div>label</div>
                <div>string</div>
                <div>Label the input</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>placeholder</div>
                <div>string</div>
                <div>Default text to display when no option is selected</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>type</div>
                <div>string</div>
                <div>
                  Type of the input, valid options are "text", "number" and
                  "password"
                </div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>error</div>
                <div>string</div>
                <div>Defines if the input can have an error</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>tags</div>
                <div>boolean</div>
                <div>If you have tags in your object, use this attribute</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>closable</div>
                <div>boolean</div>
                <div>Define if you have the icon to clear the cache</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>selected</div>
                <div>function</div>
                <div>Method that returns the chosen item on click</div>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>handlerChange</div>
                <div>function</div>
                <div>method that returns changes to the component's input</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
