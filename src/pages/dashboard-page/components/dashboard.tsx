import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { TreeView } from "@mui/x-tree-view/TreeView";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import {
  TreeItem,
  TreeItemProps,
  treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import { Paper } from "@mui/material";
import DashboardHeader from "./sections/header";
import RevenueDetails from "./sections/revenue-details";
import "./dashboard.scss";
import { Link } from "react-router-dom";

const treeViewContents = [
  { nodeId: "1", labelText: "Dashboard", labelIcon: HomeOutlinedIcon },
  {
    nodeId: "2",
    labelText: "View Site",
    labelIcon: SpaceDashboardOutlinedIcon,
  },
  {
    nodeId: "3",
    labelText: "Posts",
    labelIcon: CreateOutlinedIcon,
    endIcon: AddOutlinedIcon,
    childs: [
      {
        parentNodeId: "3",
        nodeId: "9",
        labelText: "Drafts",
      },
      {
        parentNodeId: "3",
        nodeId: "10",
        labelText: "Scheduled",
      },
      {
        parentNodeId: "3",
        nodeId: "11",
        labelText: "Published",
      },
      {
        parentNodeId: "3",
        nodeId: "12",
        labelText: "Free Posts",
        endDiv: <div className="h-[7px] w-[7px] bg-red-600 rounded-full"></div>,
      },
      {
        parentNodeId: "3",
        nodeId: "13",
        labelText: "Paid Posts",
        endDiv: (
          <div className="h-[7px] w-[7px] bg-orange-400 rounded-full"></div>
        ),
      },
      {
        parentNodeId: "3",
        nodeId: "14",
        labelText: "News Letters",
        endDiv: (
          <div className="h-[7px] w-[7px] bg-lime-500 rounded-full"></div>
        ),
      },
    ],
  },
  {
    nodeId: "4",
    labelText: "Pages",
    labelIcon: AutoStoriesOutlinedIcon,
    url: "/pages",
  },
  {
    nodeId: "5",
    labelText: "Tags",
    labelIcon: LocalOfferOutlinedIcon,
  },
  {
    nodeId: "6",
    labelText: "Members",
    labelIcon: GroupsOutlinedIcon,
    labelInfo: "3862",
  },
  {
    nodeId: "7",
    labelText: "Integrations",
    labelIcon: ViewInArOutlinedIcon,
  },
  {
    nodeId: "8",
    labelText: "Staff",
    labelIcon: PersonOutlineOutlinedIcon,
  },
];

declare module "react" {
  interface CSSProperties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon?: React.ElementType<SvgIconProps>;
  endIcon?: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
  endDiv?: any;
  url?: string;
};

const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
  color: theme.palette.text.secondary,
  [`& .${treeItemClasses.content}`]: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(0),
    borderBottomRightRadius: theme.spacing(0),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "&.Mui-expanded": {
      fontWeight: theme.typography.fontWeightRegular,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
    "&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused": {
      //backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
      color: "black",
    },
    [`& .${treeItemClasses.label}`]: {
      fontWeight: "inherit",
      color: "inherit",
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 0,
    [`& .${treeItemClasses.content}`]: {
      paddingLeft: theme.spacing(2),
    },
  },
})) as unknown as typeof TreeItem;

const StyledTreeItem = React.forwardRef(function StyledTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const theme = useTheme();
  const {
    bgColor,
    color,
    labelIcon: LabelIcon,
    endIcon: EndIcon,
    labelInfo,
    labelText,
    colorForDarkMode,
    bgColorForDarkMode,
    endDiv,
    url,
    ...other
  } = props;

  const styleProps = {
    "--tree-view-color":
      theme.palette.mode !== "dark" ? color : colorForDarkMode,
    "--tree-view-bg-color":
      theme.palette.mode !== "dark" ? bgColor : bgColorForDarkMode,
  };

  return (
    <StyledTreeItemRoot
      label={
        <Link to={url}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: "inherit", flexGrow: 1 }}
              className="pl-3 text-base"
            >
              {labelText}
            </Typography>
            <Box component={EndIcon} color="inherit" sx={{ mr: 1 }} />
            <div className="bg-slate-300 rounded">
              <Typography variant="caption" color="inherit">
                {labelInfo}
              </Typography>
            </div>
            <div>{endDiv}</div>
          </Box>
        </Link>
      }
      style={styleProps}
      {...other}
      ref={ref}
      onClick={() => onTreeItemClick(props)}
    />
  );
});

const onTreeItemClick = (item: any) => {
  console.log(item);
};

const SideMenu = () => {
  return (
    <>
      <div className="mt-10">
        <Paper
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
          className="h-screen w-full"
        >
          <div className=" my-6 grid grid-cols-10 grid-flow-row gap-1">
            <div className="col-span-9 text-left font-bold text-xl ml-8">
              uBlog
            </div>
            <SearchOutlinedIcon className="col-span-1" />
          </div>
          <TreeView
            aria-label="gmail"
            defaultExpanded={["3"]}
            defaultCollapseIcon={<ArrowDropDownIcon />}
            defaultExpandIcon={<ArrowRightIcon />}
            defaultEndIcon={<div style={{ width: 24 }} />}
            sx={{ flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
            className="h-full text-left"
          >
            {treeViewContents?.map((item: any) => {
              return (
                <StyledTreeItem
                  key={item.nodeId}
                  nodeId={item.nodeId}
                  labelText={item?.labelText}
                  labelIcon={item?.labelIcon}
                  endIcon={item?.endIcon}
                  labelInfo={item?.labelInfo}
                  url={item?.url}
                >
                  {item?.childs
                    ? item?.childs?.map((child: any) => {
                        return (
                          <StyledTreeItem
                            key={child.nodeId}
                            nodeId={child.nodeId}
                            labelText={child?.labelText}
                            labelIcon={child?.labelIcon}
                            endIcon={child?.endIcon}
                            labelInfo={child?.labelInfo}
                            endDiv={child.endDiv}
                          ></StyledTreeItem>
                        );
                      })
                    : null}
                </StyledTreeItem>
              );
            })}
          </TreeView>
        </Paper>
      </div>
    </>
  );
};

const Dashboard = () => {
  return (
    <div className="w-screen h-screen">
      <div className="relative ml-4 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-5 grid-flow-row gap-6">
          <div className="md:col-span-1">{SideMenu()}</div>
          <div className="md:col-span-4 mt-9">
            <DashboardHeader />
            <div className=" h-full mt-5 grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-1">
                <RevenueDetails />
              </div>
              <div className="row-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
