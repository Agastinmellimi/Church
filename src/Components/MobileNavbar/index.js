import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HandlerContext from "../../Context/HandlerContext";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import "./index.css";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "Home",
  },
  {
    id: 1,
    navTitle: "About",
  },
  {
    id: 2,
    navTitle: "Attendance",
  },
  {
    id: 3,
    navTitle: "Church Timings",
  },
];

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode, setActiveTab, activeTab } = value;
        const getTabName = (option) => {
          switch (option) {
            case "Home":
              return "HOME";
            case "About":
              return "ABOUT";
            case "Attendance":
              return "ATTENDANCE";
            case "Church Timings":
              return "TIMINGS";
            default:
              return "";
          }
        };
        const getIcon = (option) => {
          switch (option) {
            case "Home":
              return <IoHome style={{ marginRight: "3px" }} />;
            case "About":
              return <FaLeaf style={{ marginRight: "3px" }} />;
            case "Attendance":
              return <FaUserCheck style={{ marginRight: "3px" }} />;
            case "Church Timings":
              return <FaClipboardList style={{ marginRight: "3px" }} />;
            default:
              return "";
          }
        };
        const clickOption = (option) => {
          const navigateCorrespondingRoute = (route) => {
            switch (route) {
              case "Home":
                return navigate("/");
              case "About":
                return navigate("/about");
              case "Attendance":
                return navigate("/attendance");
              case "Church Timings":
                return navigate("/church-timings");
              default:
                return null;
            }
          };

          setActiveTab(getTabName(option));
          navigateCorrespondingRoute(option);
          setMobileNavOpen(false);
        };
        return (
          <motion.div
            className="nav"
            initial="closed"
            animate={mobileNavOpen ? "opened" : "closed"}
          >
            <div className="menu-container">
              <motion.button
                className="menu"
                variants={hideNavItemsVariant}
                onClick={() => setMobileNavOpen(true)}
                style={{ color: lightMode ? "#000" : "#fff" }}
              >
                <BsMenuButtonWideFill />
              </motion.button>
            </div>
            <motion.div
              variants={mobileMenuVariant}
              style={{ backgroundColor: lightMode ? "#fff" : "#000" }}
              className="mobile-menu"
            >
              <motion.button
                className="close"
                variants={fadeInVariant}
                onClick={() => setMobileNavOpen(false)}
                style={{ color: lightMode ? "#000" : "#fff" }}
              >
                <IoCloseSharp />
              </motion.button>
              <motion.ul
                className="mobileOptionListContainer"
                variants={ulVariant}
              >
                {MOBILE_NAV_ITEMS.map((navItem) => (
                  <motion.li
                    className="mobileOptionList"
                    whileTap={{ scale: 0.95 }}
                    key={navItem.id}
                  >
                    <motion.div
                      onClick={() => clickOption(navItem.navTitle)}
                      className="optionName"
                      style={{
                        color:
                          activeTab === getTabName(navItem.navTitle)
                            ? lightMode
                              ? "#3a5ed6"
                              : "#6788f5"
                            : lightMode
                            ? "#3c3c3d"
                            : "#c7c8c9",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: "wrap",
                      }}
                      variants={liVariant}
                    >
                      {getIcon(navItem.navTitle)}
                      {navItem.navTitle}
                    </motion.div>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default MobileNavbar;
