var colours = new Array();
var spinCounter = 0;
var start = true;
var loading = true;
var animating = 0;
var chapterTriggers01 = new Array();
var chapterTriggers02 = new Array();
var chapterTriggers03 = new Array();
var chapterTriggersVideo01 = new Array();

var mobileWidth = 940;
var tabletWidth = 1200;
var activeVideo = 0;

colours[1] = "#C57B6C";
colours[2] = "#BB6159";
colours[3] = "#C37668";

chapterTriggers01[1] = false;
chapterTriggers01[2] = false;
chapterTriggers01[3] = false;
chapterTriggers01[4] = false;
chapterTriggers01[5] = false;
chapterTriggersVideo01[1] = false;
chapterTriggersVideo01[2] = false;
chapterTriggersVideo01[3] = false;
chapterTriggersVideo01[4] = false;

chapterTriggers02[1] = false;
chapterTriggers02[2] = false;
chapterTriggers02[3] = false;
chapterTriggers02[4] = false;
chapterTriggers02[5] = false;
chapterTriggers02[6] = false;

chapterTriggers03[1] = false;
chapterTriggers03[2] = false;


/* timers */

var inkEffectDelay = 0.5;
//var coverStep = 49;
var coverStep = 24;


function drawLoading(speed) {
    TweenLite.to(".wheel-large, .wheel-small", 0, {left: "50%", translateX: "-50%"});

    var loadTime = 5.2*speed;
    var sqeez = 0.5*speed;

    //var loadTime = 0;

    //pre form
    TweenLite.to(".wheel-large", 0, {height: "120px", force3D:true, width: "120px", top: "calc(50vh - 60px)", left: "calc(50% - 60px)", scale: 1.02});
    TweenLite.to(".wheel-small", 0, {height: "114px", force3D:true, width: "114px", top: "calc(50vh - 57px)", left: "calc(50% - 57px)"});


    setTimeout(function() { // 500ms
        TweenLite.to(".loading-countdown", 1, {opacity: 1, delay: 0.1});
        TweenLite.to(".loading-text", 1, {opacity: 1, delay: 0.1});
        TweenLite.to(".loading-text-1", 0.5, {opacity: 0, display: "none", delay: 2});
        TweenLite.to(".loading-text-2", 0.5, {opacity: 1, display: "block", delay: 2.5});
        TweenLite.from(".loading-text", 0.7, {y: "32px", delay: 0.1});

        setTimeout(function() { // 300ms

            TweenLite.to(".wheel-small, .wheel-large", 0.7, {rotation: "+=90deg"});
            TweenLite.to(".wheel-small > .circle-window-left > .circle-part-left", 0.7, {rotation: "135deg", ease: "Power1.easeInOut"});
            TweenLite.to(".wheel-large > .circle-window-left > .circle-part-left", 0.7, {rotation: "135deg", ease: "Power1.easeInOut"});
            TweenLite.to(".digit-1", 0.7, {y: "-40px", ease: "Power2.easeOut"});
            TweenLite.to(".digit-2", 0.7, {y: "-300px", ease: "Power2.easeOut"});

            TweenLite.to(".wheel-small", 0.7, {rotation: "+=90deg", delay: 0.8});
            TweenLite.to(".wheel-large", 0.7, {rotation: "+=45deg", delay: 0.8});
            TweenLite.to(".wheel-small > .circle-window-left > .circle-part-left", 0.7, {rotation: "225deg", ease: "Power1.easeInOut", delay: 0.8});
            TweenLite.to(".wheel-large > .circle-window-left > .circle-part-left", 0.7, {rotation: "225deg", ease: "Power1.easeInOut", delay: 0.8});
            TweenLite.to(".digit-1", 0.7, {y: "-80px", ease: "Power2.easeOut", delay: 0.8});
            TweenLite.fromTo(".digit-2", 0.7, {y: "-80px"}, {y: "-360px", ease: "Power2.easeOut", delay: 0.8});

            TweenLite.to(".wheel-small", 0.7, {rotation: "+=90deg", delay: 1.7});
            TweenLite.to(".wheel-large", 0.7, {rotation: "+=45deg", delay: 1.7});
            TweenLite.to(".wheel-small > .circle-window-right > .circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 1.7});
            TweenLite.to(".wheel-large > .circle-window-right > .circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 1.7});
            TweenLite.to(".digit-1", 0.7, {y: "-160px", ease: "Power2.easeOut", delay: 1.7});
            TweenLite.fromTo(".digit-2", 0.7, {y: "-80px"}, {y: "-280px", ease: "Power2.easeOut", delay: 1.7});

            TweenLite.to(".wheel-small", 0.7, {rotation: "+=90deg", delay: 2.5});
            TweenLite.to(".wheel-large", 0.7, {rotation: "+=45deg", delay: 2.5});
            TweenLite.to(".wheel-small > .circle-window-right > .circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 2.5});
            TweenLite.to(".wheel-large > .circle-window-right > .circle-part-right", 0.7, {rotation: "+=90deg", ease: "Power1.easeInOut", delay: 2.5});
            TweenLite.to(".digit-1", 0.7, {y: "-180px", ease: "Power2.easeOut", delay: 2.5});
            TweenLite.fromTo(".digit-2", 0.7, {y: "-280px"}, {y: "-400px", ease: "Power2.easeOut", delay: 2.5});

            // used to be 1.8

            // 100 %
            TweenLite.to(".digit-1, .digit-2, .digit-0", 0.7, {y: "-=20px", ease: "Power2.easeOut", delay: 3.3});
            TweenLite.to(".loading-countdown, .loading-text", 0.7, {opacity: 0, display: "none", ease: "Power2.easeOut", delay: 3.6});

            // Squeeze

            TweenLite.to(".wheel-small", 0.8, {scale: 0.88, ease: "Power2.easeOut", delay: 3.3, onComplete:loadingContinue});
            TweenLite.to(".wheel-large", 0.8, {scale: 0.9, ease: "Power2.easeOut", delay: 3.3});

            if(chapterToLoad == 0){
                if(vWidth > mobileWidth){
                    TweenLite.to(".border", 0.8, {borderWidth: "10px", ease: "Power2.easeOut", delay: 3.3});
                }else{
                    TweenLite.to(".border", 0.8, {borderWidth: "8px", ease: "Power2.easeOut", delay: 3.3});
                    TweenLite.to(".scroll-for-more-text", 0.5, {opacity: 1, display: "block", delay: 3.8});
                }
            }

        }, 300);
    }, 500);




}

function loadingContinue(){
    var loadTime = 0.1;
    var sqeez = 0;
    if(chapterToLoad == 0){
        window.history.pushState(0, "Home", "#");

        //final form
        TweenLite.to(".wheel-large", 0.5, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh - 50px)", left: "calc(50% - 600px)", scale: 1, ease: "Power2.easeInOut", delay: loadTime+sqeez-0.1});
        TweenLite.to(".wheel-small", 0.5, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh - 47px)", left: "calc(50% - 600px)", scale: 1, ease: "Power2.easeInOut", delay: loadTime+sqeez-0.1});

        TweenLite.to(".navigation-circle-wrapper", 0.5, {opacity: 1, force3D:true, top: "calc(100vh - 75px)", ease: "Power3.easeIn", delay: loadTime+sqeez+0.3});
        TweenLite.fromTo(".navigation-circle-wrapper", 0.5, {y: "-32px"}, {y: "0px", delay: loadTime+sqeez+0.3});

        TweenLite.to(".navigation", 0.5, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+0.7});
        TweenLite.from(".previous", 1, {x: "16", ease: "Power2.easeOut", delay: loadTime+sqeez+0.7});
        TweenLite.from(".next", 1, {x: "-16px", ease: "Power2.easeOut", delay: loadTime+sqeez+0.7});

        TweenLite.to(".btn", 0, {display: "block", delay: loadTime+sqeez+1.2});
        drawCircle(".paginator > .window > .circle-02", 0.8, loadTime+sqeez+1.2);
        drawCircle(".paginator > .window > .circle-03", 0.8, loadTime+sqeez+1.2);
        TweenLite.to(".paginator > .window > .chapter-01", 0.5, {top: 0, delay: loadTime+sqeez+1.35});


        //draw loading chapter to load == 0
        //TweenLite.to(" .popup, .share-box", 0.5, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+1.7});
        TweenLite.to(" .popup, .share-box, .mittikala", 0.5, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+1.7});
        TweenLite.fromTo(".share > .underline-white", 0.3, {scaleX: 1, x: "0px"}, {scaleX: 0, x: "59px", delay: loadTime+sqeez+2});
        TweenLite.to(".site-credits > .mittikala-credits > .underline-white", 0.5, {width: "0px", left: "27px", ease: "Power2.easeInOut", delay: loadTime+sqeez+2});

        TweenLite.to(".header", 1, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+1.7});
        TweenLite.to(".title-center", 0, {opacity: 1, display: "block"});

        setTimeout(function(){
            drawChapter(1, 0);
            setTimeout(function(){
                $.fn.fullpage.setMouseWheelScrolling(true);
                $.fn.fullpage.setAllowScrolling(true);
                loading = false;
            }, 1000);
        }, (loadTime+sqeez+2.2)*1000);

        TweenLite.to(".headline-mobile", 0, {opacity: 0});
        TweenLite.to(".headline-mobile-01", 0.5, {opacity: 1, delay: loadTime+sqeez+0.7});
    }else{
        window.history.pushState(chapterToLoad, "Chapter 0"+chapterToLoad, "#chapter0"+chapterToLoad);
        //TweenLite.to(".detail-center", 0, {opacity: 1, display: "block"});
        TweenLite.to(".header", 1, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+0});
        //TweenLite.to(".wheel-large", 0.5, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh + 0px)", left: "calc(50% - 600px)", ease: "Power2.easeInOut", delay: loadTime+sqeez});
        //TweenLite.to(".wheel-small", 0.5, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh + 3px)", left: "calc(50% - 600px)", ease: "Power2.easeInOut", delay: loadTime+sqeez});

        TweenLite.to(".wheel-small, .wheel-large", 0.5, {scale: 0, opacity: 0, delay: loadTime+sqeez-0.1});

        TweenLite.to(".wheel-large", 0, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh - 50px)", left: "calc(50% - 600px)", scale: 1, ease: "Power2.easeInOut", delay: loadTime+sqeez+1});
        TweenLite.to(".wheel-small", 0, {height: "1200px", force3D:true, width: "1200px", top: "calc(100vh - 47px)", left: "calc(50% - 600px)", scale: 1, ease: "Power2.easeInOut", delay: loadTime+sqeez+1});

        TweenLite.to(".border-01, .border-bottom", 0, {borderColor: colours[chapterToLoad]});
        TweenLite.to(".title-center > .background", 0, {backgroundColor: colours[chapterToLoad]});


        //drawLoading chapter to load != 0
        //TweenLite.to(" .popup, .share-box, .mittikala", 0.5, {opacity: 0, display: "none", ease: "Power2.easeInOut", delay: loadTime+sqeez+1});
        TweenLite.fromTo(".share > .underline-white", 0.3, {scaleX: 1, x: "0px"}, {scaleX: 0, x: "59px", delay: loadTime+sqeez+1});
        TweenLite.to(".site-credits > .mittikala-credits > .underline-white", 0.5, {width: "0px", left: "27px", ease: "Power2.easeInOut", delay: loadTime+sqeez+1});

        TweenLite.to(".headline-mobile", 0, {opacity: 0});
        TweenLite.to(".headline-mobile-0"+chapterToLoad, 0.5, {opacity: 1, delay: loadTime+sqeez+0.7});

        setTimeout(function(){
            drawChapter(chapterToLoad, 0);
            drawDetail(chapterToLoad, 0);
            loading = false;
        }, (loadTime+sqeez+1.2)*1000);
    }

    TweenLite.to(".container", 0, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: loadTime+sqeez+0.7});



    TweenLite.to(".header-1", 0, {top: ((0)*-65*2+65)+"px", delay: 0});
    TweenLite.to(".header-2", 0, {top: ((0)*-65*2+65)+"px", delay: 0});
}

