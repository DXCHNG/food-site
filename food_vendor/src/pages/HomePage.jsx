import { useNavigate } from "react-router-dom"
import NavBar from "../components/NavBar"
import Recipes from "../components/Recipes"
import useFoodApi from "../hooks/useFoodApi"
import { useState } from "react"

function HomePage(){
  const [category, setCategory] = useState("")
  const {data, loading, error} = useFoodApi(category)
  const navigate = useNavigate()
  const [inputSearch, setInputSearch] = useState("")
  const [buttonSearch, setButtonSearch] = useState("")

  return(
    <div className="bg-yellow-50/55 min-h-screen text-white">
    <NavBar value={inputSearch} onChange={setInputSearch} onSubmit={(query) => {navigate(`/meal/${encodeURIComponent(query)}`)}} ></NavBar>
   
    <div className="flex flex-col items-center gap-4 py-10 bg-white/50">
      <a className="text-orange-500/85 font-bold ">Refiner Tech Academy — Solo Project</a>
      <a className="text-black font-bold text-4xl">Find your next <a className="text-orange-500/85 font-bold text-4xl"> favourite meal</a></a>
      <a className="text-black/70 mb-4">Search thousands of recipes from around the world. Save the ones you love.</a>
      <div className="flex flex-row gap-3">
      <input onChange={(newSearch) => setButtonSearch(newSearch.target.value)} placeholder="Try 'pasta' or 'curry'..." className="border rounded-xl w-60 text-black"></input>
      <button onClick={() => navigate(`/meal/${encodeURIComponent(buttonSearch)}`)} className="bg-orange-500/85 text-white font-bold px-3 py-2 w-20 border rounded-xl">Search</button>
      </div>
    </div>
    <div className="flex flex-col px-28">
      <div>
      <a className="text-black font-bold text-2xl">Browse by category</a>
      </div>
    </div>
    <div className="flex flex-wrap text-black/70 gap-4 py-6 px-28">
    
    <button onClick={() => setCategory(`Beef`)}
     className="border rounded-3xl w-20 px-5 py-1 bg-white hover:border-orange-500/85 active:bg-orange-500/85">Beef</button>
     <button onClick={() => setCategory(`chicken`)}
    className="border rounded-3xl w-20 px-3 py-1 bg-white hover:border-orange-500/85">chicken</button>
      <button onClick={() => setCategory(`Dessert`)}
    className="border rounded-3xl w-20 px-3 py-1 bg-white hover:border-orange-500/85">Dessert</button>
    <button onClick={() => setCategory(`Lamp`)}
     className="border rounded-3xl w-20 px-5 py-1 bg-white hover:border-orange-500/85">Lamp</button>
    <button onClick={() => setCategory(`Miscellaneous`)}
    className="border rounded-3xl w-40 px-7 py-1 bg-white hover:border-orange-500/85">Miscellaneous</button>
    <button onClick={() => setCategory(`Pasta`)}
     className="border rounded-3xl w-20 px-5 py-1 bg-white hover:border-orange-500/85">Pasta</button>
    <button onClick={() => setCategory(`Pork`)}
     className="border rounded-3xl w-20 px-5 py-1 bg-white hover:border-orange-500/85">Pork</button>
    <button onClick={() =>setCategory(`Seafood`)}
     className="border rounded-3xl w-26 px-5 py-1 bg-white hover:border-orange-500/85">Seafood</button>
    </div>
    <div className="grid grid-cols-5 gap-7 px-28"> 
    {!loading && !error && data?.meals? (
      data.meals.map((food) => <Recipes key={food.idMeal} food={food}></Recipes>)
    
    ):(
      <div></div>
    )}
    </div>
    
     </div>
  )
}
export default HomePage