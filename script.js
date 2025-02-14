const container = document.getElementById('contsiner');
const registerBtn = document.
getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});