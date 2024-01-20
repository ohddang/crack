import Link from "next/link";

const SearchBar: React.FC<{}> = () => {
  return (
    <form
      action="/owner"
      className="flex flex-row flex-nowrap   w-9/12 h-10 box-borde px-5 gap-3"
    >
      <div className="w-10/12 h-full overflow-hidden rounded bg-white px-3">
        <input
          type="text"
          name="nickname"
          placeholder="Search..."
          className="w-full h-full focus:outline-none -internal-autofill-selected:bg-transparent"
        />
      </div>

      <button
        type="submit"
        className="right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
