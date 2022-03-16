/** @format */

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];
export const MoviesDashboard = () => {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate()
  // to get all movies list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    axios
      .get("https://movie-fake-server.herokuapp.com/data")
      .then(function (response) {
        // handle success
        setMovie(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  console.log(movie);
  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store
  };
  const handleMovie = (id) => {
    let new1 = id+1
   navigate(`/${new1}`);
    console.log(id)
  
  //   navigate("Details", {
  //    itemId: 86,
  //    otherParam: "anything you want here",
  //  });
    
  }
  return (
    <>
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {genres.map(function (el, id) {
          return (
            <option key={id} value={el}>
              {el}
            </option>
          );
        })}
        {/* map through the filter  */}
      </select>
      <div className="movies-list">
        {/* map throught th movie list and display the results */}
        {movie.length
          ? movie.map(function (el, id) {
              return (
                <div key={id}>
                  <p>{el.movie_name}</p>
                  <img src={el.image_url} onClick={()=>handleMovie(id)} />
                  
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
