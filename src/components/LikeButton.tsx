import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import { useLikeStore } from "@/store/store";

type LikeButtonProps = {
    artistId: string;
    artistName: string;
    addText: string;
    removeText: string;
}

export default function LikeButton({ artistId, artistName, addText, removeText }: LikeButtonProps) {
    const likes = useLikeStore((state) => state.likes)
    const addArtists = useLikeStore((state) => state.addArtists)

    const handleLike = () => {
        addArtists({ id: artistId, name: artistName })
    }

    const isLiked = likes && likes.some((like) => like.id === artistId)

    return (
        <button 
            className={`flex items-center hover:text-red-600 text-xl ${isLiked ? "text-red-600" : ''}`}
            data-testid="like"
            onClick={handleLike}
        >
            {isLiked ? <IoIosHeart />  : <CiHeart />}
            <span>{isLiked ? removeText : addText}</span>
        </button>
    )
}