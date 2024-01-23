"use client";

import {
  requestID,
  requestMaxDivision,
  requestMetaMatchtype,
  requestUserBasic,
  requestUserMatch,
} from "@/api/api";
import { request } from "http";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Match from "./Match";

const Owner: React.FC = () => {
  const searchParams = useSearchParams();
  const [ouid, setOuid] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [level, setLevel] = useState<number>(0);
  const [maxDivision, setMaxDivision] = useState<string>("");
  const [matchids, setMatchids] = useState<string[]>([]);

  const getOwnerId = async (nickname: string) => {
    if (nickname === "") return;

    const { ouid } = await requestID(nickname);
    setOuid(ouid);
  };

  const getOwnerInfo = async (ouid: string) => {
    if (ouid === "") return;

    const { level } = await requestUserBasic(ouid);
    setLevel(level);
  };

  const getMaxDivision = async (ouid: string) => {
    if (ouid === "") return;

    const result = await requestMaxDivision(ouid);
    if (result) {
      let allMaxDivision = "";
      result.forEach((element: any) => {
        const { matchType, division, achievementDate } = element;

        const year = achievementDate.split("-")[0];
        allMaxDivision += `[${year}] ${matchType} - ${division} /  `;
      });
      setMaxDivision(allMaxDivision);
    }
  };

  // https://han41858.tistory.com/54 web storage 사용하기....
  const getUserMatch = async (ouid: string, matchtype: number = 50) => {
    if (ouid === "") return;

    const result: string[] = await requestUserMatch(ouid, matchtype);
    setMatchids(result);
  };

  console.log(matchids.slice(0, 5));

  useEffect(() => {
    const nickname: string = searchParams.get("nickname") || "";
    setNickname(nickname);

    getOwnerId(nickname);
  }, []);

  useEffect(() => {
    getOwnerInfo(ouid);
    getMaxDivision(ouid);
    getUserMatch(ouid);
  }, [ouid]);

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
        {matchids.slice(0, 1).map((matchid: string) => {
          return <Match key={matchid} matchid={matchid} />;
        })}
      </div>
    </>
  );
};

export default Owner;
