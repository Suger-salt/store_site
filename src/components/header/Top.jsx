import { Link } from "react-router-dom";
import { SideBer } from "../SideBer";

//topが押されたときに表示したいページ
export function Top() {
  return (
    <div style={{ width: "100%" }}>
      <h2>a</h2>

      <div className="back mt-[76px]">
        <div className="flex">
          <img
            src="/images/logo4.png"
            className="m-auto  bg-transparent flex  justify-center items-center"
          ></img>
        </div>

        <div className="flex  w-full">
          <SideBer />

          <div className="bg-[#fff] w-full">
            <div className="text4 toppage">
              このサイトは授業の一環で作成したテストサイトです.
            </div>
            <div>
              <h3
                id="greeting"
                className="toppage h-[70px] m-[1rem] flex items-center  headline"
              >
                店長あいさつ
              </h3>
              <div className="text1 m-[2rem] toppage text-[20px] flex items-center justify-center">
                サイトに訪れていただきありがとうございます.皆様に憩いの場を提供したく,
                <br />
                カフェ Place of Rest
                を開店いたしました.様々な料理をご用意いたしています.
                <br />
                どうぞごゆっくりしていってください.
              </div>
              <h3
                id="history1"
                className="toppage h-[70px] m-[1rem] flex items-center  headline"
              >
                お店のこと
              </h3>
              <div className="text1 m-[2rem] toppage text-[20px] flex items-center justify-center">
                私が5年前に開店したカフェが Place of Rest です.
                <br />
                様々な料理とゆったりとした空間をテーマにしております.
                <br />
                休憩や作業の合間にでもご来店してみては,いかかでしょうか?
              </div>

              <h3
                id="suggestion"
                className="toppage h-[70px] m-[1rem] flex items-center  headline"
              >
                店長のおすすめ
              </h3>
              <div className="text1 m-[2rem] toppage flex items-center justify-center">
                <div>
                  <Link
                    to="/EatIn"
                    className=" text-[30px] shadow1 h-[50px] w-[300px] hover:bg-[#f7d5c5]"
                  >
                    eat in
                  </Link>
                  <div className="text-[20px]">
                    暖かい日ですと ラムネアイス や チョコぱふぁっふぇ
                    <br />
                    肌寒い日ですと チャイのプリンや紅茶プリンがおすすめです.
                  </div>
                  <Link
                    to="/TakeOut"
                    className=" my-parts1 text-[30px] shadow1 h-[50px] w-[300px] hover:bg-[#f7d5c5]"
                  >
                    take out
                  </Link>
                  <div className="text-[20px]">
                    暖かい日ですと ラムネアイス や チョコぱふぁっふぇ
                    <br />
                    肌寒い日ですと チャイのプリンや紅茶プリンがおすすめです.
                  </div>
                </div>
              </div>
              <h3
                id="review"
                className="toppage h-[70px] m-[1rem] flex items-center  headline"
              >
                お店の口コミ
              </h3>
              <div className="text1 m-[2rem] toppage flex items-center justify-center">
                -----comments comments comments comments -----
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
