/* 
États de notre Tamagoshi possibles :
- 🥚 : partie non lancée) 
-  : naissance pendant tant qu'il n'a pas fait son 1er caca
Ensuite il devient un "grand" avec une humeur variable
- 😢 : triste 0/5
- 🙁 : pas content 1/5
- 🙂 : normal 2/5
- 😄 : content 3/5
- 🤗 : heureux 4/5
- 🥰 : très heureux 5/5
- 👻 : mort 0/5 pendant plus d'une minute 
Ses envies :
- 😋 : faim, aléatoire minimum 30 sec et max 3 minutes
- 🥱 : jouer, aléatoire minimum 30 sec et max 3 minutes
- 💩 : caca, aléatoire minimum 30 sec et max 1.30 minutes après avoir mangé
*/

const startTama = () => {
  const tamaName = prompt("Quel est  nom a votre tamagoshi?");
  const character = document.querySelector(".js-character");
  character.textContent = "🐣";

  const vitals = document.querySelector(".js-vitals");
  vitals.classList.remove("hidden");

  const nameDisplay = document.querySelector(".js-tamaName");
  nameDisplay.textContent = tamaName;

  const scoresDisplay = document.querySelectorAll(".js-score");

  scoresDisplay.forEach((score) => {
    score.textContent = 5;
  });
};

// Réveiller le Tamagoshi 


const buttonCenter = document.querySelector('.js-button[data-direction="center"]');

let count = 0;
buttonCenter.addEventListener("click", () => {
    count++;
    console.log("click", count);
    if (count === 5){
        startTama();
    }
});