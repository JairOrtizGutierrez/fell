$(function() {
    
    /*TweenLite.fromTo($('#second-responsive-carousel > div:nth-child(2) .black'), 2, {width: '0%'}, {width: '75%', ease: Power3.easeOut});*/
    
    /* menu */
    
    $(window).scroll(() => {
        
        if($(window).scrollTop() > 0) {
            
            TweenLite.to('.menu', 1, {background: '#000', padding: '0px', ease: Power3.easeOut});
            TweenLite.to('.web-black-logo', 1, {autoAlpha: 0, ease: Power3.easeOut});
            TweenLite.to('.web-white-logo', 1, {autoAlpha: 1, ease: Power3.easeOut});
            
            $('.ham6').css('margin', '0px');
            
            if($('nav .ham6').hasClass('active')) {
                $('.ham6 .line').css('stroke', '#000');
            } else {
                $('.ham6 .line').css('stroke', '#fff');
            }
            
        } else {
            
            TweenLite.to('.menu', 1, {background: 'transparent', padding: '30px', ease: Power3.easeOut});
            TweenLite.to('.web-black-logo', 1, {autoAlpha: 1, ease: Power3.easeOut});
            TweenLite.to('.web-white-logo', 1, {autoAlpha: 0, ease: Power3.easeOut});
            
            $('.ham6').css('margin', '8px');
            $('.ham6 .line').css('stroke', '#000');
            
        }
        
    });
    
    $('.ham6').click(function() {
        
        var checked = $(this).hasClass('active');
        var tl = new TimelineMax();
        
        if(checked) {
            
            TweenLite.to('.background', 2, {ease: Power3.easeOut, autoAlpha: 1});
            TweenLite.to('.background .links', 1.20, {ease: Power3.easeOut, y: 0, delay: 0.50});
            tl.staggerTo('.background .links li', 0.40, {autoAlpha: 1, delay: 0.50}, 0.10);
            
            if($(window).scrollTop() > 0) {
                $('.ham6 .line').css('stroke', '#000');
            }
            
        } else {
            
            TweenLite.to('.background', 2, {ease: Power3.easeOut, autoAlpha: 0, delay: 0.15});
            TweenLite.to('.background .links', 1, {y: 20});
            tl.staggerTo('.background .links li', 0.40, {autoAlpha: 0}, 0.10);
            
            if($(window).scrollTop() > 0) {
                $('.ham6 .line').css('stroke', '#fff');
            }
            
        }
        
    });
    
    /* menu */
    
    const line_1 = document.querySelector('.latest > div:first-child > div > span:last-child');
    const line_2 = document.querySelector('.collection > div:first-child > div > span:last-child');
    
    onObserver(line_1, '200%');
    onObserver(line_2, '150%');
    
    function onObserver(element, width) {
        
        const observer = new IntersectionObserver((entries, observer) => {
            
            entries.forEach((entry, index) => {
                
                if(entry.intersectionRatio >= 0.5) {
                    
                    TweenLite.to(entry.target, 1, {width: width, ease:Power3.easeOut, delay: 0.2});
                    observer.unobserve(entry.target);
                    
                }
                
            });
            
        }, {threshold: [0.5, 1]});
        
        observer.observe(element);
        
    }
    
    const observer_1 = new IntersectionObserver((entries, observer) => {
        
        entries.forEach((entry, index) => {
            
            if(entry.intersectionRatio >= 0.5) {
                
                TweenLite.to(entry.target, 1, {width: '100%', left: '0%', ease:Power3.easeOut, delay: 0.2});
                observer.unobserve(entry.target);
                
            }
            
        });
        
    }, {threshold: [0.5, 1]});
    
    const center_line = document.querySelector('.instagram > div:first-child > div > span');
    observer_1.observe(center_line);
    
    const observer_2 = new IntersectionObserver((entries, observer) => {
        
        entries.forEach((entry, index) => {
            
            if(entry.intersectionRatio >= 0.5) {
                
                var title = $('.about-us > div:last-child > span:nth-child(1)');
                var text = $('.about-us > div:last-child > span:nth-child(2)');
                var line = $('.about-us > div:last-child > span:nth-child(3)');
                
                if($(window).width() <= 767) {
                    
                    TweenLite.fromTo(title, 1, {autoAlpha: 0, y: -40}, {autoAlpha: 1, y: 0, ease:Power3.easeOut});
                    TweenLite.fromTo(text, 1, {autoAlpha: 0, y: -20}, {autoAlpha: 1, y: 0, ease:Power3.easeOut, delay: 0.2});
                    
                } else {
                    
                    TweenLite.fromTo(title, 1, {autoAlpha: 0, x: -150}, {autoAlpha: 1, x: 0, ease:Power3.easeOut});
                    TweenLite.fromTo(text, 1, {autoAlpha: 0, x: -150}, {autoAlpha: 1, x: 0, ease:Power3.easeOut, delay: 0.2});
                    
                }
                
                TweenLite.to(line, 1, {width: '40%', ease:Power3.easeOut, delay: 0.4});
                
                observer.unobserve(entry.target);
                
            }
            
        });
        
    }, {threshold: [0.5, 1]});
    
    const about_us = document.querySelector('article .about-us > div:last-child');
    observer_2.observe(about_us);
    
});