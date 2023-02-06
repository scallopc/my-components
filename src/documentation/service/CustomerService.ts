import axios from "axios";

export const getUsers = () => {
  return new Promise((reject, resolve) => {
    axios.get("https://api.github.com/users").then((data) => {
      if (!data) {
        reject("meu erro");
      } else {
        resolve(data);
      }
    }).catch(() => {

    });
  });
};
