// const tomorrow = new Date("2023-11-12T00:00:00Z");
// tomorrow.setDate(tomorrow.getDate() + 1);
// console.log(tomorrow);

function main(data) {
  const novaData = new Date(data);
  novaData.setDate(novaData.getDate() + 1);
  console.log(novaData);
}

main("2023-11-12T00:00:00Z");
