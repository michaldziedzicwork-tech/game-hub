import useGenres from "@/hooks/useGenres";
import { link } from "fs";
import React from "react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
