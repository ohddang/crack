import SearchBar from "@/components/SearchBar";

export const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar />
      <h1 className="text-4xl font-bold text-blue-700 opacity-100">Crack</h1>
      <h1 className="text-3xl font-bold text-blue-700/80 opacity-100">Crack</h1>
      <h1 className="text-2xl font-bold text-blue-700/60 opacity-100">Crack</h1>
      <h1 className="text-1xl font-bold text-blue-700/40 opacity-100">Crack</h1>
      <h1 className="text-xl font-bold text-blue-700/20 opacity-100">Crack</h1>
    </main>
  );
};

export default Home;
