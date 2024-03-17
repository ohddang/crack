"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  if (pathname === "/login") {
    return null;
  }

  return (
    <nav className="flex flex-row justify-end w-full h-16 bg-black/80 text-white p-5">
      <Link
        href={{
          pathname: "/login",
        }}>
        로그인
      </Link>
    </nav>
  );
}
