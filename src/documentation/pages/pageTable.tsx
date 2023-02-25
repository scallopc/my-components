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
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export default function PageTable() {
  const [selectedProduct1, setSelectedProduct1] = useState(null);
  const [selectedProducts2, setSelectedProducts2] = useState(null);
  const [selectedProducts3, setSelectedProducts3] = useState(null);
  const [selectedProducts7, setSelectedProducts7] = useState(null);

  const countries = [
    {
      id: "1",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      id: "2",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      id: "3",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      id: "6",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      id: "4",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
    {
      id: "5",
      name: "Real",
      price: "R$ 0,32",
      volume: "R$ 3,20",
      capital: "R$ 32,00",
    },
  ];

  return (
    <Container>
     
      <Box>
        <H5>Documentation</H5>

        <DocumentationContainer>
          <SmallDetail>
            here we have some table options. Components from the "PrimeReact"
            library.
          </SmallDetail>
          <br />
          <p>Table Basic</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/datatable/basic/"
              target={"_blank"}
            >
              More about table basic
            </Link>
          </SmallDetail>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;DataTable value=<code>&#123;</code>countries<code>&#125;</code> responsiveLayout="scroll" &gt;
                </code>
                <br />
                 &nbsp; <code>&lt;Column field="name" header="Moeda" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Preço" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Volume" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Mercado capital" /&gt;</code> <br />
                 <code>&lt;/DataTable&gt;</code> <br />
              </Detail>
            </Components>
          </Content>
          <Content>
            <DataTable value={countries} responsiveLayout="scroll">
              <Column field="name" header="Moeda"></Column>
              <Column field="price" header="Preço"></Column>
              <Column field="volume" header="Volume"></Column>
              <Column field="capital" header="Mercado capital"></Column>
            </DataTable>
          </Content>
          <br />

          <br />
          <p>Table Select single</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/datatable/selection/"
              target={"_blank"}
            >
              More about table select single
            </Link>
          </SmallDetail>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;DataTable value=<code>&#123;</code>countries<code>&#125;</code> responsiveLayout="scroll"
                  selection=<code>&#123;</code>selectedProduct1<code>&#125;</code> onSelectionChange=<code>&#123;</code>function<code>&#125;</code> 
                  selectionMode="single"&gt;
                </code>
                <br />
                 &nbsp; <code>&lt;Column field="name" header="Moeda" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Preço" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Volume" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Mercado capital" /&gt;</code> <br />
                 <code>&lt;/DataTable&gt;</code> <br />
              </Detail>
            </Components>
          </Content>
          <Content>
            <DataTable value={countries} responsiveLayout="scroll"  selectionMode="single"  selection={selectedProduct1}
              onSelectionChange={(e) => setSelectedProduct1(e.value)}
              dataKey="id">
              <Column field="name" header="Moeda"></Column>
              <Column field="price" header="Preço"></Column>
              <Column field="volume" header="Volume"></Column>
              <Column field="capital" header="Mercado capital"></Column>
            </DataTable>
          </Content>
          <br />

          <br />
          <p>Table Select metaKey</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/datatable/selection/"
              target={"_blank"}
            >
              More about table select metaKey
            </Link>
          </SmallDetail>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;DataTable value=<code>&#123;</code>countries<code>&#125;</code> responsiveLayout="scroll"
                  selection=<code>&#123;</code>selectedProduct1<code>&#125;</code> onSelectionChange=<code>&#123;</code>function<code>&#125;</code>  metaKeySelection=<code>&#123;</code>false<code>&#125;</code>
                  selectionMode="multiple"&gt;
                </code>
                <br />
                 &nbsp; <code>&lt;Column field="name" header="Moeda" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Preço" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Volume" /&gt;</code> <br />
                 &nbsp; <code>&lt;Column field="name" header="Mercado capital" /&gt;</code> <br />
                 <code>&lt;/DataTable&gt;</code> <br />
              </Detail>
            </Components>
          </Content>
          <Content>
            <DataTable 
              value={countries}
              responsiveLayout="scroll"
              selectionMode="multiple"
              metaKeySelection={false}
              selection={selectedProducts2}
              onSelectionChange={(e) => setSelectedProducts2(e.value)}
              dataKey="id">
              <Column field="name" header="Moeda"></Column>
              <Column field="price" header="Preço"></Column>
              <Column field="volume" header="Volume"></Column>
              <Column field="capital" header="Mercado capital"></Column>
            </DataTable>
          </Content>
          <br />

          <br />
          <p>Table Select Drag</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/datatable/selection/"
              target={"_blank"}
            >
              More about table select drag
            </Link>
          </SmallDetail>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;DataTable value=<code>&#123;</code>countries<code>&#125;</code> responsiveLayout="scroll"
                  selection=<code>&#123;</code>selectedProduct1<code>&#125;</code> onSelectionChange=<code>&#123;</code>function<code>&#125;</code>  dragSelection
                  selectionMode="multiple"&gt;
                </code>
                <br />
                &nbsp; <code>&lt;Column field="name" header="Moeda" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Preço" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Volume" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Mercado capital" /&gt;</code> <br />
                 <code>&lt;/DataTable&gt;</code> <br />
              </Detail>
            </Components>
          </Content>
          <Content>
            <DataTable 
               value={countries}
               responsiveLayout="scroll"
               selectionMode="multiple"
               dragSelection
               selection={selectedProducts3}
               onSelectionChange={(e) => setSelectedProducts3(e.value)}
               dataKey="id">
              <Column field="name" header="Moeda"></Column>
              <Column field="price" header="Preço"></Column>
              <Column field="volume" header="Volume"></Column>
              <Column field="capital" header="Mercado capital"></Column>
            </DataTable>
          </Content>
          <br />

          <br />
          <p>Table Select Checkbox</p>
          <SmallDetail>
            <Link
              href="https://www.primefaces.org/primereact/datatable/selection/"
              target={"_blank"}
            >
              More about table select checkbox
            </Link>
          </SmallDetail>

          <Content>
            <Components>
              <Detail>
                <code>
                  &lt;DataTable value=<code>&#123;</code>countries<code>&#125;</code> responsiveLayout="scroll"
                  selection=<code>&#123;</code>selectedProduct1<code>&#125;</code> onSelectionChange=<code>&#123;</code>function<code>&#125;</code>
                 &gt;
                </code>
                <br />
                &nbsp; <code>&lt;Column selectionMode="multiple" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Moeda" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Preço" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Volume" /&gt;</code> <br />
                &nbsp; <code>&lt;Column field="name" header="Mercado capital" /&gt;</code> <br />
                 <code>&lt;/DataTable&gt;</code> <br />
              </Detail>
            </Components>
          </Content>
          <Content>
            <DataTable 
               value={countries}
               responsiveLayout="scroll"
               selection={selectedProducts7}
               onSelectionChange={(e) => setSelectedProducts7(e.value)}
               dataKey="id">
              <Column selectionMode="multiple" />
              <Column field="name" header="Moeda"></Column>
              <Column field="price" header="Preço"></Column>
              <Column field="volume" header="Volume"></Column>
              <Column field="capital" header="Mercado capital"></Column>
            </DataTable>
          </Content>
          <br />

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
              <TableRow>
                <div>value</div>
                <div>array</div>
                <div>Value of the component</div>
              </TableRow>
              <TableRow>
                <div>responsiveLayout</div>
                <div>string</div>
                <div>
                Applies "scroll" to the table
                </div>
              </TableRow>
              <TableRow>
                <div>selectionMode</div>
                <div>string</div>
                <div>
                Selection mode, valid options "single" or "multiple"
                </div>
              </TableRow>
              <TableRow>
                <div>selection</div>
                <div>string</div>
                <div>Selected item</div>
              </TableRow>
              <TableRow>
                <div>metaKeySelection</div>
                <div>boolean</div>
                <div>
                When false, allows you to select multiple rows
                </div>
              </TableRow>
              <TableRow>
                <div>dragSelection</div>
                <div>string</div>
                <div>Allows dragging to select items from the table</div>
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
              <TableRow>
                <div>onSelectionChange</div>
                <div>
                  Event
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
