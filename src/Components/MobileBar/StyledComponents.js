import styled from "styled-components";

export const MobileBarContainer = styled.div`
  background-color: ${(props) => (props.$mode ? "#ffffff" : "#2b2b2b")};
  display: flex;
  position: fixed;
  top: 91%;
  width: 100%;
  flex-direction: column;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media (min-width: 569px) {
    display: none;
  }
  z-index: 1111;
`;

export const MobileOptionsContainer = styled.ul`
  display: flex;
  padding-left: 0;
  align-self: center;
  width: 80%;
  justify-content: space-between;
`;

export const MobileOption = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
