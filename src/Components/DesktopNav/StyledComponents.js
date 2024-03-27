import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const WebsiteLogo = styled.h1`
  font-size: 30px;
  font-family: "Potta One", system-ui;
  color: ${(props) => (props.$mode ? "#06ba6c" : "#6fe8af")};
  letter-spacing: 0.2em;
  transition: all 0.3s ease-in-out;
  @media (max-width: 568px) {
    font-size: 25px;
    letter-spacing: 0.04em;
  }
`;
