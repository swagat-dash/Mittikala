var length = 0.2;
var delay = 0.2;
var delayCoeficient = 0.1;
var targetOpacity = 0.7;
var images = new Array();

//var maxCoverStep = 13;
var vWidth = $( window ).width();
var vHeight = $( window ).height();
var currentPanel = 1;
var changinSlide = false;
var changingSlideDelay = 1750;
var previousChapter = 3;
var nextChapter = 2;
var currentDetail = 0;
var silentChange = false;
var chapterToLoad = 0;
var mouseAnimating = false;
var miniShapesPosition = 0;
var videoHover = 0;

var videoFrame = new Array();
var videoPlayer = new Array();
//var menuPopupState = false;
//var menuPopupAnimating = false;

var state = new Array();
state["popup"] = false;
state["share"] = false;
state["credits"] = false;

var animatinga = new Array();
animatinga["popup"] = false;
animatinga["share"] = false;
animatinga["cta"] = false;

var svg;

function ignite(){

    $('#fullpage').fullpage({
        continuousVertical: true,
        scrollingSpeed: changingSlideDelay,
        keyboardScrolling: false,
        'onLeave': function(index, nextIndex, direction){
            currentPanel = nextIndex;
            resolveChapters();
            if(currentDetail != 0){
                currentDetail = currentPanel;
            }
            if(silentChange == false){
                changeChapter(index, nextIndex, direction);
            }else{
                spinWheel(direction, nextIndex);
                silentChange = false;
            }
        }
    });

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

    $(".navigation-circle > .text").circleType({radius: 600});
    $(".navigation-circle > .text").css("position", "absolute");

    registerHandlers();

    setWheelDefault();
    prepareCircles();

    var url = window.location.href;
    if(url.search("#chapter01") != -1){
        chapterToLoad = 1;
    }else if(url.search("#chapter02") != -1){
        chapterToLoad = 2;
        silentChange = true;
        $.fn.fullpage.moveSectionDown();
    }else if(url.search("#chapter03") != -1){
        chapterToLoad = 3;
        silentChange = true;
        $.fn.fullpage.moveSectionUp();
    }

    currentDetail = chapterToLoad;

    drawLoading(1);
    updateLayout();
}

function resolveChapters(){
    if(currentPanel == 1){
        previousChapter = 3;
    }else{
        previousChapter = currentPanel - 1;
    }
    if(currentPanel == 3){
        nextChapter = 1;
    }else{
        nextChapter = currentPanel + 1;
    }

    TweenLite.to(".previous-border", 0, {borderColor: colours[previousChapter], delay: 1});
    TweenLite.to(".next-border", 0, {borderColor: colours[nextChapter], delay: 1});
}

