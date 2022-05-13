import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, HOTELS } from "../utils/api";
import { useFetch } from "../hooks/useFetch";

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
      {data.data ? (
        <>
          <h2>{data.data.attributes.name}</h2>
        </>
      ) : (
        "LOASING"
      )}
    </>
  );
};

export default Detail;
