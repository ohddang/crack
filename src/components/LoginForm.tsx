"use client";

import * as z from "zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import Social from "./Social";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    setTransition(() => {
      login(values).then((data) => {
        if (data?.error) setError(data?.error);
        // setSuccess(data.success);
      });
    });
  };

  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col w-96">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
            <h1 className="text-center text-4xl font-bold mb-10">로그인</h1>
            <input
              {...register("email")}
              type="email"
              name="email"
              disabled={isPending}
              placeholder="이메일"
              className="border border-gray-300 p-3 rounded mb-5"
            />
            <input
              {...register("password")}
              type="password"
              name="password"
              disabled={isPending}
              placeholder="비밀번호"
              className="border border-gray-300 p-3 rounded mb-5"
            />
            {error && <span className="text-red-500">{error}</span>}
            {success && <span className="text-green-500">{success}</span>}
            <button
              type="submit"
              disabled={isPending}
              className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded mb-3 w-full">
              <strong>이메일로 시작하기</strong>
            </button>

            <span className="text-sm text-center text-blue-500 mb-10">비회원으로 시작하기</span>
            <div className="flex flex-row items-center h-2 mb-10">
              <div className="w-full h-[1px] bg-gray-300" />
              <span className="w-full text-sm text-center">간편 로그인</span>
              <div className="w-full h-[1px] bg-gray-300 " />
            </div>
            <Social />
            <span className="text-xs text-center">
              아직 회원이 아니신가요?{" "}
              <Link className="text-blue-500" href={{ pathname: "/auth/register" }}>
                회원가입
              </Link>
            </span>
          </form>
        </div>
      </section>
    </>
  );
}
