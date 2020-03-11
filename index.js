const nome = "carlos";
const peso = 43;
const altura = 1.57;
const imc = peso / (altura * altura)

if ((imc >= 30) && !(imc <= 29.9)){
  console.log("carlos você está acima do peso")
}else {
  console.log("Carlos você não está acima do peso")
}