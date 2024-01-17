import * as React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import {
  TreeItem,
  TreeItemProps,
  treeItemClasses,
} from "@mui/x-tree-view/TreeItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TreeView } from "@mui/x-tree-view/TreeView";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Paper, styled } from "@mui/material";

import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import blog from "../../assets/images/blog.png";
import { Link } from "react-router-dom";
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
  endIconName?: string;
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

const treeViewContents = [
  {
    nodeId: "1",
    labelText: "Dashboard",
    labelIcon: HomeOutlinedIcon,
    url: "/dashboard",
  },
  {
    nodeId: "2",
    labelText: "View Site",
    labelIcon: SpaceDashboardOutlinedIcon,
  },
  {
    nodeId: "3",
    labelText: "Posts",
    labelIcon: CreateOutlinedIcon,
    endIcon: { icon: AddOutlinedIcon, name: "add post" },
    url: "/posts",
    childs: [
      {
        parentNodeId: "3",
        nodeId: "9",
        labelText: "Add New",
        url: "/posts/add",
      },
      {
        parentNodeId: "3",
        nodeId: "10",
        labelText: "Drafts",
        url: "/posts/drafts",
      },
      {
        parentNodeId: "3",
        nodeId: "11",
        labelText: "Scheduled",
        url: "/posts/scheduled",
      },
      {
        parentNodeId: "3",
        nodeId: "12",
        labelText: "Published",
      },
      {
        parentNodeId: "3",
        nodeId: "13",
        labelText: "Free Posts",
        endDiv: <div className="h-[7px] w-[7px] bg-red-600 rounded-full"></div>,
      },
      {
        parentNodeId: "3",
        nodeId: "14",
        labelText: "Paid Posts",
        endDiv: (
          <div className="h-[7px] w-[7px] bg-orange-400 rounded-full"></div>
        ),
      },
      {
        parentNodeId: "3",
        nodeId: "15",
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
    labelInfo: "62",
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
    endIconName,
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
        <Link to={url ? url : "/dashboard"}>
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
              sx={{
                fontWeight: "550",
                lineHeight: "31px",
                flexGrow: 1,
                fontSize: "medium",
              }}
              className="pl-3"
            >
              {labelText}
            </Typography>
            <Box
              component={EndIcon}
              color="inherit"
              sx={{ mr: 1 }}
              onClick={() => onEndIconClick(props)}
            />
            {labelInfo && (
              <div className="bg-slate-300 rounded-[30%]">
                <Typography
                  variant="caption"
                  color="inherit"
                  sx={{ marginX: "6px" }}
                >
                  {labelInfo}
                </Typography>
              </div>
            )}
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

const onEndIconClick = (item: any) => {
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
            <div className="col-span-9 text-left font-bold text-xl ml-8 flex items-center">
              <img
                src={blog}
                alt="Blog image"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="ml-3">Quill</span>
            </div>
            <div className="flex items-center">
              <SearchOutlinedIcon className="col-span-1 cursor-pointer" />
            </div>
          </div>
          <TreeView
            aria-label="gmail"
            defaultExpanded={[""]}
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
                  endIcon={item?.endIcon?.icon}
                  endIconName={item?.endIcon?.name}
                  labelInfo={item?.labelInfo}
                  url={item.url}
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
                            url={child?.url}
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

export default SideMenu;
