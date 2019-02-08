"use strict"

window.addEventListener('load', () => {
    // let image = document.getElementById("slide1");
    let popularImage = document.getElementById("popularImg");
    let topRated = document.getElementById("topRated");
    let upcoming = document.getElementById("upcoming");

    getMainImage(popularImage);
    getMainImage(topRated);
    getMainImage(upcoming);

    getPopular();
    getTopRated();
    getUpcoming();
})

function getPopular(){
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

function getTopRated(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };

    // set up the request to be made
    xhr.open('get', 'https://api.themoviedb.org/3/movie/top_rated?api_key=14e4604305730956fb72f6204af61a7e&language=en-US&page=1')

    // send the request
    xhr.send();
}

function getUpcoming(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if(xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
      }
    };

    // set up the request to be made
    xhr.open('get', 'https://api.themoviedb.org/3/movie/upcoming?api_key=14e4604305730956fb72f6204af61a7e&language=en-US&page=1')

    // send the request
    xhr.send();
}

function getMainImage(image){
    image.src = 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg';
}