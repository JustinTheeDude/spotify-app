export type Artist = {
    id: string;
    name: string;
    followers: {
        total: number
    };
    genres: Array<string>;
    images: Image[];
    popularity: number;
}

export type Album = {
    id: string;
    name: string;
    images: Image[];
    tracks: {
        items: Track[];
    };
    album_type?: "single" | "album" | "compilation";
    release_date: string;
    total_tracks: number;
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
    id: string;
    name: string;
}

type Image = {
    height: number;
    width: number;
    url: string;
};