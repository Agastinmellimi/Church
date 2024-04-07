import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import HandlerContext from "../../Context/HandlerContext";
import { IoArrowRedoSharp } from "react-icons/io5";
import { VscBracketError } from "react-icons/vsc";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import { MutatingDots } from "react-loader-spinner";
import { IoMdArrowRoundBack } from "react-icons/io";

import { SemiCircleProgress } from "react-semicircle-progressbar";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as Tool,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  StudentDetailsContainer,
  WishName,
  Badge,
  WishNameContainer,
  StatusLine,
  Paragraph,
  Button,
  ScoreContainer,
  ScoreHeading,
} from "./StyledComponents";

const apiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
  networkErr: " NETWORK_ERR",
};

const StudentDeatils = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [scoreBar, handleHeight] = useState({
    height: "",
    width: "",
  });
  const [apiResponsedData, setApiResponsedData] = useState({
    childApiStatus: apiStatus.initial,
    childrenData: [],
    childName: "",
    max: null,
    min: null,
    childPresent: "",
    score: null,

    scoreStatus: apiStatus.initial,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    if (windowWidth > 768) {
      handleHeight({
        height: 300,
        width: 300,
      });
    } else if (windowWidth >= 568 && windowWidth < 768) {
      handleHeight({
        height: 220,
        width: 220,
      });
    } else if (windowWidth >= 300 && windowWidth < 568) {
      handleHeight({
        height: 140,
        width: 140,
      });
    } else {
      handleHeight({
        height: 100,
        width: 100,
      });
    }
  }, [windowWidth]);

  const getChildrenData = async (id) => {
    setApiResponsedData((prev) => ({
      ...prev,
      childApiStatus: apiStatus.inProgress,
    }));
    try {
      const url = "https://lordjesus.onrender.com/attendance-details";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        const child = data.details.find(
          (item) => item.id === parseInt(id)
        ).name;
        const formattedName =
          child.split(" ")[0][0] +
          child.split(" ")[0].slice(1).toLocaleLowerCase() +
          " " +
          child.split(" ")[1][0] +
          child.split(" ")[1].slice(1).toLocaleLowerCase();

        setApiResponsedData((prev) => ({
          ...prev,
          childrenData: data.details.filter((item) => item.id === parseInt(id)),
          childName: formattedName,
          max: data.workingDays,
          min: Math.min(...data.details.map((item) => item.presents)),
          childPresent: data.details.find((item) => item.id === parseInt(id))
            .presents,
          childApiStatus: apiStatus.success,
        }));
      } else {
        setApiResponsedData((prev) => ({
          ...prev,
          childrenStatus: apiStatus.failure,
        }));
      }
    } catch (err) {
      setApiResponsedData((prev) => ({
        ...prev,
        childApiStatus: apiStatus.networkErr,
      }));
    }
  };

  const getExamScores = async (id) => {
    setApiResponsedData((prev) => ({
      ...prev,
      scoreStatus: apiStatus.inProgress,
    }));
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const url = "https://lordjesus.onrender.com/children-scores";
      const response = await fetch(url, options);
      const responsedData = await response.json();
      if (response.ok) {
        console.log(responsedData);
        setApiResponsedData((prev) => ({
          ...prev,
          scoreStatus: apiStatus.success,
          score: responsedData.find((item) => item.id === parseInt(id)).score,
        }));
      } else {
        setApiResponsedData((prev) => ({
          ...prev,

          scoreStatus: apiStatus.failure,
        }));
      }
    } catch (err) {
      setApiResponsedData((prev) => ({
        ...prev,
        scoreStatus: apiStatus.networkErr,
      }));
    }
  };

  useEffect(() => {
    getChildrenData(id);
    getExamScores(id);
  }, [id]);

  const statusLine = () => {
    switch (apiResponsedData.childPresent) {
      case apiResponsedData.max:
        return "Congratulations on achieving the best attendance! Your commitment and dedication have truly paid off. Keep up the excellent work!";
      case apiResponsedData.max - 1:
        return "Congratulations on your consistent efforts and progress, even amidst challenges. Remember, every setback is an opportunity for growth. Keep pushing forward, and know that we're here to support you every step of the way.";
      case apiResponsedData.min:
        return "We've noticed that your attendance has been lower compared to other students. We understand that everyone faces different challenges, and we're here to support you in overcoming any obstacles that may be affecting your attendance. Let's work together to find solutions and improve your attendance so you can fully engage in the learning experience alongside your peers.";
      default:
        return "We've noticed your consistent attendance, and we want to commend you for your commitment to being present. Your consistent participation contributes greatly to the positive atmosphere of our community. Keep up the great work!";
    }
  };

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode, setActiveTab } = value;
        const clickBack = () => {
          navigate("/attendance");
          setActiveTab("ATTENDANCE");
        };
        const DetailsFailureView = () => (
          <div
            style={{
              margin: "auto",
              alignSelf: "center",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <VscBracketError
              size={100}
              color={lightMode ? "#727573" : "#969693"}
              style={{ alignSelf: "center", marginTop: "15px" }}
            />
            <Paragraph $mode={lightMode}>Sorry!, there is some error</Paragraph>
            <button
              type="button"
              onClick={() => getChildrenData(id)}
              style={{
                outline: "none",
                border: "none",
                fontWeight: 600,
                cursor: "pointer",
                backgroundColor: lightMode ? "#727573" : "#fff",
                color: lightMode ? "#fff" : "#000",
                marginBottom: "20px",
                borderRadius: "5px",
                fontFamily: "Pathway Extreme, sans-serif",
                alignSelf: "center",
                padding: "5px 15px",
              }}
            >
              Try again
            </button>
          </div>
        );

        const LightTooltip = styled(({ className, ...props }) => (
          <Tooltip {...props} classes={{ popper: className }} />
        ))(({ theme }) => ({
          [`& .${tooltipClasses.arrow}`]: {
            color: lightMode
              ? theme.palette.common.dark
              : theme.palette.common.white,
            fontSize: 8,
          },
          [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: lightMode
              ? theme.palette.common.dark
              : theme.palette.common.white,
            color: lightMode ? "#fff" : "rgba(0, 0, 0, 0.87)",
            boxShadow: theme.shadows[1],
            fontSize: 22,
            fontFamily: "'Pathway Extreme', sans-serif",
            // wordBreak: "break-all",
          },
        }));

        const getPercentage = () => {
          const { max, childPresent } = apiResponsedData;
          // switch (childPresent) {
          //   case max:
          //     return 100
          //   case max > childPresent && max - 9 <= childPresent:
          //     return 90
          //   case max - 1:
          //     return 99
          //   case parseInt(max/2):
          //     return 50
          //   case min:
          //     return
          //   default:
          //     return 0
          // }
          return parseInt((childPresent / max) * 10) * 10;
        };

        const DetailsSuccessView = () => (
          <StudentDetailsContainer>
            <WishNameContainer>
              <WishName $mode={lightMode}>
                Hi{" "}
                <span
                  style={{
                    color:
                      apiResponsedData.childPresent === apiResponsedData.max
                        ? lightMode
                          ? "#18ad56"
                          : "#38c272"
                        : apiResponsedData.childPresent ===
                          apiResponsedData.max - 1
                        ? lightMode
                          ? "#b2d117"
                          : "#cae34d"
                        : apiResponsedData.childPresent === apiResponsedData.min
                        ? lightMode
                          ? "#e62c3b"
                          : "#f56773"
                        : lightMode
                        ? "#8225c4"
                        : "#894de3",

                    wordBreak: "break-all",
                  }}
                >
                  {apiResponsedData.childName.split(" ")[0]}
                </span>
                , Your Report is here
              </WishName>
              {apiResponsedData.childPresent === apiResponsedData.max && (
                <Badge
                  alt="badge1"
                  src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711517840/taeppt3smddagg6zyans.gif"
                />
              )}
              {apiResponsedData.childPresent === apiResponsedData.max - 1 && (
                <Badge
                  alt="badge2"
                  src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711524944/rip020bypucmw5ncmwzr.png"
                />
              )}
            </WishNameContainer>
            <ResponsiveContainer
              width="100%"
              height={200}
              style={{ alignSelf: "center" }}
            >
              <ComposedChart
                layout="vertical"
                width={500}
                height={400}
                data={apiResponsedData.childrenData.map((item) => ({
                  ...item,
                  name: item.name.split(" ")[0],
                }))}
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <XAxis
                  type="number"
                  stroke={lightMode ? "#147e82" : "#fce683"}
                  style={{
                    fontSize: 12,
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontWeight: 600,
                  }}
                  strokeWidth={2}
                  interval={0}
                  domain={[0, apiResponsedData.max]}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  scale="band"
                  style={{
                    fontSize: 12,
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontWeight: 600,
                  }}
                  stroke={lightMode ? "#147e82" : "#fce683"}
                  strokeWidth={2}
                />
                <Tool
                  trigger="hover"
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    borderRadius: "5px",
                  }}
                />
                <Legend iconType="wye" iconSize={16} />

                <Bar
                  barSize={40}
                  label={{
                    dataKey: "name",
                    position: "insideUp",
                    fontFamily: "'Pathway Extreme', sans-serif",
                    fill: "#ffffff",
                    letterSpacing: "0.20em",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                  background={{
                    fill: "rgba(219, 219, 219, 0.27000001072883606)",
                  }}
                  radius={[0, 10, 10, 0]}
                  fill={
                    apiResponsedData.max === apiResponsedData.childPresent
                      ? lightMode
                        ? "#18ad56"
                        : "#38c272"
                      : apiResponsedData.min === apiResponsedData.childPresent
                      ? lightMode
                        ? "#bf4949"
                        : "#ed6464"
                      : lightMode
                      ? "#8225c4"
                      : "#894de3"
                  }
                  // fill={lightMode ? "#8225c4" : "#25c4af"}
                  dataKey="presents"
                />
              </ComposedChart>
            </ResponsiveContainer>
            <StatusLine
              $mode={lightMode}
              style={{
                color:
                  apiResponsedData.max === apiResponsedData.childPresent
                    ? lightMode
                      ? "#18ad56"
                      : "#38c272"
                    : lightMode
                    ? "#575656"
                    : "#dedede",
              }}
            >
              <IoArrowRedoSharp
                style={{
                  marginRight: "3px",
                  color:
                    apiResponsedData.max === apiResponsedData.childPresent
                      ? lightMode
                        ? "#18ad56"
                        : "#38c272"
                      : "inherit",
                }}
              />

              {statusLine()}
            </StatusLine>
            <ScoreContainer>
              <ScoreHeading $mode={lightMode}>Percentage</ScoreHeading>
              <LightTooltip
                title={`${
                  apiResponsedData.childName.split(" ")[0]
                } - ${getPercentage()}%`}
                placement="bottom"
                TransitionComponent={Zoom}
                enterDelay={500}
                leaveDelay={200}
                arrow
              >
                <div
                  style={{
                    alignSelf: "center",
                    marginBottom: 0,
                    padding: 0,
                  }}
                >
                  <SemiCircleProgress
                    percentage={getPercentage()}
                    size={{
                      width: scoreBar.width,
                      height: scoreBar.height,
                    }}
                    // percentageSeperator=" "
                    hasBackground={true}
                    strokeWidth={10}
                    fontStyle={{
                      fontFamily: "'Pathway Extreme', sans-serif",
                      fill:
                        apiResponsedData.max === apiResponsedData.childPresent
                          ? lightMode
                            ? "#18ad56"
                            : "#38c272"
                          : apiResponsedData.min ===
                            apiResponsedData.childPresent
                          ? lightMode
                            ? "#bf4949"
                            : "#ed6464"
                          : lightMode
                          ? "#8225c4"
                          : "#894de3",
                    }}
                    bgStrokeColor={
                      lightMode
                        ? "rgba(50, 50, 93, 0.25)"
                        : "rgba(219, 219, 219, 0.27000001072883606)"
                    }
                    strokeColor={
                      apiResponsedData.max === apiResponsedData.childPresent
                        ? lightMode
                          ? "#18ad56"
                          : "#38c272"
                        : apiResponsedData.min === apiResponsedData.childPresent
                        ? lightMode
                          ? "#bf4949"
                          : "#ed6464"
                        : lightMode
                        ? "#8225c4"
                        : "#894de3"
                    }
                  />
                </div>
              </LightTooltip>
            </ScoreContainer>
          </StudentDetailsContainer>
        );

        const DetailsNetWorkErrorView = () => (
          <div
            style={{
              margin: "auto",
              alignSelf: "center",
              width: "100%",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <MdSignalWifiStatusbarNotConnected
              size={90}
              color={lightMode ? "#727573" : "#969693"}
              style={{
                alignSelf: "center",
                marginTop: "15px",
                flexShrink: 0,
              }}
            />
            <Paragraph $mode={lightMode}>
              Sorry!, We cannot seem to find the page you are looking for
            </Paragraph>
            <button
              type="button"
              onClick={() => getChildrenData(id)}
              style={{
                outline: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
                backgroundColor: lightMode ? "#727573" : "#fff",
                color: lightMode ? "#fff" : "#000",
                marginBottom: "20px",
                borderRadius: "5px",
                fontFamily: "Pathway Extreme, sans-serif",
                alignSelf: "center",
                padding: "5px 15px",
              }}
            >
              Try again
            </button>
          </div>
        );

        const LoaderView = () => (
          <div style={{ alignSelf: "center", margin: "auto" }}>
            <MutatingDots
              visible={true}
              height="100"
              width="100"
              color={lightMode ? "#4fa94d" : "#79fc9c"}
              secondaryColor={lightMode ? "#4fa94d" : "#79fc9c"}
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperClass=""
            />
          </div>
        );

        const childrenDateCorrespondingView = () => {
          switch (apiResponsedData.childApiStatus) {
            case apiStatus.inProgress:
              return LoaderView();
            case apiStatus.success:
              return DetailsSuccessView();
            case apiStatus.failure:
              return DetailsFailureView();
            case apiStatus.networkErr:
              return DetailsNetWorkErrorView();
            default:
              return "can't fetch";
          }
        };

        return (
          <>
            <Button $mode={lightMode} className="back" onClick={clickBack}>
              <IoMdArrowRoundBack className="back-icon" />
              Back
            </Button>
            {childrenDateCorrespondingView()}
          </>
        );
      }}
    </HandlerContext.Consumer>
  );
};
export default StudentDeatils;
