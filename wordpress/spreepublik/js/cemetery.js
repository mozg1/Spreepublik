/**
 * Created by PC1 on 07.11.2015.
 */
/*
 addEvent(window, "resize", function(event) {
 x = ($(window).width() - $("#navlogo").width())/2 + 37;
 y = ( $(window).height() - $("#navlogo").height())/2 + 40
 });

 $(".navelement").css({
 left:( $(window).width() - $("#navlogo").width())/2 - left,
 top:( $(window).height() - $("#navlogo").height())/2 - top
 });


var addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};