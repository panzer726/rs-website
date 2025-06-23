var inputted = ""
pass = "0310"

async function animate(input){
    var pressedDiv = document.getElementById(input)
    pressedDiv.style.backgroundColor = "rgba(255, 255, 255, 0.37)"
    await new Promise(r=>{setTimeout(r,100)})
    pressedDiv.style.backgroundColor = "rgb(255, 255, 255, 0.167)"
}

async function enter(input){
    animate(input)

    var pressedDiv = document.getElementById(input)

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
            await new Promise(r => setTimeout(r, 500));
            document.getElementById("i1").style.backgroundColor = "transparent"
            document.getElementById("i2").style.backgroundColor = "transparent"
            document.getElementById("i3").style.backgroundColor = "transparent"
            document.getElementById("i4").style.backgroundColor = "transparent"
        }
    }

};

async function openMenu(){
    document.querySelector(".unwhite").style.opacity = 0.6;
    document.querySelector(".menu").style.left = 0;
    document.querySelector(".unwhite").style.pointerEvents = "none";
}

async function closeMenu(){
    document.querySelector(".unwhite").style.opacity = 0;
    document.querySelector(".menu").style.left = "-200px";
    document.querySelector(".unwhite").style.pointerEvents = all;
}

async function foundation(){
    blackout = document.querySelector(".blackout");
    blackout.style.zIndex = 10
    blackout.style.opacity = 1
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.position = "fixed";
    document.body.overflow = "hidden";

    await new Promise(r => setTimeout(r, 2000));

    document.querySelector('.blackout-instruction').style.opacity = 1;

    await new Promise(r => setTimeout(r, 3000));

    document.querySelector('.blackout-instruction').style.opacity = 0;

    await new Promise(r => setTimeout(r, 2000));
    document.getElementById('player').play();
    await new Promise(r => setTimeout(r, 1000));
    document.querySelector(".spotify").style.opacity = 1;
    await new Promise(r => setTimeout(r, 2500));
    document.querySelector(".blackout-header").style.opacity = 1;
    await new Promise(r => setTimeout(r, 4000));
     document.querySelector(".blackout-parag").style.opacity = 1;
     await new Promise(r => setTimeout(r, 10000));
    document.querySelector(".foundation-nextbutton").style.opacity = 1;
}   

async function foundationnext(){
    document.querySelector(".canva").opacity = 1;
    document.querySelector(".blackout").opacity = 0
}

async function updateTimer(targetDate, type = "", mode = "counter") {
    while (true) {
        const now = new Date();
        let diff = mode === "counter" ? now - targetDate : targetDate - now;

        if (diff < 0) {
            document.querySelector(`.d${type}`).textContent = "00 :";
            document.querySelector(`.h${type}`).textContent = "00 :";
            document.querySelector(`.m${type}`).textContent = "00 :";
            document.querySelector(`.s${type}`).textContent = "00";
            return;
        }

        let totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        totalSeconds %= 3600 * 24;

        const hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;

        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        // Update DOM
        document.querySelector(`.d${type}`).textContent = String(days).padStart(2, '0') + " :";
        document.querySelector(`.h${type}`).textContent = String(hours).padStart(2, '0') + " :";
        document.querySelector(`.m${type}`).textContent = String(minutes).padStart(2, '0') + " :";
        document.querySelector(`.s${type}`).textContent = String(seconds).padStart(2, '0');

        await new Promise(res => setTimeout(res, 1000));
    }
}

updateTimer(new Date("2025-03-10T00:00:00"), "", "counter");
updateTimer(new Date("2026-03-10T00:00:00"), "1", "countdown");

function closeNewMessage(){
    document.querySelector(".unwhite2").style.opacity = 0;
    document.querySelector(".new_message-container").style.opacity = 0;
    document.querySelector(".unwhite2").style.pointerEvents = "none";
    document.querySelector(".new_message-container").style.pointerEvents = "none";
}

function openNewMessage(){
    document.querySelector(".unwhite2").style.opacity = 1;
    document.querySelector(".unwhite2").style.pointerEvents = "auto";
    document.querySelector(".new_message-container").style.opacity = 1;
    document.querySelector(".new_message-container").style.pointerEvents = "auto";
}