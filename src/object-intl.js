const anotherDate = new Date("2023-04-16T12:00:00.000Z");

const dateTimeFormat = new Intl.DateTimeFormat("pt-br", {
  dateStyle: "full",
  timeStyle: "full",
}).format(anotherDate);

console.log(dateTimeFormat);
