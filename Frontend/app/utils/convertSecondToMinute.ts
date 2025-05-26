export const convertSecondToMinute = (duration: number) => {
  let mins = duration / 60;
  let secs = duration % 60;

  return { mins, secs };
};
