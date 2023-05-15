import { Link } from "react-router-dom";

// export function Header() {
//   return (
//     <div>
//       <div className="headerAll">
//         <div className="header1">
//           <h1>授業の課題で制作したテストサイトです.</h1>
//         </div>
//         <div className="header2">
//           <Link className="headerElements" to="/">
//             <p>top</p>
//           </Link>
//           <Link className="headerElements" to="/EatIn">
//             <p>店内メニュー</p>
//           </Link>
//           <Link className="headerElements" to="/TakeOut">
//             <p>takeout</p>
//           </Link>
//           <Link className="headerElements" to="/ShopInf">
//             <p>店舗情報</p>
//           </Link>
//           <Link className="headerElements" to="/MiniGame">
//             <p>ミニゲーム</p>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export function Header1() {
  return (
    <div className="fixed w-full bg-red-700 z-20">
      <div className="inner">
        <div className="bg-[#d8d2c2] underline h-1 underline-offset-6 text-center toppage ">
          a
        </div>

        <div className="bg-[#d8d2c2] flex place-content-evenly h-24">
          <div className="bg-[#d8d2c2]   flex w-full h-24 place-content-evenly">
            <Link
              to="/EatIn"
              className="bg-[#d8d2c2] hover:bg-[#c2bdb0] flex w-full h-24"
            >
              <p className="m-auto toppage">eat in</p>
            </Link>

            <Link
              to="/TakeOut"
              className="bg-[#d8d2c2] hover:bg-[#c2bdb0] flex w-full h-24"
            >
              <p className="m-auto toppage">take out</p>
            </Link>
          </div>
          <div className="bg-[#d8d2c2]">
            <Link
              to="/"
              className="bg-[#d8d2c2] hover:bg-[#c2bdb0] flex w-60 h-24"
            >
              <img
                src="/images/logo4.png"
                className="mx-auto object-contain"
              ></img>
            </Link>
          </div>
          <div className="bg-blue-100 flex h-24 w-full place-content-evenly">
            <Link
              to="/ShopInf"
              className="bg-[#d8d2c2] hover:bg-[#c2bdb0] flex w-full h-24"
            >
              <p className="m-auto toppage">店舗情報</p>
            </Link>
            <Link
              to="/MiniGame"
              className="bg-[#d8d2c2] hover:bg-[#c2bdb0] flex w-full h-24"
            >
              <p className="m-auto toppage">ミニゲーム</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
