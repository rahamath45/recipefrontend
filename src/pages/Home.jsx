import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";
import API from "../library/api";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchList();
    // categories from backend (distinct categories)
    API.get("/recipes").then(res => {
      const cats = [...new Set(res.data.map(r => r.category).filter(Boolean))];
      setCategories(cats);
    }).catch(()=>{});
  }, []);

  useEffect(() => {
    const t = setTimeout(fetchList, 300);
    return () => clearTimeout(t);
  }, [q, category]);

  function fetchList() {
    API.get("/recipes", { params: { q, category } })
      .then(res => setRecipes(res.data))
      .catch(err => console.error(err));
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input className="border rounded-lg p-2 flex-1" placeholder="Search recipes..." value={q} onChange={(e)=>setQ(e.target.value)} />
        <select className="border rounded-lg p-2" value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {recipes.length === 0 ? (
        <p className="text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map(r => <RecipeCard key={r._id} recipe={r} />)}
        </div>
      )}
    </div>
  );
}
