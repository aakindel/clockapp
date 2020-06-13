(function runScript () {
    setInterval(updateHands, 1000);

    // Select the clock hands
    const hourHand = document.querySelector(".hour-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const secondHand = document.querySelector(".second-hand");


    function updateHands() {

        const currentTime = new Date();

        /* ratios divide the current time by the hands' possible positions
           on the clock to find the hands' current position on the clock. */
        
        const secondsRatio = currentTime.getSeconds() / 60;

        /* adding the lesser ratios to greater ratios allows the hour 
           and minute hands to transition smoothly between positions 
           instead of jumping jerkily from one number to another. */

        const minutesRatio = (secondsRatio + currentTime.getMinutes()) / 60;
        const hoursRatio = (minutesRatio + currentTime.getHours()) / 12;
        
        // modify styles so clock hands move on screen
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hoursRatio);

        console.log(currentTime, currentTime.getHours());

    }

    function setRotation(element, rotationRatio) {
        // shifts hands by the rotation ratio within a circular clock
        element.style.setProperty('--hand_rotation', rotationRatio * 360);
    }

    updateHands();

})(); // IIFE invokes function expression immediately
