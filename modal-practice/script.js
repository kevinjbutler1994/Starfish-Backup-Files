const showNumber = document.getElementById('showNumber');
const favDialog = document.getElementById('favDialog');
const number = document.getElementById('number');

showNumber.addEventListener('click', () => {
  number.innerText = 'Team Stats Coming Soon!';
  favDialog.showModal();
});
