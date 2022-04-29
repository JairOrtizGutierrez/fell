$(function() {
    
    $('.ham6').click(function() {
        
        var checked = $(this).hasClass('active');
        var tl = new TimelineMax();
        
        if(checked) {
            
            TweenLite.to('.background', 2, {ease: Power3.easeOut, autoAlpha: 1});
            TweenLite.to('.background .links', 1.20, {ease: Power3.easeOut, y: 0, delay: 0.50});
            tl.staggerTo('.background .links li', 0.40, {autoAlpha: 1, delay: 0.50}, 0.10);
            
        } else {
            
            TweenLite.to('.background', 2, {ease: Power3.easeOut, autoAlpha: 0, delay: 0.15});
            TweenLite.to('.background .links', 1, {y: 20});
            tl.staggerTo('.background .links li', 0.40, {autoAlpha: 0}, 0.10);
            
        }
        
    });
    
});