function drawIllustration(chapterNumber){

    /*for(var i = 0; i <= coverStep; i++){ //awards
        TweenLite.to(".ink-"+i, 0, {opacity: 0, delay: ((inkEffectDelay/coverStep)*i)});
    }*/

    for(var i = 1; i < 4; i++){
        if(i == chapterNumber){
            TweenLite.fromTo(".illustration-splash-0"+i, 1, {opacity: 0, scale: 0.7}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: inkEffectDelay-0.5}); //awards

            TweenLite.fromTo(".illustration-geometry-0"+i, 0, {opacity: 0}, {opacity: 1, ease: "Power2.easeInOut", delay: inkEffectDelay});
            TweenLite.fromTo(".illustration-geometry-0"+i+" > .big", 1, {opacity: 0, scale: 0.8}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: inkEffectDelay});
            TweenLite.fromTo(".illustration-geometry-0"+i+" > .small-1", 1, {scale: 0.2}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: inkEffectDelay+0.1});
            TweenLite.fromTo(".illustration-geometry-0"+i+" > .small-2", 1, {scale: 0.2}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: inkEffectDelay+0.2});
            TweenLite.fromTo(".illustration-geometry-0"+i+" > .small-3", 1, {scale: 0.2}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: inkEffectDelay+0.3});
            //TweenLite.fromTo(".illustration-0"+i, 0.5, {opacity: 1, scale: 0.9}, {opacity: 1, scale: 1, ease: "Power2.easeInOut", delay: 0}); // awards
            TweenLite.fromTo(".illustration-0"+i, 0.5, {opacity: 0}, {opacity: 1, ease: "Power2.easeIn", delay: 0});
            TweenLite.fromTo(".illustration-0"+i, 0.5, {scale: 0.9}, {scale: 1, ease: "Power2.easeInOut", delay: 0});
        }else{
            TweenLite.to(".illustration-splash-0"+i, 0, {opacity: 0, delay: 0});
            TweenLite.to(".illustration-geometry-0"+i, 0, {opacity: 0, delay: 0});
            TweenLite.to(".illustration-0"+i, 0, {opacity: 0, delay: 0});
        }
    }


}

