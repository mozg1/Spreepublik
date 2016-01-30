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
    var onTop = false;
    var stay = false;

    var computedStyle = getComputedStyle(document.body, null);

    /*
        $(".navelement").css({
            left: $("#main").width() / 2 - 270,
            top: $("#main").height() / 2 - 260
        });
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
        }

    });




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

    function reloadContent(id) {
        console.log(Date.now());
        $(".actualcontent").remove();
        $("#content").load("../html/content.html #"+id[0]).fadeIn("slow");
    }

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
                "-ms-transform" : "translate("+0+"px,"+(-h/3)+"px)", // IE 9
                "-webkit-transform" : "translate("+0+"px,"+(-h/3)+"px)", // Safari
                '-o-transform'      : "translate("+0+"px,"+(-h/3)+"px)",
                '-moz-transform'    :"translate("+0+"px,"+(-h/3)+"px)",
                'transform' : 'translate('+0+"px,"+(-h/3)+'px)'
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
                "top": 25+"%",
                "left": 35+"%"
            });

            onTop = true;
            $("#backArrow").fadeIn("slow");

        }
    }



    function moveDown() {
        console.log(Date.now());

        $(".actualcontent").remove();

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
                "top": 18+"%",
                "left":85+"%"
            });

            $("#blogNav").css({
                "-webkit-transform" : "rotate("+-130+"deg)" + "translate("+10+"px,"+0+"px)",
                "-ms-transform" : "rotate("+-130+"deg)" +"translate("+10+"px,"+0+"px)",
                "-moz-transform" :"rotate("+-130+"deg)" + "translate("+10+"px,"+0+"px)",
                "transform" :"rotate("+-130+"deg)" +"translate("+10+"px,"+0+"px)"
            });


            $("#spendenPoint").css({
                "top": 20+"%",
                "left": 80+"%"
            });

            $("#spendenNav").css({
                "-webkit-transform" : "rotate("+-90+"deg)" + "translate("+50+"px,"+25+"px)",
                "-ms-transform" : "rotate("+-90+"deg)" +"translate("+50+"px,"+25+"px)",
                "-moz-transform" :"rotate("+-90+"deg)" + "translate("+50+"px,"+25+"px)",
                "transform" :"rotate("+-90+"deg)" +"translate("+50+"px,"+25+"px)"
            });


            $("#projektePoint").css({
                "top" : 48+"%"
            });


            $("#projekteNav").css({
                "-webkit-transform" : "rotate("+-25+"deg)" + "translate("+50+"px,"+22+"px)",
                "-ms-transform" : "rotate("+-25+"deg)" + "translate("+50+"px,"+22+"px)",
                "-moz-transform" : "rotate("+-25+"deg)" + "translate("+50+"px,"+22+"px)",
                "transform" : "rotate("+-25+"deg)" + "translate("+50+"px,"+22+"px)"
            });

            $("#proEl").css({
                "-webkit-transform" : "rotate("+25+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+25+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+25+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+25+"deg)" + "skew("+50+"deg)"
            });

/*
            $("#neuesPoint").css({
                "top": 18+"%",
                "left": 78+"%"
            });


            $("#neuesNav").css({
                "-webkit-transform" : "rotate("+170+"deg)" + "translate("+-140+"px,"+0+"px)",
                "-ms-transform" : "rotate("+170+"deg)" + "translate("+-140+"px,"+0+"px)",
                "-moz-transform" : "rotate("+170+"deg)" + "translate("+-140+"px,"+0+"px)",
                "transform" : "rotate("+170+"deg)" + "translate("+-140+"px,"+0+"px)"
            });


            $("#neuEl").css({
                "-webkit-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-170+"deg)" + "skew("+50+"deg)"
            });

            $("#galleriePoint").css({
                "top": 32+"%",
                "left":77+"%"
            });

            $("#gallerieNav").css({
                "-webkit-transform" : "rotate("+210+"deg)",
                "-ms-transform" : "rotate("+210+"deg)",
                "-moz-transform" : "rotate("+210+"deg)",
                "transform" : "rotate("+210+"deg)"
            });

            $("#galEl").css({
                "-webkit-transform" : "rotate("+-210+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-210+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-210+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-210+"deg)" + "skew("+50+"deg)"
            });


            $("#flottePoint").css({
                "top": 48+"%",
                "left": 42+"%"
            });


            $("#flotteNav").css({
                "-webkit-transform" : "rotate("+-170+"deg)",
                "-ms-transform" : "rotate("+-170+"deg)",
                "-moz-transform" : "rotate("+-170+"deg)",
                "transform" : "rotate("+-170+"deg)"
            });


            $("#flotEl").css({
                "-webkit-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+170+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+170+"deg)" + "skew("+50+"deg)"
            });

            $("#impressumPoint").css({
                "top": 35+"%",
                "left": 56+"%"
            });


            $("#impressumNav").css({
                "-webkit-transform" : "rotate("+287+"deg)",
                "-ms-transform" : "rotate("+287+"deg)",
                "-moz-transform" : "rotate("+287+"deg)",
                "transform" : "rotate("+287+"deg)"
            });


            $("#imprEl").css({
                "-webkit-transform" : "rotate("+-287+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-287+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-287+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-287+"deg)" + "skew("+50+"deg)"
            });


            $("#aboutPoint").css({
                "top": 32+"%",
                "left": 55+"%"
            });

            $("#aboutNav").css({
                "-webkit-transform" : "rotate("+10+"deg)" + "translate("+-50+"px,"+0+"px)",
                "-ms-transform" : "rotate("+10+"deg)" + "translate("+-50+"px,"+0+"px)",
                "-moz-transform" : "rotate("+10+"deg)" + "translate("+-50+"px,"+0+"px)",
                "transform" : "rotate("+10+"deg)" + "translate("+-50+"px,"+0+"px)"
            });

            $("#aboutEl").css({
                "-webkit-transform" : "rotate("+270+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+270+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+270+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+270+"deg)" + "skew("+50+"deg)"
            });
*/

            onTop = false;
        }
    }



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