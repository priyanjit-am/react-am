import { useEffect } from "react";

import SideBar from "../components/Sidebar"
import TestVideo from "../components/TestVideo";

import { SIDEBAR_WIDTH } from "../utils/constants";
import { AirmeetRTCClient } from "../airmeet-rtc-sdk";

const Landing = () => {
  useEffect(() => {
    console.log(AirmeetRTCClient);
  }, []);
  return (
    <div className="landing-container">
      <SideBar />
      <div
        className="landing-content d-flex align-items-center justify-content-center"
        style={{
          marginLeft: `${SIDEBAR_WIDTH}px`
        }}
      >
        <div className="d-flex">
          <TestVideo />
        </div>
      </div>
    </div>
  );
};

export default Landing;