function hideIllustration(id){
    var duration = 1;

    if(silentChange == true){
        duration = 0;
    }

    TweenLite.to(".illustration-geometry-0"+id+" > .big", duration, {opacity: 0, scale: 0.8, ease: "Power2.easeOut", delay: 0.1});
    TweenLite.to(".illustration-geometry-0"+id+" > .small-1", duration, {scale: 0.2, opacity: 0, ease: "Power2.easeOut", delay: 0.1});
    TweenLite.to(".illustration-geometry-0"+id+" > .small-2", duration, {scale: 0.2, opacity: 0, ease: "Power2.easeOut", delay: 0.1});
    TweenLite.to(".illustration-geometry-0"+id+" > .small-3", duration, {scale: 0.2, opacity: 0, ease: "Power2.easeOut", delay: 0.1});
    TweenLite.to(".illustration-splash-0"+id, duration, {scale: 0.7, opacity: 0, ease: "Power2.easeOut", delay: 0});
    TweenLite.to(".illustration-0"+id, duration, {scale: 0.9, opacity: 0, ease: "Power2.easeOut", delay: 0.3});

    /*for(var i = coverStep; i >= 0; i--){ //awards
        TweenLite.to(".ink-"+i, 0, {opacity: 1, delay: inkEffectDelay/coverStep*(coverStep-i)+0.1});
    }*/
}

