import "./login.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { Button, ButtonProps, Container, styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import { regEx } from "../../../constants/regEx";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const SaveButton = styled(Button)<ButtonProps>(() => ({
  backgroundColor: "#16a085",
  "&:hover": {
    backgroundColor: "#0e806a",
  },
}));

const showValidation = (validation: string) => {
  return (
    <div className="flex text-red-600 items-center">
      <ErrorOutlineOutlinedIcon sx={{ fontSize: 18 }} />
      <span className="block	text-left">{validation}</span>
    </div>
  );
};

type ILoginData = { email: string; password: string };

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ email: "", password: "" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
      errors.email = "";
    } else if (name === "password") {
      errors.password = "";
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform validation
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    // If there are validation errors, don't submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = (data: ILoginData) => {
    const errors: ILoginData = { email: "", password: "" };
    if (data.email === "") {
      errors.email = "Email/Phone number is required.";
    } else if (regEx.numbersOnly.test(data.email)) {
      if (data.email.length !== 10) {
        errors.email = "Phone number should be exactly 10 digits";
      }
    }
    // Example validation: Check if email is a valid email address
    else if (!regEx.emailPattern.test(data.email)) {
      errors.email = "Invalid Email address/Phone number.";
    }
    if (data.password === "") {
      errors.password = "Password is required.";
    }

    // Example validation: Check if password is at least 6 characters long
    else if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  return (
    <Container>
      <div className="container h-screen flex justify-center items-center w-full mx-auto">
        <div className="wrapper w-full lg:w-1/3 mx-auto bg-[#fff] rounded shadow-lg">
          <div className="title">
            <span>The Thoughts Filtered</span>
          </div>
          <form action="#" onSubmit={handleSubmit}>
            <div className="row">
              <AccountCircleIcon
                style={{ width: "47px", height: "100%" }}
                className="absolute user-icon"
              />
              <input
                type="text"
                placeholder="Email or Phone"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors?.email && showValidation(errors?.email)}
            </div>
            <div className="row">
              <KeyIcon
                style={{ width: "47px", height: "100%" }}
                className="user-icon"
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
              {errors?.password && showValidation(errors?.password)}
            </div>
            <div className="pass mt-10">
              <a href="#">Forgot password?</a>
            </div>
            <div className="button-save">
              <SaveButton
                variant="contained"
                sx={{
                  marginBottom: 4,
                  width: "100%",
                  textTransform: "none",
                  height: "45px",
                }}
                className="button-save"
                endIcon={
                  <ArrowForwardIcon className="moveRightIcon flex items-center justify-center" />
                }
                type="submit"
                onClick={handleSubmit}
              >
                <span className="t-15 font-inter text-lg leading-snug">
                  Signin
                </span>
              </SaveButton>
            </div>
            <div className="signup-link">
              Not a member? <a href="#">Signup now</a>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Login;
