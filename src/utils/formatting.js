import dayjs from 'dayjs';

export const dateFormater = date => {
  return dayjs(date).format('YYYY-MM-DD');
};

export const partyCreateFormater = newParty => {
  const {
    startDate,
    endDate,
    grade,
    mustFilled,
    ottId,
    ottName,
    partyMemberCapacity,
    ruleList,
    sharedId,
    sharedPassword,
  } = newParty;

  const rules = ruleList
    .filter(rule => rule.isSelected)
    .map(({ ruleId, ruleName }) => ({
      ruleId,
      ruleName,
    }));

  return {
    endDate: dateFormater(endDate),
    grade,
    mustFilled,
    ottId,
    ottName,
    partyMemberCapacity,
    rules,
    sharedId,
    sharedPassword,
    startDate: dateFormater(startDate),
  };
};
