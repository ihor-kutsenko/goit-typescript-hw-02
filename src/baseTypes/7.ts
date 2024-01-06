/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// example 1
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Weekday): boolean {
  switch (day) {
    case Weekday.Saturday:
    case Weekday.Sunday:
      return true;
    default:
      return false;
  }
}

const currentDay: Weekday = Weekday.Saturday;
const isCurrentDayWeekend: boolean = isWeekend(currentDay);
console.log(`Is ${Weekday[currentDay]} a weekend day? ${isCurrentDayWeekend}`);

// -----------------------------------------------------------------------------------------------------
// example 2

enum DayWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend2(day: DayWeek): boolean {
  return day === DayWeek.Saturday || day === DayWeek.Sunday;
}

isWeekend2(DayWeek.Friday);
isWeekend2(DayWeek.Sunday);
