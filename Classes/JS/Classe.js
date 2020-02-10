

class Personne{
    constructor(nom, prenom, age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    getInfos(){
        console.log(this.nom, this.prenom, this.age)
    }
}


let Wil = new Personne("Wil", "Lms", "20");

// Wil.getInfos();

class Animal { 
    constructor(nom) {
      this.nom = nom;
    }
    
    parle() {
      console.log(`${this.nom} fait du bruit.`);
    }
  }
  
  class Chien extends Animal {
    constructor(nom) {
      super(nom); // appelle le constructeur parent avec le paramètre
    }
    parle() {
      console.log(`${this.nom} aboie.`);
    }
  }
let dogo = new Chien("Inuit du nord");
dogo.parle();