import React,{ useEffect, useState } from "react";
import { info } from "../Data/Data";
//import "./Genre.css";
import { Button } from 'react-bootstrap';

export default function Genre() {
      // filter

    // List of all cars satisfing all the filters
    const [filteredList, setFilteredList] = useState(info);
    // Selected Brand name filter
    const [selectedBrand, setSelectedBrand] = useState("");
    // Selected Genre filter
    const [selectedGenre, setSelectedGenre] = useState();
  
    const filterByBrand = (filteredData) => {
      // Avoid filter for empty string
      if (!selectedBrand) {
        return filteredData;
      }
  
      const filteredGenre = filteredData.filter(
        (car) => car.title.split(" ").indexOf(selectedBrand) !== -1
      );
      return filteredGenre;
    };
    const filterByGenre = (filteredData) => {
      // Avoid filter for null value
      if (!selectedGenre) {
        return filteredData;
      }
  
      const filteredGenre = filteredData.filter(
        (car) => car.genre === selectedGenre
      );
      return filteredGenre;
    };
  
  
    // Toggle seletedGenre state
    const handleGenreChange = (event) => {
      const inputGenre = String(event.target.id);
  
      if (inputGenre === selectedGenre) {
        setSelectedGenre("");
      } else {
        setSelectedGenre(inputGenre);
      }
    };
  
    useEffect(() => {
      var filteredData = filterByBrand(info);
      filteredData = filterByGenre(filteredData);
      setFilteredList(filteredData);
    }, [selectedGenre]);

  // filter
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

      <div id="car-list">
        {filteredList.map((item, index) => (
          <div className="car-item" key={index}>
            <div className="car-name">{`Title: ${item.title}`}</div>
            <div className="car-year">{`Genre: ${item.genre}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
