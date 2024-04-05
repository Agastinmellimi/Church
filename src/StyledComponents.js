import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => (props.$mode ? "#fafafa" : "#141414")};
  transition: all 0.3s ease-in-out;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;

export const ContentContainer = styled.div`
  background-color: ${(props) => (props.$mode ? "#f0f1f2" : "#1c1b1b")};

  border-top-left-radius: 10px;
  transition: all 0.3s ease-in-out;
  border-top-right-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  overflow: auto;

  height: 91vh;
  flex-grow: 1;
  padding-bottom: 30px;
  @media (max-width: 767px) {
    padding: 15px 20px;
  }
  transition: box-shadow 0.3s ease-in-out;

  box-shadow: ${(props) =>
    props.$mode
      ? `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
      : `rgba(59, 59, 59, 0.25) 0px 30px 60px -12px inset,
      rgba(59, 59, 59, 0.25) 0px 18px 36px -18px inset`};
`;
