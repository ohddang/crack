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
