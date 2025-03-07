const button = document.getElementById(`btn`);
const change_text = document.getElementById(`text`);

btn.addEventListener(`click`, () => {
  console.log(`クリックされました！`);
  change_text.textContent = `ボタンがクリックされました！`;
});