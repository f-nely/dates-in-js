const inicio = new Date("2023-11-12T00:00:00Z");
const fim = new Date("2023-10-12T00:00:00Z");
const difTempo = inicio.getTime() - fim.getTime();
const difDias = difTempo / (1000 * 60 * 60 * 24);
console.log(difDias);
