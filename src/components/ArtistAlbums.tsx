import Image from "next/image"
type ArtisttAlbumsProps = {
    albumArt: string;
    albumName: string;
    imageWidth: number;
    imageHeight: number
}

export default function ArtisttAlbums({ albumArt, albumName, imageHeight, imageWidth }: ArtisttAlbumsProps) {
    return (
        <article className="w-full md:w-1/3 lg:w-1/5">
            <Image
                loader={() => albumArt}
                src={albumArt}
                alt={`${albumName} album art`}
                width={imageWidth}
                unoptimized={true}
                height={imageHeight}
            />
            <h4 className="text-xl font-semibold block">{albumName}</h4>
        </article>
    )
}