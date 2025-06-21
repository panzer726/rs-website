var inputted = ""
pass = "0310"

async function enter(input){

    inputted+=(input)
    switch(inputted.length){

        case 1:
            document.getElementById("i1").style.backgroundColor = "white"
            break
        case 2:
            document.getElementById("i1").style.backgroundColor = "white"
            document.getElementById("i2").style.backgroundColor = "white"
            break
        case 3:
            document.getElementById("i1").style.backgroundColor = "white"
            document.getElementById("i2").style.backgroundColor = "white"
            document.getElementById("i3").style.backgroundColor = "white"
            break
        case 4:
            document.getElementById("i1").style.backgroundColor = "white"
            document.getElementById("i2").style.backgroundColor = "white"
            document.getElementById("i3").style.backgroundColor = "white"
            document.getElementById("i4").style.backgroundColor = "white"
            break
    }
    if ( inputted.length==4 ){
        if (inputted == pass){
            window.location.href = "home.html"
        }
        else{
            inputted=""
        }
        document.getElementById("i1").style.backgroundColor = "transparent"
            document.getElementById("i2").style.backgroundColor = "transparent"
            document.getElementById("i3").style.backgroundColor = "transparent"
            document.getElementById("i4").style.backgroundColor = "transparent"
    }
};

function foundation(){
    blackout = document.querySelector(".blackout");
    blackout.style.zIndex = 10
    blackout.style.opacity = 1
}

const startDate = new Date("2025-03-10T00:00:00"); // March 10, 2025

async function updateTimer(){
    while(true) {
        var  now = new Date();
        var diff = now - startDate; // difference in milliseconds

        if (diff < 0) return; // Prevent future countdown

        let totalSeconds = Math.floor(diff / 1000);
        
        const days = Math.floor(totalSeconds / (3600 * 24));
        totalSeconds %= 3600 * 24;
        
        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        // Format to 2-digit strings
        document.querySelector(".d").textContent =  String(days).padStart(2, '0') + " :";
        document.querySelector(".h").textContent = String(hours).padStart(2, '0' ) + " :";
        document.querySelector(".m").textContent = String(minutes).padStart(2, '0') + " :";
        document.querySelector(".s").textContent = String(seconds).padStart(2, '0');
        
        await new Promise(r => setTimeout(r, 1000));
    }
}

updateTimer(); // Run immediately on load