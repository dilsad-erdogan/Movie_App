const Card = ({ movie }) => {
    console.log(movie);

    return (
      <div className="relative group">
        <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt="" className="h-[250px] w-[200px] object-cover rounded-md" />
  
        <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200">
          <button className="bg-red-600 text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10">Review</button>
        </div>
      </div>
    )
  }
  
export default Card