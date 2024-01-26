"use client";

import { requestMatchDetail } from "@/api/api";
import React, { useEffect, useState } from "react";
import { MatchDetail, parseMatchDetail } from "./MatchParser";

interface MatchProps {
  matchid: string;
}

const Match: React.FC<MatchProps> = ({ matchid }) => {
  const [matchDetail, setMatchDetail] = useState<MatchDetail>();

  const getMatchDetail = async (matchid: string) => {
    if (matchid === "") return;

    const result = await requestMatchDetail(matchid);
    const matchDetail: MatchDetail = parseMatchDetail(result);
    setMatchDetail(matchDetail);
  };

  useEffect(() => {
    getMatchDetail(matchid);
  }, [matchid]);

  return (
    <>
      <div className="flex flex-row w-full">
        <div className="flex flex-col justify-center align-middle text-xs w-2/12 text-center">
          <div>{matchDetail?.date.split("T")[0]}</div>
          <div>{matchDetail?.date.split("T")[1]}</div>
        </div>
        <div
          className={`${
            matchDetail?.matchInfo[0].matchResult === "승"
              ? "bg-green-700/80 w-5/12"
              : "bg-red-700/80 w-5/12"
          }`}
        >
          <div className="flex flex-row justify-between w-full">
            <div>{matchDetail?.matchInfo[0].nickName}</div>
            <div>{matchDetail?.matchInfo[0].goalTotal}</div>
          </div>
        </div>
        <div
          className={`${
            matchDetail?.matchInfo[1].matchResult === "승"
              ? "bg-green-700/80 w-5/12"
              : "bg-red-700/80 w-5/12"
          }`}
        >
          <div className="flex flex-row justify-between w-full">
            <div>{matchDetail?.matchInfo[1].goalTotal}</div>
            <div>{matchDetail?.matchInfo[1].nickName}</div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Match;
