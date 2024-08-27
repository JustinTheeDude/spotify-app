import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getArtists} from "@/lib/spotifyAPI";

export default function Search() {
    const [searchValue, setSearchValue] = useState<string>();
    const query = useQuery({
        queryKey: ['artists'],
        queryFn
    })

    const handleSearch = async(inputValue: string) => {
        debounce(async() => {
            await getArtists(inputValue)
        }, 500)
        setSearchValue(inputValue);
    }

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    )
}