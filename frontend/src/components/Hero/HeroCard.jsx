
const HeroCard = ({ popular }) => {
  return (
    <div>
        {popular.original_title}
        {popular.vote_average}
    </div>
  )
}

export default HeroCard