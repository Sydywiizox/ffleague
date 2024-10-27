function updateToggleLabel(element) {
  if (element.checked) {
    document.querySelector(".toggle__label").style.backgroundColor = "#9147ff";
  } else {
    document.querySelector(".toggle__label").style.backgroundColor =
      "var(--pink)";
  }
}

function toggleChat(checked) {
  let twitchEmbed = document.getElementById("twitch-embed");
  if (!checked) {
      twitchEmbed.style.width = "53.33vw";
  } else {
      twitchEmbed.style.width = "calc(53.33vw + 340px)";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleInput = document.querySelector(".toggle__input");
  if (toggleInput) {
    console.log("Checkbox cochée :", toggleInput.checked);
    updateToggleLabel(toggleInput);
    toggleChat(toggleInput.checked)
    document.querySelector(".toggle__input").addEventListener("change", (e) => {
      toggleChat(toggleInput.checked)
      updateToggleLabel(e.target);
    });
  } else {
    console.log("Élément .toggle__input introuvable");
  }
});

window.onscroll = function () {
  const button = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "flex"; // Afficher le bouton
  } else {
    button.style.display = "none"; // Masquer le bouton
  }
};

document.getElementById("backToTop").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Défilement doux
  });
};

