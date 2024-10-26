function updateToggleLabel(element) {
  console.log(element.checked);
  if (element.checked) {
    document.querySelector(".toggle__label").style.backgroundColor = "#9147ff";
  } else {
    document.querySelector(".toggle__label").style.backgroundColor =
      "var(--pink)";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.querySelector(".toggle__input");
  if (toggleInput) {
    const playerDiv = document.getElementById("player");
    const chatDiv = document.getElementById("chat");

    console.log("Checkbox cochée :", toggleInput.checked);
    if (toggleInput.checked) {
      chatDiv.style.display = "flex"; // Cacher le chat
      playerDiv.style.display = "none"; // Afficher le player
    } else {
      chatDiv.style.display = "none"; // Afficher le chat
      playerDiv.style.display = "flex"; // Cacher le player
    }
    updateToggleLabel(toggleInput);
    document.querySelector(".toggle__input").addEventListener("change", (e) => {
      console.log(e.target.checked);
      updateToggleLabel(e.target);
    });
  } else {
    console.log("Élément .toggle__input introuvable");
  }
});