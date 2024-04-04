import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import HandlerContext from "../../Context/HandlerContext";
import { IoArrowRedoSharp } from "react-icons/io5";
import { VscBracketError } from "react-icons/vsc";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import { MutatingDots } from "react-loader-spinner";

import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
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
  Score,
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
  const [apiResponsedData, setApiResponsedData] = useState({
    childApiStatus: apiStatus.initial,
    childrenData: [],
    childName: "",
    max: null,
    min: null,
    childPresent: "",
    score: null,
    scoreErr: false,
  });

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
        const child = data.find((item) => item.id === parseInt(id)).name;
        const formattedName =
          child.split(" ")[0][0] +
          child.split(" ")[0].slice(1).toLocaleLowerCase() +
          " " +
          child.split(" ")[1][0] +
          child.split(" ")[1].slice(1).toLocaleLowerCase();

        setApiResponsedData((prev) => ({
          ...prev,
          childrenData: data.filter((item) => item.id === parseInt(id)),
          childName: formattedName,
          max: Math.max(...data.map((item) => item.presents)),
          min: Math.min(...data.map((item) => item.presents)),
          childPresent: data.find((item) => item.id === parseInt(id)).presents,
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
          scoreErr: false,
          score: responsedData.find((item) => item.id === parseInt(id)).score,
        }));
      } else {
        setApiResponsedData((prev) => ({
          ...prev,
          scoreErr: true,
        }));
      }
    } catch (err) {
      setApiResponsedData((prev) => ({
        ...prev,
        scoreErr: true,
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
                <Tooltip
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
              <ScoreHeading $mode={lightMode}>SCORE</ScoreHeading>
              <Score
                style={{
                  color:
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
                      : "#894de3",
                }}
              >
                {apiResponsedData.childPresent * 10}
              </Score>
              <Score
                style={{
                  alignSelf: "center",
                  color: lightMode
                    ? "rgba(85, 83, 83, 0.529)"
                    : "rgba(219, 219, 219, 0.27000001072883606)",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <IoMdAdd
                  style={{
                    color: lightMode
                      ? "rgba(85, 83, 83, 0.529)"
                      : "rgba(219, 219, 219, 0.27000001072883606)",
                  }}
                  className="plus"
                />
                {apiResponsedData.score}
              </Score>
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
