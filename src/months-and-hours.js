const oneDate = new Date("2023-10-01T12:00:05z");
// Day of the month is 01 until 30
const dayOfTheMonth = oneDate.getDate();
// Day of the week: Monday starts with the value zero
const dayOfTheWeek = oneDate.getDay();
// Month of the year: January starts with the value zero
const month = oneDate.getMonth();
// It returns the year
const year = oneDate.getFullYear();
console.log("Day of the month: " + dayOfTheMonth);
console.log("Day of the week: " + dayOfTheWeek);
console.log("Month of the year: " + month);
console.log("The year is: " + year);

const anotherDay = new Date("2023-04-16T09:20:01z");
const dayOfTheMonth2 = anotherDay.getDate().toString().padStart(2, "0");
const anotherMonth = (anotherDay.getMonth() + 1).toString().padStart(2, "0");
const anotherYear = anotherDay.getFullYear();
console.log(`${dayOfTheMonth2}/${anotherMonth}/${anotherYear}`);
