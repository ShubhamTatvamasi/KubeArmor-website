// eslint-disable-next-line import/prefer-default-export
export const kFormatter = num => {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}k`
    : Math.sign(num) * Math.abs(num);
};
