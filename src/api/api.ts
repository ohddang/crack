import { request } from "http";
import React from "react";

const BASE_URL = "https://open.api.nexon.com";
const META_DATA = "/static/fconline/meta";
const API_VERSION = "/fconline/v1";

const REQUEST_ID = "/id";
const REQUEST_USER_BASIC = "/user/basic";
const REQUEST_MAXDIVISION = "/user/maxdivision";
const REQUEST_USER_MATCH = "/user/match";

const REQUEST_MATCHDETAIL = "/match-detail";

// owner
export const requestID = async (nickname: string) => {
  if (nickname === "") throw new Error("nickname is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_ID}?nickname=${nickname}`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
      headers: {
        "x-nxopen-api-key": `${process.env.NEXT_PUBLIC_NEXON_DEV_API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();
  return result;
};

export const requestUserBasic = async (ouid: string) => {
  if (ouid === "") throw new Error("ouid is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_USER_BASIC}?ouid=${ouid}`,
    {
      cache: "force-cache",
      headers: {
        "x-nxopen-api-key": `${process.env.NEXT_PUBLIC_NEXON_DEV_API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();
  return result;
};

export const requestMaxDivision = async (ouid: string) => {
  if (ouid === "") throw new Error("ouid is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_MAXDIVISION}?ouid=${ouid}`,
    {
      cache: "force-cache",
      headers: {
        "x-nxopen-api-key": `${process.env.NEXT_PUBLIC_NEXON_DEV_API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();
  return result;
};

export const requestUserMatch = async (
  ouid: string,
  matchtype: number = 50,
  offset: number = 0,
  limit: number = 20 // TODO : change match count
) => {
  if (ouid === "") throw new Error("ouid is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_USER_MATCH}?ouid=${ouid}&matchtype=${matchtype}&offset=${offset}&limit=${limit}`,
    {
      cache: "force-cache",
      headers: {
        "x-nxopen-api-key": `${process.env.NEXT_PUBLIC_NEXON_DEV_API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();

  return result;
};

// match
export const requestMatchDetail = async (matchid: string) => {
  if (matchid === "") throw new Error("matchid is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_MATCHDETAIL}?matchid=${matchid}`,
    {
      cache: "force-cache",
      headers: {
        "x-nxopen-api-key": `${process.env.NEXT_PUBLIC_NEXON_DEV_API_KEY}`,
      },
    }
  );
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();

  return result;
};

// meta
export const requestMetaMatchtype = async () => {
  const res = await fetch(`${BASE_URL}${META_DATA}/matchtype.json`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();
  return result;
};
