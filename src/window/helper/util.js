export const getCapitalLetters = (str) => {
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      result += word[0].toUpperCase();
    }
  }
  return result;
};

export const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const isTimeBefore = (time1, time2) => {
  const selectedTime = new Date(`1970-01-01T${time1}`);
  const futureTime = new Date(`1970-01-01T${time2}`);
  return selectedTime < futureTime;
};
export const isTimeBeforeDate = (time, date) => {
  const currentTime = new Date();
  const selectedDateTime = new Date(`${date}T${time}:00`);
  return currentTime > selectedDateTime;
};
