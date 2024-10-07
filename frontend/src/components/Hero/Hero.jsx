import { useEffect, useState } from "react";
import HeroCard from "./HeroCard";

const Hero = () => {
    const [populars, setPopulars] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
        }
    };
      
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular', options)
            .then(response => response.json())
            .then(response => {
                if (Array.isArray(response.results)) {
                    console.log(response.results)
                    setPopulars(response.results);
                } else {
                    console.error("Unexpected response format", response);
                    setPopulars([]);
                }
            })
            .catch(err => console.error(err));
    }, []);

    // Tıklayınca spesifik movie getiriyo 
    //   fetch('https://api.themoviedb.org/3/movie/<movie_id>?language=en-US', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
        
    return (
        <div className="flex gap-5">
            {populars.map((popular) => (
                <div key={popular.id}>
                    <HeroCard popular={popular} />
                </div>
            ))}
        </div>
    )
}

export default Hero