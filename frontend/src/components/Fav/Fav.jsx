import FavCard from "./FavCard"

const Fav = () => {
  return (
    <div className="flex gap-5">
        <FavCard fav={"Avengers"} />
        <FavCard fav={"Black Swan"} />
        <FavCard fav={"Titanic"} />
    </div>
  )
}

export default Fav