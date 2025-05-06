import React, { useContext } from "react";
import { dataProvider } from "./context/DataProvider";

const Home = () => {
  const data = useContext(dataProvider);
  console.log(data);
  return <div>Home</div>;
};

export default Home;
