import { ReactElement, useState } from "react";
import { Container, Content } from "./styles";
import { TabTitle } from "./tabTitle";

export type propsTab = {
  children: ReactElement[];
  selectedTabIndex?: number;
  isActive?: boolean;
  styleContentActive?: "default" | "around";
};

export function Tabs({ children, selectedTabIndex, isActive, styleContentActive = 'default' }: propsTab) {
  const [selectedTab, setSelectedTab] = useState<number>(selectedTabIndex || 0);

  return (
    <Container>
      <Content styleContentActive={styleContentActive} isActive={isActive}>
        {children?.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            isActive={index === selectedTab}
            styleTabActive= {item.props.styleTabActive}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </Content>
      {children[selectedTab]}
    </Container>
  )
}
