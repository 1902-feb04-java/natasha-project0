"use strict"

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', () => {
    getMovie();
})

function getMovie(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };

    // set up the request to be made
    xhr.open('get', 'https://api.themoviedb.org/3/movie/popular?api_key=14e4604305730956fb72f6204af61a7e&language=en-US&page=1')

    // send the request
    xhr.send();
}