import React from "react";
import DashboardHeader from "./sections/header";
import RevenueDetails from "./sections/revenue-details";
import "./dashboard.scss";
import TopMembers from "./sections/top-members";
import { Paper } from "@mui/material";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

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
            <div className="col-span-2">
              <div className="grid grid-rows-2 grid-flow-col gap-4 h-full">
                <div>
                  <Paper
                    sx={{
                      width: "97%",
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                    className="h-full"
                  >
                    <div className="grid grid-rows-3 gap-4 h-full">
                      <Paper
                        sx={{
                          width: "100%",
                          backgroundColor: (theme) =>
                            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                        }}
                        className="h-full w-full"
                      >
                        <div className="row-span-1 relative text-left items-center">
                          <span className="absolute font-bold ml-5 mt-3">
                            Start creating Content
                          </span>
                        </div>
                      </Paper>
                      <div className="row-span-2">
                        <div className="grid grid-cols-2 grid-flow-row gap-4 h-full">
                          <div className="text-left ml-5 flex">
                            <GroupOutlinedIcon
                              sx={{
                                background: "#ff679b",
                                borderRadius: "5px",
                                fontSize: 35,
                                color: "white",
                              }}
                            />
                            <div className="flex flex-col ml-3">
                              <span className="font-bold">
                                Create your first member
                              </span>
                              <span>
                                Add yourself or Import members from CSV
                              </span>
                            </div>
                          </div>
                          <div className="text-left ml-5">
                            <PostAddOutlinedIcon
                              sx={{
                                background: "#64b464",
                                borderRadius: "5px",
                                fontSize: 35,
                                color: "white",
                              }}
                            />
                            <span className="font-bold ml-3">
                              Publish a post
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </div>
                <div>2</div>
              </div>
            </div>
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
