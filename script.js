//  console.log("welcome to my website!");

//--------------------------------------VARIABLES -------------------
const btn = document.querySelector(".share-quote");
const form = document.querySelector(".hidden");
const quotesList = document.querySelector(".quotes-list");

//--------------------------------------DATA -------------------
//create DOM elemments reder from a list
quotesList.innerHTML = "";

//examples
// createQuotesList([
//   {
//     quoteText: "this is a quote",
//   },
// ]);
// quotesList.insertAdjacentHTML("afterbegin", "<li>Mike</li>");

//load data from supabase
loadQuotes();
async function loadQuotes() {
  const res = await fetch(
    "https://gknaflkykytzbodmofib.supabase.co/rest/v1/quotes",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbmFmbGt5a3l0emJvZG1vZmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NTkxMTcsImV4cCI6MjAwODQzNTExN30.kWI4kVgtFbw6Xh90TVgtAGXPoGg8NTGEah2EuMMvF2U",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbmFmbGt5a3l0emJvZG1vZmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NTkxMTcsImV4cCI6MjAwODQzNTExN30.kWI4kVgtFbw6Xh90TVgtAGXPoGg8NTGEah2EuMMvF2U",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  createQuotesList(data);
}

//--------------------------------------EVENTS -------------------
//quote form hide and unhide
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Quote";
  }
});

//--------------------------------------FUNCTIONS -------------------

//quotesist
function createQuotesList(dataArray) {
  const htmlArr = dataArray.map(
    (quote) => `<li class="quote">
  <p>
    ${quote.quoteText}  
    <a
      class="source"
      target="_blank"
      href="${quote.origin}"
      >${quote.originName}</a>
  </p>
  <span class="tag" style="background-color: #bb3e03"> ${quote.category}</span>
  <div class="votes">
  <button class="btn">👍 <span>${quote.votesThumbsUp}</span></button>

  <button class="btn">🤯 <span>${quote.votesMindBlowing}</span></button>

  <button class="btn">❌ <span>${quote.votesFalse}</span></button>
</div>
  </li>`
  );
  const html = htmlArr.join("");
  quotesList.insertAdjacentHTML("afterbegin", html);
}
