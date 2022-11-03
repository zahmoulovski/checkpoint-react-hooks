import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";

export default function Filtring({filter}) {
    let searchRef = useRef();
    const [rate, setRate] = useState(0);
    
    const ratingChanged = (newRating) => {
         filter(searchRef.current.value,newRating);
        setRate(newRating)
    };

    function submitted(ev){
        ev.preventDefault();
        filter(searchRef.current.value,rate);
    }

    return (
            <form className="searchform" onChange={submitted} onSubmit={submitted}>
            <img src="https://static.wikia.nocookie.net/logopedia/images/d/d5/Flix_logo.png" alt="logo" style={{height:'65px'}}/>
            <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." aria-label=".form-control-lg example" />

            <button className="btn btn-primary">Movies</button>
            <button className="btn btn-primary">TV Shows</button>
           
            <ReactStars count={10}
                            onChange={ratingChanged}
                            size={20}
                            isHalf={true}
                            activeColor="#ffd700"/>
        </form> 
        );}