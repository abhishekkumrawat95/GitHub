import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    <div className="w-72 p-2">
      <Link to={`/video/${video.id}`}>
        <img src={video.thumbnail} alt={video.title} className="rounded-lg" />
        <h2 className="font-semibold mt-2">{video.title}</h2>
      </Link>
      <p className="text-gray-600">{video.channel}</p>
      <p className="text-gray-500 text-sm">
        {video.views} • {video.time}
      </p>
    </div>
  );
}
