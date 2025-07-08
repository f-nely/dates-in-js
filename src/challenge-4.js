// Sunday, November 12, 2023 at 10:00:00 AM Coordinated Universal Time
function main(date) {
  const oneDate = new Date(date);
  const dateFormated = new Intl.DateTimeFormat("en-us", {
    dateStyle: "full",
    timeStyle: "full",
  }).format(oneDate);
  console.log(dateFormated);
}

main("2023-11-12T10:00:00Z");
