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
  border: ${(props) =>
    props.$max
      ? "#1fb829 0.3px solid"
      : `${
          props.$occur
            ? "Orange 0.3px solid"
            : `${props.$mode ? "#ffff 0.3px solid" : "@262626 0.3px solid"}`
        }`};
  cursor: pointer;
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
  /* transition: all 0.3s ease-in-out;
  &:hover {
    border: ${(props) =>
    props.$mode ? "#353635 0.2px solid" : "#d7f5df 0.2px solid"};
  } */
  ${(props) =>
    props.$max &&
    `
       
       background-color: ${
         props.$mode ? "#a2f5a7" : "rgba(154, 241, 153, 0.35)"
       };
       
  `}

  ${(props) =>
    props.$occur &&
    ` 
       background-color: ${
         props.$mode ? "#f7e5c6" : "rgba(245, 203, 118, 0.26)"
       };
      

  `}
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
  ${(props) =>
    props.$max &&
    `
     border: ${props.$mode ? "#31b53c 2px solid" : "#74ed7c 2px solid"};
  `}

  ${(props) =>
    props.$occur &&
    ` 
      border: ${props.$mode ? "#ebac2f 2px solid" : "#e8c661 2px solid"};
  `}
`;
export const ChildrenName = styled.p`
  font-family: "Madimi One", sans-serif;
  font-size: 18px;
  color: ${(props) => (props.$mode ? "#5c5c5c" : "#c4c7c3")};
  margin-left: 20px;
  margin-right: 20px;

  flex-grow: 1;
  line-height: 25px;
  word-break: break-word;
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
  ${(props) =>
    props.$max &&
    `
     color: ${props.$mode ? "#31b53c" : "#74ed7c"};
  `}

  ${(props) =>
    props.$occur &&
    ` 
      color: ${props.$mode ? "#ebac2f" : "#e8c661"};
  `}
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

export const NameFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  text-overflow: ellipsis;
  align-self: flex-start;
  flex-grow: 1;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const RollNo = styled.p`
  font-family: "Edu AU VIC WA NT Hand", cursive;
  font-weight: 600;
  margin-left: auto;
  border: ${(props) =>
    props.$mode ? "1.5px solid #212121" : "1.5px solid #dcdedd"};
  border-radius: 50%;
  padding: 5px 10px;
  color: ${(props) => (props.$mode ? "#212121" : "#dcdedd")};
  @media (max-width: 400px) {
    align-self: flex-end;
  }
  ${(props) =>
    props.$max &&
    `
     color: ${props.$mode ? "#31b53c" : "#74ed7c"};
     border: ${props.$mode ? "#31b53c 2px solid" : "#74ed7c 2px solid"};
  `}

  ${(props) =>
    props.$occur &&
    ` 
      color: ${props.$mode ? "#ebac2f" : "#e8c661"};
      border: ${props.$mode ? "#ebac2f 2px solid" : "#e8c661 2px solid"};
  `}
`;
