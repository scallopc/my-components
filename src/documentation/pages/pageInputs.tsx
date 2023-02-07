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
      title: "Vertice",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice 2",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice 3",
      subTitle: "Search Docs",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
    },
    {
      title: "Vertice",
      subTitle: "Search Docs",
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
        <h3>Com ícones / sem ícones</h3>
        <Components>
          <div>
            <Content>
              <Input
                label="Usuário"
                placeholder="Placeholder"
                type="text"
                error="error"
                iconLeft="fa-solid fa-user"
              />

              <Input
                label="Usuário"
                placeholder="Placeholder"
                type="text"
              ></Input>
            </Content>
          </div>
          <div>
            <Content>
              <Input
                label="Senha"
                placeholder="Senha"
                type="password"
                disabled
                iconLeft="fa-solid fa-lock"
              />

              <Input
                label="E-mail"
                placeholder="email@email.com"
                type="text"
                iconLeft="fa-solid fa-envelope"
              />
            </Content>
          </div>
          <div>
            <Content>
              <AutoComplete
                placeholder="Capitais do Brasil"
                data={cities}
                selected={(item: any) => console.log(item)}
                handlerChange={(item: any) => console.log(item)}
              />

              <AutoComplete
                placeholder="Search"
                data={cities}
                selected={(item: any) => console.log(item)}
                handlerChange={(item: any) => console.log(item)}
                tags
              />
            </Content>
          </div>
        </Components>
      </Box>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>Input text</p>
          <SmallDetail>
            Input Text is a basic input for entering text or a number
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;Input label="Usuário" placeholder="Placeholder"
                  type="text" &gt;
                </code>
                <code>&lt;/Input&gt;</code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Input icon</p>
          <SmallDetail>
            The icon is passed by the children, you need to define if the icon
            will be on the right or on the left with
            <Detail>
              <code>&lt;IconLeft /&gt;</code>
            </Detail>
            and
            <Detail>
              <code>&lt;IconRight /&gt;</code>
            </Detail>
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;Input label="Usuário" placeholder="Placeholder"
                  type="text"&gt;
                </code>
                <code>&lt;IconLeft icon=icon/&gt;</code>
                <code>&lt;/Input&gt;</code>
              </Detail>
            </Components>
          </Content>
          <br />

          <p>Input autocomplete</p>
          <SmallDetail>
            AutoComplete is a component that requires a list of suggestions to
            query the results.
          </SmallDetail>
          <Content>
            <Components>
              <Detail>
                {" "}
                <code>
                  &lt;AutoComplete variant="data" placeholder="Search"
                  type="text" data="Lista de dados" selected="method that
                  returns the chosen suggestion" handlerChange="method that
                  returns the modification in the input"&gt;
                </code>
                <code>&lt;/AutoComplete&gt;</code>
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
                <div>Variant</div>
                <div>string</div>
                <div>
                  {" "}
                  Defines what type of data entry it will be. <br />
                  <strong>Data:</strong> the data is passed in the data
                  property, and you don't need to pass anything as a child in
                  the component. <br />
                  <strong>Api:</strong> The layout can be created as a child, it
                  is not necessary to pass the data to the component.
                </div>
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
