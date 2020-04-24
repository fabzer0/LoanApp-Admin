import React from "react";
import GoogleButton from "react-google-button";

const Landing = () => {
  const loginWithGoogle = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        height: "auto",
        maxHeight: "150%",
        overflow: "auto"
      }}
    >
      <div
        id="fab"
        style={{
          backgroundColor: "#EAEEEF",
          height: "700px",
          width: "100%"
        }}
      >
        <div
          style={{
            color: "#062128",
            height: "100%",
            width: "70%",
            margin: "auto"
          }}
        >
          <h2
            style={{
              paddingTop: "25%",
              textAlign: "center"
          
            }}
          >
            Log In
          </h2>
          <GoogleButton
            onClick={loginWithGoogle}
            style={{ margin: "auto", marginTop: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
