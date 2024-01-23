import SearchBar from "@/components/SearchBar";
import Logo from "./Logo";

const Page: React.FC = () => {
  return (
    <main className="p-20 flex flex-col items-center min-h-screen">
      <Logo />
      <SearchBar />
    </main>
  );
};

export default Page;
