class Fromages{
    constructor(nom, type, pays, classement){
        this.nom = nom;
        this.type = type;
        this.pays = pays;
        this.classement = classement;
        this.afficher()
    }
    afficher(){
        let mesdiv = document.createElement('div');
        let titre = document.createElement('h1');
        let classement = document.createElement('classement')
        let type = document.createElement('type');

        titre.innerText = this.nom;
        classement.innerHTML = this.classement;
        type.innerHTML = "Type : " + this.type + ' / Pays : ' + this.pays;

        document.body.appendChild(mesdiv);
        mesdiv.appendChild(titre);
        mesdiv.appendChild(classement);
        mesdiv.appendChild(type);

    }
}