import { useEffect, useState } from "react";
import FavCard from "./FavCard"

const Fav = () => {
  const [trends, setTrends] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
    }
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center mt-8">
            {trends.map((trend) => (
              <div key={trend.id}>
                <FavCard fav={trend}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fav