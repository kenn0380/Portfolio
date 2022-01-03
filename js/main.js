

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
});
$(document).ready(function(){
    $(".ham-link").click(function(){
      $(".hamburger").toggleClass("is-active");
      $(".hamburger-links").slideToggle("slow");
      $(".hamburger-links").css("display", "flex");
    });
});

$(document).ready(function(){
    $(".three").click(function(){
      $(".hamburger-links").slideToggle("slow");
      $(".hamburger-links").css("display", "flex");
    });
});



$(document).ready(function(){
    $("#button1").click(function(){
      $("#panel1").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button2").click(function(){
      $("#panel2").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button3").click(function(){
      $("#panel3").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button4").click(function(){
      $("#panel4").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button5").click(function(){
      $("#panel5").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button6").click(function(){
      $("#panel6").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button7").click(function(){
      $("#panel7").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button8").click(function(){
      $("#panel8").slideToggle("slow");
    });
});
$(document).ready(function(){
    $("#button9").click(function(){
      $("#panel9").slideToggle("slow");
    });
});


$(document).ready(function(){
    $(".accordion").mouseover(function(){
        $(".inline-icon").animate({height: "30px"})
    }, function() {
        $(".inline-icon").animate({height: "auto"})
    });
});

$("#down-indicator").hide()
$("#nav-home").hide()
$("#home-hero-text").hide()
$("#about-me-img").hide()
$("#desktop-nav").hide()

document.getElementById('bg-vid-2').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        $('#replacer').html('<video id="bg-vid-2" playsinline autoplay muted loop src="images/bg-viddd.mp4"></video>'); 
        $("#home-hero-text").fadeIn(2000);
        $("#about-me-img").fadeIn(2000)
        $("#nav-home").fadeIn(2000)
        $("#down-indicator").fadeIn(2000)
        $("#desktop-nav").fadeIn(2000)
    }

$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('#vid-1').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);
});
$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('#vid-0').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);
});

$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('#vid-2').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);
});

$(document).ready(function() {
    // Get media - with autoplay disabled (audio or video)
    var media = $('#vid-3').not("[autoplay='autoplay']");
    var tolerancePixel = 40;

    function checkMedia(){
        // Get current browser top and bottom
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function(index, el) {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });

        //}
    }
    $(document).on('scroll', checkMedia);

    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<button type='submit' class='case-study-button' id='successButton'>Thanks, I'll respond soon!</button>";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


    var video = document.getElementsByTagName("video");
    
            if (video.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                video.play();
            }
    });
