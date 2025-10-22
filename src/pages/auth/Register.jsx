import { useState } from "react";

import { useNavigate } from "react-router-dom";
import API from "../../library/api";

export default function Register(){
  const [data,setData] = useState({ name:"", email:"", password:"" });
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      nav("/");
    } catch (err) {
      alert(err?.response?.data?.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="w-full border rounded p-2 mb-3" placeholder="Full name" value={data.name} onChange={e=>setData({...data,name:e.target.value})}/>
      <input className="w-full border rounded p-2 mb-3" placeholder="Email" value={data.email} onChange={e=>setData({...data,email:e.target.value})}/>
      <input className="w-full border rounded p-2 mb-3" type="password" placeholder="Password" value={data.password} onChange={e=>setData({...data,password:e.target.value})}/>
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}
