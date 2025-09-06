import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import VideoList from "../components/VideoList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <VideoList />
      </div>
    </div>
  );
}
