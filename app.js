var options= {
    invertx: false,
    invertv: false,
    limitx: 40, 
    limitv: 40
}

var emoji = document.getElementById('emoji');

document.querySelector('button').addEventListener('keyup', (event)=>{
    event.targer.textContent = 'I was clicked';
})
