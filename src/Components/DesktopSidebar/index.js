import { useNavigate } from "react-router-dom";
import HandlerContext from "../../Context/HandlerContext";
import IconButton from "@mui/material/IconButton";
import { IoHome } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import {
  SideBarContainer,
  SideOptionsContainer,
  Option,
} from "./StyledComponents";

const DesktopSidebar = () => {
  const navigate = useNavigate();
  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode, activeTab, setActiveTab } = value;
        const LightTooltip = styled(({ className, ...props }) => (
          <Tooltip {...props} classes={{ popper: className }} />
        ))(({ theme }) => ({
          [`& .${tooltipClasses.arrow}`]: {
            color: lightMode
              ? theme.palette.common.dark
              : theme.palette.common.white,
            fontSize: 7,
          },
          [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: lightMode
              ? theme.palette.common.dark
              : theme.palette.common.white,
            color: lightMode ? "#fff" : "rgba(0, 0, 0, 0.87)",
            boxShadow: theme.shadows[1],
            fontSize: 15,
          },
        }));
        const clickTab = (value) => {
          const navigateCorrespondingRoute = (route) => {
            switch (route) {
              case "HOME":
                return navigate("/");
              case "ABOUT":
                return navigate("/about");
              case "ATTENDANCE":
                return navigate("/attendance");
              case "TIMINGS":
                return navigate("/church-timings");
              default:
                return null;
            }
          };
          setActiveTab(value);
          navigateCorrespondingRoute(value);
        };
        return (
          <SideBarContainer $mode={lightMode}>
            <SideOptionsContainer>
              <Option>
                <LightTooltip title={"Home"} placement="right" arrow>
                  <IconButton onClick={() => clickTab("HOME")}>
                    <IoHome
                      color={
                        activeTab === "HOME"
                          ? "#4ecf66"
                          : lightMode
                          ? "#7a7979"
                          : "#d4d6d9"
                      }
                      size={25}
                    />
                  </IconButton>
                </LightTooltip>
              </Option>

              <Option>
                <LightTooltip title={"About"} placement="right" arrow>
                  <IconButton onClick={() => clickTab("ABOUT")}>
                    <FaLeaf
                      color={
                        activeTab === "ABOUT"
                          ? "#4ecf66"
                          : lightMode
                          ? "#7a7979"
                          : "#d4d6d9"
                      }
                      size={25}
                    />
                  </IconButton>
                </LightTooltip>
              </Option>

              <Option>
                <LightTooltip title={"Attendance"} placement="right" arrow>
                  <IconButton onClick={() => clickTab("ATTENDANCE")}>
                    <FaUserCheck
                      color={
                        activeTab === "ATTENDANCE"
                          ? "#4ecf66"
                          : lightMode
                          ? "#7a7979"
                          : "#d4d6d9"
                      }
                      size={25}
                    />
                  </IconButton>
                </LightTooltip>
              </Option>

              <Option>
                <LightTooltip title={"Church timings"} placement="right" arrow>
                  <IconButton onClick={() => clickTab("TIMINGS")}>
                    <FaClipboardList
                      color={
                        activeTab === "TIMINGS"
                          ? "#4ecf66"
                          : lightMode
                          ? "#7a7979"
                          : "#d4d6d9"
                      }
                      size={25}
                    />
                  </IconButton>
                </LightTooltip>
              </Option>
            </SideOptionsContainer>
          </SideBarContainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default DesktopSidebar;
