const keyboardInfo = I => {
    console.log(event.keyCode);
    const emoji = document.getElementById('emoji');
    let exp = "&#x1f4a5"
    let fs = 30; // pull this each time from the emoji element
    if (event.keyCode === 73) {

        emoji.style.fontSize = fs + 10 + 'px';
    }
    if (event.keyCode == "68") {

        emoji.style.fontSize = fs - 10 + 'px';
    }
    if (event.keyCode =>"60" px or <= "0" px) {
 
        return "exp"; 
    }
    
}

const el = document.getElementById('body');
el.addEventListener('keyup', keyboardInfo);