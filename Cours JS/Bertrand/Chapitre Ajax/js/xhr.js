let send = document.getElementById('envoi');

send.addEventListener('click', () => {
    getDatas()
})

function getDatas(){
    let xhr = new XMLHttpRequest;
    xhr.open('get', 'datas/chapitre.json');
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
        console.log(typeof(xhr.response));
        console.log(xhr.response);
    });
xhr.send();
}