"use client";

import { useRef } from "react";

const SearchBar: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action="/owner"
      className="flex flex-row justify-center flex-nowrap w-9/12 min-w-[400px] h-10 box-borde px-5 gap-3"
      onSubmit={(e) => {
        window.localStorage.setItem("nickname", inputRef.current?.value || "");
      }}>
      <div className="w-10/12 h-full overflow-hidden rounded bg-white px-3">
        <input
          type="text"
          name="nickname"
          placeholder="구단주명을 입력해주세요"
          className="w-full h-full focus:outline-none -internal-autofill-selected:bg-transparent"
          ref={inputRef}
        />
      </div>

      <button
        type="submit"
        className="right-0 h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex-">
        검색
      </button>
    </form>
  );
};

export default SearchBar;
