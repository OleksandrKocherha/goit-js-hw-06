const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", (e) => {
    const value = e.currentTarget.value;
    span.style.fontSize = `${value}px`;
})