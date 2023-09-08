import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        title:"how to get infinite coc",
        image:"thumbnail.jfif",
        author:"harkirat singh",
        views:"100k",
        timestamp:"2 days ago"
    },
    {
        title:"how to get infinite coc",
        image:"thumbnail.jfif",
        author:"harkirat singh",
        views:"100k",
        timestamp:"2 days ago"
    }
]

export function VideoGrid(){
    return (
        <div className="grid-cols-3">
        {VIDEOS.map(video=> <div>
            <VideoCard
             title={video.title}
             image={video.title}
             author={video.title}
             views={video.title}
             timestamp={video.title} />
        </div>)}
        </div>
    )
}