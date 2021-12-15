export const calculateNextDate = () => {
  const nextDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 1,
  );

  return nextDate;
};

export const calculateEndDate = (startDate, period) => {
  const endDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + period,
    startDate.getDate() - 1,
  );

  return endDate;
};
