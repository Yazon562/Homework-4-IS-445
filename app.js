const keyboardInfo=I=>{
        console.log('Keyboard event:${I.type},key:${I.key},code:${I.code'); 
        };
        console.log(event.type);
        console.log(event.keyCode);
        console.log(String.fromCharCode(event.keyCode));

        
        document.addEventListener('keypress',keyboardInfo);
        document.addEventListener('keydown',keyboardInfo);
        document.addEventListener('keyup',keyboardInfo);


    }
}
