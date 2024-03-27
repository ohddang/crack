"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-end w-full h-16 gap-3 bg-black/80 text-white p-5">
      <Link
        href={{
          pathname: "/auth/login",
        }}>
        로그인
      </Link>
    </nav>
  );
}
