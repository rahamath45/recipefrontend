import { useState } from "react";

import { useNavigate } from "react-router-dom";
import API from "../library/api";

export default function CreateRecipe(){
  const [data,setData] = useState({ title:"", category:"", instructions:"", image:"", youtube:"" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/recipes", data)
      nav(`/recipe/${res.data.recipe._id}`);
    } catch (err) {
      alert(err?.response?.data?.message || "Create failed");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Create Recipe</h2>
      <input className="w-full border rounded p-2 mb-3" placeholder="Title" value={data.title} onChange={e=>setData({...data,title:e.target.value})}/>
      <input className="w-full border rounded p-2 mb-3" placeholder="Category" value={data.category} onChange={e=>setData({...data,category:e.target.value})}/>
      <textarea
  className="w-full border rounded p-2 mb-3"
  placeholder="Short description"
  value={data.description || ""}   // make sure it's in state
  onChange={(e) => setData({ ...data, description: e.target.value })}
  rows="3"
/>

      <input className="w-full border rounded p-2 mb-3" placeholder="Image URL" value={data.image} onChange={e=>setData({...data,image:e.target.value})}/>
      <textarea className="w-full border rounded p-2 mb-3" placeholder="Instructions" value={data.instructions} onChange={e=>setData({...data,instructions:e.target.value})} rows="6"/>
      <input className="w-full border rounded p-2 mb-3" placeholder="Youtube link (optional)" value={data.youtube} onChange={e=>setData({...data,youtube:e.target.value})}/>
      <div className="flex justify-end"><button className="bg-indigo-600 text-white px-4 py-2 rounded">Create</button></div>
    </form>
  );
}
