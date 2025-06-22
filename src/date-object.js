const currentDate = new Date();
const dateFromString = new Date("May 6, 2024 07:31:09.001z");
const dateFromString2 = new Date("2023-09-27T06:58:04");
const specificDate = Date.UTC(2021, 1, 15, 6, 10, 59);
console.log(currentDate);
console.log(dateFromString);
console.log(dateFromString2);
console.log(new Date(specificDate));
