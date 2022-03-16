import React, { useEffect, useState } from "react";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  
    // to get all movies list on component mounts
  const [movie, setMovie] = useState("")
  const [data,setData] = useState([])
  // useEffect(() => {
  //   //   dispatch an action to the store 

  // }, [dispatch]);


//    filter by genre 
const handleFilter = (e)=>{
    // dispach filterby genre action to the store
  setMovie(e.target.value)
  }
  function addfilter(res) {
    // let more = res.f
  }
  return (
    <>
      <h2>Movies</h2>
      <select  onChange={handleFilter}>
        {/* map through the filter  */}
      </select>
      <div className = "movies-list">
       {/* map throught th movie list and display the results */}
      </div>
    </>
  );
};
