$(document).ready(function(){
    $("input[type='text']").val("");
    $("input[class='fahrenheit']").on("keyup",getCel);
    $("input[class='celsius']").on("keyup",getFah);

    function getCel(){
        var value = $("input[class='fahrenheit']").val();
        var temp = (value - 32)* 5/9;
        $('.celsius').val(temp);
    }

    function getFah(){
        var value = $("input[class='celsius']").val();
        var temp = value * (9/5) + 32;
        $('.fahrenheit').val(temp);
    }
});