import { useParams } from "react-router-dom";
import HandlerContext from "../../Context/HandlerContext";
import {} from "./StyledComponents";
import { useEffect, useState } from "react";

const apiStatus = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
  networkErr: " NETWORK_ERR",
};

const ViewChildDetails = () => {
  const { id } = useParams();
  const [apiResponsedData, setApiResponseData] = useState({
    childApiStatus: apiStatus.initial,
    childData: {},
  });

  const getChildrenData = async (id) => {
    setApiResponseData((prev) => ({
      ...prev,
      childApiStatus: apiStatus.inProgress,
      workingDays: null,
    }));
    try {
      const url = "https://church-backend-k1y9.onrender.com/attendance-details";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        console.log(data.details.find((item) => item.id === parseInt(id)));
        setApiResponseData((prev) => ({
          ...prev,
          childData: data.details.find((item) => item.id === parseInt(id)),
          workingDays: data.workingDays,
          childApiStatus: apiStatus.success,
        }));
      } else {
        setApiResponseData((prev) => ({
          ...prev,
          childrenStatus: apiStatus.failure,
        }));
      }
    } catch (err) {
      setApiResponseData((prev) => ({
        ...prev,
        childApiStatus: apiStatus.networkErr,
      }));
    }
  };

  useEffect(() => {
    getChildrenData(id);
  }, [id]);

  return (
    <HandlerContext.Consumer>
      {(value) => {
        const { lightMode } = value;
        return (
          <>
            {apiResponsedData.childData.image === null ? null : (
              <img
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "8px",
                }}
                src={apiResponsedData.childData.image}
                alt={apiResponsedData.childData.name}
              />
            )}
          </>
        );
      }}
    </HandlerContext.Consumer>
  );
};

export default ViewChildDetails;
