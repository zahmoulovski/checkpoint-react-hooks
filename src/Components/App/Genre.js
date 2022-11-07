import React,{ useEffect, useState } from "react";
import { info } from "../Data/Data";
import { Button } from 'react-bootstrap';

export default function Genre() {
    const [filteredList, setFilteredList] = useState(info);
    const [selectedGenre, setSelectedGenre] = useState();
    const filterByGenre = (filteredData) => {
      if (!selectedGenre) {
        return filteredData;
      }
      const filteredGenre = filteredData.filter(
        (car) => car.genre === selectedGenre
      );
      return filteredGenre;
    };
    const handleGenreChange = (event) => {
      const inputGenre = String(event.target.id);
      if (inputGenre === selectedGenre) {
        setSelectedGenre("");
      } else {
        setSelectedGenre(inputGenre);
      }
    };
  
    useEffect(() => {
      var filteredData = filterByGenre(info);
      filteredData = filterByGenre(filteredData);
      setFilteredList(filteredData);
    }, [selectedGenre]);

  return(
    <div className="Genre">
      <div>Filter by Genre</div>
      <div id="year-options" onClick={handleGenreChange}>
      <Button variant="success" className={selectedGenre === "movie" ? "active-option" : "filter-option"} id="movie" >
          Movies
        </Button>
        <Button variant="warning" className={selectedGenre === "serie" ? "active-option" : "filter-option"} id="serie" >
          TV Shows
        </Button>
      </div>

      {/* <div id="car-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
            <div className="car-name">{`Title: ${item.title}`}</div>
            <div className="car-year">{`Genre: ${item.genre}`}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