function hideChapter(id, nextId) {
    TweenLite.to(".border-01, .border-bottom", 1, {borderColor: colours[nextId], delay: 0});
    TweenLite.to(".header-window", 1, {height: 0, ease: "Power2.easeOut"});

    hideIllustration(id);
    TweenLite.to(".cta-discover-0"+id, 0.5, {top: "-8px", opacity: 0, ease: "Power2.easeOut", delay: 0});
}

function drawChapter(nextId, delay) {
    animatinga["cta"] = true;

    animating ++;

    setTimeout(function() {
        setTimeout(function() {
            animating --;
        }, 1800);
    }, delay*1000);

    TweenLite.to(".detail-center > .background", 0, {backgroundColor: colours[nextId], delay: 0});

    TweenLite.to(".header-window", 0, {height: "65px", delay: delay});
    TweenLite.fromTo(".header-1", 0.7, {top: ((nextId-1)*-65*2+65)+"px"}, {top: ((nextId-1)*-65*2)+"px", ease: "Power2.easeOut", delay: delay});
    TweenLite.fromTo(".header-2", 0.7, {top: ((nextId-1)*-65*2+65)+"px"}, {top: ((nextId-1)*-65*2)+"px", ease: "Power2.easeOut", delay: delay+0.15});


    TweenLite.to(".header-window > .underline", 0, {backgroundColor: colours[nextId], width: 0, delay: delay});
    if(nextId == 1){
        if(vWidth >= tabletWidth){
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "503px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "390px", ease: "Power2.easeOut", delay: delay+0.15});
        }else{
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "403px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "310px", ease: "Power2.easeOut", delay: delay+0.15});
        }
    }if(nextId == 2){
        if(vWidth >= tabletWidth){
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "366px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "485px", ease: "Power2.easeOut", delay: delay+0.15});
        }else{
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "292px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "390px", ease: "Power2.easeOut", delay: delay+0.15});
        }
    }else if(nextId == 3){
        if(vWidth >= tabletWidth){
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "403px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "347px", ease: "Power2.easeOut", delay: delay+0.15});
        }else{
            TweenLite.to(".header-window > .underline-1", 0.7, {width: "322px", ease: "Power2.easeOut", delay: delay});
            TweenLite.to(".header-window > .underline-2", 0.7, {width: "280px", ease: "Power2.easeOut", delay: delay+0.15});
        }
    }

    if(currentDetail == 0){
        drawCircle(".circle-cta-large", 1, 0);
        drawCircle(".circle-cta-small", 1, 0);
        TweenLite.to(".chevron-right", 0.7, {opacity: 1, delay: delay});
        TweenLite.fromTo(".cta-discover-0"+nextId, 0.5, {top: "8px", opacity: 0}, {top: 0, opacity: 1, ease: "Power2.easeOut", delay: delay});

        setTimeout(function() {
            animatinga["cta"] = false;
        }, delay*1000 + 500);

        //currentDetail = nextId;
    }

    drawIllustration(nextId);

    resetDetail(nextId);
}

function innerDetailChange(chapterId) {

    TweenLite.to(".headline-mobile", 0, {opacity: 0});
    TweenLite.to(".headline-mobile-0"+chapterId, 0.5, {opacity: 1, delay: 0.5});

    hideCircle(".detail-continue-large", 0, 0);
    hideCircle(".detail-continue-small", 0, 0);
    TweenLite.to(".chevron-down", 0.8, {opacity: 0});

    var delay = 1;

    if(vWidth <= mobileWidth){
        delay = 0.5;
    }

    setTimeout(function () {
        drawCircle(".detail-continue-large", 0.8, delay);
        drawCircle(".detail-continue-small", 0.8, delay);
        TweenLite.to(".chevron-down", 0.8, {opacity: 1, ease: "Power2.easeInOut", delay: delay});
    }, 1000*delay);
}

