import React from "react";
import { StyledSearch } from "./SearchStyles";
import { useFetch } from "../../hooks/useFetch";
import { HOTELS } from "../../utils/api";

const Search = () => {
  const { data, loading, error } = useFetch(HOTELS);

  return (
    <StyledSearch>
      <input type="text" placeholder="Search hotels" />
    </StyledSearch>
  );
};

export default Search;
