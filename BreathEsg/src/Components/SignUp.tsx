import React, { useState, ChangeEvent, FormEvent } from "react";
import Globe from "../assets/Globe.jpg";
import blogo from "../assets/blogo.png";
import esgText from "../assets/esgText.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface formDataState {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [inputFormData, setInputFormData] = useState<formDataState>({
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputFormData({
      ...inputFormData,
      confirmPassword: e.target.value,
    });
  };

  const handleSignup = async () => {
    try {
      const payload = {
        email: inputFormData.email,
        password: inputFormData.password,
      };
      const response = await axios.post(
        "http://localhost:4000/signup",
        payload
      );

      if (response.status == 201) {
        const message = response?.data.message || "User Created ";
        alert(message);
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
    if (!inputFormData.confirmPassword) {
      alert("Please Enter Confirm Password");
      return;
    }

    if (inputFormData.password !== inputFormData.confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }

    handleSignup();
  };

  return (
    <div
      style={{
        backgroundColor: "#21453C",
        height: "100vh",
        color: "white",
        fontFamily: "Open Sans",
        fontWeight: "400",
      }}
    >
      <img
        src={Globe}
        style={{
          height: "16vh",
          mixBlendMode: "color-dodge",
          position: "relative",
          left: "59rem",
          top: "4rem",
          zIndex: "0",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "42px",
        }}
      >
        <div
          style={{
            width: "27rem",
            height: "42vh",
            // border: "2px solid white",
            margin: "0px 10px",
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
            height: "51vh",
            // border: "2px solid white",
            margin: "0px 10px",
            padding: "2px",
            zIndex: "3",
            backgroundColor: "#235E4A",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2.5rem",
            }}
          >
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email ID"
                  style={{
                    width: "80%",
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
                <label
                  style={{
                    display: "block",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                  }}
                  value={inputFormData.password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    color: "white",
                    textAlign: "left",
                  }}
                >
                  Confirm Password <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  style={{
                    width: "80%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ddd",
                    boxSizing: "border-box",
                  }}
                  value={inputFormData.confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: "80%",
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
          {/* <img  src={Globe} style={{height:"16vh", position:"relative",top:"-6.6rem" ,mixBlendMode:"color-dodge"}} /> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