function drawDetail(id) {

    /*if(vWidth > mobileWidth){

    }*/

    //TweenLite.to(".container", 0, {position: "relative"});


    TweenLite.to(".mittikala", 0.25, {opacity: 0, display: "none", delay: 0.1});
    TweenLite.fromTo(".site-credits > .mittikala-credits > .underline-white", 0.25, {width: "0px", left: "0px"}, {width: "27px", left: "0px", ease: "Power2.easeInOut"});
    //state["credits"] = false;

    TweenLite.to(".header-bg", 0.5, {height: "100%", ease:"Power2.easeOut"});
    TweenLite.to(".scroll-for-more-text", 0.5, {opacity: 0, display: "none"});

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
    TweenLite.to(".cta-btn", 0, {display: "none"});

    if(currentDetail == 0){
        //currentDetail = id;
        hideCircle(".circle-cta-large", 0.8, 0);
        hideCircle(".circle-cta-small", 0.8, 0);

        for(var i = 1; i <= 3; i++){
            if(i != id){
                hideCircle(".paginator > .window > .circle-0"+i, 0.2, 0);
            }
        }
    }

    currentDetail = currentPanel;

    var displayContinueDelay = 1;
    animating ++;

    window.history.pushState(id, "Chapter 0"+id, "#chapter0"+id);

    disableScroll();

    TweenLite.to("#fullpage", 0, {display: "none"});

    drawCircle(".detail-continue-large", 0.8, displayContinueDelay);
    drawCircle(".detail-continue-small", 0.8, displayContinueDelay);
    TweenLite.to(".chevron-down", 0.8, {opacity: 1, ease: "Power2.easeInOut", delay: displayContinueDelay});


    TweenLite.to(".chevron-right", 0.5, {opacity: 0, ease: "Power2.easeInOut"});
    TweenLite.to(".cta-discover-0"+id, 0.5, {top: "-8px", opacity: 0, ease: "Power2.easeOut", delay: 0});

    TweenLite.to(".border", 0.5, {borderWidth: "0px", ease: "Power2.easeInOut"});
    //TweenLite.to(".container", 0.5, {position: "relative"/*, x: "8px"*/});
    //TweenLite.to(".main-page > .container", 0, {height: "4000px"});

    TweenLite.to(".container-chapter-0"+id, 0, {display: "block", opacity: 1});
    TweenLite.to(".visible-mobile", 0.5, {opacity: 1, delay: 0.2});


    $( "div.main-page" ).scrollTop( 0 );

    TweenLite.to(".title-center", 0.3, {opacity: 0});
    TweenLite.to(".detail-center", 0.5, {display: "block", opacity: 1, delay: 0.3});
    TweenLite.to(".detail-center > .text", 0.5, {top: 0, delay: 0.3, ease: "Power2.easeOut"});
    TweenLite.to(".detail-center > .underline", 0, {width: "169px"});
    TweenLite.fromTo(".detail-center > .underline-white", 0.5, {scaleX: 1, transformOrigin: "right"}, {scaleX: 0, transformOrigin: "right", delay: 0.3});
    TweenLite.to(".detail-center > .background", 0.5, {height: "52px", delay: 0.3, ease: "Power2.easeOut"});

    TweenLite.to(".btn", 0.5, {opacity: 0, display: "none"});

    TweenLite.fromTo(".detail-text-0"+id, 0.5, {top: "170px", opacity: 0}, {top: "150px", opacity: 1, display: "block", ease: "Power2.easeOut", delay: 0.8});

    /*** paginator ***/

    TweenLite.to(".paginator > .window > .chapter-0"+id, 0.5, {top: "32px"});


    var wheelLargePos = vHeight - 50;
    var wheelSmallPos = vHeight - 47;
    var NavigationCirclePos = vHeight - 75;

    TweenLite.fromTo(".wheel-large", 0.5, {top: (wheelLargePos+"px")}, {top: "+=100px", opacity: 0, force3D:true, ease: "Power1.easeOut"});
    TweenLite.fromTo(".wheel-small", 0.5, {top: (wheelSmallPos+"px")}, {top: "+=100px", opacity: 0, force3D:true, ease: "Power1.easeOut"});
    TweenLite.fromTo(".navigation-circle-wrapper", 0.5, {top: NavigationCirclePos+"px"}, {top: "+=100px", opacity: 0, force3D:true, ease: "Power1.easeOut"});

    enableScroll();

    setTimeout(function() {
        animating --;
    }, 1900);

    resetDetail(id);
}

