import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Recipes from "../components/Recipes";
import useFoodApi from "../hooks/useFoodApi";
import { useState } from "react";

function SearchFoodPage(){
  const {query = ""} = useParams()
  const {data, loading, error} = useFoodApi(query)
  const [inputSearch, setInputSearch] = useState(query)
  const navigate = useNavigate();


  return(
    <div className="border rounded">
      <NavBar  value={inputSearch} onChange={setInputSearch} onSubmit={(query) => {navigate(`/meal/${encodeURIComponent(query)}`)}} ></NavBar>
      <div className="flex flex-col px-10 md:px-28 py-8  bg-white/50">
        <a className="text-3xl  font-bold">Results for "{query}"</a>
        <a>{data?.meals?.length || 0} recipe found</a>
      </div>
     <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-7 px-10 md:px-28">
      {!loading && !error && data?.meals?.length > 0 ? (data.meals.map((food)=>(<Recipes key={food.idMeal} food={food}></Recipes>))
      ) :(
        <div></div>
      )}
     </div>
    </div>
  )
}
export default SearchFoodPage