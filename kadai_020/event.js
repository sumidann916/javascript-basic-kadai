const btn = document.getElementById(`btn`);
const text = document.getElementById(`text`);

btn.addEventListener(`click`, () => {
  console.log(`クリックされました！`);
  text.textContent = `ボタンがクリックされました！`;
});