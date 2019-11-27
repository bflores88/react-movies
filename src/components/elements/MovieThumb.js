import React from "react";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieName, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <img
          className="clickable"
          src={image}
          alt="moviethumb"
          title={movieName}
        />
      ) : (
        <img src={image} alt="moviethumb" title={movieName} />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
