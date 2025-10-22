import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import API from "../library/api";

export default function Favorites(){
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    API.get("/favorites").then(res => setFavs(res.data)).catch(()=>setFavs([]));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favs.length === 0 ? <p className="text-gray-500">No favorites saved.</p> : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {favs.map(r => <RecipeCard key={r._id} recipe={r} />)}
        </div>
      )}
    </div>
  );
}
