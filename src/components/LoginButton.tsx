"use client";

import { login } from "@/actions/login";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
  const onClick = () => {
    console.log("login button clicked");
    // login();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
