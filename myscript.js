const button = document.getElementById('button');

button.addEventListener('click', function handleClick() {
    button.textContent = 'Claimed';
});

button.addEventListener('click', function onClick() {
  button.style.backgroundColor = '#be8469';
    button.style.color = 'black';
});
