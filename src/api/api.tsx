import { request } from "http";

const BASE_URL = "https://open.api.nexon.com";
const META_DATA = "/static/fconline/meta";
const API_VERSION = "/fconline/v1";

const REQUEST_ID = "/id";
const REQUEST_USER_BASIC = "/user/basic";
const REQUEST_MAXDIVISION = "/user/maxdivision";
const REQUEST_USER_MATCH = "/user/match";

export const requestID = async (nickname: string) => {
  if (nickname === "") throw new Error("nickname is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_ID}?nickname=${nickname}`,
    {
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
  limit: number = 100
) => {
  if (ouid === "") throw new Error("ouid is empty");

  const res = await fetch(
    `${BASE_URL}${API_VERSION}${REQUEST_USER_MATCH}?ouid=${ouid}&matchtype=${matchtype}&offset=${offset}&limit=${limit}`,
    {
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

export const requestMetaMatchtype = async () => {
  const res = await fetch(`${BASE_URL}${META_DATA}/matchtype.json`);
  if (!res.ok) {
    console.log(res);
    throw new Error(res.statusText);
  }
  const result = await res.json();
  console.log(result);
  return result;
};
