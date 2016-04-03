function adjustStyle(width) {
    width = parseInt(width);
    if (width < 701) {
        $("#size-stylesheet").attr("href", "mobile.css");
    } else if ((width >= 701) && (width < 900)) {
        $("#size-stylesheet").attr("href", "mobile.css");
    } else {
        
       $("#size-stylesheet").attr("href", "style.css"); 
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});