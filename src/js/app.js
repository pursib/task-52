import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let article = document.createElement('article');
  article.classList.add('message');

  const body = document.querySelector('body');

  body.addEventListener("click", () => {
    for(let i = 0; i <5; i++){
      body.prepend(article.cloneNode(1));
    }
  });
});
