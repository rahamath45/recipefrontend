import { Link, useNavigate } from "react-router-dom";

export default function Nav(){
  const user = JSON.parse(localStorage.getItem("user") || "null");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">RecipeApp</Link>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="hover:text-indigo-500">Home</Link>
        <Link to="/favorites" className="hover:text-indigo-500">Favorites</Link>
        {user ? (
          <>
            <Link to="/create" className="bg-indigo-600 text-white px-3 py-1 rounded">Create</Link>
            <button onClick={logout} className="text-sm text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-indigo-500">Login</Link>
            <Link to="/register" className="hover:text-indigo-500">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
