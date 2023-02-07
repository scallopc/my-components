import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import AppMenu from "../appMenu/appMenu";
import Button from "../button/button";
import Line from "../line/line";
import { Container, ItemsContainer } from "./styles";

export default function HeaderMenu() {
  const [selectedCities1, setSelectedCities1] = useState(null);

  const tenant = [
    { name: "Classe A" },
    { name: "Classe B" },
    { name: "Classe C" },
    { name: "Classe D" },
    { name: "Classe E" },
  ];

  const onCityChange = (e) => {
    setSelectedCities1(e.value);
  };

  return (
    <>
      <Container>
        <ItemsContainer>
          <AppMenu />

          <Dropdown
            filter
            className="tenantContainer"
            value={selectedCities1}
            options={tenant}
            onChange={onCityChange}
            optionLabel="name"
            placeholder="Selecione uma Classe ou View"
          />

          <Button
            variant="text"
            icon="fa-regular fa-circle-plus"
            label="Criar nova Topologia"
          />
        </ItemsContainer>
      </Container>
      <Line direction="horizontal" />
    </>
  );
}