function preload() {
  for (var i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}


function registerHandlers(){

    console.log("Hello there : ]");

    $( window )
        .resize(function() {
            updateLayout();
        })

        .mousemove(function( event ) {
            mouseMoveIllustration(event.pageX, event.pageY);
        });

    $( window ).keydown(function( event ) {
        if(event.which == 27 && activeVideo != 0){
            hideVideo();
        }
    });

    $(window).on('hashchange', function() {
        var currentState = history.state;
        if(currentState == 0){
            if(animating <= 0){
                hideDetail();
                zoomShapes(false);
                setTimeout(function(){
                    $.fn.fullpage.setMouseWheelScrolling(true);
                    $.fn.fullpage.setAllowScrolling(true);
                    TweenLite.to(".cta-btn", 0, {display: "block"});
                    currentDetail = 0;
                }, 1000);
            }else{
                setTimeout(function() {
                    if(animating <= 0){
                        hideDetail();
                        zoomShapes(false);
                        setTimeout(function(){
                            $.fn.fullpage.setMouseWheelScrolling(true);
                            $.fn.fullpage.setAllowScrolling(true);
                            TweenLite.to(".cta-btn", 0, {display: "block"});
                            currentDetail = 0;
                        }, 1000);
                    }
                }, 750);
            }
        }else if(currentState == 1 || currentState == 2 || currentState == 3){
            if(currentDetail == 0 && currentPanel == currentState){
                if(animating <= 0 && changinSlide == false){
                    currentDetail = currentState;
                    drawDetail(currentState);
                }else{
                    setTimeout(function() {
                        if(animating <= 0 && changinSlide == false){
                            currentDetail = currentState;
                            drawDetail(currentState);
                        }
                    }, 750);
                }
            }else if (currentDetail != 0) {
                if(animating <= 0 && changinSlide == false){
                    silentChange = true;

                    hideChapter(currentPanel, currentState);
                    TweenLite.to(".container-chapter", 0.5, {opacity: 0, display: "none", ease: "Power1.easeInOut"});
                    TweenLite.to(".detail-text", 0, {opacity: 0, display: "none", delay: 0});
                    setTimeout(function() {
                        $( "div.main-page" ).scrollTop( 0 );
                    }, 600);
                    TweenLite.to(".container-chapter-0"+currentState, 0, {opacity: 1, display: "block", ease: "Power1.easeInOut", delay: 0.7});

                    TweenLite.to(".detail-center > .background", 0.3, {height: 0, ease: "Power2.easeOut"});
                    TweenLite.to(".detail-center > .background", 0, {backgroundColor: colours[previousChapter], delay: 0.3});
                    TweenLite.to(".detail-center > .background", 0.3, {height: "52px", ease: "Power2.easeOut", delay: 0.3});

                    innerDetailChange(currentState);

                    setTimeout(function() {
                        drawChapter(currentState, 0);
                        TweenLite.fromTo(".detail-text-0"+currentState, 0.5, {top: "170px", opacity: 0}, {top: "150px", opacity: 1, display: "block", ease: "Power2.easeOut", delay: 0.5});
                        if((currentDetail < currentState || (currentDetail == 3 && currentState == 1)) && !(currentDetail == 1 && currentState == 3)){
                            $.fn.fullpage.moveSectionDown();
                        }else{
                            $.fn.fullpage.moveSectionUp();
                        }
                        currentPanel = currentDetail = currentState;
                    }, 1000);

                }
            }
        }
        //if(curre)
    });


    $(".Return")
        .mouseenter(function() {
            TweenLite.to(".Return > .underline", 0.25, {scaleX: 0, transformOrigin: "right", ease: "Power2.easeInOut"});
            TweenLite.to(".Return > .underline", 0.25, {scaleX: 1, transformOrigin: "left", ease: "Power2.easeInOut", delay: 0.25});
        });

    $(".btn-final-explore-right")
        .mouseenter(function() {
            TweenLite.to(".final-next > .explore > .underline", 0.25, {scaleX: 0, transformOrigin: "right", ease: "Power2.easeInOut"});
            TweenLite.to(".final-next > .explore > .underline", 0.25, {scaleX: 1, transformOrigin: "left", ease: "Power2.easeInOut", delay: 0.25});
        });

    $(".btn-final-explore-left")
        .mouseenter(function() {
            TweenLite.to(".final-previous > .explore > .underline", 0.25, {scaleX: 0, transformOrigin: "right", ease: "Power2.easeInOut"});
            TweenLite.to(".final-previous > .explore > .underline", 0.25, {scaleX: 1, transformOrigin: "left", ease: "Power2.easeInOut", delay: 0.25});
        });



    $(".main-page")
        .scroll(function(){
            var wScroll = $(this).scrollTop();
            if(currentDetail != 0){
                if(wScroll > $(".container-chapter-0"+currentDetail).height()-100){
                    if(state["credits"] == false){
                        state["credits"] = true;
                        TweenLite.to(".mittikala", 0.25, {opacity: 1, display: "block"});
                        TweenLite.fromTo(".mittikala-credits > .underline-white", 0.25, {width: "27px", left: "0px"}, {width: "0px", left: "27px", ease: "Power2.easeInOut", delay: 0.25});
                    }
                }else{
                    if(state["credits"] == true){
                        state["credits"] = false;
                        TweenLite.to(".mittikala", 0.25, {opacity: 0, display: "none", delay: 0.1});
                        TweenLite.fromTo(".mittikala-credits > .underline-white", 0.25, {width: "0px", left: "0px"}, {width: "27px", left: "0px", ease: "Power2.easeInOut"});
                    }
                }
            }

            if(currentDetail == 1){

                if(chapterTriggers01[1] == false){
                    if((($(".chapter-01-box-video-01").offset().top)-vHeight+100) <= 0){
                        chapterTriggers01[1] = true;
                        setTimeout(function(){
                            chapterTriggersVideo01[1] = true;
                            if(videoHover == 1){
                                attempToPlayVideo(1);
                            }
                        }, 1500);
                        drawCircle(".video-play-1 > .video-play-circle-large", 0.5, 1);
                        drawCircle(".video-play-1 > .video-play-circle-small", 0.5, 1);
                        TweenLite.to(".video-play-1 > .circle-component", 0.5, {rotation: "+=90deg", delay: 1});
                        TweenLite.to(".video-play-1 > .circle-component", 0, {rotation: "-=90deg", delay: 1.5});
                        TweenLite.to(".video-play-1 > .video-play-arrow", 0.5, {opacity: 1, delay: 1});

                        TweenLite.fromTo(".chapter-01-box-video-01", 1.5, {left: ((vWidth/2)-10)+"px"}, {width: "540px", left: "0px", ease: "Power4.easeOut"});
                        TweenLite.fromTo(".video-title-chapter-01-01", 0.7, {bottom: "100px"}, {bottom: "118px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                }else if(chapterTriggers01[2] == false){
                    if((($(".chapter-01-bg-row-02").offset().top)-vHeight+100) <= 0){
                        chapterTriggers01[2] = true;
                        TweenLite.fromTo(".chapter-01-bg-row-02", 1.5, {width: "0px"}, {width: (vWidth/2 - 40)+"px", ease: "Power4.easeOut"});
                        TweenLite.to(".chapter-01-bg-row-02", 0, {width: "calc(100% - 30px)", delay: 1.5});
                    }
                }else if(chapterTriggers01[3] == false){
                    if((($(".chapter-01-box-video-02").offset().top)-vHeight+100) <= 0){
                        chapterTriggers01[3] = true;
                        setTimeout(function(){
                            chapterTriggersVideo01[2] = true;
                            if(videoHover == 2){
                                attempToPlayVideo(2);
                            }
                        }, 1500);
                        drawCircle(".video-play-2 > .video-play-circle-large", 0.5, 1);
                        drawCircle(".video-play-2 > .video-play-circle-small", 0.5, 1);
                        TweenLite.to(".video-play-2 > .circle-component", 0.5, {rotation: "+=90deg", delay: 1});
                        TweenLite.to(".video-play-2 > .circle-component", 0, {rotation: "-=90deg", delay: 1.5});
                        TweenLite.to(".video-play-2 > .video-play-arrow", 0.5, {opacity: 1, delay: 1});

                        TweenLite.fromTo(".chapter-01-box-video-02", 1.5, {right: ((vWidth/2)-10)+"px"}, {width: "540px", right: "0px", ease: "Power4.easeOut"});
                        TweenLite.fromTo(".video-title-chapter-01-02", 0.7, {bottom: "100px"}, {bottom: "118px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                }else if(chapterTriggers01[4] == false){
                    if((($(".chapter-01-bg-row-03").offset().top)-vHeight+100) <= 0){
                        chapterTriggers01[4] = true;
                        TweenLite.fromTo(".chapter-01-bg-row-03", 1.5, {width: "0px"}, {width: (vWidth/2- 40)+"px", ease: "Power4.easeOut"});
                        TweenLite.to(".chapter-01-bg-row-03", 0, {width: "calc(100% - 30px)", delay: 1.5});
                    }
                }else if(chapterTriggers01[5] == false){
                    if((($(".chapter-01-box-video-03").offset().top)-vHeight+100) <= 0){
                        chapterTriggers01[5] = true;
                        setTimeout(function(){
                            chapterTriggersVideo01[3] = true;
                            if(videoHover == 3){
                                attempToPlayVideo(3);
                            }
                        }, 1500);
                        drawCircle(".video-play-3 > .video-play-circle-large", 0.5, 1);
                        drawCircle(".video-play-3 > .video-play-circle-small", 0.5, 1);
                        TweenLite.to(".video-play-3 > .circle-component", 0.5, {rotation: "+=90deg", delay: 1});
                        TweenLite.to(".video-play-3 > .circle-component", 0, {rotation: "-=90deg", delay: 1.5});
                        TweenLite.to(".video-play-3 > .video-play-arrow", 0.5, {opacity: 1, delay: 1});

                        TweenLite.fromTo(".chapter-01-box-video-03", 1.5, {left: ((vWidth/2)-10)+"px"}, {width: "540px", left: "0px", ease: "Power4.easeOut"});
                        TweenLite.fromTo(".video-title-chapter-01-03", 0.7, {bottom: "100px"}, {bottom: "118px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                }

            }else if(currentDetail == 2){

                if(chapterTriggers02[1] == false){
                    if((($(".chart-bg-row-01-back").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[1] = true;
                        TweenLite.to(".chart-bg-row-01-back", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-01-front", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-01-front > .window", 1, {width: "100%", ease: "Power1.easeInOut"});
                    }
                } if(chapterTriggers02[2] == false){
                    if((($(".chart-bg-row-01-front").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[2] = true;

                        TweenLite.to(".circle-chapter-02-chart-back > .circle-window-left > .circle-part-left", 1.5, {rotation: "225deg", ease: "Power2.easeInOut", delay: 0});
                        TweenLite.to(".circle-chapter-02-chart-small-back > .circle-window-left > .circle-part-left", 1.5, {rotation: "225deg", ease: "Power2.easeInOut", delay: 0});

                        TweenLite.to(".chapter-02-chart-01-right > .circle-chapter-02-chart-front > .circle-window-right > .circle-part-right", 1.5, {rotation: "225deg", ease: "Power2.easeInOut", delay: 0});
                        TweenLite.to(".chapter-02-chart-01-right > .circle-chapter-02-chart-small-front > .circle-window-right > .circle-part-right", 1.5, {rotation: "225deg", ease: "Power2.easeInOut", delay: 0});

                        TweenLite.to(".chapter-02-chart-01-left > .circle-chapter-02-chart-front > .circle-window-right > .circle-part-right", 1.5, {rotation: "110deg", ease: "Power2.easeInOut", delay: 0});
                        TweenLite.to(".chapter-02-chart-01-left > .circle-chapter-02-chart-small-front > .circle-window-right > .circle-part-right", 1.5, {rotation: "110deg", ease: "Power2.easeInOut", delay: 0});

                        TweenLite.fromTo(".video-title-chapter-02-01", 0.7, {bottom: "130px"}, {bottom: "148px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                } if(chapterTriggers02[3] == false){
                    if((($(".chart-bg-row-02-back").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[3] = true;
                        TweenLite.to(".chart-bg-row-02-back", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-02-front", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-02-front > .window", 1, {width: "100%", ease: "Power1.easeInOut"});
                    }
                } if(chapterTriggers02[4] == false){
                    if((($(".chart-bg-row-02-front").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[4] = true;
                        TweenLite.to(".chapter-02-chart-02 > .graph", 1.5, {height: "100%", ease: "Power1.easeInOut", delay: 0.2});

                        TweenLite.fromTo(".video-title-chapter-02-02", 0.7, {bottom: "120px"}, {bottom: "138px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                } if(chapterTriggers02[5] == false){
                    if((($(".chart-bg-row-03-back").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[5] = true;
                        TweenLite.to(".chart-bg-row-03-back", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        //TweenLite.to(".chart-bg-row-03-back", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-03-front", 1, {scaleX: 1, x: "0%", ease: "Power1.easeInOut"});
                        TweenLite.to(".chart-bg-row-03-front > .window", 1, {width: "100%", ease: "Power1.easeInOut"});
                    }
                } if(chapterTriggers02[6] == false){
                    if((($(".chart-bg-row-03-front").offset().top)-vHeight+100) <= 0){
                        chapterTriggers02[6] = true;
                        for(var i = 1; i <= 13; i++){
                            TweenLite.to(".info-dot-"+i, 0.5, {opacity: 1, display: "block", ease: "Power1.easeInOut", delay: (i*0.05)+0.2});
                        }

                        TweenLite.fromTo(".video-title-chapter-02-03", 0.7, {bottom: "130px"}, {bottom: "148px", opacity: 1, ease: "Power2.easeInOut", delay: 1});
                    }
                }

            }else if(currentDetail == 3){
                if(chapterTriggers03[1] == false){
                    if((($(".chapter-03-bg-1").offset().top)-vHeight+100) <= 0){
                        chapterTriggers03[1] = true;
                        TweenLite.to(".chapter-03-bg-1", 1.5, {scaleX: 1, x: 0, ease: "Power1.easeInOut"});
                    }
                }else if(chapterTriggers03[2] == false){
                    if((($(".chapter-03-box-video-01").offset().top)-vHeight+100) <= 0){
                        chapterTriggers03[2] = true;
                        TweenLite.to(".chapter-03-bg-2", 1.2, {scaleX: 1, x: 0, ease: "Power1.easeInOut"});
                        TweenLite.to(".chapter-03-box-video-01", 1.2, {x: 0, ease: "Power4.easeOut", delay: 0.4});
                        TweenLite.to(".chapter-03-box-video-01 > .window", 1.7, {width: "100%", ease: "Power4.easeOut", delay: 0.4});

                        TweenLite.fromTo(".video-play-4", 0.2, {opacity: 0}, {opacity: 1, delay: 1.39});
                        drawCircle(".video-play-4 > .video-play-circle-large", 0.5, 1.4);
                        drawCircle(".video-play-4 > .video-play-circle-small", 0.5, 1.4);
                        TweenLite.to(".video-play-4 > .circle-component", 0.5, {rotation: "+=90deg", delay: 1.4});
                        TweenLite.to(".video-play-4 > .circle-component", 0, {rotation: "-=90deg", delay: 1.9});
                        TweenLite.to(".video-play-4 > .video-play-arrow", 0.5, {opacity: 1, delay: 1.4});

                        setTimeout(function () {
                            chapterTriggersVideo01[4] = true;
                            if(videoHover == 4){
                                attempToPlayVideo(4);
                            }
                        }, 1900);
                    }
                }
            }


            TweenLite.to(".main-page-inside", 0.5, {top: -wScroll});

                        //alert('ad just passed.');
        });

    /*$( document ).keypress(function( event ) {
        if ( event.which == 114 ) {

            //TweenLite.to(".video-play-circle-large", 0, {rotation: "180deg"});
            //TweenLite.to(".video-play-circle-small", 0, {rotation: "90deg"});
        }
        xTriggered++;
        var msg = "Handler for .keypress() called " + xTriggered + " time(s).";
        $.print( msg, "html" );
        $.print( event );
    });*/

    $(".next")
        .click(function() {
            if(changinSlide == false){
                $.fn.fullpage.moveSectionDown();
            }
        });

    $(".previous")
        .click(function() {
            if(changinSlide == false){
                $.fn.fullpage.moveSectionUp();
            }
        });

    $(".scroll-fix")
        .click(function() {
            TweenLite.to(".main-page-window", 0, {scrollTop: 0});
            TweenLite.to(".main-page", 0, {scrollTop: 0});
            TweenLite.to(".container", 0, {top: "0px"});
            TweenLite.to(".main-page", 0, {height: ($( window ).height()*0.9)+"px"});
        });

    $(".navigation-circle-left")
        .mouseover(function() {
            TweenLite.to(".section-chapter-0"+previousChapter, 0, {fontWeight: "bold"});
        })

        .mouseout(function() {
            TweenLite.to(".section-chapter-0"+previousChapter, 0, {fontWeight: "normal"});
        })

        .click(function() {
            if(changinSlide == false){
                $.fn.fullpage.moveSectionUp();
            }
        });

    $(".navigation-circle-right")
        .mouseover(function() {
            TweenLite.to(".section-chapter-0"+nextChapter, 0, {fontWeight: "bold"});
        })

        .mouseout(function() {
            TweenLite.to(".section-chapter-0"+nextChapter, 0, {fontWeight: "normal"});
        })

        .click(function() {
            if(changinSlide == false){
                $.fn.fullpage.moveSectionDown();
            }
        });
        $(".ctaindex")
        .click(function() {
            if(animating <= 0 && changinSlide == false){
                location.href='mk/index.html';
            }
        })

    $(".cta")
        .click(function() {
            if(currentPanel == 1 && changinSlide == false){
                drawDetail(1);
            }
            else if(currentPanel == 2 && changinSlide == false){
                location.href='mk/category.html';
            }
            else if(currentPanel == 3 && changinSlide == false){
                location.href='mk/index.html#contact-us';
            }
        })


        .mouseover(function() {
            zoomShapes(true);
        })

        .mouseout(function() {
            if(currentDetail == 0){
                zoomShapes(false);
            }
        });

    $(".cta-btn")
        .mouseover(function() {
            if(vWidth > 940 && animatinga["cta"] == false){
                animatinga["cta"] = true;
                TweenLite.fromTo(".cta-discover-0"+currentPanel, 0.3, {top: "0px", opacity: 1}, {top: "-8px", opacity: 0, ease: "Power2.easeOut"});
                setTimeout(function() {
                    if(currentDetail == 0){
                        TweenLite.fromTo(".cta-discover-0"+currentPanel, 0.3, {top: "8px", opacity: 0}, {top: "0px", opacity: 1, delay: 0, ease: "Power2.easeOut"});
                    }
                    setTimeout(function() {
                        animatinga["cta"] = false;
                    }, 300);
                }, 300);
            }
        })

    $(".detail-continue")
        .click(function() {
            TweenLite.to(".main-page", 0.5, {scrollTop: "+="+(vHeight/2)+"px"});
        });

    $(".detail-center")
        .click(function() {
            if(animating <= 0){
                hideDetail();
                zoomShapes(false);
                setTimeout(function(){
                    $.fn.fullpage.setMouseWheelScrolling(true);
                    $.fn.fullpage.setAllowScrolling(true);
                    TweenLite.to(".cta-btn", 0, {display: "block"});
                    currentDetail = 0;
                }, 1000);
            }
        })

        .mouseenter(function() {
            if(vWidth > tabletWidth){
                TweenLite.fromTo(".detail-center > .underline-white", 0.2, {scaleX: 0, transformOrigin: "left"},{scaleX: 1});
                TweenLite.fromTo(".detail-center > .underline-white", 0.2, {scaleX: 1, transformOrigin: "right"},{scaleX: 0, delay: 0.22});
            }
        })

    $(".btn-final-previous")
        .mouseover(function() {
            TweenLite.fromTo(".previous-border", 0.3, {scale: 0.7, opacity: 0}, {scale: 1, opacity: 1, ease: "Power3.easeOut"});
        })

        .mouseout(function() {
            TweenLite.fromTo(".previous-border", 0.3, {scale: 1, opacity: 1}, {scale: 0.7, opacity: 0, ease: "Power3.easeOut"});
        })

        .click(function() {
            silentChange = true;

            hideChapter(currentPanel, previousChapter);
            TweenLite.to(".container-chapter-0"+currentPanel, 0.5, {opacity: 0, display: "none", ease: "Power1.easeInOut"});
            TweenLite.to(".detail-text", 0, {opacity: 0, display: "none", delay: 0});
            setTimeout(function() {
                $( "div.main-page" ).scrollTop( 0 );
            }, 600);
            TweenLite.to(".container-chapter-0"+previousChapter, 0, {opacity: 1, display: "block", ease: "Power1.easeInOut", delay: 0.7});

            TweenLite.to(".detail-center > .background", 0.3, {height: 0, ease: "Power2.easeOut"});
            TweenLite.to(".detail-center > .background", 0, {backgroundColor: colours[previousChapter], delay: 0.3});
            TweenLite.to(".detail-center > .background", 0.3, {height: "52px", ease: "Power2.easeOut", delay: 0.3});

            innerDetailChange(previousChapter);

            setTimeout(function() {
                drawChapter(previousChapter, 0);
                TweenLite.fromTo(".detail-text-0"+previousChapter, 0.5, {top: "170px", opacity: 0}, {top: "150px", opacity: 1, display: "block", ease: "Power2.easeOut", delay: 0.5});
                $.fn.fullpage.moveSectionUp();
                currentPanel = currentDetail = previousChapter;
                resolveChapters();
            }, 1000);

            window.history.pushState(previousChapter, "Chapter 0"+previousChapter, "#chapter0"+previousChapter);
        });

    $(".btn-final-next")
        .mouseover(function() {
            TweenLite.fromTo(".next-border", 0.3, {scale: 0.7, opacity: 0}, {scale: 1, opacity: 1, ease: "Power3.easeOut"});
        })

        .mouseout(function() {
            TweenLite.fromTo(".next-border", 0.3, {scale: 1, opacity: 1}, {scale: 0.7, opacity: 0, ease: "Power3.easeOut"});
        })

        .click(function() {
            silentChange = true;

            hideChapter(currentPanel, nextChapter);
            TweenLite.to(".container-chapter-0"+currentPanel, 0.5, {opacity: 0, display: "none", ease: "Power1.easeInOut"});
            TweenLite.to(".detail-text", 0, {opacity: 0, display: "none", delay: 0});
            setTimeout(function() {
                $( "div.main-page" ).scrollTop( 0 );
            }, 600);
            TweenLite.to(".container-chapter-0"+nextChapter, 0, {opacity: 1, display: "block", ease: "Power1.easeInOut", delay: 0.7});

            TweenLite.to(".detail-center > .background", 0.3, {height: 0, ease: "Power2.easeOut"});
            TweenLite.to(".detail-center > .background", 0, {backgroundColor: colours[nextChapter], delay: 0.3});
            TweenLite.to(".detail-center > .background", 0.3, {height: "52px", ease: "Power2.easeOut", delay: 0.3});

            innerDetailChange(nextChapter);

            setTimeout(function() {
                drawChapter(nextChapter, 0);
                TweenLite.fromTo(".detail-text-0"+nextChapter, 0.5, {top: "170px", opacity: 0}, {top: "150px", opacity: 1, display: "block", ease: "Power2.easeOut", delay: 0.5});
                $.fn.fullpage.moveSectionDown();
                currentPanel = currentDetail = nextChapter;
                resolveChapters();
            }, 1000);

            window.history.pushState(nextChapter, "Chapter 0"+nextChapter, "#chapter0"+nextChapter);
        });

        $(".mittikala")
            .mouseenter(function(){
                if(vWidth > tabletWidth){
                    TweenLite.fromTo(".mittikala-credits > .underline-white", 0.25,
                        {width: "0px", left: "0px"},
                        {width: "27px", left: "0px", ease: "Power2.easeInOut", delay: 0});
                    TweenLite.fromTo(".mittikala-credits > .underline-white", 0.25,
                        {width: "27px", left: "0px"},
                        {width: "0px", left: "27px", ease: "Power2.easeInOut", delay: 0.25});
                }
            });

    $(".popup")
        .mouseenter(function() {

            if(vWidth > tabletWidth){
                if(animatinga["popup"] == false){
                    state["popup"] = true;
                    animatinga["popup"] = true;

                    TweenLite.to(".popup", 0, {height: vHeight+"px"});
                    TweenLite.to(".popup, .popup-background", 0.5, {width: "300px", ease: "Power2.easeOut"});
                    setTimeout(function() {
                        if(state["popup"] == false){

                            TweenLite.to(".popup", 0.4, {width: "130px"});
                            TweenLite.to(".popup-background", 0.5, {width: "0px", ease: "Power2.easeIn"});
                            TweenLite.to(".popup", 0, {height: "65px", delay: 0.5});
                            setTimeout(function() {
                                animatinga["popup"] = false;
                            }, 550);
                        } else {
                            animatinga["popup"] = false;
                        }
                    }, 550);
                }else{
                    state["popup"] = true;
                }
            }
        })

        .mouseleave(function() {

            if(vWidth > tabletWidth){
                if(animatinga["popup"] == false){
                    state["popup"] = false;
                    animatinga["popup"] = true;

                    TweenLite.to(".popup", 0.4, {width: "130px"});
                    TweenLite.to(".popup-background", 0.5, {width: "0px", ease: "Power2.easeIn"});
                    TweenLite.to(".popup", 0, {height: "65px", delay: 0.5});

                    setTimeout(function() {
                        if(state["popup"] == true){
                            TweenLite.to(".popup", 0, {height: vHeight+"px"});
                            TweenLite.to(".popup, .popup-background", 0.5, {width: "300px", ease: "Power2.easeOut"});
                            setTimeout(function() {
                                animatinga["popup"] = false;
                            }, 550);
                        } else {
                            animatinga["popup"] = false;
                        }
                    }, 550);
                }else{
                    state["popup"] = false;
                }
            }
        })

        .click(function() {
            if(vWidth <= tabletWidth && vWidth > mobileWidth){
                if(animatinga["popup"] == false){
                    if(state["popup"] == false){
                        animatinga["popup"] = true;
                        state["popup"] = true;
                        TweenLite.to(".popup", 0, {height: vHeight+"px"});
                        TweenLite.to(".popup, .popup-background", 0.5, {width: "300px", ease: "Power2.easeOut"});
                        TweenLite.to(".popup-tablet-exit", 0, {display: "block"});
                        setTimeout(function() {
                            animatinga["popup"] = false;
                        }, 550);
                    }else{
                        animatinga["popup"] = true;
                        state["popup"] = false;
                        TweenLite.to(".popup", 0.4, {width: "130px"});
                        TweenLite.to(".popup-background", 0.5, {width: "0px", ease: "Power2.easeIn"});
                        TweenLite.to(".popup", 0, {height: "65px", delay: 0.5});
                        TweenLite.to(".popup-tablet-exit", 0, {display: "none"});
                        setTimeout(function() {
                            animatinga["popup"] = false;
                        }, 550);
                    }
                }

            }
        });

        /*$(document)
            .on('webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange', function(e){
                var docState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
                var docEvent = docState ? 'FullscreenOn' : 'FullscreenOff';

                // Now do something interesting
                //alert('Event: ' + docEvent);

                if(videoInFullScreen == false){
                    for(var i = 1; i <= 4; i++){
                        var otherVideo = document.getElementById("video-mobile-popup-"+i);
                        otherVideo.pause();
                    }
                }else{
                    videoInFullScreen = false;
                }

            });*/

        $(".video-mobile-play")
            .click(function(){
                var id = $(this).attr("data-videoId");
                activeVideo = "1"+id;

                TweenLite.to(".video-mobile-popup-box-"+id+", .video-mobile-exit", 0.5, {opacity: 1, display: "block", visibility: "visible"});
                TweenLite.to(".detail-center > .background", 0.5, {opacity: 0.5});
            });

        $(".video-mobile-exit")
            .click(function() {
                TweenLite.to(".video-mobile-popup-box, .video-mobile-exit", 0.5, {opacity: 0, display: "none"});
                TweenLite.to(".detail-center > .background", 0.5, {opacity: 1});

                videoPlayer[activeVideo].api("seekTo", 0);
                videoPlayer[activeVideo].api("pause");
                activeVideo = 0;
            })

    $(".next")
        .mouseenter(function() {
            if(vWidth > tabletWidth){
                TweenLite.to(".next > .arrow", 0.2, {x: "3px"});
            }
        })

        .mouseleave(function() {
            if(vWidth > tabletWidth){
                TweenLite.to(".next > .arrow", 0.2, {x: "0px"});
            }
        })

    $(".previous")
        .mouseenter(function() {
            if(vWidth > tabletWidth){
                TweenLite.to(".previous > .arrow", 0.2, {x: "-3px"});
            }
        })

        .mouseleave(function() {
            if(vWidth > tabletWidth){
                TweenLite.to(".previous > .arrow", 0.2, {x: "0px"});
            }
        })


    $(".popup-tablet-exit")
        .click(function() {
            if(vWidth <= tabletWidth){
                animatinga["popup"] = true;
                state["popup"] = false;
                TweenLite.to(".popup", 0.4, {width: "130px"});
                TweenLite.to(".popup-background", 0.5, {width: "0px", ease: "Power2.easeIn"});
                TweenLite.to(".popup", 0, {height: "65px", delay: 0.5});
                TweenLite.to(".popup-tablet-exit", 0, {display: "none"});
                setTimeout(function() {
                    animatinga["popup"] = false;
                }, 550);
            }
        });

    $(".share")
        .click(function() {
            if(animatinga["share"] == false){
                animatinga["share"] = true;
                TweenLite.to(".share-box > .share", 0.2, {opacity: 0, display: "none"});
                TweenLite.to(".share-box > .expanded", 0.2, {opacity: 1, display: "block"});
                TweenLite.fromTo(".share-box > .expanded > .img-1", 0.3, {x: "60px"}, {x: "0px"});
                TweenLite.fromTo(".share-box > .expanded > .img-2", 0.3, {x: "30px"}, {x: "0px"});
                TweenLite.fromTo(".share-box > .expanded > .img-3", 0.3, {x: "10px"}, {x: "0px"});
                TweenLite.fromTo(".share-box > .expanded > .cross", 0.3, {scale: 0.1, rotation: "-315deg"}, {scale: 1, rotation: "45deg"});
                TweenLite.to(".share > .underline", 0.3, {scaleX: 0, x: "29px"});
                setTimeout(function() {
                    animatinga["share"] = false;
                },350);
            }
        })

        .mouseenter(function(){
            if(animatinga["share"] == false && vWidth > tabletWidth){
                TweenLite.fromTo(".share > .underline-white", 0.3, {scaleX: 0, x: "-59px"}, {scaleX: 1, x: "0px"});
                TweenLite.fromTo(".share > .underline-white", 0.3, {scaleX: 1, x: "0px"}, {scaleX: 0, x: "59px", delay: 0.3});
            }
        })

    $(".cross")
        .click(function() {
            if(animatinga["share"] == false){
                animatinga["share"] = true;
                TweenLite.to(".share-box > .share", 0.3, {opacity: 1, display: "block", delay: 0.2});
                TweenLite.to(".share-box > .expanded", 0.3, {opacity: 0, display: "none"});
                TweenLite.fromTo(".share-box > .expanded > .img-1", 0.3, {x: "0px"}, {x: "60px"});
                TweenLite.fromTo(".share-box > .expanded > .img-2", 0.3, {x: "0px"}, {x: "30px"});
                TweenLite.fromTo(".share-box > .expanded > .img-3", 0.3, {x: "0px"}, {x: "10px"});
                TweenLite.to(".share-box > .expanded > .cross", 0.3, {scale: 0.1, rotation: "+=360deg"});
                TweenLite.fromTo(".share > .underline", 0.3, {scaleX: 0, x: "-59px"}, {scaleX: 1, x: "0px"});
                TweenLite.to(".share > .underline-white", 0, {scaleX: 0, x: "-59px"});
                setTimeout(function() {
                    animatinga["share"] = false;
                },550);
            }
        })



    $(".info-dot")
        .mouseover(function() {
            var id = $(this).attr("infoDot");
            TweenLite.to(".info-dot-text-"+id, 0.5, {display: "block", opacity: 1, ease:"Power1.easeInOut"});
        })

        .mouseout(function(){
            TweenLite.to((".info-dot-text-"+$(this).attr("infoDot")), 0.5, {display: "none", opacity: 0, ease:"Power2.easeInOut"});
        });



    $(".chapter-01-box")
        .mouseover(function() {
            if(vWidth > tabletWidth){
                var id = $(this).attr("data-videoId");
                videoHover = id;
                attempToPlayVideo(id);
            }
        })

        .mouseleave(function() {
            if(vWidth > tabletWidth){
                var id = $(this).attr("data-videoId");
                var myVideo = document.getElementById("video"+id);
                videoHover = 0;
                TweenLite.to(".chapter-01-window-video-0"+id, 0.2, {scale: 1, ease:"Power1.easeIn"});
                TweenLite.to(".chapter-01-window-video-0"+id+" > img", 0.2, {opacity: 1, ease:"Power1.easeOut"});

                setTimeout(function(){
                    myVideo.pause();
                    myVideo.currentTime = 0;
                }, 100);
            }
        })

        .click(function(){
            var id = $(this).attr("data-videoId");

            if(vWidth > mobileWidth){
                displayVideo(id);
            }else{
                var myVideo = document.getElementById("video"+id);

                if (myVideo.paused){
                    myVideo.play();
                    TweenLite.to(".chapter-01-window-video-0"+id+" > img", 0.2, {opacity: 0, ease:"Power1.easeIn"});

                    for(var i = 1; i <= 3; i++){
                        if(i != id){
                            var otherVideo = document.getElementById("video"+i);
                            otherVideo.pause();
                            otherVideo.currentTime = 0;
                            TweenLite.to(".chapter-01-window-video-0"+i, 0.2, {scale: 1, ease:"Power1.easeIn"});
                            TweenLite.to(".chapter-01-window-video-0"+i+" > img", 0.2, {opacity: 1, ease:"Power1.easeOut"});
                            //TweenLite.to(".video-box-mobile-"+i+" > img", 0, {opacity: 1});
                        }
                    }
                }else{
                    for(var i = 1; i <= 3; i++){
                        var otherVideo = document.getElementById("video"+i);
                        otherVideo.pause();
                        otherVideo.currentTime = 0;
                        TweenLite.to(".chapter-01-window-video-0"+i, 0.2, {scale: 1, ease:"Power1.easeIn"});
                        TweenLite.to(".chapter-01-window-video-0"+i+" > img", 0.2, {opacity: 1, ease:"Power1.easeOut"});
                    }
                    //TweenLite.to(".video-box-mobile > img", 0, {opacity: 1});

                }
            }
        });

    $(".chapter-03-box-video-01")
        .mouseenter(function(){
            videoHover = 4;
            if(vWidth > tabletWidth){
                attempToPlayVideo(4);
            }
            //TweenLite.to(".chapter-01-window-video-0"+id+" > img", 0.2, {opacity: 0, ease:"Power1.easeIn"});
            $(".chapter-03-box-video-01")
                .mouseenter(function() {
                    TweenLite.to(".chapter-03-box-video-01 > .window > img", 0.5, {});
                })
        })

        .mouseleave(function() {
            videoHover = 0;
            if(vWidth > tabletWidth){
                TweenLite.to(".chapter-03-box-video-01 > .window > img, .chapter-03-box-video-01 > .window > .video4", 0.2, {scale: 1, opacity: 1, ease:"Power1.easeIn"});

                var myVideo = document.getElementById("video4");
                myVideo.pause();
                myVideo.currentTime = 0;
            }
        })

        .click(function() {
            displayVideo(4);
        })

    $(".fullpage-popup")
        .click(function() {
            hideVideo();
        });



    $(".video-play")
        .mouseenter(function() {
            if(vWidth > tabletWidth){
                var id = $(this).attr("data-playId");
                TweenLite.fromTo(".video-play-"+id+" > .video-play-arrow", 0.2, {x: "0px", opacity: 1}, {x: "8px", opacity: 0});
                TweenLite.fromTo(".video-play-"+id+" > .video-play-arrow", 0.3, {x: "-8px", opacity: 0}, {x: "0px", opacity: 1, delay: 0.2, ease: "Power2.easeOut"});
            }
        })


    videoFrame[1] = document.getElementById('video-popup-1');
    videoPlayer[1] = $f(videoFrame[1]);
    videoFrame[2] = document.getElementById('video-popup-2');
    videoPlayer[2] = $f(videoFrame[2]);
    videoFrame[3] = document.getElementById('video-popup-3');
    videoPlayer[3] = $f(videoFrame[3]);
    videoFrame[4] = document.getElementById('video-popup-4');
    videoPlayer[4] = $f(videoFrame[4]);

    videoFrame[11] = document.getElementById('video-mobile-popup-1');
    videoPlayer[11] = $f(videoFrame[11]);
    videoFrame[12] = document.getElementById('video-mobile-popup-2');
    videoPlayer[12] = $f(videoFrame[12]);
    videoFrame[13] = document.getElementById('video-mobile-popup-3');
    videoPlayer[13] = $f(videoFrame[13]);
    videoFrame[14] = document.getElementById('video-mobile-popup-4');
    videoPlayer[14] = $f(videoFrame[14]);
}


function prepareCircles(debug) {
    var circleParts = '<div class="circle-window-left"><div class="circle-part-left circle-part"></div></div><div class="circle-window-right"><div class="circle-part-right circle-part"></div></div>';

    $(".circle-component").html(circleParts);

    if(debug == true){
        //TweenLite.to(".circle-part", 0, {rotation: "+=180deg"});
    }
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
    //TweenLite.to(".main-page", 0, {scrollTop: 0});
}

function updateLayout(){
    vWidth = $( window ).width();
    vHeight = $( window ).height();

    if(loading == false){
        if(currentDetail == 2){
            if(chapterTriggers02[1] == false){
                TweenLite.to(".chart-bg-row-01-back", 0, {scaleX: 0.5, x: -vWidth/2});
            }else if(chapterTriggers02[3] == false){
                TweenLite.to(".chart-bg-row-02-back", 0, {scaleX: 0.5, x: vWidth/2});
            }else if(chapterTriggers02[5] == false){
                TweenLite.to(".chart-bg-row-03-back", 0, {scaleX: 0.5, x: -vWidth/2});
            }
        }

        if(currentDetail == 0){
            if(vWidth > mobileWidth){
                TweenLite.to(".border", 0, {borderWidth: "10px"});
            }else{
                TweenLite.to(".border", 0, {borderWidth: "8px"});
            }
        }

        if(currentPanel == 1){
            if(vWidth >= tabletWidth){
                TweenLite.to(".header-window > .underline-1", 0, {width: "503px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "390px"});
            }else{
                TweenLite.to(".header-window > .underline-1", 0, {width: "403px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "310px"});
            }
        }else if(currentPanel == 2){
            if(vWidth >= tabletWidth){
                TweenLite.to(".header-window > .underline-1", 0, {width: "366px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "485px"});
            }else{
                TweenLite.to(".header-window > .underline-1", 0, {width: "292px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "390px"});
            }
        }else if(currentPanel == 3){
            if(vWidth >= tabletWidth){
                TweenLite.to(".header-window > .underline-1", 0, {width: "403px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "347px"});
            }else{
                TweenLite.to(".header-window > .underline-1", 0, {width: "322px"});
                TweenLite.to(".header-window > .underline-2", 0, {width: "280px"});
            }
        }
    }

    fixVideoSize();
}

function fixVideoSize(){

    if($(window).height()*0.7 < $(".video").height()){
        $(".video-popup").css("height", ($(window).height()*0.8));
        $(".video-popup").css("width", ($(".video-popup").height()*1.777));
    }else{
        $(".video-popup").css("width", ($(window).width()*0.85));
        $(".video-popup").css("height", ($(".video-popup").width()/1.777));
    }
}
