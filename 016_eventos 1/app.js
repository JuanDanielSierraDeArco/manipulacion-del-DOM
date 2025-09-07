 
 const container = document.querySelector(".container");

 const button = document.querySelector("button")

 container.addEventListener("mouseover",() => {
    container.style.backgroundColor = "blue";
 })

 container.addEventListener("mouseout",() =>{
    container.style.backgroundColor = "red"
 })

//  button.addEventListener("click", () =>{
//     alert("Button Clickend!")
//  })

const buttonClickCallback = () => {
    alert("Button Clickend!");
}

button.addEventListener("click",buttonClickCallback);

setTimeout(() => {
    button.removeEventListener("click",buttonClickCallback);
}, 5000);