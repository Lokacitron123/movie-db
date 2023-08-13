import React from "react";
import Suggestions from "../components/Suggestions";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  const { search } = useSelector((store) => store);
  const { genres } = useSelector((store) => store.genres);
  return <Suggestions movies={search} genres={genres} />;
};

export default SearchMovies;
