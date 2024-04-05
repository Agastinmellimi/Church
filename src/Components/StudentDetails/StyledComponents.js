import styled from "styled-components";

export const StudentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const WishNameContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WishName = styled.h1`
  font-family: "Montserrat Alternates", sans-serif;
  color: ${(props) => (props.$mode ? "#575656" : "#dedede")};

  font-size: 30px;
  @media (max-width: 400px) {
    font-size: 17px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Badge = styled.img`
  width: 60px;
  height: 60px;
  @media (max-width: 400px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const StatusLine = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 20px;

  overflow: auto;
  @media (max-width: 400px) {
    font-size: 16px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  outline: none;
  border: none;
  padding: 7px 13px;
  color: #fff;
  font-size: 18px;
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 3px 10px 3px 10px;
  background-color: ${(props) => (props.$mode ? "#4490c9" : "#30a2a6")};
  font-family: "Pathway Extreme", sans-serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  @media (max-width: 400px) {
    font-size: 14px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 16px;
  }
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

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const ScoreHeading = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 20px;
  margin-bottom: 0;

  color: ${(props) => (props.$mode ? "#ebb70e" : "#f7d565")};
  font-weight: 600;
  @media (max-width: 400px) {
    font-size: 16px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Score = styled.p`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 150px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 0;
  @media (max-width: 400px) {
    font-size: 80px;
  }
  @media (min-width: 401px) and (max-width: 768px) {
    font-size: 100px;
  }
`;
