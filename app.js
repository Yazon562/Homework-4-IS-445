
// use event listener to detect + (107) or - (109)
// use loop so when its +, add 15 px and if its - then subtract 15
// when 0 or 60 is reached, its either done or add pop emoji

document.addEventListener("keydown",sizeFunc,false) // records the key pressed by the user



function sizeFunc(key){                  // checks which key is pressed and run function
    if (key.keyCode == "70"){                   // run function that corresponds with the key pressed
            bigFunc();
            console.log("pressed f")
        }
    else if (key.keyCode == "65"){
            smallFunc();
        }
    else {
            console.log("error")
         }
    }






function bigFunc(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

       // document.getElementById("Balloon").innerHTML="hello";
       // document.getElementById("Balloon").style.fontSize= '100px'
        if (currentSize < 60){
            document.getElementById("Balloon").style.fontSize = (currentSize + 15) + 'px'
        }
        else {
            document.getElementById("Balloon").textContent="🎉"
            document.removeEventListener("keydown",sizeFunc)
        }
        
    }

function smallFunc(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)

    if (currentSize > 15){
        document.getElementById("Balloon").style.fontSize = (currentSize - 15) + 'px'
    }
    else {
        document.getElementById("Balloon").style.fontSize = "20px";
        document.getElementById("Balloon").textContent="Done"
        document.removeEventListener("keydown",sizeFunc)

    }


    }