function hideDetail() {

    //state["credits"] = false;
    TweenLite.to(".mittikala", 0.25, {opacity: 1, display: "block"});


    animatinga["cta"] = true;

    TweenLite.to(".header-bg", 0.5, {height: 0, ease:"Power2.easeOut"});
    TweenLite.fromTo(".detail-center > .underline-white", 0.5, {scaleX: 0, transformOrigin: "left"}, {scaleX: 1, transformOrigin: "left"});

    window.history.pushState('0', "Homepage", "#");

    animating ++;

    var scrollTimeout = (($(".main-page").scrollTop())/3000);

    if(scrollTimeout == 0){
        scrollTimeout = 0;
    }else if(scrollTimeout < 0.3){
        scrollTimeout = 0.3;
    }

    TweenLite.to(".main-page", scrollTimeout, {scrollTop: 0, ease: "Power2.easeOut"});

    /*setTimeout(function(){
        TweenLite.to(".main-page", 0, {scrollTop: 0});
    },scrollTimeout*1000);*/

    setTimeout(function(){

        TweenLite.to("#fullpage", 0, {display: "block"});
        TweenLite.to(".title-center", 0.5, {opacity: 1, display: "block", delay: 0.5});
        TweenLite.to(".detail-center > .background", 0.3, {height: 0, ease: "Power2.easeOut", delay: 0.1});
        TweenLite.to(".detail-center", 0.3, {display: "none", opacity: 0, delay: 0.3});
        TweenLite.to(".detail-text", 0.5, {top: "125px", opacity: 0, display: "none", ease: "Power2.easeIn", delay: 0});

        TweenLite.to(".visible-mobile", 0, {opacity: 0, delay: 0});



        //if(vWidth > mobileWidth){
            TweenLite.to(".chevron-down", 0.8, {opacity: 0, ease: "Power2.easeInOut", delay: 0});
            TweenLite.to(".chevron-right", 0.5, {opacity: 1, ease: "Power2.easeInOut", delay: 0.5});

            drawCircle(".circle-cta-large", 0.8, 0.5);
            drawCircle(".circle-cta-small", 0.8, 0.5);

            hideCircle(".detail-continue-large", 0.8, 0);
            hideCircle(".detail-continue-small", 0.8, 0);

            setTimeout(function() {
                animatinga["cta"] = false;
            }, delay*1000 + 500);

            TweenLite.fromTo(".cta-discover-0"+currentPanel, 0.5, {top: "8px"}, {top: 0, opacity: 1, ease: "Power2.easeOut", delay: 0.5});

        for(var i = 1; i <= 3; i++){
            if(i == currentPanel){

            }else{
                drawCircle(".paginator > .window > .circle-0"+i, 0.2, 0);
            }
        }

        TweenLite.to(".paginator > .window > .chapter-0"+currentPanel, 0.5, {top: 0});

        if(vWidth > mobileWidth){
            TweenLite.to(".border", 0.5, {borderWidth: "10px"});
        }else{
            TweenLite.to(".border", 0.5, {borderWidth: "8px"});
            //TweenLite.to(".container", 0.5, {position: "absolute"});
        }

        TweenLite.to(".btn", 0.5, {opacity: 1, display: "block"});

        var wheelLargePos = vHeight - 50;
        var wheelSmallPos = vHeight - 47;
        var NavigationCirclePos = vHeight - 75;

        TweenLite.fromTo(".wheel-large", 0.5, {top: ((wheelLargePos+100)+"px"), opacity: 1}, {top: (wheelLargePos+"px"), force3D:true, ease: "Power2.easeInOut", delay: 0.8});
        TweenLite.fromTo(".wheel-small", 0.5, {top: ((wheelSmallPos+100)+"px"), opacity: 1}, {top: (wheelSmallPos+"px"), force3D:true, ease: "Power2.easeInOut", delay: 0.8});
        TweenLite.fromTo(".navigation-circle-wrapper", 0.5, {top: ((NavigationCirclePos+100)+"px"), opacity: 1}, {top: (NavigationCirclePos+"px"), force3D:true, ease: "Power2.easeInOut", delay: 0.8});

        TweenLite.to(".wheel-large", 0.5, {top: "calc(100vh - 50px)", delay: 1.3});
        TweenLite.to(".wheel-small", 0.5, {top: "calc(100vh - 47px)", delay: 1.3});
        TweenLite.to(".navigation-circle-wrapper", 0.5, {top: "calc(100vh - 75px)", delay: 1.3});

        for(var i = 1; i <= 3; i++){
            if(i == currentPanel){
                TweenLite.to(".section-chapter-0"+i, 0, {fontWeight: "bold"});
            }else{
                TweenLite.to(".section-chapter-0"+i, 0, {fontWeight: "normal"});
            }
        }

        enableScroll();

        if(silentChange != true){
            TweenLite.to(".scroll-for-more-text", 0.5, {opacity: 1, display: "block", delay: 0.5});
        }

        // hide detail
        TweenLite.to(" .popup, .share-box", 0.5, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: 0.8});
        TweenLite.to(".mittikala", 0.5, {opacity: 1, display: "block", ease: "Power2.easeInOut", delay: 0.8});
        //TweenLite.fromTo(".share > .underline-white", 0.3, {scaleX: 1, x: "0px"}, {scaleX: 0, x: "59px", delay: 0.8});
        TweenLite.to(".site-credits > .mittikala-credits > .underline-white", 0.5, {width: "0px", left: "27px", ease: "Power2.easeInOut", delay: 0.8});

    }, scrollTimeout*1000);

    setTimeout(function() {
        animating --;
        TweenLite.to(".container-chapter", 0, {display: "none"});
    }, (scrollTimeout + 1.5) * 1000 );
}


