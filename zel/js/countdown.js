eventTimer = function() {
    eventTime = new Date(2016, 10, 02, 0, 0, 0, 0);
    currentTime = new Date ();
    timeToEvent = eventTime - currentTime;
    timeToEventround = Math.floor( timeToEvent / 1000 );
    daysToEvent = Math.floor(timeToEventround/(60*60*24)).toString().split("");
    hoursToEvent = Math.floor((timeToEventround%(60*60*24))/(60*60)).toString().split("");
    minutesToEvent = Math.floor((((timeToEventround%(60*60*24))%(60*60))/(60))).toString().split("");
    secondsToEvent = Math.floor(((((timeToEventround%(60*60*24))%(60*60))%(60)))).toString().split("");
    calculo = "Ponga aqui lo que quiere revisar..."

    $("#Debug").text("Debug info: Event Time: " + eventTime + " ||| " + "Current Time: " + currentTime + " ||| " + "Time To Event: " + timeToEvent + " ||| " + "Time To Event Round: " + timeToEventround + " ||| " + "Calculo: " + calculo );



    if (timeToEvent > 0){
        if (daysToEvent.length == 1) {
            $('.clock.days .digit_1 div').text(0);
            $('.clock.days .digit_2 div').text(daysToEvent[0]);
        } else {
            $('.clock.days .digit_1 div').text(daysToEvent[0]);
            $('.clock.days .digit_2 div').text(daysToEvent[1]);
        }

        if (hoursToEvent.length == 1) {
            $('.clock.hours .digit_1 div').text(0);
            $('.clock.hours .digit_2 div').text(hoursToEvent[0]);
        } else {
            $('.clock.hours .digit_1 div').text(hoursToEvent[0]);
            $('.clock.hours .digit_2 div').text(hoursToEvent[1]);
        }

        if (minutesToEvent.length == 1) {
            $('.clock.minutes .digit_1 div').text(0);
            $('.clock.minutes .digit_2 div').text(minutesToEvent[0]);
        } else {
            $('.clock.minutes .digit_1 div').text(minutesToEvent[0]);
            $('.clock.minutes .digit_2 div').text(minutesToEvent[1]);
        }

        if (secondsToEvent.length == 1) {
            $('.clock.seconds .digit_1 div').text(0);
            $('.clock.seconds .digit_2 div').text(secondsToEvent[0]);
        } else {
            $('.clock.seconds .digit_1 div').text(secondsToEvent[0]);
            $('.clock.seconds .digit_2 div').text(secondsToEvent[1]);
        }
    } else {
        $('.clock .digit_1 div').text(0);
        $('.clock .digit_2 div').text(0);
    }
}

window.setInterval(eventTimer, 1000);
