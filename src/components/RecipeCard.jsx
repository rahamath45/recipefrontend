import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow p-3 flex flex-col">
      <img src={recipe.image || "https://via.placeholder.com/600x400"} alt={recipe.title} className="rounded-xl object-cover w-full h-48"/>
      <h3 className="mt-2 font-semibold text-lg">{recipe.title}</h3>
      <p className="text-sm text-gray-500">{recipe.category}</p>
      <Link to={`/recipe/${recipe._id}`} className="mt-auto text-indigo-600 hover:underline text-sm">View Details</Link>
    </div>
  );
}
