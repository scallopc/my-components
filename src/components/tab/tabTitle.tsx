import { ContainerTitle, Title } from "./styles";

export type props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
  styleTabActive?: "default" | "around";
};

export function TabTitle({ title, setSelectedTab, index, isActive, styleTabActive = 'default' }) {

  return (
    <ContainerTitle styleTabActive= {styleTabActive} isActive={isActive} onClick={() => setSelectedTab(index)}>
      <Title>{title}</Title>
    </ContainerTitle>
  );
}