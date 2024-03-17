import SearchBar from "@/app/(home)/SearchBar";
import Logo from "./(home)/Logo";

export default function Page() {
  return (
    <main className="p-20 flex flex-col items-center min-h-screen">
      <Logo />
      <SearchBar />
    </main>
  );
}
