<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="<?=get_template_directory_uri(); ?>/style.css"/>
    <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/js/script.js"></script>
    <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/js/jquery-ui-1.11.4.custom/external/jquery/jquery.js"></script>
    <link rel="stylesheet" href="<?=get_template_directory_uri(); ?>/css/foundation-6/css/foundation.css">
    <script type="text/javascript" src="<?=get_template_directory_uri(); ?>/css/foundation-6/js/foundation.min.js"></script>



    <title></title>
</head>

<!--
Genereller Container-Aufbau lautet:
            body
                img-backArrow

                #main
                    navlogo-navwrapper

                        #testwrap

                            #navlist
                                .navelement
                                    .navpoint
                                        .shortinfo
                                        a href
                        img-logo

                content-contentcontainer

                footer
-->

<body>

<div id="backArrow">
    <img src="<?=get_template_directory_uri(); ?>/img/return13.png">
</div>


    <div id="main">

        <div id="navlogo" class="navwrapper">

            <div id="listwrapper">

                <div id="level1"></div>

            <!-- navpoints from 9 to 20 clockwise
                ..El for parallelogram
                ..Nav for text-label
                ..Point for color-Dot
            -->

            <ul id="navlist">
                <li  class="navelement" id="aboutEl">
                    <div  class="navpoint" id="aboutPoint"> <!-- 1 -->
                        <div  class="shortinfo" id="aboutNav">Über uns</div>
                        <a href="#">
                        </a>
                    </div>

                </li>

                <li  class="navelement" id="neuEl">
                    <div class="navpoint" id="neuesPoint"> <!-- 2 -->
                        <div  class="shortinfo" id="neuesNav">Neues</div>
                        <a href="#">
                        </a>
                    </div>
                </li>

                <li  class="navelement">
                    <div class="navpoint" id="kontaktPoint"> <!-- 3 -->
                        <div  class="shortinfo" id="kontaktNav"></div>
                        <a href="#">
                        </a>
                    </div>
                </li>

                <li  class="navelement" id="proEl">
                    <div class="navpoint" id="projektePoint"> <!-- 4 -->
                        <div class="shortinfo" id="projekteNav">Projekte</div>
                        <a href="#">
                        </a>
                    </div>
                </li>



                <li  class="navelement" id="flotEl">
                    <div class="navpoint" id="flottePoint"> <!-- 5 -->
                        <div class="shortinfo" id="flotteNav">Flotte</div>

                        <a href="#">
                        </a>
                    </div>
                </li>


                <li  class="navelement" id="galEl">
                    <div class="navpoint" id="galleriePoint"> <!-- 6 -->
                        <div  class="shortinfo" id="gallerieNav">Gallerie</div>
                        <a href="#">
                        </a>
                    </div>
                </li>

                <li  class="navelement" id="blogEl">
                    <div  class="navpoint" id="blogPoint"> <!-- 7 -->
                        <div  class="shortinfo" id="blogNav">Blog</div>

                        <a href="#">
                        </a>
                    </div>
                </li>

                <li  class="navelement" id="spendenEl">
                    <div class="navpoint" id="spendenPoint"> <!-- 8 -->
                        <div class="shortinfo" id="spendenNav">Spende</div>

                        <a href="#">
                        </a>
                    </div>
                </li>


                <li  class="navelement" id="imprEl">
                    <div class="navpoint" id="impressumPoint"> <!-- 9 -->
                        <div class="shortinfo" id="impressumNav">Kontakt</div>

                        <a href="#">
                        </a>
                    </div>
                </li>

            </ul>
        </div>

            <img id="spreelogo" class="navigation" src="<?=get_template_directory_uri(); ?>/img/Spreepublik_logo_biggest_schrift.gif">

        </div>

    </div>