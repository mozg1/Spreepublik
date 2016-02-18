/**
 * Created by PC1 on 07.11.2015.
 */
window.onload = function() {
/*
    var height = $("#navlogo").height();
    var width = $("#navlogo").width();

    var pos = $("#navlogo").offset();

    var globTop = pos.top;
    var globLeft = pos.left;

     console.log("height: " + height + " width: " + width + " top: " + globTop + " left: " + globLeft);

 */

    /**
     * check-variables for Header-Position-Status
     * @type {boolean}
     */
    var onTop = false;
    var stay = false;

    var computedStyle = getComputedStyle(document.body, null);

    /*
        $(".navelement").css({
            left: $("#main").width() / 2 - 270,
            top: $("#main").height() / 2 - 260
        });
    */

    /**
     * Scrolling-event handlers
     */

    $("#backArrow").bind("click", hideContent);

    $(".navpoint").click(function(event) {
        var clicked = event.target.id;
        var id = clicked.split(/(?=[A-Z])/);
        console.log(onTop);
        if(!onTop) {
            moveUp();
            $("#content").load("../html/content.html #"+id[0]).fadeIn("slow");
        } else {
            stay = true;
            fadeContent(stay).done(reloadContent.bind(undefined,id));
            /*
            $('body').scrollTop($('footer'));
            animate({
                scrollTop: $('footer').offset().top}, 1000);
            */
        }

    });

    /**
     * Scrolling-fuctionality
     */

    function hideContent() {
        stay = false;
        fadeContent(stay).done(moveDown);
    }

    var fadeContent = function(stay) {
        console.log(Date.now());
        var r = $.Deferred();
        if(!stay) {
            $("#backArrow").fadeOut("slow");
        }
        $("#content").fadeOut("slow");

        setTimeout(function() {
            r.resolve();
        }, 500);
        return r;
    };

    /**
     * Function for loading external html content
     * @param id - div id-marker of content to be displayed
     */

    function reloadContent(id) {
        console.log(Date.now());
        $(".actualcontent").remove();
        $("#content").load("../html/content.html #"+id[0]).fadeIn("slow");

    }

    /**
     * FORTH
     * Function for moving up the page and animating navigation-points, to display content
     */

    function moveUp() {
        if(!onTop) {
            var h = parseInt($("#navlogo").css("height"), 10);

            $("#main").css({
                "-ms-transform" : "translate("+0+"px,"+(-h/2)+"px)", // IE 9
                "-webkit-transform" : "translate("+0+"px,"+(-h/2)+"px)", // Safari
                '-o-transform'      : "translate("+0+"px,"+(-h/2)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(-h/2)+"px)",
                    'transform' : 'translate('+0+"px,"+(-h/2)+'px)'
            });

            $("#content").css({
                "-ms-transform" : "translate("+0+"px,"+(-h/12)+"px)", // IE 9
                "-webkit-transform" : "translate("+0+"px,"+(-h/3 - h/12)+"px)", // Safari
                '-o-transform'      : "translate("+0+"px,"+(-h/3 - h/12)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(-h/3 - h/12)+"px)",
                'transform' : 'translate('+0+"px,"+(-h/3 - h/12)+'px)'
            });

            $("footer").css({
                "margin-top" :0
            });


            $("#aboutEl").css({
                "-webkit-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+310+"deg)" + "skew("+50+"deg)"
            });

            $("#aboutNav").css({
                "-webkit-transform" : "rotate("+-310+"deg)" + "translate("+50+"px,"+0+"px)",
                "-ms-transform" : "rotate("+-310+"deg)" + "translate("+50+"px,"+0+"px)",
                "-moz-transform" : "rotate("+-310+"deg)" + "translate("+50+"px,"+0+"px)",
                "transform" : "rotate("+-310+"deg)" + "translate("+50+"px,"+0+"px)"
            });

            $("#imprEl").css({
                "-webkit-transform" : "rotate("+287+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+287+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+287+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+287+"deg)" + "skew("+50+"deg)"
            });

            $("#impressumNav").css({
                "-webkit-transform" : "rotate("+-287+"deg)",
                "-ms-transform" : "rotate("+-287+"deg)",
                "-moz-transform" : "rotate("+-287+"deg)",
                "transform" : "rotate("+-287+"deg)"
            });

            $("#flotEl").css({
                "-webkit-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)"
            });

            $("#flotteNav").css({
                "-webkit-transform" : "rotate("+170+"deg)",
                "-ms-transform" : "rotate("+170+"deg)",
                "-moz-transform" : "rotate("+170+"deg)",
                "transform" : "rotate("+170+"deg)"
            });


            $("#galEl").css({
                "-webkit-transform" : "rotate("+210+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+210+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+210+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+210+"deg)" + "skew("+50+"deg)"
            });

            $("#gallerieNav").css({
                "-webkit-transform" : "rotate("+-210+"deg)",
                "-ms-transform" : "rotate("+-210+"deg)",
                "-moz-transform" : "rotate("+-210+"deg)",
                "transform" : "rotate("+-210+"deg)"
            });

            $("#neuEl").css({
                "-webkit-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+170+"deg)" + "skew("+50+"deg)"
            });

            $("#neuesNav").css({
                "-webkit-transform" : "rotate("+-170+"deg)" + "translate("+140+"px,"+0+"px)",
                "-ms-transform" : "rotate("+-170+"deg)" + "translate("+140+"px,"+0+"px)",
                "-moz-transform" : "rotate("+-170+"deg)" + "translate("+140+"px,"+0+"px)",
                "transform" : "rotate("+-170+"deg)" + "translate("+140+"px,"+0+"px)"
            });

            $("#proEl").css({
                "-webkit-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)"
            });

            $("#projekteNav").css({
                "-webkit-transform" : "rotate("+25+"deg)" + "translate("+-50+"px,"+-22+"px)",
                "-ms-transform" : "rotate("+25+"deg)" + "translate("+-50+"px,"+-22+"px)",
                "-moz-transform" : "rotate("+25+"deg)" + "translate("+-50+"px,"+-22+"px)",
                "transform" : "rotate("+25+"deg)" + "translate("+-50+"px,"+-22+"px)"
            });


            $("#spendenNav").css({
                "-webkit-transform" : "rotate("+90+"deg)" + "translate("+-50+"px,"+-25+"px)",
                "-ms-transform" : "rotate("+90+"deg)" +"translate("+-50+"px,"+-25+"px)",
                "-moz-transform" :"rotate("+90+"deg)" + "translate("+-50+"px,"+-25+"px)",
                "transform" :"rotate("+90+"deg)" +"translate("+-50+"px,"+-25+"px)"
            });

            $("#blogNav").css({
                "-webkit-transform" : "rotate("+130+"deg)" + "translate("+-10+"px,"+0+"px)",
                "-ms-transform" : "rotate("+130+"deg)" +"translate("+-10+"px,"+0+"px)",
                "-moz-transform" :"rotate("+130+"deg)" + "translate("+-10+"px,"+0+"px)",
                "transform" :"rotate("+130+"deg)" +"translate("+-10+"px,"+0+"px)"
            });

            $(".navpoint").css({
                "top": 30+"%",
                "left": 50+"%"
            });

            onTop = true;
            $("#backArrow").fadeIn("slow");

        }
    }

    /**
     * BACK
     * Function for moving down the page and animating navigation-points, to display content
     */

    function moveDown() {
        console.log(Date.now());

        $(".actualcontent").remove();

        // arrow is being moved in hideContent-method above
        // $("#backArrow").css({ disply:"none" });

        if(onTop) {

            document.body.currentStyle = computedStyle;

            var h = parseInt($("#navlogo").css("height"), 10);

            $("footer").css({
                "-ms-transform" : "translate("+0+"px,"+(0)+"px)", // IE 9
                "-webkit-transform" : "translate("+0+"px,"+(0)+"px)", // Safari
                '-o-transform'      : "translate("+0+"px,"+(0)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(0)+"px)",
                'transform' : 'translate('+0+"px,"+(0)+'px)',

                "margin-top" :15+"em"
            });

            $("#content").css({
                "-ms-transform" : "translate("+0+"px,"+(0)+"px)", /* IE 9 */
                "-webkit-transform" : "translate("+0+"px,"+(0)+"px)", /* Safari */
                '-o-transform'      : "translate("+0+"px,"+(0)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(0)+"px)",
                'transform' : 'translate('+0+"px,"+(0)+'px)'
            });

            $("#main").css({
                "-ms-transform" : "translate("+0+"px,"+0+"px)", /* IE 9 */
                "-webkit-transform" : "translate("+0+"px,"+(0)+"px)", /* Safari */
                '-o-transform'      : "translate("+0+"px,"+(0)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(0)+"px)",
                'transform' : 'translate('+0+"px,"+(0)+'px)'
            });



            $("#blogPoint").css({
                "top": -1+"%",
                "left":91+"%"
            });

            $("#blogNav").css({
                "-webkit-transform" : "rotate("+130+"deg)",
                "-ms-transform" : "rotate("+130+"deg)",
                "-moz-transform" :"rotate("+130+"deg)",
                "transform" :"rotate("+130+"deg)"
            });


            $("#spendenPoint").css({
                "top": -5+"%",
                "left": 93+"%"
            });

            $("#spendenNav").css({
                "-webkit-transform" : "rotate("+90+"deg)",
                "-ms-transform" : "rotate("+90+"deg)",
                "-moz-transform" :"rotate("+90+"deg)",
                "transform" :"rotate("+90+"deg)"
            });


            $("#projektePoint").css({
                "top" : 39+"%",
                "left": 35+"%"
            });


            $("#projekteNav").css({
                "-webkit-transform" : "rotate("+-110+"deg)",
                "-ms-transform" : "rotate("+-110+"deg)",
                "-moz-transform" : "rotate("+-110+"deg)",
                "transform" : "rotate("+-110+"deg)"
            });

            $("#proEl").css({
                "-webkit-transform" : "rotate("+110+"deg)" + "skew("+50+"deg)" ,
                "-ms-transform" : "rotate("+110+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+110+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+110+"deg)" + "skew("+50+"deg)"
            });


            $("#neuesPoint").css({
                "top": -21+"%",
                "left": 94+"%"
            });


            $("#neuesNav").css({
                "-webkit-transform" : "rotate("+-30+"deg)",
                "-ms-transform" : "rotate("+-30+"deg)",
                "-moz-transform" : "rotate("+-30+"deg)",
                "transform" : "rotate("+-30+"deg)"
            });


            $("#neuEl").css({
                "-webkit-transform" : "rotate("+30+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+30+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+30+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+30+"deg)" + "skew("+50+"deg)"
            });



            $("#galleriePoint").css({
                "top": 22+"%",
                "left":83+"%"
            });

            $("#gallerieNav").css({
                "-webkit-transform" : "rotate("+-190+"deg)",
                "-ms-transform" : "rotate("+-190+"deg)",
                "-moz-transform" : "rotate("+-190+"deg)",
                "transform" : "rotate("+-190+"deg)"
            });

            $("#galEl").css({
                "-webkit-transform" : "rotate("+190+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+190+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+190+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+190+"deg)" + "skew("+50+"deg)"
            });



            $("#flottePoint").css({
                "top": 44+"%",
                "left": 61+"%"
            });


            $("#flotteNav").css({
                "-webkit-transform" : "rotate("+-150+"deg)",
                "-ms-transform" : "rotate("+-150+"deg)",
                "-moz-transform" : "rotate("+-150+"deg)",
                "transform" : "rotate("+-150+"deg)"
            });


            $("#flotEl").css({
                "-webkit-transform" : "rotate("+150+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+150+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+150+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+150+"deg)" + "skew("+50+"deg)"
            });


            $("#impressumPoint").css({
                "top": 13+"%",
                "left": 81+"%"
            });


            $("#impressumNav").css({
                "-webkit-transform" : "rotate("+-310+"deg)",
                "-ms-transform" : "rotate("+-310+"deg)",
                "-moz-transform" : "rotate("+-310+"deg)",
                "transform" : "rotate("+-310+"deg)"
            });


            $("#imprEl").css({
                "-webkit-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+310+"deg)" + "skew("+50+"deg)"
            });


            $("#aboutPoint").css({
                "top": 7+"%",
                "left": 79+"%"
            });

            $("#aboutNav").css({
                "-webkit-transform" : "rotate("+10+"deg)",
                "-ms-transform" : "rotate("+10+"deg)",
                "-moz-transform" : "rotate("+10+"deg)",
                "transform" : "rotate("+10+"deg)"
            });

            $("#aboutEl").css({
                "-webkit-transform" : "rotate("+-10+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-10+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-10+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-10+"deg)" + "skew("+50+"deg)"
            });


            onTop = false;
        }
    }

    /**
     * test-function for the offset coordinates of LOGO and CONTENT
     */

    $("#offset").bind("click",getOffset);

    function getOffset() {
        var off = $("#navlogo").offset();
        var top = off.top;
        var left = off.left;

        var off2 = $("#content").offset();
        var top2 = off2.top;
        var left2 = off2.left;
        console.log("top: " + top + " left: " + left);
        console.log("top: " + top2 + " left: " + left2);

    }


};