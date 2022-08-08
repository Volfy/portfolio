const btn = document.querySelector(".fzbz button");
const div = document.querySelector(".fzbz div");

let x = 0;
let w = window.innerWidth;

btn.addEventListener('click', () => {
    div.classList.remove("fadeon", "fadeon-fz", "fadeon-fz-bz", "fadeon-bz");
    x += 1;
    let text = "";
    let className = "fadeon";
    if (x % 3 === 0) {
        text += "Fizz";
        className += "-fz";
    }
    if (x % 5 === 0) {
        text += "Buzz";
        className += "-bz";
    }
    
    div.textContent = text === "" ? x : text;
    setTimeout(() => div.classList.add(className), 1);
    if(w<=800){
        window.scrollTo(0, document.body.scrollHeight);
    }
});