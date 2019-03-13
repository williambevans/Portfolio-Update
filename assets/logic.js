$(document).ready(function () {
    console.log("ready!");


    $("#profile").click(function () {

        $(".page-close").css("display", "block")

        $("#profile")
            .animate({
                width: "100%"
            }, {
                queue: false,

            })
        $("#resume").hide({

        });
        $("#portfolio").hide({

        });
        $("#contact").hide({

        });

        $("#bio").css("display", "block")

    });

    $("#resume").click(function () {

        $(".page-close").css("display", "block")

        $("#resume")
            .animate({
                width: "100%"
            }, {
                queue: false,

            })
        $("#profile").hide({

        });
        $("#portfolio").hide({

        });
        $("#contact").hide({

        });

        $("#dropResume").css("display", "block")

    });
    $("#portfolio").click(function () {

        $(".page-close").css("display", "block")

        $("#portfolio")
            .animate({
                width: "100%"
            }, {
                queue: false,

            })
        $("#profile").hide({

        });
        $("#resume").hide({

        });
        $("#contact").hide({

        });

        $("#dropPortfolio").css("display", "block")

    });
    $("#contact").click(function () {

        $(".page-close").css("display", "block")

        $("#contact")
            .animate({
                width: "100%"
            }, {
                queue: false,

            })
        $("#profile").hide({

        });
        $("#portfolio").hide({

        });
        $("#resume").hide({

        });

        $("#dropContact").css("display", "block")

    });

    //close page
    $('.page-close').on('click', function () {
        console.log('close test');
        location.reload();
        
    });

    $("#profile").mouseover(function () {
            $(".profileAbout").css("display", "block")
        })
        .mouseout(function () {
            $(".profileAbout").css("display", "none")
        });
    $("#resume").mouseover(function () {
            $(".academic").css("display", "block")
        })
        .mouseout(function () {
            $(".academic").css("display", "none")
        });
    $("#portfolio").mouseover(function () {
            $(".works").css("display", "block")
        })
        .mouseout(function () {
            $(".works").css("display", "none")
        });
    $("#contact").mouseover(function () {
            $(".shout").css("display", "block")
        })
        .mouseout(function () {
            $(".shout").css("display", "none")
        });

});





