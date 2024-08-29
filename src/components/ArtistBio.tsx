import Image from "next/image"

type ArtistBioProps = {
    name: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    genres: string[];
    followerCount: number;
    popularityScore: number
}

const numberWithCommas = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function ArtistBio({name, imageURL, imageHeight, imageWidth, genres, followerCount, popularityScore}: ArtistBioProps) {
    return (
        <div className="flex flex-wrap gap-16">
            <Image 
                className="h-auto w-auto"
                loader={() => imageURL}
                src={imageURL}
                width={imageWidth}
                height={imageHeight}
                unoptimized={true}
                alt={`Image of the artist ${name}`}
            />
            <div>
                <h1 className="text-4xl font-bold">{name}</h1>
                <h2 className="mt-4"><span className="font-bold text-lg">Artist Genres:</span> {genres.join(", ")}</h2>
                <h3><span className="font-bold text-lg">Follwer Count:</span> {numberWithCommas(followerCount)}</h3>
                <h4><span className="font-bold text-lg">Popularity Score:</span> {popularityScore}</h4>
            </div>
        </div>
    )
}