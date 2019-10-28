console.log("Bienvenue dans ce jeu de devinette !");

let solution = Math.floor(Math.random() * 100) + 1; 

for (let i = 0; i <= 6; i++) { 
    let essai = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
    if (essai === solution) {
        console.log("Vous avez trouvé, bravo !");
		console.log("Vous avez trouvé en " + i + " essai(s)")
        break; 
    } else if ( essai < solution){ 
            console.log(essai + " est trop petit");
    } else {
            console.log(essai + " est trop grand");
    }

if (i === 6){
    console.log("Vous avez perdu ! Le nombre était : " + solution);
}}
