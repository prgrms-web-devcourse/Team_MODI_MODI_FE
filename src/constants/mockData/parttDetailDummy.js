export const PARTY_DETAIL_DUMMY = {
  partyId: 1,
  ottId: 1,
  ottName: '넷플릭스',
  grade: '프리미엄',
  monthlyFee: 2500,
  totalFee: 25000,
  monthlyReimbursement: 30000,
  maxMemberCapacity: 4,
  currentMemberCapacity: 2,
  startDate: '2021-12-08',
  startsIn: 7,
  period: 12,
  endDate: '2021-12-09',
  mustFilled: true,
  status: 'RECRUITING',
  members: [
    {
      userId: 1,
      username: '행복한 코비',
      isLeader: true,
    },
    {
      userId: 2,
      username: '흥겨운 젠',
      isLeader: false,
    },
  ],
  rules: [
    {
      ruleId: 1,
      ruleName: '즐거운 낸시',
    },
    {
      ruleId: 2,
      ruleName: '1인 1기기',
    },
    {
      ruleId: 3,
      ruleName: '개인사정 환불 불가',
    },
    {
      ruleId: 4,
      ruleName: '계정 양도 불가',
    },
    {
      ruleId: 5,
      ruleName: '닉네임과 프로필네임 일치',
    },
    {
      ruleId: 6,
      ruleName: '19세 이상',
    },
    {
      ruleId: 7,
      ruleName: '설정 변경 불가',
    },
  ],
};
