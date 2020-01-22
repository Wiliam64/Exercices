class Voiture{
    constructor(couleur){
        this.marque = 'tesla';
        this.couleur = couleur;
        this.boitVitesse = 'automatique';
        this.modele = '3';
    }
        // Ce que sait faire la voiture
        klaxonner(){
            console.log("Tut tut");
        }
        rouler(){
            console.log("Is alive");            
        }
        tourner(){
            console.log("Hyyyy");
        }

    }