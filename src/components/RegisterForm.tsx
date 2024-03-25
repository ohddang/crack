"use client";

import * as z from "zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import { registerAction } from "@/actions/register";

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    setTransition(() => {
      registerAction(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">회원가입</h1>
            <input
              {...register("name")}
              type="text"
              name="name"
              placeholder="닉네임"
              className="border-2 border-gray-300 p-2"
            />
            <input
              {...register("email")}
              type="email"
              name="email"
              placeholder="이메일"
              className="border-2 border-gray-300 p-2"
            />
            <input
              {...register("password")}
              type="password"
              name="password"
              placeholder="비밀번호"
              className="border-2 border-gray-300 p-2"
            />
            {error && <span className="text-red-500">{error}</span>}
            {success && <span className="text-green-500">{success}</span>}
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              회원가입
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
