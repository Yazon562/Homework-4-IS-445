var init=16 ;

window.addEventListener("keyup",arrow) ;

function arrow(event) { 
    event.preventDefault(); 
    var balloon = document.getElementById("balloon");  
        switch (event.keyCode) {
            case 68:
                init=init-2 ;
                 balloon.style.fontSize=init+"px" ;
            if (init <=0){ 
            balloon.textContent="Done" ;
            balloon.style.fontSize = "60px" ;
            window.removeEventListener('keyup',minus);      
        }
        break;
            case 73:
            if (init >=60){ 
            balloon.textContent="💥" ;
            window.removeEventListener('keyup',plus);
        }
        else{
            init=init+2 ;
            balloon.style.fontSize=init+"px" ;
        }break;
    }
}
