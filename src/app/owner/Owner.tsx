import Match from "./Match";

interface OwnerProps {
  id: string;
  nickname: string;
  level: number;
  maxDivision: string;
  matchids: string[];
}

const Owner: React.FC<OwnerProps> = ({
  id,
  nickname,
  level,
  maxDivision,
  matchids,
}) => {
  return (
    <>
      <div className="bg-blue-700 w-8/12 min-w-[490px] rounded-lg text-white">
        <div className="flex flex-row p-8">
          <div className="w-4/12">
            <div>ICON</div>
            <div>레벨 {level}</div>
          </div>
          <div className="w-4/12">
            <div>{maxDivision}</div>
            <div>{nickname}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center align-middle bg-blue-700/70  w-8/12 min-w-[490px] text-white pt-5 pb-5 rounded">
        Owner Detail info
      </div>
      <div className="flex flex-col items-center w-8/12 min-w-[490px]">
        {matchids.map((matchid: string) => {
          return <Match key={matchid} matchid={matchid} />;
        })}
      </div>
    </>
  );
};

export default Owner;
