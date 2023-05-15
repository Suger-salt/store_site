import { SideBer } from "../SideBer";
import { BasicUsage1 } from "../BasicUsage1";
import { BasicUsage2, MakeModal } from "../MakeModal";
import { Link } from "react-router-dom";

export function ShopInf({ routedishes, setRouteDish }) {
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

        {/* <div className="flex  w-full ">
          <SideBer />
          <div className=" bg-[#fff] w-full">
            <BasicUsage2
              routedishes={routedishes}
              setRouteDish={setRouteDish}
            />
          </div> */}
      </div>
    </div>
  );
}
