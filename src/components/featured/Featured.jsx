import { StyledWrapper } from "./FeaturedStyling";
import { HOTELS } from "../../utils/api";
import { starRating } from "../../utils/starsSVG";
import { useFetch } from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, hasError } = useFetch(HOTELS);

  return (
    <>
      <StyledWrapper>
        <h2>Most popular hotels</h2>
        <div className="wrapper">
          {data.length > 0
            ? data.map((featured, idx) => {
                if (featured.attributes.featured) {
                  return (
                    <div key={idx} className="card">
                      <h3>{featured.attributes.name}</h3>
                      <div className="imgCont">
                        <img src={featured.attributes.img_url} alt="" />
                      </div>
                      <div className="stars">
                        {starRating(featured.attributes.star)}
                      </div>
                      <div className="rating">
                        <p>User rating: {featured.attributes.rating} </p>
                        <p>({featured.attributes.rating_users} users)</p>
                      </div>
                    </div>
                  );
                }
              })
            : "Loading..."}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Featured;
