import { useNavigate } from "react-router-dom";
import Food from "../App";

function NavBar({onChange, value, onSubmit}) {
  const navigate = useNavigate()
  return (
    <div>
      <nav className="flex flex-row gap-12 px-6 py-4 bg-yellow-100/30 items-center justify-center  ">
        <div className="flex flex-row gap-3">
          <a></a>

          <button onClick={() => navigate(`/`)} className="text-orange-500/85 font-bold text-2xl"> 🍴 Forkful</button>
         
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(value);
          }}
        >
          <input
            value={value}
            onChange={(newSearch) => onChange(newSearch.target.value)}
            placeholder="Search recipes..."
            className="text-black border rounded-xl w-56 px-4 py-1 border-orange-500/85"
          ></input>
        </form>
        <div className="text-black/70 gap-3 flex flex-row">
          <button onClick={() => navigate(`/`)} className="text-black/70">Home</button>
           <button onClick={() => navigate(`/`)} className="text-black/70">Favourites</button>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