function changeChapter(id, nextId, direction) {

    //hideChapter(id);

    animating ++;

    hideChapter(id, nextId);
    setTimeout(function(){
        drawChapter(nextId, 0);
        animating --;
    }, 1000);

    TweenLite.to(".headline-mobile", 0.5, {opacity: 0});
    TweenLite.to(".headline-mobile-0"+nextId, 0.5, {opacity: 1, delay: 0.5});

    changinSlide = true;

    hideCircle(".circle-cta-large", 1, 0);
    hideCircle(".circle-cta-small", 1, 0);
    drawCircle(".circle-cta-large", 1, 1);
    drawCircle(".circle-cta-small", 1, 1);

    TweenLite.to(".chevron-right", 1, {opacity: 0, delay: 0, ease:"Power2.easeInOut"});
    TweenLite.to(".chevron-right", 1, {opacity: 1, delay: 1, ease:"Power2.easeInOut"});


    spinWheel(direction, nextId);


    TweenLite.to(".section-chapter-0"+nextId, 0, {fontWeight: "bold", delay: changingSlideDelay/2000});
    drawCircle(".paginator > .window > .circle-0"+id, 0.5, 0);
    TweenLite.to(".paginator > .window > .chapter-0"+nextId, 0.5, {top: 0});
    TweenLite.to(".section-chapter-0"+id, 0, {fontWeight: "normal", delay: changingSlideDelay/2000});
    hideCircle(".paginator > .window > .circle-0"+nextId, 0.2, 0);
    TweenLite.to(".paginator > .window > .chapter-0"+id, 0.5, {top: "32px"});

    setTimeout(function() {
        changinSlide = false;
    }, changingSlideDelay);
}

function setWheelDefault(){

    var wheel1to2 = 28;
    var wheel2to3 = 26.6;
    var wheel3to1 = 26.5;

    TweenLite.to(".section-01", 0, {rotation: "0deg"});
    TweenLite.to(".section-02", 0, {rotation: wheel1to2+"deg"});
    TweenLite.to(".section-03", 0, {rotation: -wheel3to1+"deg"});

    TweenLite.to(".section-031", 0, {rotation: wheel1to2+wheel2to3+"deg"});
    TweenLite.to(".section-011", 0, {rotation: wheel1to2+wheel2to3+wheel3to1+"deg"});
    TweenLite.to(".section-021", 0, {rotation: wheel1to2+wheel2to3+wheel3to1+wheel1to2+"deg"});

    TweenLite.to(".section-012", 0, {rotation: -(wheel3to1+wheel2to3+wheel1to2)+"deg"});
    TweenLite.to(".section-022", 0, {rotation: -(wheel3to1+wheel2to3)+"deg"});
    TweenLite.to(".section-032", 0, {rotation: -wheel3to1-wheel2to3-wheel1to2-wheel3to1+"deg"});

}

function mouseMoveIllustration(mouseX, mouseY){
    if(currentDetail == 0 && mouseAnimating == false){
        var tmpRotation = (vWidth/2 - mouseX)/100;

        TweenLite.to(".illustration-0"+currentPanel+"", 0.3, {y: ((vHeight/2 - mouseY)/100)+"px", x: ((vWidth/2 - mouseX)/100)+"px", force3D:false});
        TweenLite.to(".illustration-geometry-0"+currentPanel+" > .big", 0.3, {y: ((vHeight/2 - mouseY)/150)+"px", x: ((vWidth/2 - mouseX)/125)+"px", force3D:false, rotation: (tmpRotation/3)+"deg"});
        TweenLite.to(".illustration-geometry-0"+currentPanel+" > .small-1", 0.3, {y: (((vHeight/3 - mouseY)/150)-miniShapesPosition)+"px", x: ((vWidth/3 - mouseX)/125)+"px", force3D:false, rotation: tmpRotation+"deg"});
        TweenLite.to(".illustration-geometry-0"+currentPanel+" > .small-2", 0.3, {y: (((vHeight/3 - mouseY)/150)+miniShapesPosition)+"px", x: (((vWidth/3 - mouseX)/125)+miniShapesPosition/2)+"px", force3D:false, rotation: tmpRotation+"deg"});
        TweenLite.to(".illustration-geometry-0"+currentPanel+" > .small-3", 0.3, {y: ((vHeight/3 - mouseY)/150)+"px", x: (((vWidth/3 - mouseX)/125)-miniShapesPosition)+"px", force3D:false, rotation: tmpRotation+"deg"});

        mouseAnimating = true;

        setTimeout(function() {
            mouseAnimating = false;
        }, 100);
    }
}

