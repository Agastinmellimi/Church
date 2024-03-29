import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow: auto;
  flex-shrink: 0;
`;

export const WebsiteLogo = styled.h1`
  font-size: 30px;
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 800;
  color: ${(props) => (props.$mode ? "#1998a8" : "#e1e1e3")};
  letter-spacing: 0.2em;
  transition: all 0.4s ease-in-out;
  text-shadow: 1px 2px 0 rgba(0, 0, 0, 0.25);
  @media (max-width: 568px) {
    font-size: 25px;
    letter-spacing: 0.04em;
  }
`;
