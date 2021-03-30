import SideBar from "../components/Sidebar"
import { SIDEBAR_WIDTH } from "../utils/constants";

const Landing = () => {
  return (
    <div className="landing-container">
      <SideBar />
      <div
        className="landing-content"
        style={{
          marginLeft: `${SIDEBAR_WIDTH}px`
        }}
      >
        Hello
      </div>
    </div>
  );
};

export default Landing;
