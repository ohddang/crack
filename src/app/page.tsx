import SearchBar from "@/components/SearchBar";

export const Page: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5">
      <SearchBar />
    </main>
  );
};

export default Page;
