import HandlerContext from "../../Context/HandlerContext";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import MobileNavbar from "../MobileNavbar";

import Zoom from "@mui/material/Zoom";
import { NavContainer, WebsiteLogo } from "./StyledComponents";

const Navbar = () => (
  <HandlerContext.Consumer>
    {(value) => {
      const { lightMode, setMode } = value;
      const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: lightMode
            ? theme.palette.common.dark
            : theme.palette.common.white,
          color: lightMode ? "#fff" : "rgba(0, 0, 0, 0.87)",
          boxShadow: theme.shadows[1],
          fontSize: 15,
        },
      }));
      return (
        <NavContainer $mode={lightMode}>
          <WebsiteLogo $mode={lightMode}>
            <span
              style={{
                color: lightMode ? "#e88f46" : "#7674fc",
              }}
            >
              L
            </span>
            JCPC
          </WebsiteLogo>
          <div
            style={{
              display: "flex",
              margin: 0,
              padding: 0,
            }}
          >
            <MobileNavbar />
            <LightTooltip
              TransitionComponent={Zoom}
              title={lightMode ? "Dark" : "Light"}
              enterDelay={500}
              leaveDelay={200}
            >
              <IconButton
                style={{ margin: 0 }}
                aria-label="mode"
                onClick={() => setMode()}
              >
                {lightMode ? (
                  <MdDarkMode color="#000" size={30} />
                ) : (
                  <MdLightMode color="#ffff" size={30} />
                )}
              </IconButton>
            </LightTooltip>
          </div>
        </NavContainer>
      );
    }}
  </HandlerContext.Consumer>
);

export default Navbar;
