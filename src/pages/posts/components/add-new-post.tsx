import {
  Button,
  ButtonProps,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { useState } from "react";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./add-new-post.scss"

const handleChange = (event: any) => {
  console.log("change", event);
};
const SaveButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#16a085",
  "&:hover": {
    backgroundColor: "#0e806a",
  },
}));

const AddNewPost = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [widthClass, setWidthClass] = useState("w-[95%]");
  const [startDate, setStartDate] = useState(new Date());
  const content = "";
  const onPublishClick = () => {
    console.log(content);
  };
  const onSettingsClick = () => {
    console.log(isSettingsOpen);
    setIsSettingsOpen(!isSettingsOpen);
    setWidthClass(widthClass === "w-[95%]" ? "w-[70%]" : "w-[95%]");
  };
  return (
    <div className="relative">
      <div className="h-[600px] flex w-auto">
        <div className={widthClass}>
          <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            value={content}
            init={{
              branding: false,
              height: 600,
              menubar: true,
              plugins:
                "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap linkchecker emoticons advtable export autosave",
              toolbar:
                "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
              image_advtab: true,
              content_css:'default',
              statusbar: false
            }}
            onEditorChange={(event) => handleChange(event)}
          />
        </div>
        {isSettingsOpen ? (
          <div className="flex flex-col ml-4">
            <div className="text-left font-semibold text-lg">
              <span>Post Settings</span>
            </div>
            <span className="text-left mt-10">Post URL</span>
            <TextField
              id="outlined-start-adornment"
              sx={{ marginTop: 1, height: "40px" }}
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <span className="mt-10 text-left">Publish Date</span>
            <div className="text-left">
              <DatePicker
                showIcon
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                className="custom-datepicker"
              />
            </div>
          </div>
        ) : undefined}
        <div className="ml-4 cursor-pointer" onClick={onSettingsClick}>
          <SettingsSuggestOutlinedIcon />
        </div>
        {/* <div className="ml-4 text-left font-semibold text-lg">
          <span>Post Settings</span>
        </div> */}
      </div>
      <div className="absolute right-2	mt-7">
        <SaveButton
          variant="contained"
          sx={{
            marginBottom: 4,
            width: "100%",
            textTransform: "none",
            height: "45px",
          }}
          className="button-save"
          type="submit"
          onClick={onPublishClick}
        >
          <span className="t-15 font-inter text-lg leading-snug">Publish</span>
        </SaveButton>
      </div>
    </div>
  );
};

export default AddNewPost;
