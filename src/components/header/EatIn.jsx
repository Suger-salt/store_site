import { SideBer } from "../SideBer";
import { BasicUsage1 } from "../BasicUsage1";
import { BasicUsage2, MakeModal } from "../MakeModal";
import { Link } from "react-router-dom";
import { BasicUsage3 } from "../MakeModal2";

// export function TakeOut(props)だとわかってくれない

// これで
export function EatIn({ routedishes2, setRouteDish2 }) {
  return (
    <div style={{ width: "100%" }}>
      <h2>a</h2>

      <div className="back mt-[76px]">
        <div className="flex bg-transparent">
          <img
            src="/images/logo4.png"
            className="m-auto  bg-transparent flex  justify-center items-center"
          ></img>
        </div>

        <div className="flex  w-full ">
          <SideBer />
          <div className="bg-[#fff] w-full">
            <BasicUsage3
              routedishes2={routedishes2}
              setRouteDish2={setRouteDish2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//昔のコード
//   // export function TakeOut(props)だとわかってくれない

// export function TakeOut(routedishes ={routedishes}){
//   return(
//     <div>
//       <h2>ここはtake outページです</h2>
//       {/* <BasicUsage2/> */}

//       <div className='displayall'>
//         <SideBer/>
//         <BasicUsage2  {...props}/>
//       </div>
//     </div>
//   );
// }

//2022/12/16
//TakeOutの内容を表示していた.
{
  /* <div className="w-hull">
<div className="bg-[#fff] mt-[100px]">a</div>
<div className="flex w-full bg-[#ff] ">
  <SideBer />
  <BasicUsage2 routedishes={routedishes} setRouteDish={setRouteDish} />
</div>
</div> */
}

// import { SideBer } from "../SideBer";

// export function EatIn() {
//   return (
//     <div>
//       <h2>ここは店内メニューページです</h2>

//       <div className="displayall">
//         <SideBer />
//         <div className="cardsall">
//           <div className="cards">
//             <img src="images/1.png"></img>
//             <div className="display">値段: 1000 </div>
//           </div>
//           <div className="cards">
//             <img src="images/2.png"></img>
//             <div className="display">値段: 2000 </div>
//           </div>
//           <div className="cards">
//             <img src="images/3.png"></img>
//             <div className="display">値段: 3000 </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
