/**
 * WEB222 – Assignment 06
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       patel vrundaben vijaykumatr
 *      Student ID: 158605220
 *      Date:       12/07/2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

document.addEventListener("DOMContentLoaded", function () {
  createMenuButtons();
  showArtistSongs(artists[0]);

  const artistRequestForm = document.getElementById("artist-request-form");
  if (artistRequestForm) {
    artistRequestForm.addEventListener("submit", handleArtistRequest);
  }

  const addButton = document.getElementById("addButton");
  if (addButton) {
    addButton.addEventListener("click", addSongInput);
  }
});

function createMenuButtons() {
  const menu = document.getElementById("menu");
  artists.forEach((artist) => {
    const button = document.createElement("button");
    button.textContent = artist.name;
    button.addEventListener("click", () => showArtistSongs(artist));
    menu.appendChild(button);
  });
}

function createSongCard(song) {
  const card = document.createElement("div");
  card.classList.add("card");

  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  songImg.alt = song.title;
  songImg.classList.add("card-image");
  songImg.addEventListener("click", () => openSongUrl(song.url));

  const songTitle = document.createElement("div");
  songTitle.classList.add("card-title");
  songTitle.textContent = song.title;

  const year = document.createElement("p");
  year.textContent = `Year: ${song.year}`;

  const singer = document.createElement("p");
  singer.textContent = `Singer: ${song.singer}`;

  const duration = document.createElement("p");
  duration.textContent = `Duration: ${formatDuration(song.duration)}`;

  const caption = document.createElement("div");
  caption.classList.add("card-caption");
  caption.textContent = song.caption;

  card.appendChild(songImg);
  card.appendChild(songTitle);
  card.appendChild(year);
  card.appendChild(duration);
  card.appendChild(singer);
  card.appendChild(caption);

  card.addEventListener("click", () => openSongUrl(song.url));

  return card;
}

function showArtistSongs(artist) {
  const songCardsContainer = document.getElementById("song-cards");
  songCardsContainer.innerHTML = "";
  const artistSongs = songs.filter((song) => song.artistId === artist.artistId);

  artistSongs.forEach((song) => {
    const card = createSongCard(song);
    songCardsContainer.appendChild(card);
  });
}

function openSongUrl(url) {
  window.open(url, "_blank");
}

function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  return `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
}

function handleArtistRequest(event) {
  event.preventDefault();

  const artistName = document.getElementById("artistName").value;
  const musicGenre = document.getElementById("musicGenre").value;
  const socialMedia = document.getElementById("socialMedia").value;
  const exampleSongs = getExampleSongs();
  const explicitLyrics = document.getElementById("explicitLyrics").checked;
  const requestDescription = document.getElementById("requestDescription").value;
  console.log("Artist Request Form Data:", {
    artistName,
    musicGenre,
    socialMedia,
    exampleSongs,
    explicitLyrics,
    requestDescription
  });
}

function getExampleSongs() {
  const exampleSongsInputs = document.querySelectorAll("#exampleSongsContainer input");
  const exampleSongs = Array.from(exampleSongsInputs).map((input) => input.value);
  return exampleSongs;
}

function addSongInput() {
  const container = document.getElementById("exampleSongsContainer");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "exampleSongs";
  input.placeholder = "Enter URL";
  input.classList.add("example-song-input");
  container.appendChild(input);
}
