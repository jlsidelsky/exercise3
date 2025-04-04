import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import A1 from "./components/A1/A1";
import A2 from "./components/A2/A2";
import A3 from "./components/A3/A3";
import A4 from "./components/A4/A4";
import A5 from "./components/A5/A5";
import A6 from "./components/A6/A6";
import A7 from "./components/A7/A7";
import A8 from "./components/A8/A8";
import A11 from "./components/A11/A11";
import A12 from "./components/A12/A12";
import A13 from "./components/A13/A13";
import A14 from "./components/A14/A14";
import A9 from "./components/A9/A9";
import A10 from "./components/A10/A10";
import Nav from "./components/Nav";
import A15 from "./components/A15/A15";
import A16 from "./components/A16/A16";
import A17 from "./components/A17/A17";
import A18 from "./components/A18/A18";
import A19 from "./components/A19/A19";
import A20 from "./components/A20/A20";

const loaders = [
  <A1 />,
  <A2 />,
  <A3 />,
  <A4 />,
  <A5 />,
  <A6 />,
  <A7 />,
  <A8 />,
  <A9 />,
  <A10 />,
  <A11 />,
  <A12 />,
  <A13 />,
  <A14 />,
  <A15 />,
  <A16 />,
  <A17 />,
  <A18 />,
  <A19 />,
  <A20 />,
  //  A15, A16
];
const formatLoader = (a: number, b: number): string => {
  const formatNumber = (num: number): string =>
    num < 10 ? `0${num}` : `${num}`;
  return `${formatNumber(a)}/${formatNumber(b)}`;
};
function App() {
  const [count, setCount] = useState(0);

  const [loader, setLoader] = useState(0);

  const increment = () => {
    window.scrollTo(0, 0);

    setLoader((loader + 1) % loaders.length);
  };
  const decrement = () => {
    window.scrollTo(0, 0);

    setLoader((loader - 1 + loaders.length) % loaders.length);
  };

  return (
    <>
      <Nav increment={increment} decrement={decrement}></Nav>
      <p
        style={{
          position: "fixed",
          left: 24,
          bottom: 12,
          margin: 0,
          color: "var(--primary)",
          fontFamily: "monospace",
        }}
      >
        {formatLoader(loader + 1, loaders.length)}
      </p>
      {loaders[loader]}
    </>
  );
}

export default App;
