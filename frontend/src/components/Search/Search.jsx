import { useEffect, useState } from "react";
import Card from "../Card/Card"; 

const Search = () => {
    const [movie, setMovie] = useState('');
    const [results, setResults] = useState([]);
    const [trends, setTrends] = useState([]);

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
                console.log(response.results)
                setResults(response.results || []);
            })
            .catch(err => console.error(err));
    };
    
    useEffect(() => {
        const day = new Date();
        fetch(`https://api.themoviedb.org/3/trending/all/day?query=${day}&language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                setTrends(response.results || []);
            })
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="container mx-auto">
            <div className="overflow-hidden min-h-screen">
                <div className="mt-14">
                    <form onSubmit={handleSearch} className="flex">
                        <input 
                            type="text" 
                            placeholder='Movie Name' 
                            value={movie} 
                            onChange={(e) => setMovie(e.target.value)} 
                            className='w-full py-2 my-2 bg-transparent border-b outline-none focus:outline-none'
                        />
                        <button type="submit" className="bg-red-600 text-white cursor-pointer hover:scale-105 duration-300 mx-10 my-1 py-2 px-8 rounded-full relative z-10">Search</button>
                    </form>

                    <div>
                        {results.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center mt-8">
                                {results.map((result) => (
                                    <div key={result.id}>
                                        <Card movie={result}/>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center mt-8">
                                {trends.map((trend) => (
                                    <div key={trend.id}>
                                        <Card movie={trend}/>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;