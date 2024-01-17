import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Breadcrumbs, Button, ButtonProps, Link, styled } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const postTypes = [
  { id: 1, name: "All posts" },
  { id: 2, name: "Draft posts", url: "/posts/drafts" },
  { id: 3, name: "Published posts" },
  { id: 4, name: "Email only posts" },
  { id: 5, name: "Scheduled posts", url: "/posts/scheduled" },
  { id: 6, name: "Featured posts" },
];
const accessTypes = [
  { id: 1, name: "All access" },
  { id: 2, name: "Public" },
  { id: 3, name: "Members-only" },
  { id: 4, name: "Paid members-only" },
];
const authorTypes = [{ id: 1, name: "All authors" }];

const tagTypes = [
  { id: 1, name: "All tags" },
  { id: 2, name: "News" },
];
const filterOptions = [
  { id: 1, name: "Newest first" },
  { id: 2, name: "Oldest first" },
  { id: 3, name: "Recently updated" },
];
const NewPostButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
}));

const Posts = (props: any) => {
  const navigate = useNavigate();
  const [breadCrumbs, setBreadCrumbs] = useState([""]);
  const [title, setTitle] = useState(props?.title ? props?.title : "Posts");
  const [postType, setPostType] = useState(
    props?.postType ? props?.postType : "1"
  );
  const [accessType, setAccessType] = useState("1");
  const [authorType, setAuthorType] = useState("1");
  const [tagType, setTagType] = useState("1");
  const [filterOption, setFilterOption] = useState("1");

  const handleChange = (event: SelectChangeEvent, types: string) => {
    console.log(event);
    switch (types) {
      case "postTypes":
        setPostType(event.target.value.toString());
        break;
      case "accessTypes":
        setAccessType(event.target.value.toString());
        break;
      case "authorTypes":
        setAuthorType(event.target.value.toString());
        break;
      case "tagTypes":
        setTagType(event.target.value.toString());
        break;
      case "filterOptions":
        setFilterOption(event.target.value.toString());
        break;
    }
  };

  const onPostTypeClick = (item: any) => {
    navigate(item?.url);
  };

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname.split("/"));
    const breadCrumbArray = location.pathname
      .split("/")
      ?.filter((x) => x !== "");
    const pascalCaseArray = arrayToPascalCase(breadCrumbArray);
    setBreadCrumbs(pascalCaseArray);
  }, [location.pathname]);
  const toPascalCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const arrayToPascalCase = (array) => {
    return array.map(toPascalCase);
  };

  return (
    <div className="grid grid-cols-3 grid-flow-row gap-1">
      <div className="col-span-1 text-left">
        <Breadcrumbs aria-label="breadcrumb">
          {breadCrumbs.map((item) => (
            <Link
              underline="hover"
              sx={{
                color:
                  breadCrumbs.indexOf(item) === breadCrumbs.length - 1
                    ? "text.primary"
                    : "inherit",
              }}
              href="/"
            >
              {item}
            </Link>
          ))}
        </Breadcrumbs>
        <span className="font-bold text-4xl">{title}</span>
      </div>
      <div className="col-span-2 flex">
        <FormControl variant="standard" sx={{ m: 1, minWidth: "auto" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={postType}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event, "postTypes")
            }
            label=""
            sx={{
              color: postType !== "1" ? "green" : "black",
              fontSize: "14px",
            }}
            disableUnderline
          >
            {postTypes.map((item: any) => (
              <MenuItem
                value={item.id}
                sx={{ fontSize: "14px" }}
                onClick={() => onPostTypeClick(item)}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "auto" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={accessType}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event, "accessTypes")
            }
            label=""
            sx={{
              color: accessType !== "1" ? "green" : "black",
              fontSize: "14px",
            }}
            disableUnderline
          >
            {accessTypes.map((item: any) => (
              <MenuItem value={item.id} sx={{ fontSize: "14px" }}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "auto" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={authorType}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event, "authorTypes")
            }
            label=""
            sx={{
              color: authorType !== "1" ? "green" : "black",
              fontSize: "14px",
            }}
            disableUnderline
          >
            {authorTypes.map((item: any) => (
              <MenuItem value={item.id} sx={{ fontSize: "14px" }}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "auto" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={tagType}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event, "tagTypes")
            }
            label=""
            sx={{
              color: tagType !== "1" ? "green" : "black",
              fontSize: "14px",
            }}
            disableUnderline
          >
            {tagTypes.map((item: any) => (
              <MenuItem value={item.id} sx={{ fontSize: "14px" }}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "auto" }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={filterOption}
            onChange={(event: SelectChangeEvent) =>
              handleChange(event, "filterOptions")
            }
            label=""
            sx={{
              color: filterOption !== "1" ? "green" : "black",
              fontSize: "14px",
            }}
            disableUnderline
          >
            {filterOptions.map((item: any) => (
              <MenuItem value={item.id} sx={{ fontSize: "14px" }}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <NewPostButton
          variant="contained"
          sx={{
            marginBottom: 4,
            width: "100px",
            textTransform: "none",
            height: "38px",
            marginLeft: "5px",
          }}
          className="button-save"
          type="submit"
        >
          <span className="t-15 font-inter leading-snug">New Post</span>
        </NewPostButton>
      </div>
    </div>
  );
};

export default Posts;
