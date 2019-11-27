import React from "react";
import PropTypes from "prop-types";

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

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieName: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool
};

export default MovieThumb;
