import { Paper } from "@mui/material";
import { Chart } from "react-google-charts";

const data = [
  ["Month", "Income(₹)"],
  ["May", 47250],
  ["Jun", 47500],
  ["Jul", 47750],
  ["Aug", 49000],
  ["Sep", 47500],
  ["Oct", 47750],
  ["Nov", 49000],
];

const options = {
  title: "",
  curveType: "function",
  legend: { position: "none" },
  colors: ["#29b6f6"],
};

const RevenueDetails = () => {
  return (
    <div className="h-full w-full">
      <Paper
        sx={{
          width: "97%",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
        className="h-full"
      >
        <div className="h-full grid grid-cols-6 grid-flow-row gap-1">
          <div className="col-span-1">
            <div className="text-left h-full grid grid-rows-2 grid-flow-col gap-0">
              <div className="text-left h-full ml-3 mt-3 grid grid-rows-3 grid-flow-col gap-0">
                <div className="row-span-1 text-xs font-bold">
                  MRR
                </div>
                <div className="row-span-1 font-bold text-3xl">$ 17,642</div>
                <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                  +2.1%
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <Chart
              chartType="LineChart"
              data={data}
              options={options}
              height={"90%"}
            />
          </div>
          <div className="col-span-2">
            <div className=" h-full grid grid-rows-3 mt-3 grid-flow-col gap-1">
              <div>
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold">
                      TOTAL MEMBERS
                    </div>
                    <div className="row-span-1 font-bold text-xl">3,862</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +2.5%
                    </div>
                  </div>
                  <div>
                    <Chart
                      chartType="LineChart"
                      data={data}
                      options={options}
                      height={"50%"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold">
                      PAID MEMBERS
                    </div>
                    <div className="row-span-1 font-bold text-xl">1,762</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +7.9%
                    </div>
                  </div>
                  <div>
                    <Chart
                      chartType="LineChart"
                      data={data}
                      options={options}
                      height={"50%"}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold">
                      EMAIL OPEN RATE
                    </div>
                    <div className="row-span-1 font-bold text-xl">81%</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +11.3%
                    </div>
                  </div>
                  <div>
                    <Chart
                      chartType="Bar"
                      data={data}
                      options={options}
                      height={"50%"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default RevenueDetails;
