let chiffre = document.querySelectorAll('.caractere');
let n1 = "";
let n2 =""
let egal = document.getElementById('egale');
let clean = document.getElementById('clean');
let ecran = document.getElementById('ecran');

ecran.innerText = ""

chiffre.forEach(element => {
    element.addEventListener('click', () => {
        n1 += element.textContent;
        console.log(n1);
        ecran.textContent += element.textContent;
    }) 
});

egal.addEventListener('click', () => {
    n1 = eval(n1);
    ecran.textContent = eval(ecran.textContent)
    console.log("Le résultat est : ", n1);
})
clean.addEventListener('click', () => {
    n1 = "";
    console.clear();
    ecran.textContent = ""
})

document.addEventListener('keydown', (e) => {
    ecran.textContent += e.key
    console.log(n2);
})