"use client";

import Image from "next/image";

export default function Social() {
  return (
    <div className="flex flex-row justify-center items-center gap-10 mb-16">
      <button className="cursor-pointer">
        <Image className="w-12 h-12" src="/images/naver_icon.png" alt="naver" width={96} height={96} />
      </button>
      <button className="cursor-pointer">
        <Image className="w-12 h-12" src="/images/kakao_icon.svg" alt="kakao" width={96} height={96} />
      </button>
      <button className="flex justify-center items-center w-12 h-12 border border-gray-300 rounded cursor-pointer">
        <Image className="w-7 h-7" src="/images/google_icon.svg" alt="google" width={96} height={96} />
      </button>
    </div>
  );
}
