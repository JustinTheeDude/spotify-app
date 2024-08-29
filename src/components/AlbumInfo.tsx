import Image from "next/image"

type AlbumInfoProps = {
    name: string;
    releaseDate: string;
    totalTracks: number;
    albumCover: string;
    albumCoverWidth: number
    albumCoverHeight: number
}

export default function AlbumInfo({ albumCover, releaseDate, totalTracks, name, albumCoverWidth, albumCoverHeight }: AlbumInfoProps) {
    return (
        <div className="flex flex-wrap gap-16">
            <Image 
                className="h-auto w-auto"
                loader={() => albumCover}
                width={albumCoverWidth}
                height={albumCoverHeight}
                src={albumCover}
                unoptimized={true}
                alt={`Image of the ${name} album cover`}
            />
            <div>
                <h1 
                    className="text-4xl font-bold mb-2"
                    data-testid="album-name"
                >
                    {name}
                </h1>
                <h2
                    className="mb-2"
                    data-testid="release-date"
                >
                    <span className="font-bold text-lg">Release Date:</span> {releaseDate}
                </h2>
                <h3 data-testid="total-tracks"><span className="font-bold text-lg">Total Tracks:</span> {totalTracks}</h3>
            </div>
        </div>
    )
}