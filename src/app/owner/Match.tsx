"use client";

import { requestMatchDetail } from "@/api/api";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface MatchProps {
  matchid: string;
}

const Match: React.FC<MatchProps> = ({ matchid }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [matchDetail, setMatchDetail] = useState<string>();

  const isShowDetail = searchParams.get("matchid") === matchid;

  const getMatchDetail = async (matchid: string) => {
    if (matchid === "") return;

    const result = await requestMatchDetail(matchid);
    setMatchDetail(JSON.stringify(result));
  };

  const onClick = () => {
    console.log(matchid);
    router.push(
      `/owner?nickname=${searchParams.get("nickname")}&matchid=${matchid}`
    );
  };

  useEffect(() => {
    getMatchDetail(matchid);
  }, [matchid]);

  return (
    <>
      <button type="button" className="text-red-700" onClick={onClick}>
        {matchid}
      </button>
      {isShowDetail && <div className="text-xs">{matchDetail}</div>}
      <br />
    </>
  );
};

export default Match;
