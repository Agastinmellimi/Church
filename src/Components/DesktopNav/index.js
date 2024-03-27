import HandlerContext from "../../Context/HandlerContext";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import { MdDarkMode, MdLightMode } from "react-icons/md";

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
                color: lightMode ? "#e8c31e" : "#e3f76f",
              }}
            >
              L
            </span>
            JCPC
          </WebsiteLogo>
          <LightTooltip
            TransitionComponent={Zoom}
            title={lightMode ? "Dark" : "Light"}
            enterDelay={500}
            leaveDelay={200}
          >
            <IconButton aria-label="mode" onClick={() => setMode()}>
              {lightMode ? (
                <MdDarkMode color="#000" size={30} />
              ) : (
                <MdLightMode color="#ffff" size={30} />
              )}
            </IconButton>
          </LightTooltip>
        </NavContainer>
      );
    }}
  </HandlerContext.Consumer>
);

export default Navbar;
