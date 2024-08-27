import axiosInstance from "@/utils/axios";

export const getArtists = async(query: string) => {
    const queryResults = await axiosInstance({
        url: "/search",
        params: {
            q: query,
            type: "album"
        },
    })

    return queryResults
}