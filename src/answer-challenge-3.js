function main(data) {
  const novaData = new Date(data);
  const dataFormatada = novaData.toLocaleDateString("pt-BR", {
    dateStyle: "full",
  });
  console.log(dataFormatada);
}

main("2023-11-12T10:00:00Z");
