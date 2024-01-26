"use client";

import useStore from "@/hooks/useStore";
import { useRef } from "react";

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setUserInfo } = useStore();
  return (
    <form
      action="/owner"
      className="flex flex-row justify-center flex-nowrap w-9/12 min-w-[400px] h-10 box-borde px-5 gap-3"
      onSubmit={(e) => {
        // setUserInfo({ nickname: inputRef.current?.value || "", ouid: "" });
        window.localStorage.setItem("nickname", inputRef.current?.value || "");
      }}
    >
      <div className="w-10/12 h-full overflow-hidden rounded bg-white px-3">
        <input
          type="text"
          name="nickname"
          placeholder="Search..."
          className="w-full h-full focus:outline-none -internal-autofill-selected:bg-transparent"
          ref={inputRef}
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
