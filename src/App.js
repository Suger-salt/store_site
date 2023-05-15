import logo from "./logo.svg";
import "./App.css";
// import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { GoodsList } from "./components/GoodsList";
import { Detail } from "./components/Detail";
import { useState } from "react";
import { EatIn } from "./components/header/EatIn";
import { MiniGame } from "./components/header/MiniGame";
import { ShopInf } from "./components/header/ShopInf";
import { TakeOut } from "./components/header/TakeOut";
import { Header } from "./components/header/Header";
import { ScrollWindow } from "./components/ScrollWindow";
import { Top } from "./components/header/Top";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
//別ファイルからの持ってこれる.
import { dishesdata, dishesdata2 } from "./goods";
import { Header1 } from "./components/header/Header";

function App() {
  //ここから子コンポーネントに渡す.
  const [routedishes, setRouteDish] = useState(dishesdata);
  const [routedishes2, setRouteDish2] = useState(dishesdata2);

  return (
    <BrowserRouter className="toppage">
      <Header1 />

      {/* <div className="h-52 bg-[#c2bdb0]"></div> */}

      <Routes>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/" element={<Top />}></Route>

        <Route
          path="/EatIn"
          element={
            <EatIn routedishes2={routedishes2} setRouteDish2={setRouteDish2} />
          }
        ></Route>

        {/*まずはTakeOutにstateを渡す.*/}
        {/*...routedishdesでエラーはく*/}
        {/* setRouteDish={setRouteDish} も同様 */}

        <Route
          path="/TakeOut"
          element={
            <TakeOut routedishes={routedishes} setRouteDish={setRouteDish} />
          }
        ></Route>

        <Route path="/ShopInf" element={<ShopInf />}></Route>
        <Route path="/MiniGame" element={<MiniGame />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

// 関数コンポーネントの名前が大文字じゃなかったら,えらーを吐く.

export default App;

// {/*画面の遷移をする方法*/}
// <div className="contents">
// <div className="section" onClick={() => ScrollWindow("history")}>
//   {" "}
//   History{" "}
// </div>

// <div id="history" className="list">
//   history
// </div>
// </div>
