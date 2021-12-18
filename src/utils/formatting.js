import dayjs from 'dayjs';
import { priceToString } from './priceToString';

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
    partyMemberCapacity: partyMemberCapacity + 1,
    rules,
    sharedId,
    sharedPassword,
    startDate: dateFormater(startDate),
  };
};

export const pointFormatter = (points, fontSize = 15) => {
  return (
    <>
      {priceToString(points)}
      <span
        style={{
          marginLeft: '5px',
          fontSize: `${fontSize}px`,
          fontWeight: 700,
        }}
      >
        P
      </span>
    </>
  );
};
