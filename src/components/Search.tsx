import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export default function Search() {
    const [searchValue, setSearchValue] = useState<string>();

    const handleSearch = async(inputValue: string) => {
        setSearchValue(inputValue);
    }

    return (
        <form>
            <input 
                type="text" 
                onChange={(e) => handleSearch(e.target.value)}
                value={searchValue}
            />
        </form>
    )
}