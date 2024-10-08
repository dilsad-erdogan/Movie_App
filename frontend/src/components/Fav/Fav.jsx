import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Fav = () => {
  const [favs, setFavs] = useState([]);

  const fav = [
    { id: '889737' },
    { id: '30984' },
    { id: '44214' },
    { id: '10193' },
    { id: '597' }
  ];

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVlMzljZjhjMjFkZWI4NDdjNmVhZGNkNzg0NDNlZCIsIm5iZiI6MTcyODMxNjc2MS4xNTAxOTQsInN1YiI6IjY3MDQwMjg4M2Q3YjNjNmMwNzc5NjkyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FW1XjHUlaKWx0gtgxSvHc_tIja7jk-GqhsGHTNQ6lF0'
    }
  };

  useEffect(() => {
    // Tüm favori ID'leri için paralel olarak film detaylarını alıyoruz
    const fetchMovieDetails = async () => {
      const promises = fav.map((movie) =>
        fetch(`https://api.themoviedb.org/3/movie/${movie.id}`, options)
          .then((response) => response.json())
      );

      try {
        const results = await Promise.all(promises);
        setFavs(results);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="overflow-hidden min-h-screen">
        <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center mt-8">
            {favs.map((fav) => (
              <div key={fav.id}>
                <Card movie={fav} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;