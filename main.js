const open = document.querySelector(".contact-open");
const form = document.querySelector(".contact-form").classList;

open.addEventListener('click', () => form.toggle("show"));