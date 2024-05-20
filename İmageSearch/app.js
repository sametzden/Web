const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#search-input");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#search-button");
const clearButton = document.querySelector("#clear-button");
const imgWrapper = document.querySelector(".img-wrapper");

runEventListener();

function runEventListener(){
    searchButton.addEventListener("click",search)
    clearButton.addEventListener("click",clear)
}

function search(e){
    const value = searchInput.value.trim() // trim boşlukları alır
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers: {
            Authorization: "Client-ID D96LY7nCsAaCQdUGp5Q0EN6y0LSsp742iY5Ukyz9QsU"
        }

    })
    .then((res)=>res.json())
    .then((data)=> {
       Array.from(data.results).forEach((image)=> {
        //image.urls.small
        addİmageToUI(image.urls.small)
       })
    })
    .catch((err)=>console.log(err))
    e.preventDefault()//sayfa yenilemesini durdurur
}


function addİmageToUI(url){
    const div = document.createElement("div")
    div.className = "card"

    const img = document.createElement("img")
    img.setAttribute("src",url);
    img.height ='400';
    img.width = '400';
    div.appendChild(img);
    imgWrapper.appendChild(div);

}
function clear(e){
    //Array.from(imgWrapper.children).forEach((card)=> console.log(card))
    searchInput.value = "";
    imgWrapper.innerHTML = "";
}