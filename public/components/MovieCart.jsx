import React from "react";
import MoviesList from "./MovieData";
import "./css/movie.css";
export const MovieCart = () => {
  return (
    <>
      <div className="main-div">
        <div className="movie-list">
          {MoviesList.map((movie) => {
            return (
              <div className="inner-container">
                <div className="movie-img">
                  <img src={movie.boxart} alt="movie-title" />

                  <div className="movie-text">
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                    <a href={movie.playerUrl}>See Trailer</a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
