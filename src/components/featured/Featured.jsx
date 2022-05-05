import axios from "axios";
import { StyledWrapper } from "./FeaturedStyling";
import { HOTELS } from "../../utils/api";
import { useState, useEffect } from "react";

const Featured = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(HOTELS);
    setData(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h2>Most popular hotels</h2>
      <StyledWrapper>
        {data.length > 0
          ? data.map((featured, idx) => {
              if (featured.attributes.featured) {
                return (
                  <div key={idx} className="card">
                    <h3>{featured.attributes.name}</h3>
                    <div className="imgCont">
                      <img src={featured.attributes.img_url} alt="" />
                    </div>
                    <div className="rating">
                      <p>User rating: {featured.attributes.rating} </p>
                      <p> ({featured.attributes.rating_users} users)</p>
                    </div>
                  </div>
                );
              }
            })
          : "Loading..."}
      </StyledWrapper>
    </>
  );
};

export default Featured;
