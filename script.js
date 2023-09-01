//  console.log("welcome to my website!");

const btn = document.querySelector(".share-quote");
const form = document.querySelector(".hidden");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Quote";
  }
});
