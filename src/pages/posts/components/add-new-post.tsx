import { Button, ButtonProps, styled } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";

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
  const content = "";
  const onPublishClick = () => {
    console.log(content);
  };
  return (
    <div className="relative">
      <Editor
        apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
        value={content}
        init={{
          branding: false,
          height: 600,
          menubar: true,
          plugins:
            "print preview paste searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern",
          toolbar:
            "formatselect | bold italic underline strikethrough | forecolor backcolor blockquote | link image media | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | removeformat",
          image_advtab: true,
        }}
        onEditorChange={(event) => handleChange(event)}
      />
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
