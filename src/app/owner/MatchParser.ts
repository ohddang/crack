export interface MatchOwnerDetail {
  ouid: string;
  nickName: string;
  matchResult: string; // "승", "무", "패"
  matchEndType: number; // 0: 정상종료, 1: 몰수승, 2: 몰수패
  goalTotal: number;
}

export interface MatchDetail {
  date: string;
  matchType: number;
  matchInfo: MatchOwnerDetail[];
}

export interface MatchManerDetail {
  foul: number;
  yellowCards: number;
  redCards: number;
}

const initMatchDetail: MatchDetail = {
  date: "",
  matchType: 0,
  matchInfo: [],
};

export const parseMatchDetail = (matchDetail: any): MatchDetail => {
  const matchInfo = { ...initMatchDetail }; // TODO : 배열 초기화 방법 찾기

  while (matchInfo.matchInfo.length > 0) {
    matchInfo.matchInfo.pop();
  }

  matchInfo.date = matchDetail.matchDate;
  matchInfo.matchType = matchDetail.matchType;

  matchDetail.matchInfo.forEach((matchOwnerDetail: any) => {
    const ownerDetail: MatchOwnerDetail = {
      ouid: matchOwnerDetail.ouid,
      nickName: matchOwnerDetail.nickname,
      matchResult: matchOwnerDetail.matchDetail.matchResult,
      matchEndType: matchOwnerDetail.matchDetail.matchEndType,
      goalTotal: matchOwnerDetail.shoot.goalTotal,
    };
    matchInfo.matchInfo.push(ownerDetail);
  });

  return matchInfo;
};

export const parseMatchManerDetail = (ouid: string, data: any): MatchManerDetail => {
  const matchManner: MatchManerDetail = {
    foul: 0,
    yellowCards: 0,
    redCards: 0,
  };

  if (undefined == data) return matchManner;

  const targetData = data.matchInfo[0].ouid === ouid ? data.matchInfo[0] : data.matchInfo[1];

  console.log(targetData.matchDetail);

  matchManner.foul = targetData.matchDetail.foul;
  matchManner.yellowCards = targetData.matchDetail.yellowCards;
  matchManner.redCards = targetData.matchDetail.redCards;

  return matchManner;
};
