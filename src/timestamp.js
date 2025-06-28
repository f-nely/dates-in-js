// How to Get the Timestamp
// const timestamp1 = Date.now();
// const currentDate = new Date();

// console.log(timestamp1);
// console.log(currentDate.getTime());
// console.log(+new Date());

// const currentDate = Date.now();
// how many seconds have passed
// setTimeout(() => {
//   const milliseconds = Date.now() - currentDate;
//   console.log(milliseconds / 1000);
// }, 5000);

const data1 = new Date("2023-11-15");
const data2 = new Date("2023-12-15");
const timeDifference = data2.getTime() - data1.getTime();
const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
console.log(daysDifference);
