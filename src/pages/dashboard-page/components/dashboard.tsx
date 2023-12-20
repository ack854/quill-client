import React from "react";
import DashboardHeader from "./sections/header";
import RevenueDetails from "./sections/revenue-details";
import "./dashboard.scss";
import TopMembers from "./sections/top-members";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className=" h-screen mt-5 grid grid-rows-2 grid-flow-col gap-4">
        <div className="row-span-1">
          <RevenueDetails />
        </div>
        <div className="row-span-1">
          <div className="grid grid-cols-3 grid-flow-row gap-4 h-full">
            <div className="col-span-2"> hehe</div>
            <div className="col-span-1">
              <div className=" w-[91%] h-full">
                <TopMembers />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
