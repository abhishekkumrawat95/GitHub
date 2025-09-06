import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-900 text-white">
      <Link to="/">
        <h1 className="text-xl font-bold">YouTube Clone</h1>
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="ml-6 p-1 rounded w-1/2 text-black"
      />
    </div>
  );
}
