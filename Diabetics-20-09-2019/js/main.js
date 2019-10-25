$(function () {
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 300,
        labels: {
            next: "Next",
            previous: "Back"
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            console.log("curr index", currentIndex, newIndex);
            if (newIndex === 1) {
                console.log("data1")
                $('.steps ul').addClass('step-2');
            } else {

                $('.steps ul').removeClass('step-2');
            }
            if (newIndex === 2) {
                console.log("data2")
                $('.steps ul').addClass('step-3');
                $('.actions ul').addClass('mt-7');
            } else {
                $('.steps ul').removeClass('step-3');
                $('.actions ul').removeClass('mt-7');
            }
            if (newIndex === 3) {
                console.log("data3")
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('mt-7');
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('mt-7');
            }
           
            
            return true;
        }
    });
    // Custom Button Jquery Steps
    $('.forward').click(function () {
        $("#wizard").steps('next');
    })
    $('.backward').click(function () {
        $("#wizard").steps('previous');
    })
    // Grid 
    $('.grid .grid-item').click(function () {
        $('.grid .grid-item').removeClass('active');
        $(this).addClass('active');
    })
    // Click to see password 
    $('.password i').click(function () {
        if ($('.password input').attr('type') === 'password') {
            $(this).next().attr('type', 'text');
        } else {
            $('.password input').attr('type', 'password');
        }
    })
    // Date Picker
    var dp1 = $('#dp1').datepicker().data('datepicker');
    dp1.selectDate(new Date());
})
