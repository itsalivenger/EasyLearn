const toggleButton = document.querySelector(".toggleButton");
const lines = document.querySelectorAll(".line");
var jerg;

toggleButton.addEventListener('click', function() {
  jerg = !jerg;
  console.log(jerg);
  for (let i = 0; i < 3; i++) {
    lines[i].style.background = jerg ? "#111" : "white";
  }
});
