import styled from "styled-components";

export const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;

export const Container = styled.div`
  background-color: ${(props) => (props.$mode ? "#ffff" : "#262626")};
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  flex-shrink: 0;
  @media (min-width: 768px) {
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  ${(props) =>
    props.$max &&
    `
       
       background-color: rgba(155, 241, 153, 0.3100000023841858);
       color: ${props.$mode ? "#07a631" : "#63f298"};
       @media (min-width: 768px) {
        opacity: 1;
       }

  `}

  ${(props) =>
    props.$occur &&
    `
       background-color: ${
         props.$mode ? "#f7e5c6" : "rgba(245, 202, 118, 0.27000001072883606)"
       };
       
       @media (min-width: 768px) {
        opacity: 1;
       }
     
  `}
`;

export const Heading = styled.h1`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 25px;
  letter-spacing: 0.04em;
  margin-top: 10px;
  font-weight: 600;
  color: ${(props) => (props.$mode ? "#3d3d3d" : "#dcdedd")};
  @media (max-width: 400px) {
    font-size: 17px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 19px;
  }
  margin-right: 5px;
`;

export const NameFlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChildImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  transition: transform 0.4s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ChildName = styled.p`
  font-size: 20px;
  word-break: break-word;

  color: ${(props) => (props.$mode ? "#5c5c5c" : "#c4c7c3")};
  font-family: "Madimi One", sans-serif;
  @media (max-width: 400px) {
    font-size: 16px;
  }

  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 18px;
  }
  ${(props) =>
    props.$max &&
    `
       
       color: ${props.$mode ? "#07a631" : "#63f298"};
  `}
  ${(props) =>
    props.$occur &&
    `
       color: ${props.$mode ? "#BE861A" : "#F5CA77"};
  `}
  transition: color .3s ease-in-out;
  &:hover {
    color: ${(props) => (props.$mode ? "#1abd5e" : "#83f7b4")};
  }
`;

export const WishLineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 0;
`;
export const WishLine = styled.p`
  color: ${(props) => (props.$mode ? "#727273" : "#909091")};
  margin-top: 0;
  margin-bottom: 4px;
  font-family: "Pathway Extreme", sans-serif;
  letter-spacing: 0.05em;
  font-weight: 300;
  font-size: 19px;
  word-break: break-all;
  margin-right: 5px;
  @media (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 17px;
  }
  ${(props) =>
    props.$max &&
    `
       color: ${props.$mode ? "#07a631" : "#63f298"};

  `}
  ${(props) =>
    props.$occur &&
    `
    color: ${props.$mode ? "#BE861A" : "#F5CA77"};
  `}
  ${(props) =>
    props.$min &&
    `
    color: ${props.$mode ? "#e82539" : "#f55d6c"};
  `}
`;

export const Presents = styled.p`
  font-size: 19px;
  margin-top: 3px;
  margin-bottom: 3px;
  word-break: break-all;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#c4c7c3")};
  font-family: "Pathway Extreme", sans-serif;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin-bottom: 3px;
  @media (max-width: 400px) {
    font-size: 15px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 17px;
  }
  ${(props) =>
    props.$max &&
    `
       color: ${props.$mode ? "#07a631" : "#63f298"};
  `}
  ${(props) =>
    props.$occur &&
    `
    color: ${props.$mode ? "#BE861A" : "#F5CA77"};
  `}
`;
export const ByDateDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  margin-bottom: 20px;
  justify-content: space-between;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ByDateDetailsContentContainer = styled.div`
  flex-grow: 1;
  background-color: ${(props) => (props.$mode ? "#ffff" : "#262626")};
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  border-radius: 10px;
  padding: 15px 15px;
  height: 400px;
`;

export const DateCalenderContainer = styled.div`
  background-color: ${(props) => (props.$mode ? "#f2fcfb" : "#d6d2d2")};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 320px;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  margin-left: 20px;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  @media (max-width: 768px) {
    display: none;
  }
  overflow: auto;
`;

export const ImageContainer = styled.div`
  align-self: center;
  height: 300px;

  margin-top: 20px;
  @media (min-width: 401) and(max-width: 940px) {
    height: 250px;
  }
  transition: all 0.4s ease-out;
  @media (max-width: 400px) {
    height: 230px;
  }
`;

export const DateImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 19px;
  width: 90%;
  color: ${(props) => (props.$mode ? "#212121" : "#dcdedd")};
  align-self: center;
  text-align: center;
  word-break: break-word;
`;

export const DateInputFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  align-self: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const DateShow = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 19;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#c4c7c3")};
  font-weight: 600;
  margin-top: 0;

  letter-spacing: 0.05em;
  font-weight: 700;

  padding-bottom: 0;
  @media (max-width: 400px) {
    font-size: 12px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ChildAttendanceListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 0;
`;

export const ChildAttendanceList = styled.li`
  list-style: none;
  width: 100%;
  background-color: ${(props) =>
    props.$present === 1
      ? "rgba(155, 241, 153, 0.3100000023841858)"
      : "rgba(245, 118, 134, 0.3799999952316284)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 0 10px;
  overflow: auto;
  transition: box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.003);
    box-shadow: ${(props) =>
      props.$mode
        ? props.$present === 1
          ? "0 0 10px #06bd33"
          : "0 0 10px #d90d1b"
        : props.$present === 1
        ? "0 0 10px #89fa91"
        : "0 0 10px #fa9ba1"};
  }

  ${(props) =>
    props.$header &&
    `
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Pathway Extreme", sans-serif;

      overflow: auto;
      font-weight: 600;
      letter-spacing: 0.05em;
      background-color: ${
        props.$mode ? "#b8ffcb" : "rgba(219, 219, 219, 0.27000001072883606)"
      };
  `}
`;

export const Sno = styled.p`
  width: 15%;
  word-break: break-all;
  color: ${(props) =>
    props.$present === 1
      ? props.$mode
        ? "#07a631"
        : "#63f298"
      : props.$mode
      ? "#d40b40"
      : "#f78196"};
  font-family: "Madimi One", sans-serif;
  font-weight: 300;
  font-size: 15px;
  @media (min-width: 768px) and (max-width: 969px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Name = styled.p`
  width: 70%;
  font-family: "Madimi One", sans-serif;
  color: ${(props) =>
    props.$present === 1
      ? props.$mode
        ? "#07a631"
        : "#63f298"
      : props.$mode
      ? "#d40b40"
      : "#f78196"};

  font-weight: 300;
  font-size: 15px;
  word-break: break-word;
  @media (min-width: 768px) and (max-width: 969px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const Id = styled.p`
  width: 15%;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#fff")};
  overflow: break-all;
  font-size: 15px;
  @media (min-width: 970px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 969px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

export const NameHeader = styled.p`
  width: 69%;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#fff")};
  overflow: break-all;
  font-size: 15px;
  @media (min-width: 970px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 969px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    width: 65%;
  }
`;
export const Status = styled.p`
  width: 16%;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#fff")};
  overflow: break-all;
  font-size: 15px;

  @media (min-width: 970px) {
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 969px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
    width: 20%;
  }
`;
