import "./filtring.css";
import ReactStars from "react-rating-stars-component";
import {useRef,useState} from "react";
// import Genre from "../App/Genre";

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
            <div>
                <form className="searchform" onChange={submitted}>
                    <img src="https://static.wikia.nocookie.net/logopedia/images/d/d5/Flix_logo.png" alt="logo" style={{height:'65px'}}/>
                    <input ref={searchRef} className="form-control form-control-lg searchinp" type="text" placeholder="Search for film..." />
                    <ReactStars count={10}
                            onChange={ratingChanged}
                            size={30}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </form> 
            </div>
        );}
