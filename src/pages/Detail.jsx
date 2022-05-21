import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HOTELS } from "../utils/api";
import { useFetch } from "../hooks/useFetch";
import { DetailCarousel } from "../components/carousel/Carousel";
import { BookingForm } from "../components/forms/Forms";

const Detail = () => {
  const { id } = useParams();
  // const { data, loading, hasError } = useFetch(HOTELS + "/" + id);

  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(HOTELS + "/" + id);
    setData(data);
  };

  // console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <BookingForm data={data.data} />
      {data.data ? (
        <>
          <DetailCarousel data={data.data} />
          <h1>{data.data.attributes.name}</h1>
          <p>{data.data.attributes.description}</p>
        </>
      ) : (
        "LOADING"
      )}
    </>
  );
};

export default Detail;
