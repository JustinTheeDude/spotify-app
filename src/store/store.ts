import { create } from "zustand"

type LikedArtist = {
    id: string;
    name: string;
}

type LIkeStore = {
    likes: LikedArtist[]
    addArtists: (likedArtist: LikedArtist) => void;
}

export const useLikeStore = create<LIkeStore>((set) => ({
    likes: [],
    addArtists: (likedArtist: LikedArtist) => {
        set((state) => {
            const isAlreadyLiked = state.likes.some((like) => like.id === likedArtist.id)
            if (!isAlreadyLiked) {
                return { likes: [...state.likes, likedArtist]}
            } else {
                return { likes: state.likes.filter((like) => like.id !== likedArtist.id)}
            }
        })
    }
}));