import { useFetch } from "../../hooks/useFetch";
import { ACTIVITIES } from "../../utils/api";
// import { StyledWrapper } from "../featured/FeaturedStyling";
import { StyledWrapper } from "./ActivitiesStyled";

const Activities = () => {
  const { data, loading, hasError } = useFetch(ACTIVITIES);

  return (
    <>
      <StyledWrapper>
        <h2>Most popular attractions in Bergen</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((activity, idx) => {
                return (
                  <div key={idx} className="card">
                    <div className="imgCont">
                      <img src={activity.attributes.img_url} alt="" />
                    </div>
                    {/* {activity.attributes.name.length > 23 ? (
                      <h3>
                        {activity.attributes.name.substring(0, 23) + "..."}
                      </h3>
                    ) : (
                      <h3>{activity.attributes.name}</h3>
                    )} */}
                    <h3>{activity.attributes.name}</h3>
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
