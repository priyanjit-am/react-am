import { Link, useLocation } from "react-router-dom";
import { SIDEBAR_WIDTH } from "../utils/constants";

const SideBar = () => {
  const { pathname } = useLocation();
  const isCreateMeeting = pathname.match("/meeting/create");
  return (
    <aside
      className="sidebar"
      style={{
        width: `${SIDEBAR_WIDTH}px`
      }}
    >
      <Link to="/meeting/create">
        <div className={`sidebar-item ${isCreateMeeting ? "sidebar-item-active" : ""}`}>
          Create Meeting
        </div>
      </Link>
      <Link to="/meeting/join">
        <div className={`sidebar-item ${!isCreateMeeting ? "sidebar-item-active" : ""}`}>
          Join Meeting
        </div>
      </Link>
    </aside>
  );
};

export default SideBar;
