import Owner from "./Owner";

import {
  requestID,
  requestMaxDivision,
  requestUserBasic,
  requestUserMatch,
} from "@/api/api";

interface PageProps {
  params: {};
  searchParams: { nickname: string };
}

const Page: React.FC<PageProps> = async ({ params, searchParams }) => {
  const nickname = searchParams.nickname;
  if (nickname === null) return;

  const { ouid } = await requestID(nickname);
  if (ouid === "") return;

  console.log(ouid);
  const { level } = await requestUserBasic(ouid);

  let allMaxDivision = "";
  const maxDivision = await requestMaxDivision(ouid);
  if (maxDivision) {
    maxDivision.forEach((element: any) => {
      const { matchType, division, achievementDate } = element;

      const year = achievementDate.split("-")[0];
      allMaxDivision += `[${year}] ${matchType} - ${division} /  `;
    });
  }

  const matchids: string[] = await requestUserMatch(ouid, 50, 0, 3); // TODO : find cache

  return (
    <main className="flex min-h-screen flex-col items-center p-5 gap-5">
      <Owner
        id={ouid}
        nickname={nickname}
        level={level}
        maxDivision={allMaxDivision}
        matchids={matchids}
      />
    </main>
  );
};

export default Page;
