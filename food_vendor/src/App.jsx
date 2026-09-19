import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import FoodDetails from "./pages/FoodDetails"
import HomePage from "./pages/HomePage"
import SearchFoodPage from "./pages/SearchFoodPage"

function Food() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
      </Route>
      <Route path="/food_info/:id" element={<FoodDetails></FoodDetails>}>
      </Route>
      <Route 
      path="/meal/:query" element={<SearchFoodPage></SearchFoodPage>}>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default Food