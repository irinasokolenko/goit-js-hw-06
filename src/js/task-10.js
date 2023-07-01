createBtnEl.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}