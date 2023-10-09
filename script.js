const jokeContainer = document.getElementById("joke");
const categoryContainer = document.getElementById("category");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,explicit&type=single";



let getJoke = () => {
    jokeContainer.classList.remove("fade");
    categoryContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        console.log(item);
        categoryContainer.textContent = `${item.category}`;
        jokeContainer.textContent = `${item.joke}`;
        
        jokeContainer.classList.add("fade");
        categoryContainer.classList.add("fade");
});
}
btn.addEventListener("click",getJoke);
getJoke(); 