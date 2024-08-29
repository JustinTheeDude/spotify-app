import Link from "next/link";
import LikeButton from "./LikeButton";
import { useLikeStore } from "@/store/store";

export default function FavoritesList() {
    const likes = useLikeStore((state) => state.likes)

    return (
        <div className="mt-8">
            {likes.length ? 
                <ul className="divide-y">
                    {likes.map((favorite) => (
                        <li 
                            key={favorite.id}
                            className="flex justify-between pt-8"
                        >
                            <Link
                                href={`/artist/${favorite.id}`}
                                className="underline text-blue-800 font-semibold text-lg"
                            >
                                {favorite.name}
                            </Link>
                            <LikeButton
                                artistId={favorite.id}
                                artistName={favorite.name}
                                addText="Add to favorites"
                                removeText="Remove"
                            />
                        </li>
                    ))}
                </ul>
                :
                <p>No favorites added yet</p>
            }
        </div>
    )
}