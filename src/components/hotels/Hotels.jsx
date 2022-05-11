import { HOTELS } from "../../utils/api";
import { starRating } from "../../utils/starsSVG";
import { useFetch } from "../../hooks/useFetch";
import { StyledMain } from "./HotelsStyled";

const Hotels = () => {
  const { data, loading, hasError } = useFetch(HOTELS);

  return (
    <>
      <StyledMain>
        <h2>All hotels</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((hotel, idx) => {
                return (
                  <div key={idx} className="card">
                    <div className="imgCont">
                      <img src={hotel.attributes.img_url} alt="" />
                    </div>
                    <div className="textCont">
                      <h3>{hotel.attributes.name}</h3>
                      <div className="stars">
                        {starRating(hotel.attributes.star)}
                      </div>
                      <div className="desc">
                        <p>{hotel.attributes.description}</p>
                      </div>
                      <div className="rating">
                        <p>User rating: {hotel.attributes.rating} </p>
                        <p>({hotel.attributes.rating_users} users)</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </StyledMain>
    </>
  );
};

export default Hotels;
