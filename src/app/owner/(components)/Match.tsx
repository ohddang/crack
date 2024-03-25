import { requestMatchDetail } from "@/app/api/api";
import { MatchManerDetail, parseMatchManerDetail } from "./MatchParser";

interface MatchProps {
  ouid: string;
  matchids: string[];
}

const getMatchMannerDetail = async (ouid: string, matchid: string) => {
  if (matchid === "") return null;

  const result = await requestMatchDetail(matchid);
  return parseMatchManerDetail(ouid, result);
};

export default async function Match({ ouid, matchids }: MatchProps) {
  if (matchids == undefined || matchids.length === 0) return;

  let foul = 0;
  let yellowCards = 0;
  let redCards = 0;

  for (let i = 0; i < matchids.length; i++) {
    const mannerData = await getMatchMannerDetail(ouid, matchids[i]);
    if (mannerData == null) continue;

    foul += mannerData.foul;
    yellowCards += mannerData.yellowCards;
    redCards += mannerData.redCards;
  }

  foul = foul / (matchids.length * 5);
  yellowCards = yellowCards * 0.2;
  redCards = redCards * 0.5;

  let score = foul + yellowCards + redCards;
  score = score > 1 ? 1 : score;

  const background =
    score > 0.8 ? "bg-red-500" : score > 0.4 ? "bg-orange-500" : score > 0.2 ? "bg-yellow-500" : "bg-green-500";
  score = (1 - score) * 100;

  return (
    <>
      <div className="flex flex-col w-full text-center">
        <strong className="text-sm">매너🌡️</strong>
        {matchids.length > 19 ? (
          <strong className={`w-full p-1 text-xl text-center rounded-md ${background}`}>{`${score}`}</strong>
        ) : (
          <div className="text-sm">-</div>
        )}
      </div>
    </>
  );
}
