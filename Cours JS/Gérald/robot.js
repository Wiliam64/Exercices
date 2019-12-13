class Robot{
    constructor(nboeil, nbbras, frmtete, detailtete, typoreille, frmcorp, typejambes, nbjambes, typepieds, nbpieds){
        this.NombreOeil = nboeil;
        this.NombreBras = nbbras;
        this.FormeTete = frmtete;
        this.DétailTete = detailtete;
        this.TypeOreilles = typoreille;
        this.FormeCorp = frmcorp;
        this.TypeJambes = typejambes;
        this.NombreJambes = nbjambes;
        this.TypePieds = typepieds;
        this.NombrePieds = nbpieds;
    }
    Rouler(){
        console.log("vrooom");
    }
    Parler(){
        console.log("Bip bip bip");        
    }
    LeverBras(){
        console.log("Plus d'huile ! Bip bip...");  
    }
}


class Robot2 extends Robot{
    constructor(nboeil, nbbras, frmtete, detailtete, typoreille, frmcorp, typejambes, nbjambes, typepieds, nbpieds, ailes){
        super(nboeil, nbbras, frmtete, detailtete, typoreille, frmcorp, typejambes, nbjambes, typepieds, nbpieds);
        this.ailes = ailes;
    }
}