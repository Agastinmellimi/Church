import styled from "styled-components";

export const SideBarContainer = styled.div`
  width: 50px;
  background-color: ${(props) => (props.$mode ? "#ffffff" : "#262626")};
  transition: all 0.3s ease-in-out;
  display: block;
  @media (max-width: 568px) {
    display: none;
  }
  flex-shrink: 0;
`;

export const SideOptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  align-items: center;
`;

export const Option = styled.li`
  margin-bottom: 15px;
  list-style: none;
`;
