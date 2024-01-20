"use client";

import {
  requestID,
  requestMaxDivision,
  requestMetaMatchtype,
  requestUserBasic,
} from "@/api/api";
import { request } from "http";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Owner = () => {
  const searchParams = useSearchParams();
  const [ouid, setOuid] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [level, setLevel] = useState<number>(0);
  const [maxDivision, setMaxDivision] = useState<string>("");

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
        allMaxDivision += `[Max_DIVISION] ${matchType} / ${division} / ${achievementDate} `;
      });
      setMaxDivision(allMaxDivision);
    }
  };

  useEffect(() => {
    const nickname: string = searchParams.get("nickname") || "";
    setNickname(nickname);

    getOwnerId(nickname);
  }, []);

  useEffect(() => {
    getOwnerInfo(ouid);
    getMaxDivision(ouid);
  }, [ouid]);

  return (
    <>
      <div>{ouid}</div>
      <div>{nickname}</div>
      <div>{level}</div>
      <div>{maxDivision}</div>
    </>
  );
};

export default Owner;
