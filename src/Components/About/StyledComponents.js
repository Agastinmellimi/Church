import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-family: "Montserrat Alternates", sans-serif;
  font-size: 25px;
  letter-spacing: 0.07em;
  margin-bottom: 0;
  margin-top: 20px;
  padding-left: 10px;
  @media (max-width: 299px) {
    padding-left: 0;
  }
  color: ${(props) => (props.$mode ? "#3d3d3d" : "#dcdedd")};
  @media (max-width: 400px) {
    font-size: 17px;
  }
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 19px;
  }
`;
export const AboutBannerContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 8px 15px;
  background-color: ${(props) =>
    props.$mode
      ? "rgba(47, 46, 46, 0.6600000262260437)"
      : "rgba(54, 145, 102, 0.6600000262260437)"};
  background-image: ${(props) =>
    props.$mode
      ? "url('https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709119823/qjds8mjv146hdfypbp9t.jpg')"
      : "Url('https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711124985/tckr4ynndgolcrhcpbvf.jpg')"};

  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: background-image 0.6s ease-in-out;
`;

export const BannerImageContainer = styled.div`
  position: sticky;
  height: 240px;
  width: 240px;
  transform: translate(5%, -50%) translateY(40%);
  border-radius: 50%;
  border: ${(props) =>
    props.$mode ? "3px solid #383838" : "3px solid #208a4a"};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  background-image: ${(props) =>
    props.$mode
      ? "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)"
      : "linear-gradient(to top, #e14fad 0%, #f9d423 100%)"};
  overflow: hidden;

  @media (min-width: 599px) and (max-width: 700px) {
    transform: translate(70%, -50%) translateY(60%);
    width: 40%;
    height: 240px;
  }
  @media (min-width: 500px) and (max-width: 599px) {
    transform: translate(50%, -50%) translateY(60%);
    width: 50%;
    height: 240px;
  }
  @media (min-width: 299px) and (max-width: 428px) {
    transform: translate(40%, -50%) translateY(80%);
    width: 55%;
    height: 180px;
  }
  @media (min-width: 428px) and (max-width: 499px) {
    transform: translate(49%, -50%) translateY(80%);
    width: 50%;
    height: 180px;
  }
  @media (max-width: 299px) {
    display: none;
  }
`;

export const BannerHeading = styled.h1`
  color: #fff;
  align-self: flex-end;

  font-family: "Rowdies", sans-serif;
  text-shadow: 1px 0 10px #000;
  letter-spacing: 0.1em;
  margin-top: 0;
  font-size: 30px;
  @media (max-width: 400px) {
    font-size: 20px;
  }
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 25px;
  }
  display: block;
  @media (max-width: 700px) {
    display: none;
  }
  @media (max-width: 299px) {
    display: block;
    width: 100%;
    font-size: 19px;
  }
  @media (min-width: 700px) and (max-width: 1170px) {
    margin-right: 15px;
  }
`;

export const MobileHeading = styled.h1`
  display: block;
  text-align: center;
  width: 90%;
  margin-bottom: 7px;
  align-self: center;

  font-family: "Ubuntu", sans-serif;
  font-weight: 700;

  letter-spacing: 0.02em;
  margin-top: 5px;

  /* -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none; */
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  ${(props) =>
    !props.$mode &&
    `
    background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);


  `}

  @media (min-width: 700px) {
    display: none;
  }
  @media (min-width: 500px) and (max-width: 700px) {
    margin-top: 100px;
    font-size: 25px;
  }
  @media (max-width: 499px) {
    margin-top: 69px;
    font-size: 20px;
    font-weight: 800;
  }
  @media (max-width: 299px) {
    display: none;
  }
`;

