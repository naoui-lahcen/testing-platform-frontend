/*=========================================================================================
    File Name: area.js
    Description: Chartist line chart with area
==========================================================================================*/

// Line chart with area
// ------------------------------
$(window).on("load", function(){

    new Chartist.Line('#area', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
        ]
    }, {
        low: 0,
        showArea: true
    });
});