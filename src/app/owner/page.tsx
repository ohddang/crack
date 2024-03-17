import Owner from "./(components)/Owner";

import { requestID, requestUserBasic, requestUserMatch } from "@/api/api";

interface PageProps {
  params: {};
  searchParams: { nickname: string };
}

export default async function Page({ params, searchParams }: PageProps) {
  const nickname = searchParams.nickname;
  if (nickname === null) return;

  const { ouid } = await requestID(nickname);
  if (ouid === "") return;

  const { level } = await requestUserBasic(ouid);
  const matchids: string[] = await requestUserMatch(ouid, 50, 0, 20); // TODO : find cache

  return (
    <main className="flex min-h-screen flex-col items-center p-5 gap-5">
      <Owner ouid={ouid} nickname={nickname} level={level} matchids={matchids} />
    </main>
  );
}
