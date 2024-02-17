import Match from "./Match";

interface OwnerProps {
  ouid: string;
  nickname: string;
  level: number;
  matchids: string[];
}

const Owner: React.FC<OwnerProps> = ({ ouid, nickname, level, matchids }) => {
  return (
    <>
      <div className="w-8/12 min-w-[490px] rounded-lg text-color bg-gradient-to-r from-slate-400 to-transparent">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row p-8 flex-start gap-2">
            <div>
              <strong className="text-2xl">{nickname}</strong>
            </div>
            <div>
              <div className="text-sm">Lv {level}</div>
            </div>
          </div>
          <div>
            <Match ouid={ouid} matchids={matchids} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Owner;
