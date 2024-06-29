const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://lnutteftkyjlkmbxmhtpkz7hhm0iagab.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data.views}`;
}

updateCounter();