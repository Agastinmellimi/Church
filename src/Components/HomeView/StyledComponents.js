import styled from "styled-components";

export const HomeViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BannerContainer = styled.div`
  border-radius: 15px;

  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  height: 320px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: ${(props) =>
    props.$mode
      ? "url('https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711198245/iz9jm3cslu0idrbxtwki.jpg')"
      : "url('https://res.cloudinary.com/dkrpgt9kd/image/upload/v1711124973/irqyewg7rx1cq3tnzpnc.jpg')"};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 17px;
  transition: background-image 0.3s ease-in-out;
`;

export const Heading = styled.h2`
  font-family: "Potta One", system-ui;

  margin-top: 0;
  background-color: #046782;
  background-image: linear-gradient(
    90deg,
    #046782 0%,
    #03ab91 50%,
    #4fef9b 100%
  );

  width: 90%;
  align-self: center;

  -webkit-background-clip: text;
  background-clip: text;
  background-size: cover;
  color: transparent;
  font-weight: 500;
  font-size: 43px;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
  ${(props) =>
    !props.$mode &&
    `
    background-color: #FA8BFF;
    background-image: linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%);
  `}
  @media (min-width: 401px) and (max-width: 850px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
export const HomeBannerContainer = styled.div`
  align-self: center;
  margin-top: 30px;
  display: flex;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 160px;
  height: 185px;
  margin-right: 15px;
  border-radius: 15px;

  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
  @media (max-width: 370px) {
    width: 50px;
    border-radius: 50%;
    height: 60px;
    align-self: flex-start;
  }

  @media (min-width: 768px) {
    width: 320px;
    height: 370px;
    border-radius: 20px;
    margin-right: 30px;
  }
  ${(props) =>
    props.$second &&
    `
       @media (min-width: 371px) {
            order: 2;
            margin-right: 0;
}
  `}
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$second &&
    `
       @media (min-width: 371px) {
            order: 1;
            margin-right: 15px;
}
  `}
`;
export const Quotation = styled.p`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.02em;
  margin-top: 7px;

  padding: 0 5px 0 5px;
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
  @media (min-width: 400px) {
    margin-top: 0;
  }
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 60px;
    margin-top: 0;
  }
  ${(props) =>
    !props.$mode &&
    `
    background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);


  `}
`;

export const Reference = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-weight: 600;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  font-size: 13px;
  text-align: right;
  margin-top: 0;
  color: #fff;
  padding-left: 0;
  padding-right: 10px;
  margin-top: 7px;
  @media (max-width: 370px) {
    text-align: left;
    padding-left: 10px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;
