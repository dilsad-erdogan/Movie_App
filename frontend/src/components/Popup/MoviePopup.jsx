import { useRef } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const MoviePopup = ({ moviePopup, toggleMoviePopup, movieDetail }) => {
    const moviePopupRef = useRef();

    window.addEventListener("click", (e) => {
        if (moviePopupRef.current === e.target) {
            toggleMoviePopup();
        }
    });

    const addFav = () => {
        console.log(movieDetail.id);
    };

    return (
        <div>
            {moviePopup && (
                <div ref={moviePopupRef} className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto bg-black bg-opacity-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[90%] max-h-[90%] w-screen sm:w-auto rounded-2xl">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-gray-900 backdrop-blur-md w-full p-6 shadow-custom-inset overflow-y-auto">
                            <div className="relative max-h-full overflow-y-auto">
                                {/* Backdrop image */}
                                <img src={`https://image.tmdb.org/t/p/w1280${movieDetail.backdrop_path}`} alt="" className="w-full h-full object-cover blur-md" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 z-10 max-h-[90vh] overflow-y-auto">
                                    {/* Text Section */}
                                    <div className="flex flex-col justify-center p-8">
                                        <h1 className="text-xl font-bold mb-4 flex justify-between">
                                            <FaHeart onClick={addFav} />
                                            {movieDetail.title}
                                        </h1>
                                        <p className="text-md text-end mb-3">{movieDetail.overview}</p>
                                        <p className="text-xs text-end mb-5">Vote Average: {movieDetail.vote_average} - Vote count: {movieDetail.vote_count}</p>
                                        <div className="flex text-sm font-bold gap-4 flex-wrap">
                                            {movieDetail.genres ? (
                                                movieDetail.genres.map((genre) => (
                                                    <p key={genre.id} className="border p-2 rounded-full">{genre.name}</p>
                                                ))
                                            ) : (
                                                <p>No genres available</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Poster Section */}
                                    <div className="flex justify-center items-center">
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                                            alt=""
                                            className="w-[100px] sm:w-[200px] shadow-lg rounded-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MoviePopup;