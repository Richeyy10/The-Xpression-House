interface YoutubeProps {
    videoId: string;
    title: string;
}

export default function Youtube({ videoId, title }: YoutubeProps) {
    return (
        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-xl">
            <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}