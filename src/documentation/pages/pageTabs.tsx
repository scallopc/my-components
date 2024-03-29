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
import  {Tab}  from "../../components/tab/tab";
import {Tabs}  from "../../components/tab/tabs";
import {TabView}  from "../../components/tab/tabView";
import Avatar from "../../components/avatar/avatar";
import List, { IList } from "../../components/list/list";
import { useState } from "react";
import ToggleSwitch from "../../components/toggleSwitch/toggleSwitch";
import { Breadcrumbs } from "../../components/breadcrumbs/breadcrumbs";
import Input from "../../components/input/input";

export default function PageTabs() {
  const list = [
    { id: 2, name: "Vue" },
    { id: 3, name: "Node" },
    { id: 4, name: "Angular" },
    { id: 1, name: "React" },
  ];

  const [toggled, settoggled] = useState(false);

  const teste = (e) => {
    console.log("Toogle small", e.target.checked);
    settoggled(!toggled);
  };

  const teste2 = (
    <Input
    label="E-mail"
    placeholder="email@email.com"
    type="text"
    iconLeft="fa-solid fa-envelope"
  />
  );

  const tabsTeste = [
    { name: "Students", content: teste2 },
    { name: "Hello", content: '02' },
    { name: "Students 2", content: '03' },
    { name: "Hello 2", content: 'HelloList' },
  ]
return (
    <Container>
      <H2>Tabs</H2>

      <Box>
        <H5>Documentation</H5>
        <DocumentationContainer>
          <p>
            The tabs have two active styles, "default" and "around", the initial
            is default
          </p>
          <Content>
            <h3>Tabs default style</h3>
            <Detail>
              
            </Detail>
              <Tabs>
                <Tab title="Tab 1">
                  Tab 1 Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Rerum, illum.
                </Tab>
                <Tab title="Tab 2">
                  Tab 2 Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Necessitatibus aliquid iure corporis rerum explicabo
                  dolorem.
                </Tab>
                <Tab title="Tab 3">
                  <ToggleSwitch onChange={teste} />
                </Tab>
              </Tabs>
          </Content>

          <Content>
            <h3>Tabs around style</h3>
             <SmallDetail>
              To use the around style, we use the "styleContentActive" for the
              tab content and "styleTabActive" for the tab title
            </SmallDetail>

              <Tabs styleContentActive="around">
                <Tab title="Tab Breadcrumb" styleTabActive="around">
                  <br />
                  <Breadcrumbs />
                </Tab>
                <Tab title="Tab Avatar" styleTabActive="around">
                  <br />
                  <Avatar
                    size="small"
                    image="https://avatars.githubusercontent.com/u/39253660?v=4"
                    active="on"
                  />
                </Tab>
                <Tab title="Tab List" styleTabActive="around">
                  <br />
                  {list?.map((item: any, index: any) => (
                    <List
                      key={index}
                      type="device"
                      list={list}
                      name={item.name}
                    />
                  ))}
                </Tab>
              </Tabs>
          </Content>

          <Content>
          <TabView
          tabs={tabsTeste}
          editable={true}
        />
          </Content>
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
                <div>title</div>
                <div>string</div>
                <div>Defines the tab title</div>
              </TableRow>
              <TableRow>
                <div>styleContentActive</div>
                <div>string</div>
                <div>Defines the tab's content style</div>
              </TableRow>
              <TableRow>
                <div>styleTabActive</div>
                <div>string</div>
                <div>Defines the tab style valid option "around"</div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
