// const specificDate = new Date("2023-04-16T12:10:05.250z");

// const hour = specificDate.getHours();
// const hourWithoutUTC = specificDate.getUTCHours();
// const minutes = specificDate.getMinutes();
// const seconds = specificDate.getSeconds();
// const milliseconds = specificDate.getMilliseconds();

// console.log("Hour with UTC: " + hour);
// console.log("Hour without UTC: " + hour);
// console.log("Minutes: " + minutes);
// console.log("Seconds: " + seconds);
// console.log("Milliseconds: " + milliseconds);

const specificDate = new Date("2023-04-16T05:09:05.250z");
const hour = specificDate.getHours().toString().padStart(2, "0");
const minutes = specificDate.getMinutes().toString().padStart(2, "0");
const seconds = specificDate.getSeconds().toString().padStart(2, "0");

console.log(`${hour}:${minutes}:${seconds}`);
