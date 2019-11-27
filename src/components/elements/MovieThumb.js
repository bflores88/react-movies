import React from "react";
import { Link } from "@reach/router";

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieName, movieId, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img
            className="clickable"
            src={image}
            alt="moviethumb"
            title={movieName}
          />
        </Link>
      ) : (
        <img src={image} alt="moviethumb" title={movieName} />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
