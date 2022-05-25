import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ACTIVITIES } from "../../utils/api";
import { StyledDetails } from "../hotelDetails/HotelDetailsStyles";
import { ActivityCarousel } from "../carousel/Carousel";

export const ActivitiesDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(ACTIVITIES + "/" + id);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      {data.data ? (
        <StyledDetails>
          <div className="carouselCont">
            <ActivityCarousel data={data.data} />
          </div>
          <div className="hotelDesc">
            <h1>{data.data.attributes.name}</h1>
            <p>{data.data.attributes.description}</p>
          </div>
        </StyledDetails>
      ) : (
        "Loading.."
      )}
    </>
  );
};
