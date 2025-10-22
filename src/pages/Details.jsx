import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../library/api";


export default function Details(){
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    API.get(`/recipes/${id}`).then(res => setRecipe(res.data)).catch(console.error);
    API.get("/favorites").then(res => {
      setIsFav(res.data.some(r => r._id === id));
    }).catch(()=>setIsFav(false)); // ignore if not logged
  }, [id]);

  const toggleFav = async () => {
    try {
      const res = await API.post(`/favorites/toggle/${id}`);
      setIsFav(res.data.some(r=>r._id===id));
    } catch (err) {
      alert("Login required to favorite");
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
      <img src={recipe.image || "https://via.placeholder.com/800x400"} alt={recipe.title} className="rounded-2xl w-full object-cover mb-4"/>
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">{recipe.title}</h1>
        <button onClick={toggleFav} className={`px-3 py-1 rounded-full text-sm ${isFav ? "bg-red-500 text-white" : "bg-gray-200"}`}>
          {isFav ? "★ Favorite" : "☆ Add Favorite"}
        </button>
      </div>
      <p className="text-gray-600 mb-4">Category: {recipe.category}</p>
      <h2 className="font-semibold mb-2">Instructions:</h2>
      <p className="mb-4 whitespace-pre-line">{recipe.instructions}</p>
      {recipe.youtube && (
        <a href={recipe.youtube} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline">▶ Watch Video</a>
      )}
    </div>
  );
}
