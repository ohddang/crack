"use client";

import * as z from "zod";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import Social from "./Social";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";

export default function RegisterForm() {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    console.log(values);
  };

  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div {...form} className="flex flex-col gap-5">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <h1 className="text-4xl font-bold">회원가입</h1>
            <input type="text" placeholder="닉네임" className="border-2 border-gray-300 p-2" />
            <input type="text" placeholder="아이디" className="border-2 border-gray-300 p-2" />
            <input type="password" placeholder="비밀번호" className="border-2 border-gray-300 p-2" />
            <input type="password" placeholder="비밀번호 확인" className="border-2 border-gray-300 p-2" />
            <input type="email" placeholder="이메일" className="border-2 border-gray-300 p-2" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">회원가입</button>
          </form>
        </div>
      </section>
    </>
  );
}
