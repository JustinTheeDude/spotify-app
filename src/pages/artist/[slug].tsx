import ArtistBio from "@/components/ArtistBio"
import ArtistAlbums from "@/components/ArtistAlbums"
import LikeButton from "@/components/LikeButton"
import Search from "@/components/Search";
import BackButton from "@/components/BackButton";
import { getSingleArtist, getArtistsAlbums } from "@/lib/spotifyAPI"
import { Artist, Album } from "../../../types";

type ArtistsProps = {
    artist: Artist;
    albums: Album[];
}

type ArtistContext = {
    params: {
        slug: string;
    }
}

export default function Artists({ artist, albums }: ArtistsProps) {
    return (
        <div>
            <div className="p-4 bg-black">
                <Search />
            </div>
            <div className="p-16 max-w-screen-xl m-auto flex flex-col">
                <div className="flex justify-between mb-8">
                    <BackButton />
                    <LikeButton
                        artistId={artist.id}
                        artistName={artist.name}
                        addText="Add as favorite"
                        removeText="Remove from favorites"
                    />
                </div>
                <div className="flex items-start justify-between">
                    <ArtistBio
                        name={artist.name}
                        imageURL={artist.images[1].url}
                        imageHeight={artist.images[1].height}
                        imageWidth={artist.images[1].width}
                        genres={artist.genres}
                        followerCount={artist.followers.total}
                        popularityScore={artist.popularity}
                    />
                </div>
                <div className="flex flex-wrap gap-4 mt-16 justify-between">
                    <h2 className="text-4xl font-bold w-full">Albums</h2>
                    {albums.map((album) => (
                        <ArtistAlbums
                            key={album.id}
                            albumName={album.name}
                            albumArt={album.images[1].url}
                            imageHeight={album.images[1].height}
                            imageWidth={album.images[1].width}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export  async function getServerSideProps(context: ArtistContext) {
    const artistData = await getSingleArtist(context.params.slug)
    const albumData = await getArtistsAlbums(context.params.slug)

    return {
        props: {
            artist: artistData.data,
            albums: albumData.data.items,
        }
    }
}