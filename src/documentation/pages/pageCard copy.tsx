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

import { useEffect, useRef, useState } from "react";
import { ProgressBar } from "primereact/progressbar";
import Line from "../../components/line/line";
import Card from "../../components/card/card";
import { Badge, ContainerBadge } from "../../components/card/styles";
import Heading from "../../components/heading/heading";

export default function PageCards() {
  const cardList =
    '<Card type="list" title={item.title} subtitle={item.subtitle} image={item.image} />';
  const cardBlock =
    '<Card type="block" title={item.title} subtitle={item.subtitle} image={item.image} />';
  const cardView =
    '<Card type="view_ci" title={item.title} subtitle={item.subtitle} icon={item.icon} typeView={item.type} count={item.ci_count} />';
  const cardTopology =
    '<Card type="topology" title={item.title} subtitle={item.subtitle} group={item.group} ' + 
    '<ContainerBadge> <Badge> {tags} </Badge></ContainerBadge>' +
     '</Card>';

  const cards = [
    {
      path: "/topology",
      title: "Dashboard",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953561-4df8e6e1d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Service Topology",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621417308431-e424b20a773d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Help Desk",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953243-22c9380429d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "App Name Sample",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416952698-7f63e87ad793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "console",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      image:
        "https://images.unsplash.com/photo-1621416953426-6cf6497af8ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  const views = [
    {
      title: "Class or view Name",
      subtitle:
        "Class or view description. Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis.",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "45",
    },
    {
      title: "Node View",
      subtitle: "Relação de equipamentos e componentes principais do CMDB",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "1500",
    },
    {
      title: "Lista CIs",
      subtitle: "Relação de todos os CIs da da estrutura Configuration Item.",
      icon: "fa-solid fa-rectangle-list",
      type: "view",
      ci_count: "6800",
    },
    {
      title: "Hardware",
      subtitle: "Relação de todos os CIs da da estrutura Configuration Item.",
      icon: "fa-solid fa-tachograph-digital",
      type: "class",
      ci_count: "400",
    },
    {
      title: "IP Address",
      subtitle: "Lista de todos os CIs classificados como IP Address.",
      icon: "fa-solid fa-globe",
      type: "view",
      ci_count: "4580",
    },
    {
      title: "Computer",
      subtitle: "Lista de todos os CIs classificados como IP Computer.",
      icon: "fa-solid fa-computer",
      type: "view",
      ci_count: "555",
    },
    {
      title: "Server",
      subtitle: "Lista de todos os CIs classificados como Hardware.",
      icon: "fa-solid fa-server",
      type: "view",
      ci_count: "380",
    },
    {
      title: "Application",
      subtitle: "Lista de todos os CIs classificados como application.",
      icon: "fa-solid fa-browser",
      type: "view",
      ci_count: "120",
    },
    {
      title: "Network Gear",
      subtitle: "Lista de todos os CIs classificados como Netowrk Gear",
      icon: "fa-solid fa-circle-nodes",
      type: "view",
      ci_count: "120",
    },
    {
      title: "Router Hardware",
      subtitle: "Lista de todos os CIs classificados como Router Hardware.",
      icon: "fa-solid fa-router",
      type: "view",
      ci_count: "60",
    },
    {
      title: "Switch Hardware",
      subtitle: "Lista de todos os CIs classificados como Switch Hardware.",
      icon: "fa-solid fa-arrows-repeat",
      type: "view",
      ci_count: "40",
    },
    {
      title: "Firewall Hardware",
      subtitle: "Lista de todos os CIs classificados como Firewall Hardware.",
      icon: "fa-solid fa-block-brick-fire",
      type: "view",
      ci_count: "5",
    },
    {
      title: "Repeater Network",
      subtitle: "Lista de todos os CIs classificados como Repeater Network.",
      icon: "fa-regular fa-tower-broadcast",
      type: "class",
      ci_count: "5",
    },
    {
      title: "Bridge Network",
      subtitle: "Lista de todos os CIs classificados como Bridge Network.",
      icon: "fa-solid fa-bridge-suspension",
      type: "view",
      ci_count: "1",
    },
    {
      title: "Wireless Hardware",
      subtitle: "Lista de todos os CIs classificados como Wireless Hardware.",
      icon: "fa-solid fa-wifi",
      type: "class",
      ci_count: "10",
    },
    {
      title: "Load Balance Hardware",
      subtitle:
        "Lista de todos os CIs classificados como Load Balance Hardware.",
      icon: "fa-solid fa-sitemap",
      type: "view",
      ci_count: "6",
    },
  ];

  const topology = [
    {
      title: "Rede de CDN - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora Z",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora XZ",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora C",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de Parceiro FTTH - Operadora A",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor scelerisque diam quis volutpat fermentum.",
      tags: ["Nova", "Produção", "Adipsicing Elit", "Adipsicing Elit"],
      group: "CDN",
    },
    {
      title: "Rede de CDN - Operadora X",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis magna morbi dolor.",
      tags: ["Nova", "Produção", "Adipsicing Elit", "Adipsicing Elit"],
      group: "CDN",
    },
  ];

  return (
    <Container>
      <Box>
        <H5>Documentation</H5>

        <DocumentationContainer>
          <SmallDetail>here we have some card options.</SmallDetail>
          <br />
          <p>Card List</p>
          <SmallDetail>
            Card for exclusive use of topology applications in list
          </SmallDetail>
          <Content>
            <Components>
              <div className="flex flex-column gap-3">
                <Detail>{cardList}</Detail>
                <br />
                <div className="flex flex-wrap gap-3">
                  {cards?.map((item: any, index: number) => (
                    <Card
                      type="list"
                      key={index}
                      title={item.title}
                      description={item.subtitle}
                      image={item.image}
                      route={item.path}
                    />
                  ))}
                </div>
              </div>
            </Components>
          </Content>
          <br />
          <p>Card Block</p>
          <SmallDetail>
            Card for exclusive use of topology applications in block
          </SmallDetail>
          <Content>
            <Components>
              <div className="flex flex-column gap-3">
                <Detail>{cardBlock}</Detail>
                <br />
                <div className="flex flex-wrap gap-3">
                  {cards?.map((item: any, index: number) => (
                    <Card
                      type="block"
                      key={index}
                      title={item.title}
                      description={item.subtitle}
                      image={item.image}
                    />
                  ))}
                </div>
              </div>
            </Components>
          </Content>
          <br />
          <p>Card View_Ci</p>
          <SmallDetail>Card for exclusive use of View CI</SmallDetail>
          <Content>
            <Components>
              <div className="flex flex-column gap-3">
                <Detail>{cardView}</Detail>
                <br />
                <div className="flex flex-wrap gap-3">
                  {views?.map((item: any, index: number) => (
                    <Card
                      type="view_ci"
                      key={index}
                      title={item.title}
                      description={item.subtitle}
                      icon={item.icon}
                      typeView={item.type}
                      count={item.ci_count}
                    />
                  ))}
                </div>
              </div>
            </Components>
          </Content>
          <br />
          <p>Card Topology</p>
          <SmallDetail>Card for exclusive use of topology</SmallDetail>
          <Content>
            <Components>
              <div className="flex flex-column gap-3">
                <Detail>{cardTopology}</Detail>
                <br />
                <div className="flex flex-wrap gap-3">
                  {topology?.map((item: any, index: number) => (
                    <Card
                      type="topology"
                      key={index}
                      title={item.title}
                      description={item.subtitle}
                      group={item.group}
                    >
                      <ContainerBadge>
                        {item?.tags?.map((tags, i) => {
                          return <Badge key={i}> {tags}</Badge>;
                        })}
                      </ContainerBadge>
                    </Card>
                  ))}
                </div>
              </div>
            </Components>
          </Content>
          <br />
          <p>Card Default</p>
          <SmallDetail>Customizable Cards</SmallDetail>
          <Content>
            <Components>
              <div className="flex flex-column gap-3">
                <Detail>{cardView}</Detail>
                <br />
                <div className="flex flex-wrap gap-3">
                  <Card>
                    <div className="flex flex-column gap-1 align-items-center">
                      <Heading type="heading" headingSize="h3">Title</Heading>
                      <Heading type="heading" headingSize="h5">Subtitle</Heading>
                      <Heading type="text" textSize="md">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis, rerum.</Heading>
                    </div>
                  </Card>
                </div>
              </div>
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
                <b>Parameters</b>
              </TableRow>
              <Line direction="horizontal" />
              <TableRow>
                <div>type</div>
                <div>string</div>
                <div>
                  Valid options list | "lock | view_ci | topology, or if you
                  don't specify the type, it will be default
                </div>
              </TableRow>
              <TableRow>
                <div>title</div>
                <div>string</div>
                <div>Card title</div>
              </TableRow>
              <TableRow>
                <div>subtitle</div>
                <div>string</div>
                <div> card subtitle</div>
              </TableRow>
              <TableRow>
                <div>image</div>
                <div>string</div>
                <div>Card image</div>
              </TableRow>
              <TableRow>
                <div>icon</div>
                <div>any</div>
                <div>
                  For type="block" set the icon as bolean to show icons or not,
                  for the other card types, show icon{" "}
                </div>
              </TableRow>
              <TableRow>
                <div>typeView</div>
                <div>string</div>
                <div>
                  For type="block" allows you to indeticate if the view type is
                  "view" or "class"
                </div>
              </TableRow>
              <TableRow>
                <div>count</div>
                <div>string</div>
                <div>
                  for type="block" shows the numbers of the view or class
                </div>
              </TableRow>
              <TableRow>
                <div>group</div>
                <div>string</div>
                <div>
                  for type="topology" shows the group of the topology
                </div>
              </TableRow>
              <TableRow>
                <div>tag</div>
                <div>string</div>
                <div>
                  for type="topology" shows the tag of the topology
                </div>
              </TableRow>
            </Table>
          </Content>
        </DocumentationContainer>
      </Box>
    </Container>
  );
}
