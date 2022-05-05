import axios from "axios";
import { useState, useEffect } from "react";
import { ACTIVITIES } from "../../utils/api";
// import { StyledWrapper } from "./ActivitiesStyled";
import { StyledWrapper } from "../featured/FeaturedStyling";

const Activities = () => {
  const [data, setData] = useState([]);

  const fetchActivities = async () => {
    const { data } = await axios.get(ACTIVITIES);
    setData(data.data);
  };

  console.log(data);

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <StyledWrapper>
        <h2>Most popular attractions in Bergen</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((activity, idx) => {
                return (
                  <div key={idx} className="card">
                    <h3>{activity.attributes.name}</h3>
                    <div className="imgCont">
                      <img src={activity.attributes.img_url} alt="" />
                    </div>
                    <p>
                      {activity.attributes.description.substring(0, 200) +
                        "..."}
                    </p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Activities;
