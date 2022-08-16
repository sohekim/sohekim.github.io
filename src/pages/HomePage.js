import React from "react";
import "./HomePage.css";

import { ReactComponent as Logo } from "../resources/main_logo.svg";

function HomePage() {
  return (
    <>
      <div>
        <div className="main-screen">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Logo />
          </div>
          <p className="intro" style={{ fontWeight: 300 }}>
            {" "}
            CS & Philosophy at MHC ‘23 | SWE intern at Meta (Facebook){" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
