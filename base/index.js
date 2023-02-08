const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "In Da Club",
    artist: "50 Cent",
    cover: "files/In-da-club.jpeg",
    file: "files/In-da-club.mp3"
}

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = data.artist;

audio.src = data.file;

