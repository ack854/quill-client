import { Paper } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options1 = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    title: {
      display: false,
      text: "",
    },
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

const data1 = {
  labels,
  datasets: [
    {
      label: "",
      data: [3500, 4500, 4700, 4300, 4800],
      borderColor: "#29b6f6",
      backgroundColor: "#29b6f6",
    },
  ],
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
        <div className="h-full grid grid-cols-6 grid-flow-row gap-4">
          <div className="col-span-1 h-[65%]">
            <div className="text-left h-full grid grid-rows-2 grid-flow-col gap-0">
              <div className="text-left h-full ml-3 mt-3 grid grid-rows-3 grid-flow-col gap-0">
                <div className="row-span-1 text-xs font-bold flex items-center">MRR</div>
                <div className="row-span-1 font-bold text-3xl">$ 17,642</div>
                <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                  +2.1%
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 h-full">
            <Line options={options1} data={data1} />;
          </div>
          <div className="col-span-2 h-full">
            <div className=" h-full grid grid-rows-3 grid-flow-col gap-1">
              <div className="row-span-1">
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold flex items-center">
                      TOTAL MEMBERS
                    </div>
                    <div className="row-span-1 font-bold text-xl">3,862</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +2.5%
                    </div>
                  </div>
                  <div>
                    <Line options={options1} data={data1} />;
                  </div>
                </div>
              </div>
              <div className="row-span-1">
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold flex items-center">
                      PAID MEMBERS
                    </div>
                    <div className="row-span-1 font-bold text-xl">1,762</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +7.9%
                    </div>
                  </div>
                  <div>
                    <Line options={options1} data={data1} />;
                  </div>
                </div>
              </div>
              <div className="row-span-1">
                <div className="h-full grid grid-cols-2 grid-flow-row gap-1">
                  <div className="text-left h-full grid grid-rows-4 grid-flow-col gap-0">
                    <div className="row-span-1 text-xs font-bold flex items-center">
                      EMAIL OPEN RATE
                    </div>
                    <div className="row-span-1 font-bold text-xl">81%</div>
                    <div className=" bg-lime-200 w-fit inline-block mt-2 h-fit text-left row-span-1 text-xs font-bold text-green-500">
                      +11.3%
                    </div>
                  </div>
                  <div>
                    <Bar options={options1} data={data1} />;
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
