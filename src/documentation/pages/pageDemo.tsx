import Table from "../../components/table/table";
import { getUsers } from "../service/CustomerService";
import { Container } from "../styles";
import React, { useState, useEffect } from "react";

export default function PageDemo() {
  const stockItems = [
    {
      id: 1,
      name: "Pencil",
      count: 3,
      image: {
        url: "https://user-images.githubusercontent.com/14864439/101538058-52edaa00-397b-11eb-8107-ea606bf90929.png",
        width: 100,
        height: 50,
      },
    },
    {
      id: 2,
      name: "Paper",
      count: 4,
      image: {
        url: "https://user-images.githubusercontent.com/14864439/101538104-61d45c80-397b-11eb-8c56-b2de523b9aa3.png",
        width: 100,
        height: 50,
      },
    },
    {
      id: 3,
      name: "Scissors",
      count: 4,
      image: {
        url: "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
        width: 100,
        height: 50,
      },
    },
  ];

  const data = [
    {
      name: "Mittens",
      color: "black",
      age: 2,
      gender: "female",
      activityLevel: "hight",
      favoriteFood: "milk",
      url: "https://user-images.githubusercontent.com/14864439/101538129-68fb6a80-397b-11eb-8250-e622fdf0f34c.png",
    },
    {
      name: "Mons",
      color: "grey",
      age: 2,
      gender: "male",
      favoriteFood: "old socks",
      activityLevel: "medium",
      url: "https://user-images.githubusercontent.com/14864439/101538104-61d45c80-397b-11eb-8c56-b2de523b9aa3.png",
    },
    {
      name: "Luna",
      color: "black",
      age: 2,
      gender: "female",
      activityLevel: "medium",
      favoriteFood: "fish",
      image:
        "https://user-images.githubusercontent.com/14864439/101538058-52edaa00-397b-11eb-8107-ea606bf90929.png",
    },
  ];

  const columns = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "url",
      header: "Imagem",
    },
  ];

  const [customers, setCustomers] = useState<any>([]);

  useEffect(() => {
    t();
  }, []);

  const t = () => {
    getUsers()
      .then((data) => {
        setCustomers(data);
        console.log(data);
      })
      .catch(() => {});
  };

  const teste = [{ field: 'customers?.login', header: "Name" }];

  return (
    <Container>
      <Table columns={teste} />
    </Container>
  );
}
