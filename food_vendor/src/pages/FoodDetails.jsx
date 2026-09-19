import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
function FoodDetails() {
  const location = useLocation()
  const food = location.state
  const navigate = useNavigate()
 
  return (
     
    <div className="bg-yellow-50/55 min-h-screen text-white px-32 ">
      <div>
        <NavBar></NavBar>
        <div>
        <button
            onClick={() => navigate(-1)}
            className="text-black/70 px-5 py-3 mt-3 w-40 "
          >
            ← Back
          </button>
          </div>
      </div>
      <div className="justify-items-center py-20">
         
        

        <div>
          <div className=" relative text-white border rounded-2xl border-black  mb-12 overflow-hidden h-52 ">
            <img
              src={food.strMealThumb}
              className="w-full h-full object-cover"
            ></img>
            <div>
              <a className="text-black font-bold text-3xl absolute bottom-0 left-0">
                {food.strMeal}
              </a>
              <a className="border rounded-xl px-2 text-white">{food.strCategory}</a>
              <a className="border rounded-xl px-2"> {food.strCountry}</a>
            </div>
          </div>

          <div>
            <a className="font-bold border rounded-lg px-4 bg-orange-500/85 py-3 ">
              Add to favourites
            </a>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div className="mt-6">
              <a className="text-black font-bold text-xl">Ingredients</a>
              <div>
                <div className="text-black bg-white flex flex-row justify-between mt-6 ">
                  <a>{food.strIngredient1}</a>
                  <a>14 oz jar</a>
                </div>

                <div className="text-black bg-white flex flex-row justify-between mt-3 ">
                  <a>{food.strIngredient2}</a>
                  <a>3 Cups</a>
                </div>
                <div className="text-black bg-white flex flex-row justify-between mt-3 ">
                  <a>{food.strIngredient3}</a>
                  <a>6</a>
                </div>
                <div className="text-black bg-white flex flex-row justify-between mt-3 ">
                  <a>{food.strIngredient4}</a>
                  <a>2</a>
                </div>
                <div className="text-black bg-white flex flex-row justify-between mt-3 ">
                  <a>{food.strIngredient5}</a>
                  <a>2</a>
                </div>
                <div className="text-black bg-white flex flex-row justify-between mt-3 ">
                  <a>{food.strIngredient6}</a>
                  <a>7</a>
                </div>
              </div>
            </div>
            <div className="text-black  flex flex-col mt-6 gap-3">
              <a className="text-xl font-bold">Instructions</a>
              <a>
                {food.strInstructions}
              </a>
            
              <button className="text-white bg-red-500 border rounded-lg px-2 py-2 w-52 font-bold">
                
                ▶️Watch on YouTube
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodDetails;
