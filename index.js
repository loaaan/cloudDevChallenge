const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();