import { useState } from "react";
import MoviePopup from "../Popup/MoviePopup";

const Card = ({ movie }) => {
    const [moviePopup, setMoviePopup] = useState(false);
    const [movieDetail, setMovieDetail] = useState([]);

    const toggleMoviePopup = () => {
        setMoviePopup((prev) => !prev);
    };

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
        }
    };

    const clickMovie = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`, options)
            .then(response => response.json())
            .then(response => setMovieDetail(response))
            .catch(err => console.error(err));
        
        toggleMoviePopup();
    };

    return (
      <div className="relative group">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="" className="h-[250px] w-[200px] object-cover rounded-md" />
  
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
          <button className="bg-red-600 text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10" onClick={clickMovie}>Review</button>
        </div>

        <MoviePopup moviePopup={moviePopup} toggleMoviePopup={toggleMoviePopup} movieDetail={movieDetail}/>
      </div>
    )
  }
  
export default Card