import { getAlbum } from "@/lib/spotifyAPI"
import AlbumInfo from "@/components/AlbumInfo";
import BackButton from "@/components/BackButton";
import Search from "@/components/Search";

export default function Albums({ albumDetails }) {
    return (
        <div>
            <div className="p-4 bg-black">
                <Search />
            </div>
            <div className="py-16 max-w-screen-lg m-auto flex flex-col w-4/5 lg:w-full">
                <div className="mb-8">
                    <BackButton />
                </div>
                <AlbumInfo
                    name={albumDetails.name}
                    releaseDate={albumDetails.release_date}
                    albumCover={albumDetails.images[1].url}
                    totalTracks={albumDetails.total_tracks}
                    albumCoverWidth={albumDetails.images[1].width}
                    albumCoverHeight={albumDetails.images[1].height}
                />
                <div>
                    <h3 className="text-3xl text-black font-bold mt-20 mb-4">Tracks</h3>
                    <ul>
                        {albumDetails.tracks.items.map((track) => (
                            <li 
                                key={track.id}
                                className="mb-1"
                            >
                                {track.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const album = await getAlbum(context.params.slug);

    return {
        props: {
            albumDetails: album.data
        }
    }
}