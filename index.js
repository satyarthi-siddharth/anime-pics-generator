const btnEl = document.getElementById("btn");
const mainEl = document.getElementById("main");
const imgEl = document.getElementById("img");
const nameEl = document.getElementById("name");


let fetchAnimeAPI = async() => {
    try{
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        nameEl.innerText = "Updating...";
        imgEl.src = "loader.svg";
        const result = await fetch("https://api.catboys.com/img").then((res) => res.json());
        imgEl.src = result.url;
        nameEl.innerText = result.artist;
        mainEl.style.display = "block";
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
    }catch(error){
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        imgEl.src = "error.jpg";
        nameEl.innerText = "An error happened, please try again later...";
        mainEl.style.display = "block"; 
    }
    
}

btnEl.addEventListener("click", () => {
    fetchAnimeAPI();
})