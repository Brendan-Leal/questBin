
document.addEventListener("DOMContentLoaded", (e) => {
  let button = document.getElementById("copy-url-btn");
  let url = document.getElementById("url").textContent;


  button.addEventListener("click", (e) => {
    navigator.clipboard.writeText(url);
    alert(`${url} has been copied to your clipboard`)
  });
});