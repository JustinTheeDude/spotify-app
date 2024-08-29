import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getArtists} from "@/lib/spotifyAPI";
import { useDebounce } from "@uidotdev/usehooks";
import Results from "@/components/Results";

export default function Search() {
    const [searchValue, setSearchValue] = useState<string>("");
    const debouncedSearch = useDebounce<string>(searchValue, 500)
    const { data, status } = useQuery({
        queryKey: ["artists", debouncedSearch],
        queryFn: async ({ signal }) => {
            const artistData = await getArtists(debouncedSearch, signal)
            return artistData.data
        },
        enabled: !!debouncedSearch,
    });

    return (
        <div className="w-full relative max-w-screen-lg m-auto text-left">
            <form
                onSubmit={(e) => e.preventDefault()}
                aria-label="Form to search by album or artist"
                className="w-full flex justify-center"
            >
                <label
                    htmlFor="search-input"
                    className="sr-only"
                >
                    Search by artist or album
                </label>
                <input
                    id="search-input"
                    data-testid="search"
                    type="search"
                    className="p-4 rounded-md w-full border-black border"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search by artist or album"
                />
            </form>
            {searchValue.length ? 
                <Results 
                    data-testid="results"
                    artistData={data.artists} 
                    albumData={data.albums}
                    status={status}
                /> 
            : null }
        </div>
    )
}