function spinWheel(direction, nextId){
    if(direction == "down"){

        if(spinCounter < 3){
            if(nextId == 2){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "-=28deg", ease: "Power2.easeInOut"});
            }else if(nextId == 3){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "-=26.6deg", ease: "Power2.easeInOut"});
            }else if(nextId == 1){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "-=26.5deg", ease: "Power2.easeInOut"});
            }
        }else{
            TweenLite.fromTo(".navigation-circle-wrapper", 1, {rotation: "0deg"}, {rotation: "-28deg", ease: "Power2.easeInOut"});
            spinCounter = 0;
        }
        spinCounter ++;
    }else{
        if(spinCounter > -3){
            if(nextId == 3){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "+=26.5deg", ease: "Power2.easeInOut"});
            }else if(nextId == 2){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "+=26.6deg", ease: "Power2.easeInOut"});
            }else if(nextId == 1){
                TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "+=28deg", ease: "Power2.easeInOut"});
            }
        }else{
            TweenLite.fromTo(".navigation-circle-wrapper", 1, {rotation: "0deg"}, {rotation: "26.5deg", ease: "Power2.easeInOut"});
            spinCounter = 0;
        }
        //TweenLite.to(".navigation-circle-wrapper", 1, {rotation: "+=25.5deg", ease: "Power2.easeInOut"});
        spinCounter --;
    }
}

function drawCircle(circleId, speed, delay){
    //var specialCircle = false;

    if(circleId == ".circle-cta-large" || circleId == ".detail-continue-large"){
        TweenLite.fromTo(circleId, speed*0.8, {rotation: "0deg"}, {rotation: "+=180deg", ease: "Power1.easeIn", delay: delay});
    }else if(circleId == ".circle-cta-small" || circleId == ".detail-continue-small"){
        TweenLite.fromTo(circleId, speed*0.8, {rotation: "90deg"}, {rotation: "+=90deg", ease: "Power1.easeIn", delay: delay});
    }

    TweenLite.to(circleId+" > .circle-window-left > .circle-part-left", 0, {rotation: "45deg", delay: delay});
    TweenLite.to(circleId+" > .circle-window-right > .circle-part-right", 0, {rotation: "45deg", delay: delay+(speed/2)});
    TweenLite.to(circleId+" > .circle-window-left > .circle-part-left", speed/2, {rotation: "225deg", delay: delay, ease: "Power1.easeIn"});
    TweenLite.to(circleId+" > .circle-window-right > .circle-part-right", speed/2, {rotation: "225deg", delay: delay+(speed/2), ease: "Power1.easeOut"});
    TweenLite.to(circleId+" > .circle-window-left, "+circleId+" > .circle-window-right", 0, {overflow: "visible", delay: delay+speed});
}

function hideCircle(circleId, speed, delay){
    TweenLite.to(circleId+" > .circle-window-left, "+circleId+" > .circle-window-right", 0, {overflow: "hidden", delay: delay});
    if(circleId == ".circle-cta-large" || circleId == ".detail-continue-large"){
        TweenLite.to(circleId, speed*0.8, {rotation: "+=180deg", ease: "Power1.easeIn", delay: delay});
    }else if(circleId == ".circle-cta-small" || circleId == ".detail-continue-small"){
        TweenLite.to(circleId, speed*0.8, {rotation: "+=90deg", ease: "Power1.easeIn", delay: delay});
    }
    TweenLite.to(circleId+" > .circle-window-left > .circle-part-left", speed/2, {rotation: "+=180deg", delay: delay, ease: "Power1.easeIn"});
    TweenLite.to(circleId+" > .circle-window-right > .circle-part-right", speed/2, {rotation: "+=180deg", delay: delay+(speed/2), ease: "Power1.easeOut"});
}

function resetDetail(id){
    //if(id == 1){


        chapterTriggers01[1] = chapterTriggers01[2] = chapterTriggers01[3] =
        chapterTriggers01[4] = chapterTriggers01[5] =
        chapterTriggers02[1] = chapterTriggers02[2] = chapterTriggers02[3] =
        chapterTriggers02[4] = chapterTriggers02[5] = chapterTriggers02[6] =
        chapterTriggers03[1] = chapterTriggers03[2] =
        chapterTriggersVideo01[1] = chapterTriggersVideo01[2] = chapterTriggersVideo01[3] =
        chapterTriggersVideo01[4] = false;

}

