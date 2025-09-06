import VideoCard from "./VideoCard";
import videos from "../data/videos";

export default function VideoList() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
