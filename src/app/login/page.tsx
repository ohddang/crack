"use client";

import { useState } from "react";

export default function Page() {
  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold">로그인</h1>
          <input type="text" placeholder="아이디" className="border-2 border-gray-300 p-2" />
          <input type="password" placeholder="비밀번호" className="border-2 border-gray-300 p-2" />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">로그인</button>
      </section>
    </>
  );
}
