import dayjs from 'dayjs';

export const dateFormater = date => {
  return dayjs(date).format('YYYY-MM-DD');
};
