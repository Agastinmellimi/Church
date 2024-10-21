import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscBracketError } from "react-icons/vsc";
import HandlerContext from "../../Context/HandlerContext";
import { Skeleton } from "@mui/material";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

import {
  ChildrenNamescontainer,
  Heading,
  Children,
  ChildrensListContainer,
  ImageChildren,
  ChildrenName,
  Paragraph,
  NameFlexContainer,
  RollNo,
} from "./StyledComponents";

const apiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
  networkErr: " NETWORK_ERR",
};

const ChildrenNames = () => {
  const [apiResponsedData, setApiResponseData] = useState({
    childrenListApiStatus: apiStatus.initial,
    allChildrenDetails: [],
  });

  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [flex, setFlex] = useState("center");

  const getAllChildrenData = async () => {
    setApiResponseData((prev) => ({
      ...prev,
      childrenListApiStatus: apiStatus.inProgress,
    }));
    try {
      const url = "https://church-backend-k1y9.onrender.com/attendance-details";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      if (response.ok) {
        setApiResponseData((prev) => ({
          ...prev,
          allChildrenDetails: data.details,

          childrenListApiStatus: apiStatus.inProgress,
        }));
      } else {
        setApiResponseData((prev) => ({
          ...prev,
          childrenListApiStatus: apiStatus.failure,
        }));
      }
    } catch (err) {
      setApiResponseData((prev) => ({
        ...prev,
        childrenListApiStatus: apiStatus.networkErr,
      }));
    }
  };

  const LoadingView = (lightMode) => {
    const skeleton = [];
    for (let i = 1; i < 7; i++) {
      skeleton.push(
        <Children $mode={lightMode} key={uuidv4()}>
          <Skeleton
            // animation="wave"
            variant="circular"
            width={50}
            height={50}
            sx={{
              backgroundColor: "rgba(102, 101, 101, 0.355)",
              alignSelf: flex,
              margin: "7px 20px 7px 7px",
            }}
          />

          <Skeleton
            // animation="wave"
            variant="rectanguler"
            width={windowWidth <= 400 ? "100%" : "80%"}
            height={17}
            sx={{
              backgroundColor: "rgba(102, 101, 101, 0.355)",
              borderRadius: "0 5px",
              alignSelf: flex,
              marginBottom: flex === "flex-start" ? "7px" : null,
            }}
          />
        </Children>
      );
    }
    return <ChildrensListContainer>{skeleton}</ChildrensListContainer>;
  };

  const FailureView = (lightMode) => (
    <div
      style={{
        backgroundColor: lightMode ? "#ffff" : "#262626",
        height: "400px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "auto",
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
        onClick={() => getAllChildrenData()}
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

  const NetworkErrorView = (lightMode) => (
    <div
      style={{
        backgroundColor: lightMode ? "#ffff" : "#262626",
        height: "400px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "auto",
      }}
    >
      <MdSignalWifiStatusbarNotConnected
        size={100}
        color={lightMode ? "#727573" : "#969693"}
        style={{ marginTop: "100px", alignSelf: "center" }}
      />

      <Paragraph $mode={lightMode}>
        Sorry!, We cannot seem to find the page you are looking for
      </Paragraph>
      <button
        type="button"
        onClick={() => getAllChildrenData()}
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

  const successView = (lightMode) => (
    <ChildrensListContainer>
      {apiResponsedData.allChildrenDetails.map((item) => (
        <Children
          $mode={lightMode}
          key={uuidv4()}
          onClick={() => navigate(`/attendance/${item.id}`)}
        >
          <ImageChildren
            alt="childrenImage"
            src={
              item.image === null
                ? item.gender === "MALE"
                  ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1710924465/ibuhzyczyszmehs4qbu3.png"
                  : "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681443/uybys3x9m2u9rvm2wiiz.png"
                : item.image
            }
          />
          <NameFlexContainer>
            <ChildrenName $mode={lightMode}>
              {item.name.split(" ")[0]}
            </ChildrenName>
            <RollNo $mode={lightMode}>{item.id}</RollNo>
          </NameFlexContainer>
        </Children>
      ))}
    </ChildrensListContainer>
  );

  useEffect(() => {
    getAllChildrenData();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    if (windowWidth <= 400) {
      setFlex("flex-start");
    } else {
      setFlex("center");
    }
  }, [windowWidth]);

  const correspondingView = (lightMode) => {
    const { childrenListApiStatus } = apiResponsedData;
    switch (childrenListApiStatus) {
      case apiStatus.inProgress:
        return LoadingView(lightMode);
      case apiStatus.success:
        return successView(lightMode);
      case apiStatus.failure:
        return FailureView(lightMode);
      case apiStatus.networkErr:
        return NetworkErrorView(lightMode);
      default:
        return null;
    }
  };

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode } = value;

        return (
          <ChildrenNamescontainer>
            <Heading $mode={lightMode}>Children List</Heading>
            {correspondingView(lightMode)}
          </ChildrenNamescontainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};
export default ChildrenNames;
