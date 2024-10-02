import { Component } from "react";

import HandlerContext from "./Context/HandlerContext";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/DesktopNav";

import DesktopSidebar from "./Components/DesktopSidebar";
import Attendance from "./Components/Attendance";
import HomeView from "./Components/HomeView";
import About from "./Components/About";
import StudentDeatils from "./Components/StudentDetails";
import ViewChildDetails from "./Components/ViewChildDetails";
import { Container, FlexContainer, ContentContainer } from "./StyledComponents";
import "./index.css";

class App extends Component {
  state = { lightMode: true, activeTab: "" };

  setMode = () => {
    this.setState((prev) => ({ lightMode: !prev.lightMode }));
  };

  setActiveTab = (value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const { lightMode, activeTab } = this.state;
    return (
      <HandlerContext.Provider
        value={{
          lightMode,
          setMode: this.setMode,
          activeTab,
          setActiveTab: this.setActiveTab,
        }}
      >
        <Container $mode={lightMode}>
          <Navbar />

          <FlexContainer $mode={lightMode}>
            <DesktopSidebar />
            <ContentContainer $mode={lightMode}>
              <Routes>
                <Route exact path="/" element={<HomeView />} />
                <Route exact path="/attendance" element={<Attendance />} />
                <Route exact path="/about" element={<About />} />
                <Route
                  exact
                  path="/attendance/:id"
                  element={<StudentDeatils />}
                />
                <Route
                  exact
                  path="/view-child/:id"
                  element={<ViewChildDetails />}
                />
                <Route
                  exact
                  path="/church-timings"
                  element={
                    <p
                      style={{
                        margin: "auto",
                        fontFamily: "'Pathway Extreme', sans-serif",
                        fontSize: "17px",
                        color: lightMode ? "#575656" : "#dedede",
                      }}
                    >
                      Coming Soon...
                    </p>
                  }
                />
              </Routes>
            </ContentContainer>
          </FlexContainer>
        </Container>
      </HandlerContext.Provider>
    );
  }
}

export default App;
