const timeConversion = (s) => {
  const isPM = s.includes('PM');
  const endPart = s.slice(2, 8);
  let hours = parseInt(s.slice(0, 2));

  if (isPM && hours < 12) {
    hours = hours + 12;
  } else if (isPM && hours === 12) {
    hours = hours;
  } else if (hours >= 12) {
    hours = hours - 12;
  }

  return hours.toString().padStart(2, '0') + endPart;
};

const timeConversionAlt = (s) => {
  let isAM = s.includes('AM');
  let [hh, mm, ss] = s.replace(/[A-Z]/gim, '').split(':');
  hh = hh === '12' ? '00' : hh;
  if (isAM) return `${hh}:${mm}:${ss}`;
  hh = 12 + Number(hh);
  return `${hh}:${mm}:${ss}`;
};

timeConversion('07:05:45PM'); // "19:05:45"
timeConversion('07:05:45AM'); // "07:05:45"
timeConversion('12:40:22AM'); // "00:40:22"
timeConversion('12:45:54PM'); // "12:45:54"
