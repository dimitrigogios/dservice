/* ================================================================= */
// Description:         Dimitri's favorites events, triggers and what not
// Comment:             No dependencies!
// Last modified:       01-01 2016
// Author:              Dimitri Gogios
/* ================================================================= */
dservice = function ($) {

    // Check for mobile device!
    function isMobile() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            //console.log('is mobile device');
            if( !$('body').hasClass('is-mobile') ) {
                $('body').addClass('is-mobile');
            }
            $(document).trigger("is-mobile");
            return true;
        }
        return false;
    }

    // Check is window is in "landscape"!
    function isLandscape() {
        if( (window.innerHeight < window.innerWidth) && isMobile() ){
            if( !$('body').hasClass('landscape') ) {
                $('body').addClass('landscape');
            }
            return true;
        } else {
            $('body').removeClass('landscape');
            return false;
        }
    }

    function toTopMobile(e) {
        e.preventDefault();
        $('html, body', parent.document).animate({ scrollTop: $("body").offset().top},150,"swing");
        return false;
    }

    function toTop(e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 150, 'swing');
        return false;
    }

    function footerControl() {
        if( $('footer').hasClass('absolute') || ($('footer').css('position') === 'absolute') ) {
            var theight = parseInt($('footer').outerHeight(true));
            $('body').css('padding-bottom', theight);
        }
    }

    // private variables that are kept within dservice.js
    var scrollAnimate,
        lastScrollTop = 0;
    
    function userInteraction() {
        var rtime = new Date(1, 1, 700, 12, 0, 0);
        var timeout = false;
        var delta = 200;
        var i = 0;

        $( window ).scroll(function() {
            var posScrl = $(window).scrollTop();

            //make the site autoslide into new positions
            clearTimeout(scrollAnimate);
            scrollAnimate = setTimeout( function() {

                var diff = lastScrollTop - posScrl;
                if( diff < 0 ) {
                    diff = (-1)*diff;
                }

                if (posScrl > lastScrollTop ){
                    // downscroll code
                    // console.log('scroll down');
                    $(document).trigger('scrollDown');

                } else {
                    // upscroll code
                    // console.log('scroll up');
                    $(document).trigger('scrollUp');
                }

                lastScrollTop = posScrl;
            }, 2);

            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(scrollend, delta);
            }

        });
        
        $(window).resize(function() {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(resizeend, delta);

            }
        });

        function resizeend() {
            if (new Date() - rtime < delta) {
                setTimeout(resizeend, delta);
            } else {
                timeout = false;
                // console.log('resize ended');
                $(document).trigger('windowResizeEnded');
                i++;
            }               
        }

        var scrolTimeOut;
        function scrollend() {
            clearTimeout(scrolTimeOut);

            if (new Date() - rtime < delta) {
                setTimeout(scrollend, delta);
            } else {
                timeout = false;
                //console.log('scroll ended');
                scrolTimeOut = setTimeout( function() {
                    $(document).trigger('scrollEnded');
                }, 90);
            }               
        }
    }

    this.func = {
        isMobile: function() {
            return isMobile();
        },
        isLandscape: function() {
            return isLandscape();
        },
        toTopMobile: function(e) {
            return toTopMobile(e);
        },
        toTop: function(e) {
            return toTop(e);
        },
        footerControl: function() {
            return footerControl();
        },
        userInteraction: function() {
            return userInteraction();
        }
    };

    // public functions
    return func;

}(jQuery);
(function() {

    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '2.1.4') {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type","text/javascript");
        script_tag.setAttribute("src",
            "http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js");
        if (script_tag.readyState) {
          script_tag.onreadystatechange = function () { // For old versions of IE
              if (this.readyState == 'complete' || this.readyState == 'loaded') {
                  scriptLoadHandler();
              }
          };
        } else { // Other browsers
          script_tag.onload = scriptLoadHandler;
        }
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    function scriptLoadHandler() {
        // Restore $ and window.jQuery to their previous values and store the
        // new jQuery in our local jQuery variable
        jQuery = window.jQuery.noConflict(true);
        // Call our main function
        main(); 
    }

    /******** Our main function ********/
    function main() {
        console.log('dservice-functions are being used');

        $(function () {
            //console.log('document ready !!');

            // Go to top functionality
            if( dservice.isMobile() ) {
                $('.to-top').on('touchstart', function(e) {
                    dservice.toTopMobile(e);
                });
            } else {
                $('.to-top').on('click', function(e) {
                    dservice.toTop(e);
                });
            }

            // User functionality, like Scroll End, Scroll Up, Scroll Down!
            dservice.userInteraction();

            // If device is in landscape mode
            dservice.isLandscape();
        });
        $(document).on('windowResizeEnded', function() {
            // If device is in landscape mode
            dservice.isLandscape();
        });
    }

})(); // We call our anonymous function immediately