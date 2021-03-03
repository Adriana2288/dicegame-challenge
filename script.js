const button = document.querySelector("#button")
const alert = document.querySelector("#alert")
const score = document.querySelector("#score")
const image = document.querySelector("#pic")
let total = 0;

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * 6) + 1
  total += num

  if (total >= 20) {
    button.textContent = "Play again"
    alert.textContent = "You won!"
    score.textContent = total
    image.src = "./img/dice.jpg"
    total = 0
  } else {
    if (num == 1) {
      button.textContent = "Play again"
      alert.textContent = "You lost!"
      score.textContent = total
      image.src = "./img/dice1.jpg"
      total = 0
    } else if (num == 2) {
      button.textContent = "Roll"
      alert.textContent = ""
      score.textContent = total;
      image.src = "./img/dice2.jpg"
    } else if (num == 3) {
      button.textContent = "Roll"
      alert.textContent = ""
      score.textContent = total;
      image.src = "./img/dice3.jpg"
    } else if (num == 4) {
      button.textContent = "Roll"
      alert.textContent = ""
      score.textContent = total;
      image.src = "./img/dice4.jpg"
    } else if (num == 5) {
      button.textContent = "Roll"
      alert.textContent = ""
      score.textContent = total
      image.src = "./img/dice5.jpg"
    } else if (num == 6) {
      button.textContent = "Roll"
      alert.textContent = ""
      score.textContent = total
      image.src = "./img/dice6.jpg"
    }
  }
})

