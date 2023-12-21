$(document).ready(function () {
    // Change background color on hover using jQuery
    $('.inline-block a').hover(
        function () {
            $(this).css('background-color', '#FFB076');
        },
        function () {
            $(this).css('background-color', '');
        }
    );
});

    $('.inline-block a').on("click", function() {
        console.log("You clicked a nav bar item")

    });

