import React, { useState, ChangeEvent, FormEvent } from "react";
import Globe from "../assets/globe_1.png";
import blogo from "../assets/blogo.png";
import esgText from "../assets/esgText.jpg";
import GoogleLogo from "../assets/googlelogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import axios from "axios";

import { useNavigate } from "react-router-dom";

interface formDataState {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [inputFormData, setInputFormData] = useState<formDataState>({
    email: "",
    password: "",
  });

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFormData({
      ...inputFormData,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFormData({
      ...inputFormData,
      password: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const payload = {
        email: inputFormData.email,
        password: inputFormData.password,
      };
      const response = await axios.post("http://localhost:4000/login", payload);

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }

      if (response.status == 200) {
        navigate("/");
      }

      console.log("response", response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data.message || "Unknown error";
        alert(message);
        console.log("Error", message);
      } else {
        console.log("Unexpected error", error);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputFormData.email) {
      alert("Please Enter Valid Email");
      return;
    }
    if (!inputFormData.password) {
      alert("Please Enter Your Password");
      return;
    }

    handleLogin();
  };

  return (
    // <div
    //   style={{
    //     // backgroundColor: "#21453C",
    //     // height: "100vh",
    //     // color: "white",
    //     // fontFamily: "Open Sans",
    //     // fontWeight: "400",
    //   }}
    // >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding: "2rem 0 0 0",
        backgroundColor: "#21453C",
        height: "100vh",
        color: "white",
        fontFamily: "Open Sans",
        fontWeight: "400",
      }}
    >
      <div
        style={{
          width: "24rem",
          height: "38vh",
          // border: "2px solid white",
          margin: "0px 19rem 0 10rem",
          padding: "2px",
        }}
      >
        <p style={{}}>
          {" "}
          <span>WELCOME TO</span>
        </p>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={blogo} style={{ height: "4rem" }} />
          <img
            src={esgText}
            style={{
              height: "3.3rem",
              mixBlendMode: "color-dodge",
              position: "relative",
              left: "-52px",
              width: "34rem",
            }}
          />
        </div>

        <div style={{ opacity: "50%", marginTop: "2rem" }}>
          <span>We help you track your organisations </span>
          <br />
          <span> metrics as per the ESG Guidelines</span>
        </div>
        <div style={{ opacity: "70%", marginTop: "2rem" }}>
          <span>
            Sounds Interesting?{" "}
            <span style={{ cursor: "pointer", color: "#4FA556" }}>
              Get in touch!
            </span>{" "}
          </span>
        </div>
      </div>
      <div
        style={{
          width: "22rem",
          height: "60vh",
          margin: "0px 10px",
          padding: "2px",
          zIndex: "3",
          backgroundColor: "#235E4A",
          borderRadius: "6px",
        }}
      >
        <img
          src={Globe}
          style={{
            height: "16vh",
            mixBlendMode: "color-dodge",
            position: "relative",
            zIndex: "-2",
            top: "-7.5rem",
            left: "6.5rem",
          }}
        />
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            position: "relative",
            top: "-8rem",
          }}
        >
          <h2>Login</h2>

          <p style={{ fontSize: "small", opacity: "100%" }}>
            Enter your registered Email ID to continue
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", color: "white" }}>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                placeholder="Your Email ID"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
                value={inputFormData.email}
                onChange={handleEmailChange}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ color: "white" }}>
                Password <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
                value={inputFormData.password}
                onChange={handlePasswordChange}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <button
                type="button"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  color: "white",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#235E4A",
                  height: "30px",
                }}
              >
                <img
                  src={GoogleLogo}
                  alt="Go"
                  style={{
                    marginRight: "10px",
                    height: "21px",
                    borderRadius: "5px",
                  }}
                />
                <span> Sign up with Google</span>
              </button>
              <button
                type="button"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  // backgroundColor: "white",
                  color: "white",
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#235E4A",
                  height: "30px",
                }}
              >
                <img
                  src={TwitterLogo}
                  alt="Tr"
                  style={{
                    marginRight: "10px",
                    height: "21px",
                    borderRadius: "5px",
                  }}
                />
                Sign up with Twitter
              </button>
            </div>
            <p
              style={{
                fontSize: "x-small",
                opacity: "100%",
                marginBottom: "1px",
                padding: "0px 34px",
              }}
            >
              Having trouble logging in?{" "}
              <a href="#" style={{ color: "#4CAF50" }}>
                Contact Us
              </a>
            </p>

            {/* <p>Having trouble logging in? <span style={color}>Contact Us</span></p> */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      {/* <img  src={Globe} style={{height:"16vh", position:"relative",top:"-6.6rem" ,mixBlendMode:"color-dodge"}} /> */}
    </div>
    // </div>
  );
};

export default Login;
