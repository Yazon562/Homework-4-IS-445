var init=30 ;

document.addEventListener("keyup",yaz) ;

function yaz(event) { 
    event.preventDefault(); 
    var balloon = document.getElementById("balloon");  
        switch (event.keyCode) {
            case 68:
                init=init-10 ;
                 balloon.style.fontSize=init+"px" ;
            if (init <=0){ 
            balloon.textContent="Done" ;
            ballone.style.fontSize = "30px" ;
            document.removeEventListener('keyup', balloon, plus);    
        }
        break;
            case 73:
            if (init >=60){ 
            balloon.textContent="💥" ;
            document.removeEventListener('keyup', balloon, minus);
        }
        else{
            init=init+10 ;
            balloon.style.fontSize=init+"px" ;
        }break;
    }
}
