const keyboardInfo = I => {
    console.log(event.keyCode);
    const emoji = document.getElementById('emoji');
    let fs = 30; // pull this each time from the emoji element
    if (event.keyCode === 73) {

        emoji.style.fontSize = fs + 10 + 'px';
    }
    if (event.keyCode == "68") {

        emoji.style.fontSize = fs - 10 + 'px';
    }

    // console.log(event.type);
    // console.log(event.keyCode);
    // console.log(String.fromCharCode(event.keyCode));
}



const el = document.getElementById('body');
el.addEventListener('keyup', keyboardInfo);