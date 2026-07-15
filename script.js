// ---------------- Alert ----------------
document.addEventListener("DOMContentLoaded", function() {
if (!sessionStorage.getItem("alertShown")) {
  alert("To view relevant results, enter your search query in the search bar and press the Enter key.");
  sessionStorage.setItem("alertShown", "true");
}
});





// ---------------- Seaech Bar ----------------
function searchPage() {
let text = document.getElementById("searchInput").value.toLowerCase().trim();
if (text === "") {
    alert("Please type something to search.");
    return;
}

// 🔥 Only search titles
let elements = document.querySelectorAll("h1, h2, h3");

for (let el of elements) {
 if (el.innerText.toLowerCase().includes(text)) {
 el.scrollIntoView({ behavior: "smooth", block: "center" });

// Add glowing underline class
el.classList.add("glow-underline");
setTimeout(() => {
  el.classList.remove("glow-underline");
  }, 3000);
   return; // stop after first match
}
}
alert("No results found!");
}






// ---------------- DROPDOWN ----------------
 function toggleDropdown () {
    document.getElementById("dropdown").classList.toggle("active")};

// ---------------- POPUP FUNCTIONS ----------------
function openLogin () {
  document.getElementById("loginPopup").style.display = "flex";
};

function closeLogin () {
  document.getElementById("loginPopup").style.display = "none";
};

function openSignup () {
  document.getElementById("signupPopup").style.display = "flex";
};

function closeSignup () {
  document.getElementById("signupPopup").style.display = "none";
};





// ---------------- TOGGLE PASSWORD ----------------
window.togglePassword = function (inputId, icon) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
};





// ---------------- How It Works left and right button ----------------
window.addEventListener("load", function () {

  const container = document.getElementById("scrollContainer");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  if (!container || !leftBtn || !rightBtn) {
    console.log("Scroll elements not found");
    return;
  }

  const firstCard = container.querySelector(".work-card");
  const gap = 20; // your CSS gap
  const cardWidth = firstCard.offsetWidth + gap;

  rightBtn.addEventListener("click", () => {
    container.scrollBy({
      left: cardWidth,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", () => {
    container.scrollBy({
      left: -cardWidth,
      behavior: "smooth"
    });
  });

});





// ---------------- System Static Counter ----------------
document.addEventListener("DOMContentLoaded", function () {
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {

const updateCounter = () => {
  const target = parseInt(counter.getAttribute("data-target"));
  const symbol = counter.getAttribute("data-symbol") || "";
  const current = parseInt(counter.innerText.replace(symbol, "")) || 0;
  const increment = Math.ceil(target / 200);

if (current < target) {
  counter.innerText = (current + increment > target ? target : current + increment) + symbol;
  setTimeout(updateCounter, 15);
  } else {
  counter.innerText = target + symbol;
}
};
updateCounter();
});
});






// ------ How It Works dropdown option ------- 
function goToHowItWorks(event) {
event.preventDefault();

const section = document.getElementById("howItWorks");
const title = document.getElementById("howTitle");

// Smooth scroll
  section.scrollIntoView({ behavior: "smooth",});

// Apply effect AFTER scroll
  setTimeout(() => {
    title.classList.add("glow-active");

// remove after 3 sec (optional)
  setTimeout(() => {
    title.classList.remove("glow-active");
    }, 3000);
}, 500);
}





//------- Intro Video -------
document.addEventListener("DOMContentLoaded", () => {

    const enterScreen = document.getElementById("enter-screen");
    const introScreen = document.getElementById("intro-screen");
    const enterBtn = document.getElementById("enter-btn");
    const video = document.getElementById("intro-video");

    document.body.classList.add("no-scroll");

    // Set volume between 0.0 and 1.0
    video.volume = 0.2; // 20% volume

    // Skip intro after refresh
    if(sessionStorage.getItem("introPlayed")){

        enterScreen.remove();
        introScreen.remove();

        document.body.classList.remove("no-scroll");

        return;
    }

    enterBtn.addEventListener("click", () => {

        enterScreen.style.display="none";

        introScreen.style.display="block";

        video.play();

    });

    video.addEventListener("ended",()=>{

        introScreen.style.opacity="0";

        setTimeout(()=>{

            introScreen.remove();

            document.body.classList.remove("no-scroll");

            sessionStorage.setItem("introPlayed","true");

        },800);

    });

});