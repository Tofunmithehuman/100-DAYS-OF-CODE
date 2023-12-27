const toggle = document.querySelector('.toggle');
const toggleBtn = document.querySelector('.toggle i');
const dropdown = document.querySelector('.dropdown');
const dropdownUL = document.querySelector('.dropdown ul');

toggle.addEventListener('click', () => {
    dropdown.classList.toggle('open');
    toggleBtn.classList.toggle('fa-times');
    dropdownUL.classList.toggle('open');
})
