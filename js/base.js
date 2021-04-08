$(document).ready(function () {
    // open rur form
    $('#cardBtn').on('click', function () {
        $('#formOverlay').fadeIn();
        $('#paymentFormRUR').fadeIn();
    })

    // open ntz form
    $('#ntzdBtn').on('click', function () {
        $('#formOverlay').fadeIn();
        $('#paymentFormNTZ').fadeIn();
    })

    // close rur form
    $('#closeRurForm').on('click', function () {
        $('#formOverlay').fadeOut();
        $('#paymentFormRUR').fadeOut();
    })

    // close ntz form
    $('#closeNTZForm').on('click', function () {
        $('#formOverlay').fadeOut();
        $('#paymentFormNTZ').fadeOut();
    })

    // scroll to payment
    $('#headerToPaymentBtn').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
    })
    $('#middleToPaymentBtn').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#paymentBlock").offset().top
        }, 1500);
    })

    // open rur form
    $('#cardBtn2').on('click', function () {
        $('#formOverlay2').fadeIn();
        $('#payment2FormRUR').fadeIn();
    })

    // open ntz form
    $('#ntzdBtn2').on('click', function () {
        $('#formOverlay2').fadeIn();
        $('#payment2FormNTZ').fadeIn();
    })

    // close ntz form
    $('#close2NTZForm').on('click', function () {
        $('#formOverlay2').fadeOut();
        $('#payment2FormNTZ').fadeOut();
    })

    // close rur form
    $('#close2RurForm').on('click', function () {
        $('#formOverlay2').fadeOut();
        $('#payment2FormRUR').fadeOut();
    })

    // Countdown Timer
    // Set the date we're counting down to
    var countDownDate = new Date("April 22, 2021 00:00:00").getTime(); 

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element
        document.getElementById("timerDays").innerHTML = days;
        document.getElementById("timerHours").innerHTML = hours;
        document.getElementById("timerMinutes").innerHTML = minutes;
        document.getElementById("timerSeconds").innerHTML = seconds;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("paymentTimer").style.display = "none";
            document.getElementById("timerDays").innerHTML =  "";
            document.getElementById("timerHours").innerHTML =  "";
            document.getElementById("timerMinutes").innerHTML =  "";
            document.getElementById("timerSeconds").innerHTML =  "";
        }
    }, 1000);

})