export const Discription = styled.p`
  font-size: 20px;
  font-family: "Montserrat Alternates", sans-serif;
  color: ${(props) => (props.$mode ? "#383838" : "#cfd1d0")};
  padding-left: 10px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 800;
  word-break: break-all;
  @media (min-width: 700px) {
    margin-top: 70px;
  }
  @media (max-width: 299px) {
    margin-top: 15px;
    padding-left: 0;
  }
`;
export const SubDiscription = styled.p`
  font-size: 20px;
  font-family: "Montserrat Alternates", sans-serif;
  color: ${(props) => (props.$mode ? "#6d6e6d" : "#a5a8a6")};
  padding-left: 10px;
  word-break: break-word;
  margin-top: 0;

  @media (max-width: 400px) {
    font-size: 17px;
  }
  @media (max-width: 299px) {
    padding-left: 0;
  }
  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
export const AboutLine = styled.p`
  align-self: center;
  font-size: 22px;
  text-align: center;
  margin-top: 0;
  font-weight: 500;
  font-family: "Pathway Extreme", sans-serif;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;

  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  ${(props) =>
    !props.$mode &&
    `
    background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
  `}
  @media (max-width: 500px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;
export const ListContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 10px;
  @media (max-width: 299px) {
    padding-left: 0;
  }
`;

export const List = styled.li`
  list-style: none;
  margin-right: 20px;
  overflow: auto;
  margin-bottom: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 15px;
  padding: 10px 15px;
  width: 300px;

  text-overflow: ellipsis;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
  ${(props) =>
    !props.$mode &&
    `
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  `}
  transition: transform .4s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;

export const ListImageContainer = styled.div`
  height: 50px;
  width: 50px;
  padding: 7px 7px;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  ${(props) =>
    !props.$mode &&
    `
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  `}
  border-radius: 15px;
`;

export const ListImage = styled.img`
  width: 100%;
  opacity: 1;
  ${(props) =>
    !props.$mode &&
    `
   opacity: 0.8;
  `}
`;

export const ListHead = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 20px;
  letter-spacing: 0.04em;
  margin-bottom: 0;
  font-weight: 700;
  color: ${(props) => (props.$mode ? "#383838" : "#cfd1d0")};
`;

export const ListDescription = styled.p`
  margin-top: 5px;
  color: ${(props) => (props.$mode ? "#6d6e6d" : "#a5a8a6")};
  font-family: "Pathway Extreme", sans-serif;
`;

export const DetailsContainer = styled.div`
  height: 200px;
  background-image: url("https://res.cloudinary.com/dkrpgt9kd/image/upload/v1709183960/nvo6iey3vptmcwxte6fx.jpg");
  background-size: cover;
  border-radius: 6px;
  background-repeat: no-repeat;
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;
  background-color: rgba(47, 46, 46, 0.6600000262260437);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

export const DetailsContentContainer = styled.div`
  margin: 0;
  padding: 0;
`;
export const Name = styled.p`
  color: #fff;
  margin-top: 3;
  font-size: 20px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  margin-bottom: 0;
`;

export const Address = styled.p`
  color: #fff;
  margin-top: 5;
  font-size: 18px;

  font-family: "Pathway Extreme", sans-serif;
  font-weight: 400;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Phone = styled.p`
  color: #fff;
  margin-top: 5;
  font-size: 18px;

  font-family: "Pathway Extreme", sans-serif;
  font-weight: 400;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 19px;
  margin-bottom: 20px;
  align-items: center;
  @media (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  color: #fff;

  flex-shrink: 0;
  font-family: "Pathway Extreme", sans-serif;
  background-color: rgba(219, 219, 219, 0.27000001072883606);
  border-radius: 7px;
  padding: 7px 10px;
  font-size: 17px;
  margin-right: 20px;
  ${(props) =>
    props.$err &&
    `
        border: 1.5px solid #fc9fb0;
  `}
  transition: all .3s ease-in-out;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const SendBtn = styled.button`
  background-color: ${(props) => (props.$mode ? "#11599c" : "#126356")};
  font-family: "Pathway Extreme", sans-serif;
  padding: 7px 15px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 7px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;
  @media (max-width: 420px) {
    margin-top: 10px;
  }
  position: relative;
  transition: all 0.4s ease-in-out;
`;
