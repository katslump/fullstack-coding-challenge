const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

function getDates(interval, days, startDate, endDate) {
  let dates = [];
  let skipCount = 0;
  let pushCount = 0;

  for (let i = startDate; i < endDate; i.setDate(i.getDate() + 1)) {
    if (days.includes(weekdays[i.getDay()])) {
      if (interval === 1) {
        dates.push(formatDate(i));
      } else {
        if (skipCount === interval * days.length) {
          skipCount = 0;
          pushCount = 0;
        }

        if (pushCount < days.length) {
          dates.push(formatDate(i));
          pushCount++;
        } else {
          skipCount++
        }
      }
    }
  }
  return dates;
}

function formatDate(value) {
  return value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getYear();
}

getDates(1, [
  'Monday', 'Tuesday'
], new Date('9/1/2017'), new Date('9/30/2017'));
getDates(2, [
  'Monday', 'Tuesday'
], new Date('9/1/2017'), new Date('9/30/2017'));
getDates(2, [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday'
], new Date('9/1/2017'), new Date('9/30/2017'));
