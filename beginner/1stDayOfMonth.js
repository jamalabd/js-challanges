function getTotalSundays(yearInit, yearEnd) {
  // how to convert numbers to dates
  const dates = [];
  yearInit = new Date(yearInit, 1, 1);
  yearEnd = new Date(yearEnd, 1, 1);
  let currentDate = yearInit;
  const addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate());
    return date;
  };
  while (currentDate <= yearEnd) {
    console.log(currentDate);
    dates.push(currentDate);

    currentDate = addDays.call(currentDate, 1);
  }

  let numOffDays = 1;
  dates.forEach(function (date) {
    if (date.getDay() == 0 && date.getDate() == 1) {
      numOffDays++;
    }
    console.log(numOffDays);
  });
  return numOffDays;
}

// Usage

// You will write a function that receive 2 parameters, 2 different years, to indicate a range of time.

// The function will return the number of times a month between those years begin on Sunday, meaning the 1st day of the month is Sunday.

// If there is only one year provided, return the number of times a month begin on Sunday on that year.

// For instance: between 1901 and 2000, a month began on Sunday 171 times.
//
console.log(getTotalSundays(1994, 2000));
