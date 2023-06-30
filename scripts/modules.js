let itemsContainer = document.querySelector("#itemsContainer");
const maxToDisplay = 10;
let modulesArr = [
  { name: "Analyse", url: "https://cremcreations.live" },
  { name: "Algebre", url: "https://cremcreations.live" },
  { name: "Programmation", url: "https://cremcreations.live" },
  { name: "Electronique", url: "https://cremcreations.live" },
];

function setModule(module) {
  itemsContainer.innerHTML += `<a target="_blank" href="${module.url}" class="items">
    <div class="itemTitle">
      <h3>${module.name}</h3>
    </div>
    <div class="iconsInItems">
      <i class="material-symbols-outlined">
        add
      </i>
    </div>
  </a>`;
}

for (let i = 0; i < maxToDisplay; i++) {
  if (i < maxToDisplay) {
    setModule(modulesArr[i]);
  }
}
