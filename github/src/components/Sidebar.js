import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-48 bg-gray-100 h-screen p-4 hidden md:block">
      <ul className="space-y-4">
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/">🔥 Trending</Link></li>
        <li><Link to="/">📺 Subscriptions</Link></li>
        <li><Link to="/">🎵 Music</Link></li>
      </ul>
    </div>
  );
}
