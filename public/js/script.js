$(document).ready(function() {
    let slideIndex = 0;
    var $header = $('.header-animated');
    var $headers = $('.header-animated opaque');
    var $logoAlt = $header.find('.logo > img').data('logo-alt'); // white logo
    var $logoDefault = $header.find('.logo > img').data('logo-default'); // black logo
    $(".header").css("display","block")       

    if (window.location.pathname == "/features" || window.location.pathname == "/about" || window.location.pathname == "/blogs" || window.location.pathname.includes("/blogs/")) {
       $(".header").addClass("opaque");
       $header.find('.logo > img').attr('src', $logoDefault);
    }
    function showSlides() {
        let slides = $(".mySlides");
        slides.hide(); // Hide all slides
        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides.eq(slideIndex - 1).fadeIn(1000); // Fade in the current slide
    }
    showSlides(); // Show the first slide
    setInterval(showSlides, 5000); 

    $('#tabs a').click(function(e) {
        e.preventDefault()
        $(this).tab('show')
    })

    // video Stop 
    $('#videoModal').on('hidden.bs.modal', function() {
        $("#videoModal iframe").attr("src", $("#videoModal iframe").attr("src"));
    });

    // navbar toggle
    $('.nav-toggle').click(function() {
        $(this).toggleClass('open');
    });

    // navbar dropdown
    $(".dropdown").hover(function() {
        $(".dropdown").addClass("open")
    }, function() {
        $(".dropdown").removeClass("open")
    })
    $("#productSearch").on("keyup", function () {
        let input = $(this).val().toUpperCase();
        $(".product-card").each(function () {
            let title = $(this).data("title").toUpperCase();
            if (title.indexOf(input) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // typing Effect 
    var stringArray = window.entry ? window.entry.hero_banner.rolling_text : null;
    
    $(".typed").typed({
        strings: stringArray,
        typeSpeed: 30, // typing speed
        backDelay: 500, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
        callback: function() {} // call function after typing is done
    });   

    $(window).on('scroll', function() {
        if (window.location.pathname != "/features" && window.location.pathname != "/about" && window.location.pathname != "/blogs" && !window.location.pathname.includes("/blogs/") ) {
            console.log('true');
            if ($(window).scrollTop() > 100) {
                $header.fadeIn().addClass('opaque');
                $header.find('.logo > img').attr('src', $logoDefault);

            } else {
                $header.removeClass('opaque');
                $header.find('.logo > img').attr('src', $logoAlt);
            }
        }
    });

    //var currentpath = window.location.pathname;
    //$('ul.nav li a').each(function(){
    //    var anchor_link = $(this).attr('href');
    //    if (currentpath == anchor_link){
    //        $(this).parent().addClass('active');
    //    }
    //});

    $('#sign_up').click(function(){
        location.reload(true);
    });
    $('#login_btn').click(function(){
        location.reload(true);
    });
    $('.buy-button').on('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get product details from data attributes
        const productTitle = $(this).data('title');
        const productPrice = $(this).data('price');
        const productLabel = $(this).data('label');
        const productFeatures = $(this).data('features');

        // Display the details in a modal (optional)
        alert(
            `Product: ${productTitle}\nPrice: ${productPrice}\nLabel: ${productLabel}\nFeatures: ${productFeatures}`
        );

        // Redirect or send data to server for purchase
        // Example: window.location.href = '/buy?title=' + productTitle + '&price=' + productPrice;
    });
    $("#playVideoButton").on("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Hide the image and show the video
        $("#teamImage").hide();
        $("#teamVideo").show();

        // Play the video
        $("#teamVideo")[0].play();
    });

        
        
        // Change slide every 5 seconds

        // Search Functionality

    //$('form').submit(function(){
    //    location.reload(true);
    //});



    // Logo header change
    // $(window).on('load', function() {
    //     if ($(window).scrollTop() > 100) {
    //         var $logoAlt = $header.find('.logo > img').data('logo-default'); // white logo
    //         $header.find('.logo > img').attr('src', $logoAlt);
    //     } else if ($header.length > 0) {
    //         var $logoAlt = $header.find('.logo > img').data('logo-alt'); // white logo
    //         $header.find('.logo > img').attr('src', $logoAlt);
    //     }
    // });

    // smooth scroll
    // $('a').click(function(e) {
    //     console.log("okay")
    //     if ($(this).data('scrollto')) {
    //         $(this).attr('href', $(this).data('scrollto'))
    //         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top - 80
    //                 }, 1000);
    //                 return false;
    //             }
    //         }
    //     }
    // });
});
