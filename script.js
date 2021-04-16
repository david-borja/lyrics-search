const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

// Search by song or artist
/*
// Using THEN
function searchSongs(term) {
  fetch(`${apiURL}/suggest/${term}`)
    .then((res) => res.json()) // receives the response obj, and we access its body by using a method that returns a promise that resolves into a JSON object
    .then((data) => console.log(data)); // when it resolves, we get the actual data in JSON
}
*/
// Using ASYNC/AWAIT
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();
  showData(data);
}

// Show song and artist in DOM
function showData(data) {}

// Event listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});
