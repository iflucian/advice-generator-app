const advID = document.querySelector(".adv-id"),
  advice = document.querySelector(".advice"),
  dice = document.querySelector(".dice"),
  urlAPI = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const response = await fetch(urlAPI);
  const data = await response.json();
  advID.innerHTML = `advice #${data.slip.id}`;
  advice.innerHTML = `"${data.slip.advice}"`;
};

dice.addEventListener("click", (e) => {
  getAdvice();
});
