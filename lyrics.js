    var my_time;
    var count = 0;
    setTimeout('pageScroll()', 1200);
    function pageScroll() {
    // If condition to set repeat 
        if (count < 2) {
            var objDiv = document.getElementById("lyrics-container");
            objDiv.scrollTop = objDiv.scrollTop + 1;
            if (objDiv.scrollTop == (objDiv.scrollHeight - 61)) {
    setTimeout(function() {
                    objDiv.scrollTop = 0;
                    count++;
        }, 1200);
            }
    //set scrolling time start
            my_time = setTimeout('pageScroll()', 150);
    //set scrolling time end
        }
    }