import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DayCalendarSkeleton } from "@mui/x-date-pickers/DayCalendarSkeleton";
import Slider from "react-slick";
import Skeleton from "@mui/material/Skeleton";
import HandlerContext from "../../Context/HandlerContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";
import { MdSignalWifiStatusbarNotConnected } from "react-icons/md";
import { VscBracketError } from "react-icons/vsc";
import { ReactTyped } from "react-typed";
import { MdOutlineArrowOutward } from "react-icons/md";

import ChildrenNames from "../ChildrenNames";

import {
  AttendanceContainer,
  Container,
  NameFlexContainer,
  ChildImage,
  ChildName,
  Presents,
  Heading,
  ByDateDetailsContainer,
  ByDateDetailsContentContainer,
  DateCalenderContainer,
  ImageContainer,
  DateImage,
  Paragraph,
  DateInputFlexContainer,
  DateShow,
  ChildAttendanceListContainer,
  ChildAttendanceList,
  Sno,
  Name,
  Id,
  NameHeader,
  Status,
  WishLine,
  WishLineContainer,
} from "./Styled.components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
  networkErr: " NETWORK_ERR",
};

const Attendance = () => {
  const [date, setValue] = useState(null);
  const [cleared, setCleared] = useState(false);
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [hide, handleHide] = useState("block");
  const [tableLoading, handleLoading] = useState(true);

  const navigate = useNavigate();

  const [apiResponsedData, setApiResponseData] = useState({
    byDateDeails: [],
    byDateApiStatus: apiStatus.initial,
    byDateErr: "",
    allChildrenDetails: [],
    days: 0,
    max: 0,
    second: 0,
    allChildrenListApiStatus: apiStatus.inProgress,
  });

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const getAllChildrenData = async () => {
    setApiResponseData((prev) => ({
      ...prev,
      allChildrenListApiStatus: apiStatus.inProgress,
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
      const temp = data.details.map((item) => {
        if (
          item.presents !==
          Math.max(...data.details.map((item) => item.presents))
        ) {
          return item.presents;
        } else {
          return null;
        }
      });

      if (response.ok) {
        setApiResponseData((prev) => ({
          ...prev,
          allChildrenDetails: data.details,
          days: data.workingDays,
          second: Math.max(...temp) === 0 ? "" : Math.max(...temp),
          allChildrenListApiStatus: apiStatus.success,
          max:
            Math.max(...data.details.map((item) => item.presents)) === 0
              ? ""
              : Math.max(...data.details.map((item) => item.presents)),
        }));
      } else {
        setApiResponseData((prev) => ({
          ...prev,
          allChildrenListApiStatus: apiStatus.failure,
        }));
      }
    } catch (err) {
      setApiResponseData((prev) => ({
        ...prev,
        allChildrenListApiStatus: apiStatus.networkErr,
      }));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleLoading(false);
    }, 2000);
    getAllChildrenData();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    if (windowWidth > 768) {
      handleHide("none");
    } else {
      handleHide("block");
    }
  }, [windowWidth]);

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode } = value;
        const PrevArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <FaChevronLeft
              {...{ style }}
              className={className}
              onClick={onClick}
              color={lightMode ? "#78db5a" : "#47b1cc"}
            />
          );
        };
        const NextArrow = (props) => {
          const { className, style, onClick } = props;
          return (
            <FaChevronRight
              {...{ style }}
              className={className}
              onClick={onClick}
              color={lightMode ? "#78db5a" : "#47b1cc"}
            />
          );
        };
        const settings = {
          slidesToShow: 3,
          slidesToScroll: 3,
          className: "slider",
          infinite: false,
          dotsClass: "slick-dots",
          arrows: true,
          dots: true,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                dots: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
              },
            },
          ],
        };
        const DetailsSkeletonView = () => {
          const skeleton = [];
          for (let i = 1; i <= 4; i++) {
            skeleton.push(
              <div key={i}>
                <Container
                  $mode={lightMode}
                  style={{ transform: "none", animation: "none", opacity: 1 }}
                >
                  <NameFlexContainer style={{ marginTop: "5px" }}>
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={55}
                      height={55}
                      sx={{
                        backgroundColor: "rgba(102, 101, 101, 0.355)",
                        marginRight: 2,
                      }}
                    />
                    <Skeleton
                      animation="wave"
                      variant="rectanguler"
                      width="70%"
                      height={15}
                      sx={{
                        backgroundColor: "rgba(102, 101, 101, 0.355)",
                        borderRadius: 2,
                      }}
                    />
                  </NameFlexContainer>
                  <hr
                    style={{
                      width: "100%",
                      border: "rgba(102, 101, 101, 0.355)",
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rectanguler"
                    width="60%"
                    height={17}
                    sx={{
                      backgroundColor: "rgba(102, 101, 101, 0.355)",
                      borderRadius: 2.3,
                      marginBottom: 2.2,
                      marginTop: 1,
                    }}
                  />
                  <Skeleton
                    animation="wave"
                    variant="rectanguler"
                    width="100%"
                    height={17}
                    sx={{
                      backgroundColor: "rgba(102, 101, 101, 0.355)",
                      borderRadius: 2,
                      marginBottom: 1,
                    }}
                  />
                </Container>
              </div>
            );
          }
          return <Slider {...settings}>{skeleton}</Slider>;
        };

        const DateSkeletonView = () => (
          <DayCalendarSkeleton
            animation="wave"
            sx={{
              width: "100%",
              height: 250,
              marginTop: "70px",
              paddingTop: "20px",
            }}
          />
        );

        const ByDateAttendanceDeailsSuccessView = () => (
          <>
            {date === null ? null : (
              <DateShow
                $mode={lightMode}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                📅 {getEnglishMonthName(date.$M + 1)} {date.$D}th {date.$y}{" "}
                attendance details
              </DateShow>
            )}
            <ChildAttendanceListContainer>
              <ChildAttendanceList
                key={uuidv4()}
                style={{
                  boxShadow: "none",
                  transition: "none",
                  transform: "none",
                }}
                $mode={lightMode}
                $header
              >
                <Id $mode={lightMode}>Id</Id>
                <NameHeader $mode={lightMode}>Name</NameHeader>
                <Status $mode={lightMode}>Status</Status>
              </ChildAttendanceList>
              {apiResponsedData.byDateDeails.map((item) => (
                <ChildAttendanceList
                  $present={item.presents}
                  key={uuidv4()}
                  $mode={lightMode}
                  className="ChildStaus"
                >
                  <Sno $mode={lightMode} $present={item.presents}>
                    {item.id}.
                  </Sno>
                  <Name
                    $present={item.presents}
                    $mode={lightMode}
                    className="name"
                  >
                    {item.name}
                  </Name>
                  <div style={{ width: "15%" }}>
                    <img
                      alt="status"
                      style={{ width: "27px", height: "27px" }}
                      className={item.presents === 1 ? "emoji" : "sadEmoji"}
                      src={
                        item.presents === 1
                          ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711019880/nx8xx95vhpjgomdilmqh.gif"
                          : "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1710935199/lbfybgglpll2ay19anfc.png"
                      }
                    />
                  </div>
                </ChildAttendanceList>
              ))}
            </ChildAttendanceListContainer>
          </>
        );

        const SelectDateView = () => (
          <>
            <ImageContainer>
              <DateImage
                alt="select date"
                src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1710945441/pvfrlxwxnvdkqevqkatt.png"
              />
            </ImageContainer>
            <Paragraph $mode={lightMode}>
              Select date and get your details.
            </Paragraph>
          </>
        );

        const getEnglishMonthName = (month) => {
          switch (parseInt(month)) {
            case 1:
              return "Jan";
            case 2:
              return "Feb";
            case 3:
              return "Mar";
            case 4:
              return "Apr";
            case 5:
              return "May";
            case 6:
              return "June";
            case 7:
              return "July";
            case 8:
              return "Aug";
            case 9:
              return "Sep";
            case 10:
              return "Oct";
            case 11:
              return "Nov";
            case 12:
              return "Dec";
            default:
              return "";
          }
        };

        const TableLoadingView = () => {
          const TableSkeletonView = () => {
            const skeleton = [];
            for (let i = 1; i <= 7; i++) {
              skeleton.push(
                <Skeleton
                  variant="recatangle"
                  width="100%"
                  height="50px"
                  animation="wave"
                  key={uuidv4()}
                  sx={{
                    bgcolor: "rgba(102, 101, 101, 0.355)",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                />
              );
            }
            return skeleton;
          };
          return (
            <>
              <Skeleton
                variant="recatangle"
                width="70%"
                height="20px"
                animation="wave"
                sx={{
                  bgcolor: "rgba(102, 101, 101, 0.355)",
                  borderRadius: "3px 8px 3px 8px",
                  marginBottom: "30px",
                }}
              />
              <Skeleton
                variant="recatangle"
                width="100%"
                height="70px"
                animation="wave"
                sx={{
                  bgcolor: "rgba(102, 101, 101, 0.355)",
                  borderRadius: "5px",
                  marginBottom: "6px",
                }}
              />
              {TableSkeletonView()}
            </>
          );
        };

        const ByDateDetailsFailureView = () => (
          <>
            <ImageContainer>
              <DateImage
                alt="failure"
                src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1710949534/hsvahm1mhwsnpp3p3ols.png"
              />
            </ImageContainer>
            <Paragraph $mode={lightMode}>
              {apiResponsedData.byDateErr}
            </Paragraph>
            <button
              type="button"
              onClick={() => onChangeDateValue(date)}
              style={{
                outline: "none",
                border: "none",
                cursor: "pointer",
                backgroundColor: lightMode ? "#727573" : "#fff",
                color: lightMode ? "#fff" : "#000",
                marginBottom: "20px",
                borderRadius: "5px",
                fontWeight: 600,
                fontFamily: "Pathway Extreme, sans-serif",
                alignSelf: "center",
                padding: "5px 15px",
              }}
            >
              Try again
            </button>
          </>
        );

        const byDateNetWorkErrorView = () => (
          <>
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
              onClick={() => onChangeDateValue(date)}
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
          </>
        );

        const DetailsFailureView = () => (
          <div
            style={{
              backgroundColor: lightMode ? "#ffff" : "#262626",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
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

        const DetailsNetWorkErrorView = () => (
          <div
            style={{
              backgroundColor: lightMode ? "#ffff" : "#262626",
              height: "200px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              overflow: "auto",
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

        const getStatusLine = (presents) => {
          const max = apiResponsedData.max;

          const min = Math.min(
            ...apiResponsedData.allChildrenDetails.map((item) => item.presents)
          );
          switch (presents) {
            case max:
              return (
                <ReactTyped
                  strings={["Congrats!, you're in lead"]}
                  loop
                  cursorChar="#"
                  typeSpeed={40}
                  backSpeed={40}
                />
              );
            case min:
              return (
                <ReactTyped
                  strings={[
                    "You're attendance is low",
                    "But, Don't worry keep going...",
                    "Don't neglect God",
                    "Please contact!, Your",
                    "Sunday school teacher..",
                  ]}
                  loop
                  cursorChar="!"
                  typeSpeed={90}
                  backSpeed={90}
                />
              );
            case apiResponsedData.second:
              return (
                <ReactTyped
                  strings={["Nice, keep going..."]}
                  loop
                  cursorChar="*"
                  typeSpeed={50}
                  backSpeed={50}
                />
              );

            default:
              return (
                <ReactTyped
                  strings={["Well, keep going..."]}
                  loop
                  typeSpeed={80}
                  backSpeed={80}
                />
              );
          }
        };

        const onChangeDateValue = async (value) => {
          setValue(value);

          if (value !== null) {
            const dateValue = `${value.$y}-${
              value.$M + 1 < 10 ? `0${value.$M + 1}` : value.$M + 1
            }-${value.$D < 10 ? `0${value.$D}` : value.$D}`;
            setApiResponseData((prev) => ({
              ...prev,
              byDateApiStatus: apiStatus.inProgress,
            }));
            console.log(dateValue);
            try {
              const attendanceUrl =
                "https://church-backend-k1y9.onrender.com/date-attendance";

              const dateOject = {
                date: dateValue,
              };

              const options = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(dateOject),
              };
              const response = await fetch(attendanceUrl, options);
              const data = await response.json();

              if (response.ok) {
                setApiResponseData((prev) => ({
                  ...prev,
                  byDateApiStatus: apiStatus.success,
                  byDateDeails: data,
                  byDateNetWorkErr: false,
                }));
              } else {
                setApiResponseData((prev) => ({
                  ...prev,
                  byDateApiStatus: apiStatus.failure,
                  byDateErr: data.err_msg,
                }));
              }
            } catch (e) {
              setApiResponseData((prev) => ({
                ...prev,
                byDateApiStatus: apiStatus.networkErr,
              }));
            }
          }
        };

        const corresondingByDateDeailsView = () => {
          switch (apiResponsedData.byDateApiStatus) {
            case apiStatus.inProgress:
              return TableLoadingView();
            case apiStatus.success:
              return ByDateAttendanceDeailsSuccessView();
            case apiStatus.failure:
              return ByDateDetailsFailureView();
            case apiStatus.networkErr:
              return byDateNetWorkErrorView();

            default:
              return "";
          }
        };

        const getDefaultImage = (presents) => {
          const data = presents !== 0 ? presents : " ";
          const max = apiResponsedData.max;

          const min = Math.min(
            ...apiResponsedData.allChildrenDetails.map((item) => item.presents)
          );

          switch (data) {
            case max:
              return "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711029483/zrqhr6yvxase3dlx46b6.gif";
            case apiResponsedData.second:
              return "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711030921/l5yiy9ojhmlmalbkn6km.gif";
            case min:
              return "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711076400/s61h5r712grgdqdgyowf.gif";
            default:
              return "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711038038/c8ussdvfsrcb0lmtekic.gif";
          }
        };

        const detailsSuccessView = () => (
          <Slider {...settings}>
            {apiResponsedData.allChildrenDetails.map((item) => (
              <Container
                key={uuidv4()}
                $mode={lightMode}
                $occur={apiResponsedData.second === item.presents}
                $max={apiResponsedData.max === item.presents}
              >
                <NameFlexContainer>
                  <ChildImage
                    onClick={() => navigate(`/attendance/${item.id}`)}
                    style={{ cursor: "pointer" }}
                    alt={item.name.split(" ")[0]}
                    src={
                      item.image === null
                        ? item.gender === "MALE"
                          ? "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1710924465/ibuhzyczyszmehs4qbu3.png"
                          : "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706681443/uybys3x9m2u9rvm2wiiz.png"
                        : item.image
                    }
                  />
                  <ChildName
                    onClick={() => navigate(`/attendance/${item.id}`)}
                    style={{ cursor: "pointer" }}
                    className="name"
                    $occur={apiResponsedData.second === item.presents}
                    $max={apiResponsedData.max === item.presents}
                    $mode={lightMode}
                  >
                    {item.name} <MdOutlineArrowOutward className="arrow" />
                  </ChildName>
                </NameFlexContainer>
                <hr
                  style={{
                    width: "100%",
                    border:
                      apiResponsedData.max === item.presents
                        ? lightMode
                          ? "1.2px solid #07a631"
                          : "1.2px solid #63f298"
                        : apiResponsedData.second === item.presents
                        ? lightMode
                          ? "1.5px solid #BE861A"
                          : "1.5px solid #F5CA77"
                        : "1.5px solid #c4c7c3",
                  }}
                />
                <Presents
                  $occur={apiResponsedData.second === item.presents}
                  $max={apiResponsedData.max === item.presents}
                  $mode={lightMode}
                >
                  presents: {item.presents}
                </Presents>
                <WishLineContainer>
                  <WishLine
                    $occur={apiResponsedData.second === item.presents}
                    $max={apiResponsedData.max === item.presents}
                    $min={
                      item.presents !== 0
                        ? Math.min(
                            ...apiResponsedData.allChildrenDetails.map(
                              (item) => item.presents
                            )
                          ) === item.presents
                        : false
                    }
                    $mode={lightMode}
                  >
                    {getStatusLine(item.presents)}
                  </WishLine>

                  <img
                    alt={
                      apiResponsedData.max === item.presents
                        ? "max"
                        : apiResponsedData.second === item.presents
                        ? "occur"
                        : "keep go"
                    }
                    style={{ width: "35px", height: "35px" }}
                    src={getDefaultImage(item.presents)}
                  />
                </WishLineContainer>
              </Container>
            ))}
          </Slider>
        );

        const childrenDateCorrespondingView = () => {
          switch (apiResponsedData.allChildrenListApiStatus) {
            case apiStatus.inProgress:
              return DetailsSkeletonView();
            case apiStatus.success:
              return detailsSuccessView();
            case apiStatus.failure:
              return DetailsFailureView();
            case apiStatus.networkErr:
              return DetailsNetWorkErrorView();
            default:
              return "";
          }
        };

        return (
          <AttendanceContainer>
            <Heading $mode={lightMode}>Children Attendance Details</Heading>
            {childrenDateCorrespondingView()}

            <DateInputFlexContainer>
              <Heading $mode={lightMode}>Attendance Details By Date</Heading>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={date === null ? null : dayjs(date)}
                  onChange={(newValue) => onChangeDateValue(newValue)}
                  label="Select Date"
                  views={["year", "month", "day"]}
                  sx={{
                    borderRadius: "5px",
                    fontSize: "16px",

                    display: hide,
                    color: "#fff",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: lightMode ? "#383737" : "#fff",
                      },
                      "&:hover fieldset": {
                        borderColor: lightMode ? "#6ede6a" : "#8abfe6",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: lightMode ? "#383737" : "#fff",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: lightMode ? "#6ede6a" : "#8abfe6",
                    },

                    svg: {
                      color: lightMode ? "#6ede6a" : "#8abfe6",
                    },
                    input: {
                      color: lightMode ? "#383737" : "#fff",
                      fontSize: "16px",
                    },
                    label: {
                      color: lightMode ? "#383737" : "#fff",
                      fontSize: "16px",
                    },
                  }}
                  slotProps={{
                    field: {
                      clearable: true,
                      onClear: () => {
                        setCleared(true);
                        setValue(null);
                      },
                    },
                    textField: { error: false },
                    actionBar: {
                      actions: ["clear", "today"],
                      actionBar: {
                        actions: ["clear", "today"],
                        onClear: () => {
                          setCleared(true);
                          setValue(null);
                        },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </DateInputFlexContainer>

            <ByDateDetailsContainer $mode={lightMode}>
              <ByDateDetailsContentContainer $mode={lightMode}>
                {date === null
                  ? SelectDateView()
                  : corresondingByDateDeailsView()}
              </ByDateDetailsContentContainer>
              <DateCalenderContainer $mode={lightMode}>
                {tableLoading ? (
                  DateSkeletonView()
                ) : (
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      value={dayjs(date)}
                      sx={{
                        margin: 0,
                        borderRadius: "10px",
                        flexShrink: 1,
                        width: "100%",
                        display: "block",
                        bgcolor: lightMode ? "#f2fcfb" : "#d6d2d2",
                        lineHeight: 20,
                        fontSize: 19,

                        color: lightMode ? "#029e40" : "#2452a6",
                        svg: { color: lightMode ? "#6ede6a" : "#2452a6" },
                        input: { color: lightMode ? "#383737" : "#fff" },
                      }}
                      slots={{
                        toolbar: false,
                      }}
                      color="primary"
                      onChange={onChangeDateValue}
                      slotProps={{
                        actionBar: {
                          actions: ["clear", "today"],
                          onClear: () => {
                            setCleared(true);
                            setValue(null);
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                )}
              </DateCalenderContainer>
            </ByDateDetailsContainer>

            <ChildrenNames />

            {cleared && (
              <Alert
                icon={
                  <CheckIcon
                    sx={{ color: lightMode ? "#3f6e35" : "#9be68a" }}
                    fontSize="inherit"
                  />
                }
                sx={{
                  position: "absolute",
                  top: 70,
                  right: 30,
                  bgcolor: "rgba(219, 219, 219, 0.27000001072883606)",
                  backdropFilter: "5px",
                  color: lightMode ? "#3f6e35" : "#9be68a",
                }}
                variant="outlined"
              >
                Field cleared!
              </Alert>
            )}
          </AttendanceContainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default Attendance;
