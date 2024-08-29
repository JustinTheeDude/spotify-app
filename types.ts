export type Artist = {
    id: string;
    name: string;
    followers: number;
    genres: Array<string>;
    images: Image[];
}

export type Album = {
    id: string;
    name: string;
    images: Image[];
    tracks: Track[];
    album_type?: "single" | "album" | "compilation";
}

export type ArtistAlbums = {
    artists: {
        items: Artist[];
    }
    albums: {
        items: Album[];
    }
}

type Track = {
    name: string;
}

type Image = {
    height: number;
    width: number;
    url: string;
};