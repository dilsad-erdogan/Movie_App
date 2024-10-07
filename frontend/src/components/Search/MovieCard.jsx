
const MovieCard = ({ movie }) => {
  return (
    <div>
        {movie.original_title} ({movie.release_date})
    </div>
  )
}

export default MovieCard