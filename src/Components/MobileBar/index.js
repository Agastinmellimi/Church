import HandlerContext from "../../Context/HandlerContext";
import { IoHome } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaUserCheck } from "react-icons/fa";

import {
  MobileBarContainer,
  MobileOptionsContainer,
  MobileOption,
} from "./StyledComponents";

const MobileBar = () => (
  <HandlerContext.Consumer>
    {(value) => {
      const { lightMode } = value;
      return (
        <MobileBarContainer $mode={lightMode}>
          <MobileOptionsContainer>
            <MobileOption>
              <IoHome size={22} color={lightMode ? "#575859" : "#d4d6d9"} />
              <span
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: lightMode ? "#575859" : "#d4d6d9",
                }}
              >
                Home
              </span>
            </MobileOption>
            <MobileOption>
              <FaUserCheck
                size={22}
                color={lightMode ? "#575859" : "#d4d6d9"}
              />
              <span
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: lightMode ? "#575859" : "#d4d6d9",
                }}
              >
                Attendance
              </span>
            </MobileOption>
            <MobileOption>
              <VscGraph size={22} color={lightMode ? "#575859" : "#d4d6d9"} />
              <span
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: lightMode ? "#575859" : "#d4d6d9",
                }}
              >
                Progress
              </span>
            </MobileOption>
          </MobileOptionsContainer>
        </MobileBarContainer>
      );
    }}
  </HandlerContext.Consumer>
);

export default MobileBar;
