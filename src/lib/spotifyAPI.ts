import axiosInstance from "@/utils/axios";

type Album = {
    items: Array<string>;    
}
export const getArtists = async(query: string, signal: AbortSignal) => {
    const queryResults = await axiosInstance<Album>({
        url: "/search",
        params: {
            q: query,
            type: encodeURI("album,artist"),
            limit: 5,
        },
        signal
    })

    return queryResults;
}

export const getSingleArtist = async(id: string) => {
    const artistResponse = await axiosInstance({
        url:`/artists/${id}`,
    })

    return artistResponse;
}

export const getArtistsAlbums = async(id: string) => {
    const artistResponse = await axiosInstance({
        url: `/artists/${id}/albums`,
        params: {
            include_groups: "album"
        }
    })

    return artistResponse;
}

export const getAlbum = async(id: string) => {
    const albumResponse = await axiosInstance({
        url: `/albums/${id}`
    });

    return albumResponse;
}