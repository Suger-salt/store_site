import { useLocation } from "react-router-dom";
import { ScrollWindow } from "./ScrollWindow";

export function SideBer() {
  const url = useLocation();

  let result;
  if (url.pathname == "/") {
    result = (
      <div className="w-1/5 bg-[#f5da82]">
        <div
          onClick={() => ScrollWindow("greeting")}
          className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full "
        >
          <div className="toppage">店長あいさつ</div>
        </div>

        <div
          onClick={() => ScrollWindow("history1")}
          className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full "
        >
          <div className="toppage">お店のこと</div>
        </div>
        <div
          onClick={() => ScrollWindow("suggestion")}
          className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full "
        >
          <div className="toppage">店長のおすすめ</div>
        </div>
        <div
          onClick={() => ScrollWindow("review")}
          className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full "
        >
          <div className="toppage">お店の口コミ</div>
        </div>
      </div>
    );
  } else if (url.pathname == "/EatIn" || url.pathname == "/TakeOut") {
    result = (
      <div className="w-1/5 bg-[#f5da82]">
        <div className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full ">
          <div className="toppage">安い順</div>
        </div>

        <div className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full ">
          <div className="toppage">new 商品</div>
        </div>
        <div className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full ">
          <div className="toppage">人気ランキング</div>
        </div>
        <div className="bg-[#f5da82]  h-20 hover:bg-[#dbc67f] flex  justify-center items-center  w-full ">
          <div className="toppage">温度で提案</div>
        </div>
      </div>
    );
  } else {
    result = <></>;
  }
  return result;
}

//takeoutと店内メニューのsidebdrをしていた

// <div className="w-1/5 bg-[#f5da82] toppage">
//         <div>温度で提案</div>
//         <div>人気ランキング</div>
//         <div>安い順</div>
//       </div>
