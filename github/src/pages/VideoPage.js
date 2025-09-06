import { useParams, Link } from "react-router-dom";
import videos from "../data/videos";
import Navbar from "../components/Navbar";

export default function VideoPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) return <h1>Video not found</h1>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
          className="w-full rounded-lg"
        />
        <h2 className="text-2xl font-bold mt-4">{video.title}</h2>
        <p className="text-gray-600">{video.channel}</p>
        <p className="text-gray-500">{video.views} • {video.time}</p>
        <p className="mt-3">{video.description}</p>
        <Link to="/" className="text-blue-600 mt-4 inline-block">⬅ Back to Home</Link>
      </div>
    </div>
  );
}
