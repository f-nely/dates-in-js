// const oneDate = new Date("2025-03-20T12:12:10.250z");
// oneDate.setFullYear(2022);
// oneDate.setMonth(0);
// oneDate.setDate(24);

// oneDate.setHours(20, 21, 10);
// oneDate.setMinutes(40);
// oneDate.setSeconds(15);
// oneDate.setMilliseconds(120);
// console.log(oneDate);

const oneDate = new Date("2023-04-16T12:12:10.250z");
setTimeout(() => {
  oneDate.setDate(oneDate.getDate() - 1);
  console.log(oneDate);
});
