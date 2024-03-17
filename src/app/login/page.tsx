import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="flex min-h-screen justify-center items-center">
        <div className="flex flex-col w-96">
          <h1 className="text-center text-4xl font-bold mb-10">로그인</h1>
          <input type="email" placeholder="이메일" className="border border-gray-300 p-3 rounded mb-5" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded mb-3">
            <strong>이메일로 시작하기</strong>
          </button>
          <span className="text-sm text-center text-blue-500 mb-10">비회원으로 시작하기</span>
          <div className="flex flex-row items-center h-2 mb-10">
            <div className="w-full h-[1px] bg-gray-300" />
            <span className="w-full text-sm text-center">간편 로그인</span>
            <div className="w-full h-[1px] bg-gray-300 " />
          </div>
          <div className="flex flex-row justify-center items-center gap-10 mb-16">
            <div className="cursor-pointer">
              <Image className="w-12 h-12" src="/images/naver_icon.png" alt="naver" width={96} height={96} />
            </div>
            <div className="cursor-pointer">
              <Image className="w-12 h-12" src="/images/kakao_icon.svg" alt="kakao" width={96} height={96} />
            </div>
            <div className="flex justify-center items-center w-12 h-12 border border-gray-300 rounded cursor-pointer">
              <Image className="w-7 h-7" src="/images/google_icon.svg" alt="google" width={96} height={96} />
            </div>
          </div>
          <span className="text-xs text-center">
            아직 회원이 아니신가요?{" "}
            <Link className="text-blue-500" href={{ pathname: "/signup" }}>
              회원가입
            </Link>
          </span>
        </div>
      </section>
    </>
  );
}
