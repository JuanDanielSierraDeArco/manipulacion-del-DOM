const button = document.querySelector("button");

const buttonClickend = (event) => {
    console.log(event.target.id);
    console.log(event.target);
    console.log(event.target.textContent);
};

button.addEventListener("click", buttonClickend);