import { auth, signOut } from "@/auth";

export default async function SettingPage() {
  const session = await auth();

  return (
    <div className="h-screen">
      <h1>{JSON.stringify(session)}</h1>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}>
        <button type="submit">로그아웃</button>
      </form>
    </div>
  );
}
