export const power = (base, pow) => {
  if (pow === 0) {
    return 1;
  }

  if (pow === 1) {
    return base;
  }

  return base * power(base, pow - 1);
};
