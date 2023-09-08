import { VideoGrid } from "@/components/VideoGrid"
import {VideoCard} from "../components/VideoCard"
export default function Home() {
  return (
    <div>
      <VideoCard title="how to get infinite COC money"
      img={"thumbnail.jfif"}
      author={"harkirat singh"}
      views={"100k"}
      timestamp={"2 days ago"}
      />
      <VideoGrid />
    </div>
    
  )
}
