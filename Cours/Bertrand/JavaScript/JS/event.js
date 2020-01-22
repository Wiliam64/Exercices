let myButton = document.getElementById('myButton')
let myInput = document.getElementById('myInput')

myButton.addEventListener('click', () => {
    alert('Okay')
    console.log(myButton);
});


myInput.addEventListener('change',function() {
    console.log(this.value);
});


myInput.addEventListener('keyup',(e) => {
    console.log(e.target.value);
});

document.body.addEventListener('click',(e) => {
    console.log("X = ", e.clientX, "Y = ", e.clientY);
});