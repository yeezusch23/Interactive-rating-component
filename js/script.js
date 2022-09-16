const items = document.querySelectorAll(".item");

let condition = [];

for (let i = 0; i < items.length; i++) {
    condition[i] = false;
    items[i].addEventListener("click", ()=>{
        updateItem(i);
    });
}


const updateItem = (id) => {
    if (condition[id]) {
        condition[id] = false;
        items[id].style.background = "hsla(216, 12%, 54%, 0.1)";
        items[id].style.color = "var(--light-grey)";
    } else {
        condition[id] = true;
        items[id].style.background = "var(--medium-grey)";
        items[id].style.color = "var(--white)";
    }
}

const button = document.querySelector(".submit");

button.addEventListener("click", (evt)=>{
    evt.preventDefault();
    let cnt = 0;
    for (let i = 0; i < items.length; i++) {
        if (condition[i]) cnt++;
    }
    document.querySelector(".interactive-text").innerHTML = cnt;
    document.querySelector(".rating-state").style.display = "none";
    document.querySelector(".thank-you-state").style.display = "flex";
});