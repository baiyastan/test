// for
// console.log(5 % 2);

let div = document.querySelector(".table");

for (let i = 1; i < 5; i++) {
  for (let j = 1; j < 10; j++) {
    div.innerHTML += `${i} * ${j} = ${i * j} <br>`;
  }
  div.innerHTML += "<hr> ";
}

for (let i = 0; i < 4; i++) {
  console.log(i);
}
