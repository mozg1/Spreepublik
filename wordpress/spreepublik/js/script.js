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

    var glow;

    /**
     * Scrolling-event handlers
     */

    $("#backArrow").bind("click", hideContent);

    $(".navpoint").click(function(event) {
        event.preventDefault();
        var clicked = event.target.id;
        var id = clicked.split(/(?=[A-Z])/);
        console.log("id of clicked: " + id);
        console.log(onTop);
        if(!onTop) {
            moveDown();
            $("#content").load("./"+id[0]).fadeIn("slow");

            if(glow) {
                clearInterval(glow);
            }

            setCurrent(id);

        } else {
            stay = true;
            fadeContent(stay).done(reloadContent.bind(undefined,id));
            /*
            $('body').scrollTop($('footer'));
            animate({
                scrollTop: $('footer').offset().top}, 1000);
            */
        }
        return false;
    });

    /**
     * Scrolling-fuctionality
     */

    function hideContent() {
        stay = false;
        fadeContent(stay).done(moveUp);
    }

    var fadeContent = function(stay) {
        console.log(Date.now());
        var r = $.Deferred();
        if(!stay) {
            $("#backArrow").fadeOut("slow");
            $('body').animate({
                scrollTop: $("html").offset().top
            }, 500);
        }

        $("#content").fadeOut("slow");

        setTimeout(function() {
            r.resolve();
        }, 500);
        return r;
    };

    function resetPrevious() {
        $('.actualcontent').each(function () {
            clearInterval(glow);
            var older = this.id;
            console.log("previous tab " + older);
            $("#"+older+"Nav").removeClass('glow');
            $("#"+older+"Nav").toggleClass('opacity');

        });
    }

    function setCurrent(id) {
        var newer = $("#"+id[0]+"Nav");
        console.log("current tab "+ id[0]);

        newer.toggleClass("opacity",1000);
        glow = setInterval(function() {
            newer.toggleClass('glow', 1000);
        },1000);
    }

    /**
     * Function for loading external html content
     * @param id - div id-marker of content to be displayed
     */

    function reloadContent(id) {
        console.log(Date.now());

        resetPrevious();

        setCurrent(id);

        $('body').animate({
            scrollTop: $("#level1").offset().top
        }, 1000);
        $("#content").load("../html/content.html #"+id[0]).fadeIn("slow");
    //    $(".actualcontent").remove();

    }

    /**
     * FORTH
     * Function for moving up the page and animating navigation-points, to display content
     */

    function moveDown() {
        if(!onTop) {
            var h = parseInt($("#navlogo").css("height"), 10);

            $('body').animate({
                scrollTop: $("#level1").offset().top
            }, 1000);

            $("#aboutEl").css({
                "-webkit-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+310+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+310+"deg)" + "skew("+50+"deg)"
            });

            $("#aboutNav").css({
                "-webkit-transform" : "rotate("+-310+"deg)" + "translate("+1+"em, "+-2+"em)",
                "-ms-transform" : "rotate("+-310+"deg)" + "translate("+1+"em, "+-2+"em)",
                "-moz-transform" : "rotate("+-310+"deg)" + "translate("+1+"em, "+-2+"em)",
                "transform" : "rotate("+-310+"deg)" + "translate("+1+"em, "+-2+"em)"
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
                "transform" : "rotate("+170+"deg)" + "translate("+0.5+"em, "+0+"em)"
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

                if ($(window).width() <= 1200){
                    $("#neuesNav").css({
                        "-webkit-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                        "-ms-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                        "-moz-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                        "transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)"
                    });
                } else {
                    $("#neuesNav").css({
                        "-webkit-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                        "-ms-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                        "-moz-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                        "transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)"

                    });
                }



            $("#proEl").css({
                "-webkit-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+-25+"deg)" + "skew("+50+"deg)"
            });

            $("#projekteNav").css({
                "-webkit-transform" : "rotate("+25+"deg)" + "translate("+-2+"em,"+0+"em)",
                "-ms-transform" : "rotate("+25+"deg)" + "translate("+-2+"em,"+0+"em)",
                "-moz-transform" : "rotate("+25+"deg)" + "translate("+-2+"em,"+0+"em)",
                "transform" : "rotate("+25+"deg)" + "translate("+-2+"em,"+0+"em)"
            });

            $("#spendenEl").css({
                "-webkit-transform" : "rotate("+265+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+265+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+265+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+265+"deg)" + "skew("+50+"deg)"
            });

            $("#spendenNav").css({
                "-webkit-transform" : "rotate("+95+"deg)",
                "-ms-transform" : "rotate("+95+"deg)",
                "-moz-transform" :"rotate("+95+"deg)",
                "transform" :"rotate("+95+"deg)"
            });

            $("#blogNav").css({
                "-webkit-transform" : "rotate("+130+"deg)" + "translate("+-10+"px,"+0+"px)",
                "-ms-transform" : "rotate("+130+"deg)" +"translate("+-10+"px,"+0+"px)",
                "-moz-transform" :"rotate("+130+"deg)" + "translate("+-10+"px,"+0+"px)",
                "transform" :"rotate("+130+"deg)"
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
     * Neuigkeiten-Label Sonderfall
     */


    $(window).resize(function() {
        if(onTop) {
            checkSize();
        }
    });

    function checkSize(){
        if ($(".sampleClass").css("float") == "none" ){
                $("#neuesNav").css({
                    "-webkit-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                    "-ms-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                    "-moz-transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)",
                    "transform" : "rotate("+-170+"deg)" + "translate("+0.5+"em,"+1.5+"em)"
                });
            } else {
                $("#neuesNav").css({
                    "-webkit-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                    "-ms-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                    "-moz-transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)",
                    "transform" : "rotate("+-170+"deg)" + "translate("+3+"em,"+1.5+"em)"
                });
            }

    }

    /**
     * BACK
     * Function for moving down the page and animating navigation-points, to display content
     */

    function moveUp() {
        console.log(Date.now());

        resetPrevious();

        $(".actualcontent").remove();



        // arrow is being moved in hideContent-method above
        // $("#backArrow").css({ disply:"none" });

        if(onTop) {

            document.body.currentStyle = computedStyle;

            var h = parseInt($("#navlogo").css("height"), 10);

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

            $("#spendenEl").css({
                "-webkit-transform" : "rotate("+5+"deg)" + "skew("+50+"deg)",
                "-ms-transform" : "rotate("+-5+"deg)" + "skew("+50+"deg)",
                "-moz-transform" : "rotate("+-5+"deg)" + "skew("+50+"deg)",
                "transform" : "rotate("+270+"deg)" + "skew("+50+"deg)"
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
                "transform" : "rotate("+10+"deg)",

                "margin-left" : -900+"%",
                "margin-top" : -100+"%"
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
     * Gallery-function
     */


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