import Search from "@/components/Search";
import Image from "next/image";
import FavoritesList from "@/components/FavoritesList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full">
        <Image
          className="w-full h-[300px] md:h-[800px] object-cover"
          src="/dj-bg.jpg"
          alt="photo of a turntable set"
          sizes="100vw"
          width={0}
          height={0}
        />
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 lg:w-full">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-10 text-white">Music Search</h1>
          <Search />
        </div>
      </div>
      <div className="border p-8 w-5/6 lg:w-full max-w-screen-lg m-auto mt-20">
        <h2 className="text-2xl lg:text-4xl font-bold">My Favorite Artists</h2>
        <FavoritesList />
      </div>
    </div>
  );
}