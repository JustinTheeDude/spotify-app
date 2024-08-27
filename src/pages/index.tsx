import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center p-40">
      <h1 className="text-6xl text-white font-bold">Music Search</h1>
      <Search />
    </div>
  );
}