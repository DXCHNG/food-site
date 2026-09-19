import { Link } from "react-router-dom"
function Recipes({food}){

  return(
    

    <Link to={`/food_info/${food.idMeal}`} state={(food)}>
    <div className="border rounded">
      <div>
        <img src={food.strMealThumb}></img>
      </div>
      <div className="bg-white text-black py-8 flex flex-col ">
        <a className="font-bold hover:text-orange-500/85">{food.strMeal}</a>
        <a>{food.strArea}</a>
      </div>
    </div>
   </Link>
  )
}
export default Recipes