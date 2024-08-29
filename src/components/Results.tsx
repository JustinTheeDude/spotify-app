import ResultLink from "./ResultLink";
import ResultLoaders from "./ResultLoaders";
import { uniqBy } from "lodash-es"

type ResultsProps = {
    artistData: Artists;
    albumData: Albums;
    status: "pending" | "success" | "error";
}

type Items = {
    id: string;
    name: string;
    album_type?: "single" | "album" | "compilation";
}

type Artists = {
    items: Items[];
}

type Albums = {
    items: Items[];
}

export default function Results({ artistData, albumData, status }: ResultsProps) {
    const artists = artistData?.items?.map(({id, name}) => ({ id, name }))
    const uniqueArtists = uniqBy(artists, "name")
    const albums = albumData?.items?.filter((item) => item.album_type === "album").map(({ id, name }) => ({ id, name }))

    return (
        <div className="border border-black rounded-md p-4 absolute top-full w-full m-auto h-52 overflow-scroll bg-white">
            <ul className="mb-4">
                <li className="text-gray-400 font-semibold">Artists</li>
                {status === "success" && artists.length === 0 ? <p>No artists can be found</p> : null}
                {status === "pending" && <ResultLoaders />}
                {status === "success" && uniqueArtists?.map((artist) => (
                    <ResultLink 
                        key={artist.id}
                        linkType="artist"
                        slug={artist.id}
                        id={artist.id}
                        linkName={artist.name}
                    />
                ))}
            </ul>
            <ul>
                <li className="text-gray-400 font-semibold">Albums</li>
                {status === "success" && albums.length === 0 ? <p>No albums can be found</p> : null}
                {status === "pending" && <ResultLoaders />}
                {status === "success" && albums?.map((album) => (
                    <ResultLink 
                        key={album.id}
                        linkType="album"
                        slug={album.id}
                        id={album.id}
                        linkName={album.name}
                    />
                ))}
            </ul>
        </div>
    )
}