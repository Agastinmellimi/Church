import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HandlerContext from "../../Context/HandlerContext";
import { TypeAnimation } from "react-type-animation";
import { ImQuotesLeft } from "react-icons/im";
import { BsFillCaretRightFill } from "react-icons/bs";

import {
  HomeViewContainer,
  BannerContainer,
  Heading,
  HomeBannerContainer,
  Image,
  Quotation,
  ContentContainer,
  Reference,
} from "./StyledComponents";

const HomeView = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const btn = document.querySelector(".btn");
    btn.onmousemove = function (e) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop;
      btn.style.setProperty("--x", x + "px");
      btn.style.setProperty("--y", y + "px");
    };
  }, []);
  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode, setActiveTab } = value;
        const clickAbout = () => {
          setActiveTab("ABOUT");
          navigate("/about");
        };
        return (
          <HomeViewContainer>
            <BannerContainer $mode={lightMode}>
              <Heading $mode={lightMode}>
                Welcome to our Lord Jesus Christ Prayer Church,
              </Heading>

              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "Welcome Home to Our Church Family . . .",
                  2000,
                  "Experience Love, Faith, and Community Here.",
                  2000,
                  "A Place Where Faith Comes Alive.",
                  2000,
                  "Join Us in Worship and Fellowship . . .",
                  2000,
                ]}
                speed={30}
                wrapper="span"
                cursor={true}
                className="typer"
                repeat={Infinity}
              />
              {/* <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Pastor M. Christopher garu.\nPath Kota,\nKonaseema district.\nAndhra Pradesh - 533306",
              2000,
              "",
            ]}
            style={{
              whiteSpace: "pre-line",
              height: "195px",
              display: "block",
            }}
            speed={20}
            wrapper="span"
            cursor={true}
            className="typer-information"
            repeat={Infinity}
          /> */}
              <div style={{ width: "90%", alignSelf: "center" }}>
                <button
                  onClick={clickAbout}
                  style={{
                    color: lightMode ? "#c8dbfa" : "#f8d9fc",
                    border: lightMode
                      ? "1.8px solid #c8dbfa"
                      : "1.8px solid #f8d9fc",
                  }}
                  className="btn"
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    About Us <BsFillCaretRightFill className="navigate" />
                  </span>
                </button>
              </div>
            </BannerContainer>
            <HomeBannerContainer
              style={{ marginTop: "30px", marginBottom: "20px" }}
            >
              <Image
                alt="Jesus"
                src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706527051/huhq7x6ximrynwyoo3go.jpg"
              />
              <ContentContainer $mode={lightMode}>
                <Quotation
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                  $mode={lightMode}
                >
                  <ImQuotesLeft
                    className="quotes"
                    style={{
                      flexShrink: 0,
                      color: lightMode ? "#084299" : "#f7a240",
                    }}
                  />
                  Jesus Christ is the same yesterday, today, and forever
                </Quotation>
                <Reference style={{ color: lightMode ? "#383838" : "#f5f4f2" }}>
                  Hebrew 13 : 8
                </Reference>
              </ContentContainer>
            </HomeBannerContainer>
            <HomeBannerContainer
              style={{ marginTop: "30px", marginBottom: "20px" }}
            >
              <Image
                $second
                alt="Jesus"
                src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706610749/u4nb4sd5wy7o5bc1gx8g.jpg"
              />
              <ContentContainer $mode={lightMode} $second>
                <Quotation
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    backgroundImage: lightMode
                      ? "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)"
                      : "linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)",
                  }}
                  $second
                  $mode={lightMode}
                >
                  <ImQuotesLeft
                    className="quotes"
                    style={{
                      flexShrink: 0,
                      color: lightMode ? "#084299" : "#82d8f5",
                    }}
                  />
                  I saw another mighty angel come down from heaven, clothed with
                  a cloud
                </Quotation>
                <Reference style={{ color: lightMode ? "#383838" : "#f5f4f2" }}>
                  Revelation 10 : 1
                </Reference>
              </ContentContainer>
            </HomeBannerContainer>
          </HomeViewContainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default HomeView;
