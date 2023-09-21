const items = document.querySelectorAll(".degree-line__item"),
  line = document.querySelector(".degree-line"),
  mark = document.querySelector(".degree-line__mark");
let firstPosition = items[3].offsetLeft + (items[3].offsetWidth) / 2;
mark.style.left = firstPosition + "px";
items.forEach((el) => {
  el.addEventListener("click", function () {
    items.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    firstPosition = this.offsetLeft + this.offsetWidth / 2;
    mark.style.left = firstPosition + "px";
  });
});

const range = document.querySelector(".calc__range"),
  input = document.querySelector(".calc__input");
range.addEventListener("input", function () {
  input.value = this.value;
  allCalc();
});
input.addEventListener("change", function () {
  range.value = this.value;
  allCalc();
});

const radio = document.querySelectorAll(".calc__list-radio"),
  summaryOut = document.querySelector('.calc__summary-span');
let ratesRadio = Array.from(radio).filter(
  (el) => el.getAttribute("name") == "rates"
);
let renovationRadio = Array.from(radio).filter(
  (el) => el.getAttribute("name") == "renovation"
);
ratesRadio.forEach((el) => {
  el.addEventListener("click", () => {
    allCalc();
  });
});
renovationRadio.forEach((el) => {
  el.addEventListener("click", () => {
    allCalc();
  });
});

const calc = {
  renovation: {
    new: 1,
    second: 0.7,
    private: 0.5,
  },
  rates: {
    cosmetic: 2500,
    full: 3500,
    capital: 4500,
    part: 1500,
  },
};

function allCalc() {
  let rates = ratesRadio.filter((el) => el.checked)[0].getAttribute("id");
  let renovation = renovationRadio.filter((el) => el.checked)[0].getAttribute("id");
  let m2 = input.value
  let summary = Math.round(calc.rates[rates] * m2 / calc.renovation[renovation])
  summaryOut.innerHTML = summary + ' руб.'
}
