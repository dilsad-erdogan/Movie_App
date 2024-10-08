import { useEffect, useState } from "react";
import Slider from "react-slick";

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
                    console.log(response.results);
                    setPopulars(response.results);
                } else {
                    console.error("Unexpected response format", response);
                    setPopulars([]);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
        
    return (
        <div className="container mx-auto">
            <div className="overflow-hidden min-h-screen">
                <div className="w-full relative">
                    {/* Hero section */}
                    <Slider {...settings}>
                        {populars.map((popular) => (
                            <div key={popular.id} className="relative">
                                {/* Backdrop Image */}
                                <img 
                                    src={`https://image.tmdb.org/t/p/w1280${popular.backdrop_path}`} 
                                    alt="" 
                                    className="w-full h-full object-cover blur-md"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 z-10">
                                    {/* Text Section */}
                                    <div className="flex flex-col justify-center p-8">
                                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-end">{popular.title}</h1>
                                        <p className="text-lg sm:text-xl text-end mb-3">{popular.overview}</p>
                                        <p className="text-md sm:text-lg text-end">{popular.release_date}</p>
                                    </div>

                                    {/* Poster Section */}
                                    <div className="flex justify-center items-center">
                                        <img 
                                            src={`https://image.tmdb.org/t/p/w500${popular.poster_path}`}  
                                            alt="" 
                                            className="w-[200px] sm:w-[450px] shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Hero;