import { useEffect } from "react";
import HandlerContext from "../../Context/HandlerContext";
import { SiMaildotcom } from "react-icons/si";
import {
  AboutContainer,
  Heading,
  BannerHeading,
  AboutBannerContainer,
  BannerImageContainer,
  MobileHeading,
  Discription,
  SubDiscription,
  AboutLine,
  ListContainer,
  List,
  ListImage,
  ListHead,
  ListDescription,
  ListImageContainer,
  DetailsContainer,
  DetailsContentContainer,
  Name,
  Address,
  Phone,
} from "./StyledComponents";

import { RiSingleQuotesR } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import { FaPhone } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa";

const values = [
  {
    heading: "Faith",
    description:
      "We believe in the power of faith to transform lives and communities.",
    image:
      "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711422406/ppieqkcsmxi6vnnutkm0.png",
  },
  {
    heading: "Love",
    description:
      "We demonstrate Christ's love through compassion, service, and acceptance of all.",
    image:
      "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711422523/jrcoyf76qvlo21gww69q.png",
  },
  {
    heading: "Unity",
    description:
      "We are united in our diversity, embracing people from all backgrounds and walks of life.",
    image:
      "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711422559/ez1tlaphgsjibmkuvwrh.png",
  },
  {
    heading: "Excellence",
    description:
      "We pursue excellence in all we do, striving to honor God with our best efforts.",
    image:
      "https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711422636/bhmtopznkh6god2qda5x.png",
  },
];

const About = () => {
  useEffect(() => {
    const btn = document.querySelector(".sub");
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
        const { lightMode } = value;
        return (
          <AboutContainer>
            <p
              className="sub"
              style={{
                border: lightMode ? "1px solid #025c48" : "1px solid #7ffad9",
                marginBottom: "5px",
              }}
            >
              <span style={{ color: lightMode ? "#025c48" : "#7ffad9" }}>
                About Us
              </span>
            </p>
            <AboutLine $mode={lightMode}>
              Church is more than a place to attend, It is a{" "}
              <strong>place to call home</strong>
            </AboutLine>
            <AboutBannerContainer $mode={lightMode}>
              <BannerImageContainer $mode={lightMode}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                  src="https://res.cloudinary.com/dkrpgt9kd/image/upload/v1706589275/qggh5tfhxz8nxlgaeep0.png"
                  alt="christopher garu"
                />
              </BannerImageContainer>
              <div style={{ alignSelf: "center" }} className="content">
                <BannerHeading>Lord Jesus Christ Parayer Church,</BannerHeading>
                <ReactTyped
                  strings={[
                    "Pastor M. Christopher garu",
                    "Patha Kota, Konaseema district",
                    "Andhra Pradesh - 53306",
                  ]}
                  className="type"
                  loop
                  style={{
                    color: lightMode ? "#f573c5" : "#f5ce73",
                  }}
                  typeSpeed={70}
                  backSpeed={70}
                />
              </div>
            </AboutBannerContainer>
            <MobileHeading $mode={lightMode}>
              Lord Jesus Christ Prayer Church
            </MobileHeading>
            <ReactTyped
              strings={[
                "Pastor M. Christopher garu",
                "Patha Kota, Konaseema district",
                "Andhra Pradesh - 53306",
              ]}
              className="mobile-type"
              loop
              style={{
                color: lightMode ? "#f573c5" : "#f5ce73",
              }}
              typeSpeed={70}
              backSpeed={70}
            />
            <Discription $mode={lightMode}>
              Welcome to Lord Jesus Christ Prayer Church,
            </Discription>
            <SubDiscription $mode={lightMode}>
              <br /> At <strong> Lord Jesus Christ Prayer Church</strong>, we
              are a vibrant community of believers dedicated to spreading the
              love and message of Jesus Christ. Founded on the principles of
              faith, hope, and love, we strive to create a welcoming environment
              where individuals and families can grow spiritually and connect
              with others on their journey of faith.
            </SubDiscription>
            <SubDiscription $mode={lightMode}>
              We invite you to join us for worship and discover the joy of
              belonging to a Christ-centered community. Connect with us online
              or visit us in person to experience the love and fellowship of
              <strong> Lord Jesus Christ Prayer Church</strong>.
            </SubDiscription>
            <Heading $mode={lightMode}>
              Our Values
              <RiSingleQuotesR />
            </Heading>
            <ListContainer>
              {values.map((item) => (
                <List $mode={lightMode} key={item.heading}>
                  <ListImageContainer $mode={lightMode}>
                    <ListImage
                      $mode={lightMode}
                      alt={item.heading}
                      src={item.image}
                    />
                  </ListImageContainer>
                  <ListHead $mode={lightMode}>{item.heading}</ListHead>
                  <ListDescription $mode={lightMode}>
                    {item.description}
                  </ListDescription>
                </List>
              ))}
            </ListContainer>
            <DetailsContainer>
              <DetailsContentContainer>
                <Name>Pastor . M. Christopher Garu</Name>
                <Address>
                  <FaAddressBook style={{ marginRight: "7px" }} />
                  Patha Kota, Konaseema dist, Andhra Pradesh
                </Address>
                <Phone>
                  <FaPhone style={{ marginRight: "7px" }} />
                  <ReactTyped
                    strings={["9949923050"]}
                    loop
                    typeSpeed={100}
                    backSpeed={100}
                  />
                </Phone>
              </DetailsContentContainer>

              <a
                href="mailto:agastinmellimi2001@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  textDecoration: "none",
                  color: "#c7b636",
                  fontSize: "20px",
                  fontWeight: 600,
                  marginTop: "20px",
                  fontFamily: "'Pathway Extreme', sans-serif",
                }}
                className="link"
              >
                <SiMaildotcom style={{ marginRight: "5px" }} />
                Send Mail
              </a>
            </DetailsContainer>
            <p
              style={{
                fontFamily: "'Pathway Extreme', sans-serif",
                textAlign: "center",
                marginTop: "10px",
                fontSize: "15px",
                marginBottom: "auto",
                color: lightMode ? "#989c9b" : "#b1b5b4",
              }}
            >
              Designed by @
              <strong style={{ color: lightMode ? "#0a6144" : "#7cfcab" }}>
                <ReactTyped
                  strings={["Agastinmellimi", "Chintu"]}
                  loop
                  typeSpeed={130}
                  backSpeed={130}
                />
              </strong>
            </p>
          </AboutContainer>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default About;
