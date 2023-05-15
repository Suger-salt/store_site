import { SideBer } from "../SideBer";
import { BasicUsage1 } from "../BasicUsage1";
import { BasicUsage2, MakeModal } from "../MakeModal";
import { Link } from "react-router-dom";

// export function TakeOut(props)だとわかってくれない

// これで
export function TakeOut({ routedishes, setRouteDish }) {
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
          <div className=" bg-[#fff] w-full">
            <BasicUsage2
              routedishes={routedishes}
              setRouteDish={setRouteDish}
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
