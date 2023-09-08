export function VideoCard(props : any)
{
    return <div>
        <img src="/thumbnail.jfif" className="rounded-xl" alt="" />
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img src={props.img} className="rounded-full w-12 h-12" alt="" />
            </div>
            <div>
                <div className="col-span-11 pl-5">
                    {props.title}
                </div>
                <div className="col-span-11 pl-5 text-gray-400">
                {props.author}
                </div>
                <div className="col-span-11 pl-5 text-gray-400">
                {props.views}|{props.timestamp}
                </div>
            </div>
        </div>
    </div>
}
