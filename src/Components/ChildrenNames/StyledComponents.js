import styled from "styled-components";

export const ChildrenNamescontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-family: "Pathway Extreme", sans-serif;
  font-size: 25px;
  letter-spacing: 0.04em;
  margin-top: 8px;
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

export const ChildrensListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  align-self: center;
  list-style: none;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const Children = styled.li`
  list-style: none;
  background-color: ${(props) => (props.$mode ? "#ffff" : "#262626")};

  padding: 5px 20px 5px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  text-overflow: ellipsis;
  border-radius: 5px;

  margin-bottom: 20px;
  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  @media (min-width: 768px) {
    width: 48%;
  }
`;
export const ImageChildren = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 400px) {
    align-self: flex-start;
    margin-top: 5px;
  }
`;
export const ChildrenName = styled.p`
  font-family: "Madimi One", sans-serif;
  font-size: 18px;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#c4c7c3")};
  margin-left: 20px;
  margin-right: 20px;

  flex-grow: 1;
  line-height: 25px;

  font-weight: 500;
  letter-spacing: 0.03em;
  @media (max-width: 700px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    align-self: flex-start;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 3px;
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
