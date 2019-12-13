let chiffre = document.querySelectorAll('.caractere');
let n1 = "";
let egal = document.getElementById('egale');
let clean = document.getElementById('clean')

chiffre.forEach(element => {
    element.addEventListener('click', () => {
        n1 += element.textContent;
        console.log(n1);
    }) 
});

egal.addEventListener('click', () => {
    n1 = eval(n1)
    console.log("Le résultat est : ", n1);
})
clean.addEventListener('click', () => {
    n1 = "";
    console.clear()
})
