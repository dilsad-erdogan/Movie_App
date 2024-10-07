import { useState } from "react";
import MovieCard from "./MovieCard";

const Search = () => {
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (movie.trim() === '') return;

        fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movie)}&include_adult=false&language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                setResults(response.results || []);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder='Movie Name' 
                    value={movie} 
                    onChange={(e) => setMovie(e.target.value)} 
                />
                <button type="submit">Search</button>
            </form>

            <div className="flex gap-5">
                {results.length > 0 ? (
                    results.map((result) => (
                        <div key={result.id}>
                            <MovieCard movie={result}/>
                        </div>
                    ))
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default Search;