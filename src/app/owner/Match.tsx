import { requestMatchDetail } from "@/api/api";
import { MatchManerDetail, parseMatchManerDetail } from "./MatchParser";

interface MatchProps {
  ouid: string;
  matchids: string[];
}

const getMatchMannerDetail = async (ouid: string, matchid: string) => {
  if (matchid === "") return {} as MatchManerDetail;

  const result = await requestMatchDetail(matchid);
  return parseMatchManerDetail(ouid, result);
};

const Match: React.FC<MatchProps> = async ({ ouid, matchids }) => {
  if (matchids == undefined || matchids.length === 0) return;

  let foul = 0;
  let yellowCards = 0;
  let redCards = 0;

  for (let i = 0; i < matchids.length; i++) {
    const mannerData = await getMatchMannerDetail(ouid, matchids[i]);
    foul += mannerData.foul;
    yellowCards += mannerData.yellowCards;
    redCards += mannerData.redCards;
  }

  foul = foul / (matchids.length * 5);
  yellowCards = yellowCards * 0.2;
  redCards = redCards * 0.5;

  const score = foul + yellowCards + redCards;
  const background =
    score < 0.1 ? "bg-green-500" : score < 0.3 ? "bg-yellow-500" : score < 0.7 ? "bg-orange-500" : "bg-red-500";

  return (
    <>
      <div className="flex flex-row w-full">
        <div className={`align-middle ${background}`}>{`${score} `}</div>
        <div> 💢</div>
      </div>
    </>
  );
};

export default Match;
