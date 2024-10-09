import { useEffect, useState } from "react";
import Card from "../Card/Card";
import favServices from "../../services/fav";

const Fav = () => {
  const [favs, setFavs] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
    }
  };

  useEffect(() => {
    const fetchFav = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await favServices.get(user._id);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching favorite movies:", error);
      }
    };

    fetchFav();
  }, []);

  useEffect(() => {
    if (results.length === 0) {
      return;
    }

    const fetchMovieDetails = async () => {
      const promises = results.map((movie) =>
        fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}`, options)
          .then((response) => response.json())
      );

      try {
        const movieDetails = await Promise.all(promises);
        setFavs(movieDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [results]);

  return (
    <div className="container mx-auto">
      <div className="overflow-hidden min-h-screen">
        <div className="mt-14">
          {loading ? (
            <div className="text-center text-white text-xl">
              Loading your favorite movies...
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center mt-8">
              {favs.map((fav) => (
                <div key={fav.id}>
                  <Card movie={fav} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fav;